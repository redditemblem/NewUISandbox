import{a as Ty,b as Mh,c as kh,d as Tl,e as Th,f as wt,g as Ho,h as bs,i as Al,j as ve,k as ys,l as Rl,m as Rr,n as Ol,o as Nl,p as Pl,q as Ay}from"./chunk-CC4X5O6R.js";import"./chunk-3765QV7A.js";import{b as My}from"./chunk-WJMFXBJM.js";import"./chunk-54IRFESY.js";import"./chunk-2YUIRKA7.js";import"./chunk-LGMSFOBQ.js";import{a as _s}from"./chunk-WMSKJGZ3.js";import"./chunk-5M2MSVCN.js";import{o as bn,q as Sh,r as kl,s as Ih,t as ky}from"./chunk-3NL5QKPT.js";import"./chunk-2FFQMEKA.js";import"./chunk-3YO6TTDR.js";import"./chunk-VDLAS3VX.js";import"./chunk-RLFQ6WF5.js";import"./chunk-HRRVKR2X.js";import"./chunk-5ZT3GR3G.js";import"./chunk-ZAZT42WW.js";import{F as Eh,G as Uo,a as y,b as z,c as _n,d as jo,e as nk,f as vs,g as ei,l as Ml,u as Vo}from"./chunk-QS6TTHOM.js";var Dy=jo(kr=>{"use strict";Object.defineProperty(kr,"__esModule",{value:!0});kr.loop=kr.conditional=kr.parse=void 0;var QH=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};kr.parse=QH;var KH=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};kr.conditional=KH;var XH=function(n,e){return function(i,r,o,a){for(var s=[],c=i.pos;e(i,r,o);){var l={};if(a(i,n,r,l),i.pos===c)break;c=i.pos,s.push(l)}return s}};kr.loop=XH});var Ey=jo(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.readBits=xt.readArray=xt.readUnsigned=xt.readString=xt.peekBytes=xt.readBytes=xt.peekByte=xt.readByte=xt.buildStream=void 0;var JH=function(n){return{data:n,pos:0}};xt.buildStream=JH;var WM=function(){return function(n){return n.data[n.pos++]}};xt.readByte=WM;var ez=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};xt.peekByte=ez;var fh=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};xt.readBytes=fh;var tz=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};xt.peekBytes=tz;var nz=function(n){return function(e){return Array.from(fh(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};xt.readString=nz;var iz=function(n){return function(e){var i=fh(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};xt.readUnsigned=iz;var rz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=fh(n),c=new Array(a),l=0;l<a;l++)c[l]=s(i);return c}};xt.readArray=rz;var oz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},az=function(n){return function(e){for(var i=WM()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var c=n[s];return c.length?a[s]=oz(r,c.index,c.length):a[s]=r[c.index],a},{})}};xt.readBits=az});var GM=jo(hh=>{"use strict";Object.defineProperty(hh,"__esModule",{value:!0});hh.default=void 0;var Tr=Dy(),Ee=Ey(),mh={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Ee.readByte)()(n);a!==e&&a;a=(0,Ee.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Ee.readBytes)(s)(n)),o+=s;break}i.push((0,Ee.readBytes)(a)(n)),o+=a}for(var c=new Uint8Array(o),l=0,d=0;d<i.length;d++)c.set(i[d],l),l+=i[d].length;return c}},sz=(0,Tr.conditional)({gce:[{codes:(0,Ee.readBytes)(2)},{byteSize:(0,Ee.readByte)()},{extras:(0,Ee.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Ee.readUnsigned)(!0)},{transparentColorIndex:(0,Ee.readByte)()},{terminator:(0,Ee.readByte)()}]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),cz=(0,Tr.conditional)({image:[{code:(0,Ee.readByte)()},{descriptor:[{left:(0,Ee.readUnsigned)(!0)},{top:(0,Ee.readUnsigned)(!0)},{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{lct:(0,Ee.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Tr.conditional)({lct:(0,Ee.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Ee.readByte)()},mh]}]},function(t){return(0,Ee.peekByte)()(t)===44}),lz=(0,Tr.conditional)({text:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{preData:function(n,e,i){return(0,Ee.readBytes)(i.text.blockSize)(n)}},mh]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),dz=(0,Tr.conditional)({application:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{id:function(n,e,i){return(0,Ee.readString)(i.blockSize)(n)}},mh]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),uz=(0,Tr.conditional)({comment:[{codes:(0,Ee.readBytes)(2)},mh]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),fz=[{header:[{signature:(0,Ee.readString)(3)},{version:(0,Ee.readString)(3)}]},{lsd:[{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{gct:(0,Ee.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Ee.readByte)()},{pixelAspectRatio:(0,Ee.readByte)()}]},(0,Tr.conditional)({gct:(0,Ee.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Tr.loop)([sz,dz,uz,cz,lz],function(t){var n=(0,Ee.peekByte)()(t);return n===33||n===44})}],mz=fz;hh.default=mz});var qM=jo(ph=>{"use strict";Object.defineProperty(ph,"__esModule",{value:!0});ph.deinterlace=void 0;var hz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(v,h){var b=n.slice(h*e,(h+1)*e);i.splice.apply(i,[v*e,e].concat(b))},a=[0,4,2,1],s=[8,8,4,2],c=0,l=0;l<4;l++)for(var d=a[l];d<r;d+=s[l])o(d,c),c++;return i};ph.deinterlace=hz});var YM=jo(gh=>{"use strict";Object.defineProperty(gh,"__esModule",{value:!0});gh.lzw=void 0;var pz=function(n,e,i){var r=4096,o=-1,a=i,s,c,l,d,f,v,h,St,b,k,et,R,ln,Ut,Ct,Fe,P=new Array(i),me=new Array(r),ke=new Array(r),Ce=new Array(r+1);for(R=n,c=1<<R,f=c+1,s=c+2,h=o,d=R+1,l=(1<<d)-1,b=0;b<c;b++)me[b]=0,ke[b]=b;var et,St,qt,ln,Ut,Fe,Ct;for(et=St=qt=ln=Ut=Fe=Ct=0,k=0;k<a;){if(Ut===0){if(St<d){et+=e[Ct]<<St,St+=8,Ct++;continue}if(b=et&l,et>>=d,St-=d,b>s||b==f)break;if(b==c){d=R+1,l=(1<<d)-1,s=c+2,h=o;continue}if(h==o){Ce[Ut++]=ke[b],h=b,ln=b;continue}for(v=b,b==s&&(Ce[Ut++]=ln,b=h);b>c;)Ce[Ut++]=ke[b],b=me[b];ln=ke[b]&255,Ce[Ut++]=ln,s<r&&(me[s]=h,ke[s]=ln,s++,(s&l)===0&&s<r&&(d++,l+=s)),h=v}Ut--,P[Fe++]=Ce[Ut],k++}for(k=Fe;k<a;k++)P[k]=0;return P};gh.lzw=pz});var QM=jo(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});Ar.decompressFrames=Ar.decompressFrame=Ar.parseGIF=void 0;var gz=xz(GM()),vz=Dy(),_z=Ey(),bz=qM(),yz=YM();function xz(t){return t&&t.__esModule?t:{default:t}}var Cz=function(n){var e=new Uint8Array(n);return(0,vz.parse)((0,_z.buildStream)(e),gz.default)};Ar.parseGIF=Cz;var wz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},ZM=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,yz.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,bz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=wz(s)),s};Ar.decompressFrame=ZM;var Dz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return ZM(i,n.gct,e)})};Ar.decompressFrames=Dz});var Ht=null,Fl=!1,Ah=1,ik=null,Xe=Symbol("SIGNAL");function X(t){let n=Ht;return Ht=t,n}function Ll(){return Ht}var Ci={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ji(t){if(Fl)throw new Error("");if(Ht===null)return;Ht.consumerOnSignalRead(t);let n=Ht.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Ht.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Ht.producers,e!==void 0&&e.producer===t)){Ht.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Ht&&(!i||rk(r,Ht)))return;let o=$o(Ht),a={producer:t,consumer:Ht,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Ht.producersTail=a,n!==void 0?n.nextProducer=a:Ht.producers=a,o&&Fy(t,a)}function Ry(){Ah++}function Pr(t){if(!($o(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ah)){if(!t.producerMustRecompute(t)&&!Fr(t)){zo(t);return}t.producerRecomputeValue(t),zo(t)}}function Rh(t){if(t.consumers===void 0)return;let n=Fl;Fl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Oy(i)}}finally{Fl=n}}function Oh(){return Ht?.consumerAllowSignalWrites!==!1}function Oy(t){t.dirty=!0,Rh(t),t.consumerMarkedDirty?.(t)}function zo(t){t.dirty=!1,t.lastCleanEpoch=Ah}function ni(t){return t&&Ny(t),X(t)}function Ny(t){t.producersTail=void 0,t.recomputing=!0}function wi(t,n){X(n),t&&Py(t)}function Py(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if($o(t))do e=Nh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Fr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Pr(e),i!==e.version))return!0}return!1}function Di(t){if($o(t)){let n=t.producers;for(;n!==void 0;)n=Nh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Fy(t,n){let e=t.consumersTail,i=$o(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Fy(r.producer,r)}function Nh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!$o(n)){let o=n.producers;for(;o!==void 0;)o=Nh(o)}return e}function $o(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function xs(t){ik?.(t)}function rk(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Cs(t,n){return Object.is(t,n)}function ws(t,n){let e=Object.create(ok);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Pr(e),Ji(e),e.value===ti)throw e.error;return e.value};return i[Xe]=e,xs(e),i}var Or=Symbol("UNSET"),Nr=Symbol("COMPUTING"),ti=Symbol("ERRORED"),ok=z(y({},Ci),{value:Or,dirty:!0,error:null,equal:Cs,kind:"computed",producerMustRecompute(t){return t.value===Or||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=ni(t),i,r=!1;try{i=t.computation(),X(null),r=n!==Or&&n!==ti&&i!==ti&&t.equal(n,i)}catch(o){i=ti,t.error=o}finally{wi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function ak(){throw new Error}var Ly=ak;function By(t){Ly(t)}function Ph(t){Ly=t}var sk=null;function Fh(t,n){let e=Object.create(Ds);e.value=t,n!==void 0&&(e.equal=n);let i=()=>jy(e);return i[Xe]=e,xs(e),[i,a=>Lr(e,a),a=>Bl(e,a)]}function jy(t){return Ji(t),t.value}function Lr(t,n){Oh()||By(t),t.equal(t.value,n)||(t.value=n,ck(t))}function Bl(t,n){Oh()||By(t),Lr(t,n(t.value))}var Ds=z(y({},Ci),{equal:Cs,value:void 0,kind:"signal"});function ck(t){t.version++,Ry(),Rh(t),sk?.(t)}var Lh=z(y({},Ci),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Bh(t){if(t.dirty=!1,t.version>0&&!Fr(t))return;t.version++;let n=ni(t);try{t.cleanup(),t.fn()}finally{wi(t,n)}}function pe(t){return typeof t=="function"}function Wo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var jl=Wo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Br(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _e=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(pe(i))try{i()}catch(o){n=o instanceof jl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{Vy(o)}catch(a){n=n??[],a instanceof jl?n=[...n,...a.errors]:n.push(a)}}if(n)throw new jl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Vy(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Br(e,n)}remove(n){let{_finalizers:e}=this;e&&Br(e,n),n instanceof t&&n._removeParent(this)}};_e.EMPTY=(()=>{let t=new _e;return t.closed=!0,t})();var jh=_e.EMPTY;function Vl(t){return t instanceof _e||t&&"closed"in t&&pe(t.remove)&&pe(t.add)&&pe(t.unsubscribe)}function Vy(t){pe(t)?t():t.unsubscribe()}var On={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Go={setTimeout(t,n,...e){let{delegate:i}=Go;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Go;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ul(t){Go.setTimeout(()=>{let{onUnhandledError:n}=On;if(n)n(t);else throw t})}function jr(){}var Uy=Vh("C",void 0,void 0);function Hy(t){return Vh("E",void 0,t)}function zy(t){return Vh("N",t,void 0)}function Vh(t,n,e){return{kind:t,value:n,error:e}}var Vr=null;function qo(t){if(On.useDeprecatedSynchronousErrorHandling){let n=!Vr;if(n&&(Vr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Vr;if(Vr=null,e)throw i}}else t()}function $y(t){On.useDeprecatedSynchronousErrorHandling&&Vr&&(Vr.errorThrown=!0,Vr.error=t)}var Ur=class extends _e{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Vl(n)&&n.add(this)):this.destination=uk}static create(n,e,i){return new Ei(n,e,i)}next(n){this.isStopped?Hh(zy(n),this):this._next(n)}error(n){this.isStopped?Hh(Hy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Hh(Uy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},lk=Function.prototype.bind;function Uh(t,n){return lk.call(t,n)}var zh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Hl(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Hl(i)}else Hl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Hl(e)}}},Ei=class extends Ur{constructor(n,e,i){super();let r;if(pe(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&On.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Uh(n.next,o),error:n.error&&Uh(n.error,o),complete:n.complete&&Uh(n.complete,o)}):r=n}this.destination=new zh(r)}};function Hl(t){On.useDeprecatedSynchronousErrorHandling?$y(t):Ul(t)}function dk(t){throw t}function Hh(t,n){let{onStoppedNotification:e}=On;e&&Go.setTimeout(()=>e(t,n))}var uk={closed:!0,next:jr,error:dk,complete:jr};var Yo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(t){return t}function $h(...t){return Wh(t)}function Wh(t){return t.length===0?dn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var re=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=mk(e)?e:new Ei(e,i,r);return qo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Wy(i),new i((r,o)=>{let a=new Ei({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Yo](){return this}pipe(...e){return Wh(e)(this)}toPromise(e){return e=Wy(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Wy(t){var n;return(n=t??On.Promise)!==null&&n!==void 0?n:Promise}function fk(t){return t&&pe(t.next)&&pe(t.error)&&pe(t.complete)}function mk(t){return t&&t instanceof Ur||fk(t)&&Vl(t)}function hk(t){return pe(t?.lift)}function be(t){return n=>{if(hk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new Gh(t,n,e,i,r)}var Gh=class extends Ur{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Gy=Wo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var A=(()=>{class t extends re{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new zl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Gy}next(e){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?jh:(this.currentObservers=null,o.push(e),new _e(()=>{this.currentObservers=null,Br(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new re;return e.source=this,e}}return t.create=(n,e)=>new zl(n,e),t})(),zl=class extends A{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:jh}};var pt=class extends A{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Es={now(){return(Es.delegate||Date).now()},delegate:void 0};var $l=class extends A{constructor(n=1/0,e=1/0,i=Es){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var Wl=class extends _e{constructor(n,e){super()}schedule(n,e=0){return this}};var Ss={setInterval(t,n,...e){let{delegate:i}=Ss;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ss;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Gl=class extends Wl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ss.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ss.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Br(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Zo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Zo.now=Es.now;var ql=class extends Zo{constructor(n,e=Zo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Hr=new ql(Gl),qy=Hr;var at=new re(t=>t.complete());function Yl(t){return t&&pe(t.schedule)}function qh(t){return t[t.length-1]}function Zl(t){return pe(qh(t))?t.pop():void 0}function ii(t){return Yl(qh(t))?t.pop():void 0}function Yy(t,n){return typeof qh(t)=="number"?t.pop():n}function Qy(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{l(i.next(d))}catch(f){a(f)}}function c(d){try{l(i.throw(d))}catch(f){a(f)}}function l(d){d.done?o(d.value):r(d.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function Zy(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function zr(t){return this instanceof zr?(this.v=t,this):new zr(t)}function Ky(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,f)}}function s(h,b){i[h]&&(r[h]=function(k){return new Promise(function(R,P){o.push([h,k,R,P])>1||c(h,k)})},b&&(r[h]=b(r[h])))}function c(h,b){try{l(i[h](b))}catch(k){v(o[0][3],k)}}function l(h){h.value instanceof zr?Promise.resolve(h.value.v).then(d,f):v(o[0][2],h)}function d(h){c("next",h)}function f(h){c("throw",h)}function v(h,b){h(b),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Xy(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Zy=="function"?Zy(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var Ql=t=>t&&typeof t.length=="number"&&typeof t!="function";function Kl(t){return pe(t?.then)}function Xl(t){return pe(t[Yo])}function Jl(t){return Symbol.asyncIterator&&pe(t?.[Symbol.asyncIterator])}function ed(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function pk(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var td=pk();function nd(t){return pe(t?.[td])}function id(t){return Ky(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield zr(e.read());if(r)return yield zr(void 0);yield yield zr(i)}}finally{e.releaseLock()}})}function rd(t){return pe(t?.getReader)}function ze(t){if(t instanceof re)return t;if(t!=null){if(Xl(t))return gk(t);if(Ql(t))return vk(t);if(Kl(t))return _k(t);if(Jl(t))return Jy(t);if(nd(t))return bk(t);if(rd(t))return yk(t)}throw ed(t)}function gk(t){return new re(n=>{let e=t[Yo]();if(pe(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function vk(t){return new re(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function _k(t){return new re(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Ul)})}function bk(t){return new re(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Jy(t){return new re(n=>{xk(t,n).catch(e=>n.error(e))})}function yk(t){return Jy(id(t))}function xk(t,n){var e,i,r,o;return Qy(this,void 0,void 0,function*(){try{for(e=Xy(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function on(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function od(t,n=0){return be((e,i)=>{e.subscribe(we(i,r=>on(i,t,()=>i.next(r),n),()=>on(i,t,()=>i.complete(),n),r=>on(i,t,()=>i.error(r),n)))})}function ad(t,n=0){return be((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function e0(t,n){return ze(t).pipe(ad(n),od(n))}function t0(t,n){return ze(t).pipe(ad(n),od(n))}function n0(t,n){return new re(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function i0(t,n){return new re(e=>{let i;return on(e,n,()=>{i=t[td](),on(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>pe(i?.return)&&i.return()})}function sd(t,n){if(!t)throw new Error("Iterable cannot be null");return new re(e=>{on(e,n,()=>{let i=t[Symbol.asyncIterator]();on(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function r0(t,n){return sd(id(t),n)}function o0(t,n){if(t!=null){if(Xl(t))return e0(t,n);if(Ql(t))return n0(t,n);if(Kl(t))return t0(t,n);if(Jl(t))return sd(t,n);if(nd(t))return i0(t,n);if(rd(t))return r0(t,n)}throw ed(t)}function tt(t,n){return n?o0(t,n):ze(t)}function Q(...t){let n=ii(t);return tt(t,n)}function Is(t,n){let e=pe(t)?t:()=>t,i=r=>r.error(e());return new re(n?r=>n.schedule(i,0,r):i)}function Ms(t){return!!t&&(t instanceof re||pe(t.lift)&&pe(t.subscribe))}var $r=Wo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function a0(t){return t instanceof Date&&!isNaN(t)}function ee(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Ck}=Array;function wk(t,n){return Ck(n)?t(...n):t(n)}function cd(t){return ee(n=>wk(t,n))}var{isArray:Dk}=Array,{getPrototypeOf:Ek,prototype:Sk,keys:Ik}=Object;function ld(t){if(t.length===1){let n=t[0];if(Dk(n))return{args:n,keys:null};if(Mk(n)){let e=Ik(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Mk(t){return t&&typeof t=="object"&&Ek(t)===Sk}function dd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ks(...t){let n=ii(t),e=Zl(t),{args:i,keys:r}=ld(t);if(i.length===0)return tt([],n);let o=new re(kk(i,n,r?a=>dd(r,a):dn));return e?o.pipe(cd(e)):o}function kk(t,n,e=dn){return i=>{s0(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)s0(n,()=>{let l=tt(t[c],n),d=!1;l.subscribe(we(i,f=>{o[c]=f,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function s0(t,n,e){t?on(e,t,n):n()}function c0(t,n,e,i,r,o,a,s){let c=[],l=0,d=0,f=!1,v=()=>{f&&!c.length&&!l&&n.complete()},h=k=>l<i?b(k):c.push(k),b=k=>{o&&n.next(k),l++;let R=!1;ze(e(k,d++)).subscribe(we(n,P=>{r?.(P),o?h(P):n.next(P)},()=>{R=!0},void 0,()=>{if(R)try{for(l--;c.length&&l<i;){let P=c.shift();a?on(n,a,()=>b(P)):b(P)}v()}catch(P){n.error(P)}}))};return t.subscribe(we(n,h,()=>{f=!0,v()})),()=>{s?.()}}function Ot(t,n,e=1/0){return pe(n)?Ot((i,r)=>ee((o,a)=>n(i,o,r,a))(ze(t(i,r))),e):(typeof n=="number"&&(e=n),be((i,r)=>c0(i,r,t,e)))}function ud(t=1/0){return Ot(dn,t)}function l0(){return ud(1)}function ri(...t){return l0()(tt(t,ii(t)))}function Wr(t){return new re(n=>{ze(t()).subscribe(n)})}function Ts(...t){let n=Zl(t),{args:e,keys:i}=ld(t),r=new re(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let d=0;d<a;d++){let f=!1;ze(e[d]).subscribe(we(o,v=>{f||(f=!0,l--),s[d]=v},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?dd(i,s):s),o.complete())}))}});return n?r.pipe(cd(n)):r}function Gr(t=0,n,e=qy){let i=-1;return n!=null&&(Yl(n)?e=n:i=n),new re(r=>{let o=a0(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Yt(...t){let n=ii(t),e=Yy(t,1/0),i=t;return i.length?i.length===1?ze(i[0]):ud(e)(tt(i,n)):at}function Oe(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function d0(t){return be((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(we(e,l=>{i=!0,r=l,o||ze(t(l)).subscribe(o=we(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function fd(t,n=Hr){return d0(()=>Gr(t,n))}function qr(t){return be((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=ze(t(a,qr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qo(t,n){return pe(n)?Ot(t,n,1):Ot(t,1)}function Nn(t,n=Hr){return be((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}s()}e.subscribe(we(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function u0(t){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function gt(t){return t<=0?()=>at:be((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function f0(){return be((t,n)=>{t.subscribe(we(n,jr))})}function Ko(t){return ee(()=>t)}function Yh(t,n){return n?e=>ri(n.pipe(gt(1),f0()),e.pipe(Yh(t))):Ot((e,i)=>ze(t(e,i)).pipe(gt(1),Ko(e)))}function Zh(t,n=Hr){let e=Gr(t,n);return Yh(()=>e)}function md(t,n=dn){return t=t??Tk,be((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function Tk(t,n){return t===n}function m0(t=Ak){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Ak(){return new $r}function Yr(t){return be((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Si(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Oe((r,o)=>t(r,o,i)):dn,gt(1),e?u0(n):m0(()=>new $r))}function hd(t){return t<=0?()=>at:be((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function pd(){return be((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function As(t={}){let{connector:n=()=>new A,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,d=!1,f=!1,v=()=>{s?.unsubscribe(),s=void 0},h=()=>{v(),a=c=void 0,d=f=!1},b=()=>{let k=a;h(),k?.unsubscribe()};return be((k,R)=>{l++,!f&&!d&&v();let P=c=c??n();R.add(()=>{l--,l===0&&!f&&!d&&(s=Qh(b,r))}),P.subscribe(R),!a&&l>0&&(a=new Ei({next:me=>P.next(me),error:me=>{f=!0,v(),s=Qh(h,e,me),P.error(me)},complete:()=>{d=!0,v(),s=Qh(h,i),P.complete()}}),ze(k).subscribe(a))})(o)}}function Qh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ei({next:()=>{i.unsubscribe(),t()}});return ze(n(...e)).subscribe(i)}function gd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,As({connector:()=>new $l(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Zr(t){return Oe((n,e)=>t<=e)}function Nt(...t){let n=ii(t);return be((e,i)=>{(n?ri(t,e,n):ri(t,e)).subscribe(i)})}function vt(t,n){return be((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,c=>{r?.unsubscribe();let l=0,d=o++;ze(t(c,d)).subscribe(r=we(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Le(t){return be((n,e)=>{ze(t).subscribe(we(e,()=>e.complete(),jr)),!e.closed&&n.subscribe(e)})}function _t(t,n,e){let i=pe(t)||n||e?{next:t,error:n,complete:e}:t;return i?be((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}var Kh;function vd(){return Kh}function oi(t){let n=Kh;return Kh=t,n}var h0=Symbol("NotFound");function Xo(t){return t===h0||t?.name==="\u0275NotFound"}function Xh(t,n,e){let i=Object.create(Rk);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Pr(i),Ji(i),i.value===ti)throw i.error;return i.value};return o[Xe]=i,xs(i),o}function p0(t,n){Pr(t),Lr(t,n),zo(t)}function g0(t,n){if(Pr(t),t.value===ti)throw t.error;Bl(t,n),zo(t)}var Rk=z(y({},Ci),{value:Or,dirty:!0,error:null,equal:Cs,kind:"linkedSignal",producerMustRecompute(t){return t.value===Or||t.value===Nr},producerRecomputeValue(t){if(t.value===Nr)throw new Error("");let n=t.value;t.value=Nr;let e=ni(t),i,r=!1;try{let o=t.source(),a=n!==Or&&n!==ti,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,X(null),r=a&&i!==ti&&t.equal(n,i)}catch(o){i=ti,t.error=o}finally{wi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function v0(t){let n=X(null);try{return t()}finally{X(n)}}var Dd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",T=class extends Error{code;constructor(n,e){super(Mi(n,e)),this.code=n}};function Ok(t){return`NG0${Math.abs(t)}`}function Mi(t,n){return`${Ok(t)}${n?": "+n:""}`}var ir=globalThis;function Ve(t){for(let n in t)if(t[n]===Ve)return n;throw Error("")}function C0(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Bs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Bs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Ed(t,n){return t?n?`${t} ${n}`:t:n||""}var Nk=Ve({__forward_ref__:Ve});function Kt(t){return t.__forward_ref__=Kt,t}function Pt(t){return up(t)?t():t}function up(t){return typeof t=="function"&&t.hasOwnProperty(Nk)&&t.__forward_ref__===Kt}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function oe(t){return{providers:t.providers||[],imports:t.imports||[]}}function js(t){return Pk(t,Sd)}function fp(t){return js(t)!==null}function Pk(t,n){return t.hasOwnProperty(n)&&t[n]||null}function Fk(t){let n=t?.[Sd]??null;return n||null}function ep(t){return t&&t.hasOwnProperty(bd)?t[bd]:null}var Sd=Ve({\u0275prov:Ve}),bd=Ve({\u0275inj:Ve}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=S({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function mp(t){return t&&!!t.\u0275providers}var hp=Ve({\u0275cmp:Ve}),pp=Ve({\u0275dir:Ve}),gp=Ve({\u0275pipe:Ve}),vp=Ve({\u0275mod:Ve}),Os=Ve({\u0275fac:Ve}),eo=Ve({__NG_ELEMENT_ID__:Ve}),_0=Ve({__NG_ENV_ID__:Ve});function _p(t){return Id(t,"@NgModule"),t[vp]||null}function ki(t){return Id(t,"@Component"),t[hp]||null}function bp(t){return Id(t,"@Directive"),t[pp]||null}function w0(t){return Id(t,"@Pipe"),t[gp]||null}function Id(t,n){if(t==null)throw new T(-919,!1)}function ea(t){return typeof t=="string"?t:t==null?"":String(t)}var D0=Ve({ngErrorCode:Ve}),Lk=Ve({ngErrorMessage:Ve}),Bk=Ve({ngTokenPath:Ve});function yp(t,n){return E0("",-200,n)}function Md(t,n){throw new T(-201,!1)}function E0(t,n,e){let i=new T(n,t);return i[D0]=n,i[Lk]=t,e&&(i[Bk]=e),i}function jk(t){return t[D0]}var tp;function S0(){return tp}function Zt(t){let n=tp;return tp=t,n}function xp(t,n,e){let i=js(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Md(t,"")}var Vk={},Qr=Vk,Uk="__NG_DI_FLAG__",np=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Kr(e)||0;try{return this.injector.get(n,i&8?null:Qr,i)}catch(r){if(Xo(r))return r;throw r}}};function Hk(t,n=0){let e=vd();if(e===void 0)throw new T(-203,!1);if(e===null)return xp(t,void 0,n);{let i=zk(n),r=e.retrieve(t,i);if(Xo(r)){if(i.optional)return null;throw r}return r}}function G(t,n=0){return(S0()||Hk)(Pt(t),n)}function u(t,n){return G(t,Kr(n))}function Kr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function zk(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function ip(t){let n=[];for(let e=0;e<t.length;e++){let i=Pt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new T(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=$k(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(G(r,o))}else n.push(G(i))}return n}function $k(t){return t[Uk]}function er(t,n){let e=t.hasOwnProperty(Os);return e?t[Os]:null}function I0(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function M0(t){return t.flat(Number.POSITIVE_INFINITY)}function kd(t,n){t.forEach(e=>Array.isArray(e)?kd(e,n):n(e))}function Cp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Vs(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function k0(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function T0(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Td(t,n,e){let i=ta(t,n);return i>=0?t[i|1]=e:(i=~i,T0(t,i,n,e)),i}function Ad(t,n){let e=ta(t,n);if(e>=0)return t[e|1]}function ta(t,n){return Wk(t,n,1)}function Wk(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var rr={},zt=[],or=new D(""),wp=new D("",-1),Dp=new D(""),Ns=class{get(n,e=Qr){if(e===Qr){let r=E0("",-201);throw r.name="\u0275NotFound",r}return e}};function ar(t){return{\u0275providers:t}}function A0(t){return ar([{provide:or,multi:!0,useValue:t}])}function R0(...t){return{\u0275providers:Ep(!0,t),\u0275fromNgModule:!0}}function Ep(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return kd(n,a=>{let s=a;yd(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&O0(r,o),e}function O0(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Sp(r,o=>{n(o,i)})}}function yd(t,n,e,i){if(t=Pt(t),!t)return!1;let r=null,o=ep(t),a=!o&&ki(t);if(!o&&!a){let c=t.ngModule;if(o=ep(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)yd(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;kd(o.imports,d=>{yd(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&O0(l,n)}if(!s){let l=er(r)||(()=>new r);n({provide:r,useFactory:l,deps:zt},r),n({provide:Dp,useValue:r,multi:!0},r),n({provide:or,useValue:()=>G(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;Sp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function Sp(t,n){for(let e of t)mp(e)&&(e=e.\u0275providers),Array.isArray(e)?Sp(e,n):n(e)}var Gk=Ve({provide:String,useValue:Ve});function N0(t){return t!==null&&typeof t=="object"&&Gk in t}function qk(t){return!!(t&&t.useExisting)}function Yk(t){return!!(t&&t.useFactory)}function Xr(t){return typeof t=="function"}function P0(t){return!!t.useClass}var Us=new D(""),_d={},b0={},Jh;function na(){return Jh===void 0&&(Jh=new Ns),Jh}var Be=class{},Jr=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,op(n,a=>this.processProvider(a)),this.records.set(wp,Jo(void 0,this)),r.has("environment")&&this.records.set(Be,Jo(void 0,this));let o=this.records.get(Us);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Dp,zt,{self:!0}))}retrieve(n,e){let i=Kr(e)||0;try{return this.get(n,Qr,i)}catch(r){if(Xo(r))return r;throw r}}destroy(){Rs(this),this._destroyed=!0;let n=X(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),X(n)}}onDestroy(n){return Rs(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Rs(this);let e=oi(this),i=Zt(void 0),r;try{return n()}finally{oi(e),Zt(i)}}get(n,e=Qr,i){if(Rs(this),n.hasOwnProperty(_0))return n[_0](this);let r=Kr(i),o,a=oi(this),s=Zt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=Jk(n)&&js(n);d&&this.injectableDefInScope(d)?l=Jo(rp(n),_d):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?na():this.parent;return e=r&8&&e===Qr?null:e,c.get(n,e)}catch(c){let l=jk(c);throw l===-200||l===-201?new T(l,null):c}finally{Zt(s),oi(a)}}resolveInjectorInitializers(){let n=X(null),e=oi(this),i=Zt(void 0),r;try{let o=this.get(or,zt,{self:!0});for(let a of o)a()}finally{oi(e),Zt(i),X(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Pt(n);let e=Xr(n)?n:Pt(n&&n.provide),i=Qk(n);if(!Xr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Jo(void 0,_d,!0),r.factory=()=>ip(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=X(null);try{if(e.value===b0)throw yp("");return e.value===_d&&(e.value=b0,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&Xk(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{X(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Pt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function rp(t){let n=js(t),e=n!==null?n.factory:er(t);if(e!==null)return e;if(t instanceof D)throw new T(-204,!1);if(t instanceof Function)return Zk(t);throw new T(-204,!1)}function Zk(t){if(t.length>0)throw new T(-204,!1);let e=Fk(t);return e!==null?()=>e.factory(t):()=>new t}function Qk(t){if(N0(t))return Jo(void 0,t.useValue);{let n=Ip(t);return Jo(n,_d)}}function Ip(t,n,e){let i;if(Xr(t)){let r=Pt(t);return er(r)||rp(r)}else if(N0(t))i=()=>Pt(t.useValue);else if(Yk(t))i=()=>t.useFactory(...ip(t.deps||[]));else if(qk(t))i=(r,o)=>G(Pt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Pt(t&&(t.useClass||t.provide));if(Kk(t))i=()=>new r(...ip(t.deps));else return er(r)||rp(r)}return i}function Rs(t){if(t.destroyed)throw new T(-205,!1)}function Jo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Kk(t){return!!t.deps}function Xk(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function Jk(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function op(t,n){for(let e of t)Array.isArray(e)?op(e,n):e&&mp(e)?op(e.\u0275providers,n):n(e)}function ut(t,n){let e;t instanceof Jr?(Rs(t),e=t):e=new np(t);let i,r=oi(e),o=Zt(void 0);try{return n()}finally{oi(r),Zt(o)}}function F0(){return S0()!==void 0||vd()!=null}var Pn=0,te=1,ce=2,Dt=3,yn=4,Xt=5,to=6,ia=7,ft=8,Ti=9,Fn=10,Ge=11,ra=12,Mp=13,no=14,Jt=15,sr=16,io=17,si=18,Ai=19,kp=20,Ii=21,Rd=22,tr=23,un=24,ro=25,cr=26,nt=27,L0=1,Tp=6,lr=7,Hs=8,oo=9,st=10;function Ri(t){return Array.isArray(t)&&typeof t[L0]=="object"}function Ln(t){return Array.isArray(t)&&t[L0]===!0}function Ap(t){return(t.flags&4)!==0}function ci(t){return t.componentOffset>-1}function zs(t){return(t.flags&1)===1}function li(t){return!!t.template}function oa(t){return(t[ce]&512)!==0}function ao(t){return(t[ce]&256)===256}var Rp="svg",B0="math";function xn(t){for(;Array.isArray(t);)t=t[Pn];return t}function Op(t,n){return xn(n[t])}function Cn(t,n){return xn(n[t.index])}function Od(t,n){return t.data[n]}function Nd(t,n){return t[n]}function Np(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function wn(t,n){let e=n[t];return Ri(e)?e:e[Pn]}function j0(t){return(t[ce]&4)===4}function Pd(t){return(t[ce]&128)===128}function V0(t){return Ln(t[Dt])}function fn(t,n){return n==null?null:t[n]}function Pp(t){t[io]=0}function Fp(t){t[ce]&1024||(t[ce]|=1024,Pd(t)&&so(t))}function U0(t,n){for(;t>0;)n=n[no],t--;return n}function $s(t){return!!(t[ce]&9216||t[un]?.dirty)}function Fd(t){t[Fn].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),$s(t)&&so(t)}function so(t){t[Fn].changeDetectionScheduler?.notify(0);let n=nr(t);for(;n!==null&&!(n[ce]&8192||(n[ce]|=8192,!Pd(n)));)n=nr(n)}function Lp(t,n){if(ao(t))throw new T(911,!1);t[Ii]===null&&(t[Ii]=[]),t[Ii].push(n)}function H0(t,n){if(t[Ii]===null)return;let e=t[Ii].indexOf(n);e!==-1&&t[Ii].splice(e,1)}function nr(t){let n=t[Dt];return Ln(n)?n[Dt]:n}function Bp(t){return t[ia]??=[]}function jp(t){return t.cleanup??=[]}function z0(t,n,e,i){let r=Bp(n);r.push(e),t.firstCreatePass&&jp(t).push(i,r.length-1)}var ye={lFrame:tx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ap=!1;function $0(){return ye.lFrame.elementDepthCount}function W0(){ye.lFrame.elementDepthCount++}function Vp(){ye.lFrame.elementDepthCount--}function Up(){return ye.bindingsEnabled}function Hp(){return ye.skipHydrationRootTNode!==null}function zp(t){return ye.skipHydrationRootTNode===t}function $p(){ye.skipHydrationRootTNode=null}function ne(){return ye.lFrame.lView}function Je(){return ye.lFrame.tView}function It(t){return ye.lFrame.contextLView=t,t[ft]}function Mt(t){return ye.lFrame.contextLView=null,t}function Ft(){let t=Wp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Wp(){return ye.lFrame.currentTNode}function G0(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function aa(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function Gp(){return ye.lFrame.isParent}function qp(){ye.lFrame.isParent=!1}function q0(){return ye.lFrame.contextLView}function Yp(){return ap}function Ps(t){let n=ap;return ap=t,n}function Ws(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Y0(){return ye.lFrame.bindingIndex}function Z0(t){return ye.lFrame.bindingIndex=t}function dr(){return ye.lFrame.bindingIndex++}function Ld(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Q0(){return ye.lFrame.inI18n}function K0(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,Bd(n)}function X0(){return ye.lFrame.currentDirectiveIndex}function Bd(t){ye.lFrame.currentDirectiveIndex=t}function J0(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function jd(){return ye.lFrame.currentQueryIndex}function Gs(t){ye.lFrame.currentQueryIndex=t}function eT(t){let n=t[te];return n.type===2?n.declTNode:n.type===1?t[Xt]:null}function Zp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=eT(o),r===null||(o=o[no],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=ex();return i.currentTNode=n,i.lView=t,!0}function Vd(t){let n=ex(),e=t[te];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function ex(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?tx(t):n}function tx(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function nx(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Qp=nx;function Ud(){let t=nx();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function ix(t){return(ye.lFrame.contextLView=U0(t,ye.lFrame.contextLView))[ft]}function di(){return ye.lFrame.selectedIndex}function ur(t){ye.lFrame.selectedIndex=t}function sa(){let t=ye.lFrame;return Od(t.tView,t.selectedIndex)}function qs(){ye.lFrame.currentNamespace=Rp}function Ys(){tT()}function tT(){ye.lFrame.currentNamespace=null}function rx(){return ye.lFrame.currentNamespace}var ox=!0;function Hd(){return ox}function zd(t){ox=t}function sp(t,n=null,e=null,i){let r=Kp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Kp(t,n=null,e=null,i,r=new Set){let o=[e||zt,R0(t)],a;return new Jr(o,n||na(),a||null,r)}var K=class t{static THROW_IF_NOT_FOUND=Qr;static NULL=new Ns;static create(n,e){if(Array.isArray(n))return sp({name:""},e,n,"");{let i=n.name??"";return sp({name:i},n.parent,n.providers,i)}}static \u0275prov=S({token:t,providedIn:"any",factory:()=>G(wp)});static __NG_ELEMENT_ID__=-1},J=new D(""),Lt=(()=>{class t{static __NG_ELEMENT_ID__=nT;static __NG_ENV_ID__=e=>e}return t})(),xd=class extends Lt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ao(this._lView)}onDestroy(n){let e=this._lView;return Lp(e,n),()=>H0(e,n)}};function nT(){return new xd(ne())}var ax=!1,sx=new D(""),Oi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new pt(!1);debugTaskTracker=u(sx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new re(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),cp=class extends A{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,F0()&&(this.destroyRef=u(Lt,{optional:!0})??void 0,this.pendingTasks=u(Oi,{optional:!0})??void 0)}emit(n){let e=X(null);try{super.next(n)}finally{X(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof _e&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Y=cp;function Cd(...t){}function Xp(t){let n,e;function i(){t=Cd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function cx(t){return queueMicrotask(()=>t()),()=>{t=Cd}}var Jp="isAngularZone",Fs=Jp+"_ID",iT=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Y(!1);onMicrotaskEmpty=new Y(!1);onStable=new Y(!1);onError=new Y(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=ax}=n;if(typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,aT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Jp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new T(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,rT,Cd,Cd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},rT={};function eg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function oT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Xp(()=>{t.callbackScheduled=!1,lp(t),t.isCheckStableRunning=!0,eg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),lp(t)}function aT(t){let n=()=>{oT(t)},e=iT++;t._inner=t._inner.fork({name:"angular",properties:{[Jp]:!0,[Fs]:e,[Fs+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(sT(c))return i.invokeTask(o,a,s,c);try{return y0(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),x0(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return y0(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!cT(c)&&n(),x0(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,lp(t),eg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function lp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function y0(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function x0(t){t._nesting--,eg(t)}var Ls=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Y;onMicrotaskEmpty=new Y;onStable=new Y;onError=new Y;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function sT(t){return lx(t,"__ignore_ng_zone__")}function cT(t){return lx(t,"__scheduler_tick__")}function lx(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Qt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},mn=new D("",{factory:()=>{let t=u(F),n=u(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Qt),e.handleError(i))})}}}),dx={provide:or,useValue:()=>{let t=u(Qt,{optional:!0})},multi:!0},lT=new D("",{factory:()=>{let t=u(J).defaultView;if(!t)return;let n=u(mn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Lt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function tg(){return ar([A0(()=>{u(lT)})])}function L(t,n){let[e,i,r]=Fh(t,n?.equal),o=e,a=o[Xe];return o.set=i,o.update=r,o.asReadonly=$d.bind(o),o}function $d(){let t=this[Xe];if(t.readonlyFn===void 0){let n=()=>this();n[Xe]=t,t.readonlyFn=n}return t.readonlyFn}var ca=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=dT}return t})();function dT(){return new ca(ne(),Ft())}var ai=class{},Zs=new D("",{factory:()=>!0});var ng=new D(""),Qs=(()=>{class t{internalPendingTasks=u(Oi);scheduler=u(ai);errorHandler=u(mn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Wd=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>new dp})}return t})(),dp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},wd=class{[Xe];constructor(n){this[Xe]=n}destroy(){this[Xe].destroy()}};function en(t,n){let e=n?.injector??u(K),i=n?.manualCleanup!==!0?e.get(Lt):null,r,o=e.get(ca,null,{optional:!0}),a=e.get(ai);return o!==null?(r=mT(o.view,a,t),i instanceof xd&&i._lView===o.view&&(i=null)):r=hT(t,e.get(Wd),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new wd(r)}var ux=z(y({},Lh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ps(!1);try{Bh(this)}finally{Ps(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=X(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],X(t)}}}),uT=z(y({},ux),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Di(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),fT=z(y({},ux),{consumerMarkedDirty(){this.view[ce]|=8192,so(this.view),this.notifier.notify(13)},destroy(){if(Di(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[tr]?.delete(this)}});function mT(t,n,e){let i=Object.create(fT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=fx(i,e),t[tr]??=new Set,t[tr].add(i),i.consumerMarkedDirty(i),i}function hT(t,n,e){let i=Object.create(uT);return i.fn=fx(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function fx(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ac(t){return{toString:t}.toString()}function xT(t){return typeof t=="function"}function Wx(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var eu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Se=(()=>{let t=()=>Gx;return t.ngInherit=!0,t})();function Gx(t){return t.type.prototype.ngOnChanges&&(t.setInput=wT),CT}function CT(){let t=Yx(this),n=t?.current;if(n){let e=t.previous;if(e===rr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function wT(t,n,e,i,r){let o=this.declaredInputs[i],a=Yx(t)||DT(t,{previous:rr,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new eu(l&&l.currentValue,e,c===rr),Wx(t,n,r,e)}var qx="__ngSimpleChanges__";function Yx(t){return t[qx]||null}function DT(t,n){return t[qx]=n}var mx=[];var Ue=function(t,n=null,e){for(let i=0;i<mx.length;i++){let r=mx[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function ET(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Gx(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Zx(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Qd(t,n,e){Qx(t,n,3,e)}function Kd(t,n,e,i){(t[ce]&3)===e&&Qx(t,n,e,i)}function ig(t,n){let e=t[ce];(e&3)===n&&(e&=16383,e+=1,t[ce]=e)}function Qx(t,n,e,i){let r=i!==void 0?t[io]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[io]+=65536),(s<o||o==-1)&&(ST(t,e,n,c),t[io]=(t[io]&4294901760)+c+2),c++}function hx(t,n){Ue(Pe.LifecycleHookStart,t,n);let e=X(null);try{n.call(t)}finally{X(e),Ue(Pe.LifecycleHookEnd,t,n)}}function ST(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ce]>>14<t[io]>>16&&(t[ce]&3)===n&&(t[ce]+=16384,hx(s,o)):hx(s,o)}var da=-1,lo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function IT(t){return(t.flags&8)!==0}function MT(t){return(t.flags&16)!==0}function kT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];TT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Kx(t){return t===3||t===4||t===6}function TT(t){return t.charCodeAt(0)===64}function ma(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?px(t,e,r,null,n[++i]):px(t,e,r,null,null))}}return t}function px(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Xx(t){return t!==da}function tu(t){return t&32767}function AT(t){return t>>16}function nu(t,n){let e=AT(t),i=n;for(;e>0;)i=i[no],e--;return i}var mg=!0;function iu(t){let n=mg;return mg=t,n}var RT=256,Jx=RT-1,eC=5,OT=0,ui={};function NT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(eo)&&(i=e[eo]),i==null&&(i=e[eo]=OT++);let r=i&Jx,o=1<<r;n.data[t+(r>>eC)]|=o}function ru(t,n){let e=tC(t,n);if(e!==-1)return e;let i=n[te];i.firstCreatePass&&(t.injectorIndex=n.length,rg(i.data,t),rg(n,null),rg(i.blueprint,null));let r=Yg(t,n),o=t.injectorIndex;if(Xx(r)){let a=tu(r),s=nu(r,n),c=s[te].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function rg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function tC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Yg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=aC(r),i===null)return da;if(e++,r=r[no],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return da}function hg(t,n,e){NT(t,n,e)}function PT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Kx(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function nC(t,n,e){if(e&8||t!==void 0)return t;Md(n,"NodeInjector")}function iC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ti],o=Zt(void 0);try{return r?r.get(n,i,e&8):xp(n,i,e&8)}finally{Zt(o)}}return nC(i,n,e)}function rC(t,n,e,i=0,r){if(t!==null){if(n[ce]&2048&&!(i&2)){let a=jT(t,n,e,i,ui);if(a!==ui)return a}let o=oC(t,n,e,i,ui);if(o!==ui)return o}return iC(n,e,i,r)}function oC(t,n,e,i,r){let o=LT(e);if(typeof o=="function"){if(!Zp(n,t,i))return i&1?nC(r,e,i):iC(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Md(e);else return a}finally{Qp()}}else if(typeof o=="number"){let a=null,s=tC(t,n),c=da,l=i&1?n[Jt][Xt]:null;for((s===-1||i&4)&&(c=s===-1?Yg(t,n):n[s+8],c===da||!vx(i,!1)?s=-1:(a=n[te],s=tu(c),n=nu(c,n)));s!==-1;){let d=n[te];if(gx(o,s,d.data)){let f=FT(s,n,e,a,i,l);if(f!==ui)return f}c=n[s+8],c!==da&&vx(i,n[te].data[s+8]===l)&&gx(o,s,n)?(a=d,s=tu(c),n=nu(c,n)):s=-1}}return r}function FT(t,n,e,i,r,o){let a=n[te],s=a.data[t+8],c=i==null?ci(s)&&mg:i!=a&&(s.type&3)!==0,l=r&1&&o===s,d=Xd(s,a,e,c,l);return d!==null?ec(n,a,d,s,r):ui}function Xd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?s:s+d,v=r?s+d:l;for(let h=f;h<v;h++){let b=a[h];if(h<c&&e===b||h>=c&&b.type===e)return h}if(r){let h=a[c];if(h&&li(h)&&h.type===e)return c}return null}function ec(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof lo){let s=o;if(s.resolving)throw yp("");let c=iu(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],d,f=s.injectImpl?Zt(s.injectImpl):null,v=Zp(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&ET(e,a[e],n)}finally{f!==null&&Zt(f),iu(c),s.resolving=!1,Qp()}}return o}function LT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(eo)?t[eo]:void 0;return typeof n=="number"?n>=0?n&Jx:BT:n}function gx(t,n,e){let i=1<<t;return!!(e[n+(t>>eC)]&i)}function vx(t,n){return!(t&2)&&!(t&1&&n)}var co=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return rC(this._tNode,this._lView,n,Kr(i),e)}};function BT(){return new co(Ft(),ne())}function it(t){return ac(()=>{let n=t.prototype.constructor,e=n[Os]||pg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Os]||pg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function pg(t){return up(t)?()=>{let n=pg(Pt(t));return n&&n()}:er(t)}function jT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ce]&2048&&!oa(a);){let s=oC(o,a,e,i|2,ui);if(s!==ui)return s;let c=o.parent;if(!c){let l=a[kp];if(l){let d=l.get(e,ui,i&-5);if(d!==ui)return d}c=aC(a),a=a[no]}o=c}return r}function aC(t){let n=t[te],e=n.type;return e===2?n.declTNode:e===1?t[Xt]:null}function sc(t){return PT(Ft(),t)}function VT(){return _a(Ft(),ne())}function _a(t,n){return new B(Cn(t,n))}var B=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=VT}return t})();function sC(t){return t instanceof B?t.nativeElement:t}function UT(){return this._results[Symbol.iterator]()}var Vn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new A}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=M0(n);(this._changesDetected=!I0(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=UT};function cC(t){return(t.flags&128)===128}var Zg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Zg||{}),lC=new Map,HT=0;function zT(){return HT++}function $T(t){lC.set(t[Ai],t)}function gg(t){lC.delete(t[Ai])}var _x="__ngContext__";function ha(t,n){Ri(n)?(t[_x]=n[Ai],$T(n)):t[_x]=n}function dC(t){return fC(t[ra])}function uC(t){return fC(t[yn])}function fC(t){for(;t!==null&&!Ln(t);)t=t[yn];return t}var WT;function Qg(t){WT=t}var mr=new D("",{factory:()=>GT}),GT="ng";var bu=new D(""),ho=new D("",{providedIn:"platform",factory:()=>"unknown"}),cc=new D(""),po=new D("",{factory:()=>u(J).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var mC="r";var hC="di";var pC=!1,gC=new D("",{factory:()=>pC});var qT=(t,n,e,i)=>{};function YT(t,n,e,i){qT(t,n,e,i)}function yu(t){return(t.flags&32)===32}var ZT=()=>null;function vC(t,n,e=!1){return ZT(t,n,e)}function _C(t,n){let e=t.contentQueries;if(e!==null){let i=X(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Gs(o),s.contentQueries(2,n[a],a)}}}finally{X(i)}}}function vg(t,n,e){Gs(0);let i=X(null);try{n(t,e)}finally{X(i)}}function bC(t,n,e){if(Ap(n)){let i=X(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{X(i)}}}var Un=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Un||{});var Gd;function QT(){if(Gd===void 0&&(Gd=null,ir.trustedTypes))try{Gd=ir.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Gd}function xu(t){return QT()?.createHTML(t)||t}var qd;function KT(){if(qd===void 0&&(qd=null,ir.trustedTypes))try{qd=ir.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return qd}function bx(t){return KT()?.createScriptURL(t)||t}var Ni=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Dd})`}},_g=class extends Ni{getTypeName(){return"HTML"}},bg=class extends Ni{getTypeName(){return"Style"}},yg=class extends Ni{getTypeName(){return"Script"}},xg=class extends Ni{getTypeName(){return"URL"}},Cg=class extends Ni{getTypeName(){return"ResourceURL"}};function zn(t){return t instanceof Ni?t.changingThisBreaksApplicationSecurity:t}function Pi(t,n){let e=yC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Dd})`)}return e===n}function yC(t){return t instanceof Ni&&t.getTypeName()||null}function Kg(t){return new _g(t)}function Xg(t){return new bg(t)}function Jg(t){return new yg(t)}function ev(t){return new xg(t)}function tv(t){return new Cg(t)}function XT(t){let n=new Dg(t);return JT()?new wg(n):n}var wg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(xu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Dg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=xu(n),e}};function JT(){try{return!!new window.DOMParser().parseFromString(xu(""),"text/html")}catch{return!1}}var eA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function lc(t){return t=String(t),t.match(eA)?t:"unsafe:"+t}function Fi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function dc(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var xC=Fi("area,br,col,hr,img,wbr"),CC=Fi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),wC=Fi("rp,rt"),tA=dc(wC,CC),nA=dc(CC,Fi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),iA=dc(wC,Fi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),yx=dc(xC,nA,iA,tA),DC=Fi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),rA=Fi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),oA=Fi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),aA=dc(DC,rA,oA),sA=Fi("script,style,template");var Eg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=dA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=lA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=xx(n).toLowerCase();if(!yx.hasOwnProperty(e))return this.sanitizedSomething=!0,!sA.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!aA.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;DC[s]&&(c=lc(c)),this.buf.push(" ",a,'="',Cx(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=xx(n).toLowerCase();yx.hasOwnProperty(e)&&!xC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Cx(n))}};function cA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function lA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw EC(n);return n}function dA(t){let n=t.firstChild;if(n&&cA(t,n))throw EC(n);return n}function xx(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function EC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var uA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,fA=/([^\#-~ |!])/g;function Cx(t){return t.replace(/&/g,"&amp;").replace(uA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(fA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Yd;function nv(t,n){let e=null;try{Yd=Yd||XT(t);let i=n?String(n):"";e=Yd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Yd.getInertBodyElement(i)}while(i!==o);let s=new Eg().sanitizeChildren(wx(e)||e);return xu(s)}finally{if(e){let i=wx(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function wx(t){return"content"in t&&mA(t)?t.content:null}function mA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function hA(t,n){return t.createText(n)}function pA(t,n,e){t.setValue(n,e)}function SC(t,n,e){return t.createElement(n,e)}function ou(t,n,e,i,r){t.insertBefore(n,e,i,r)}function IC(t,n,e){t.appendChild(n,e)}function Dx(t,n,e,i,r){i!==null?ou(t,n,e,i,r):IC(t,n,e)}function MC(t,n,e,i){t.removeChild(null,n,e,i)}function gA(t,n,e){t.setAttribute(n,"style",e)}function vA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function kC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&kT(t,n,i),r!==null&&vA(t,n,r),o!==null&&gA(t,n,o)}var Et=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Et||{});function qe(t){let n=AC();return n?n.sanitize(Et.URL,t)||"":Pi(t,"URL")?zn(t):lc(ea(t))}function TC(t){let n=AC();if(n)return bx(n.sanitize(Et.RESOURCE_URL,t)||"");if(Pi(t,"ResourceURL"))return bx(zn(t));throw new T(904,!1)}var _A={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function bA(t,n){return _A[t]?.[n]===!0?TC:qe}function iv(t,n,e){return bA(n,e)(t)}function AC(){let t=ne();return t&&t[Fn].sanitizer}function RC(t){return t instanceof Function?t():t}function yA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var OC="ng-template";function xA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&yA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(rv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function rv(t){return t.type===4&&t.value!==OC}function CA(t,n,e){let i=t.type===4&&!e?OC:t.value;return n===i}function wA(t,n,e){let i=4,r=t.attrs,o=r!==null?SA(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!Bn(i)&&!Bn(c))return!1;if(a&&Bn(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!CA(t,c,e)||c===""&&n.length===1){if(Bn(i))return!1;a=!0}}else if(i&8){if(r===null||!xA(t,r,c,e)){if(Bn(i))return!1;a=!0}}else{let l=n[++s],d=DA(c,r,rv(t),e);if(d===-1){if(Bn(i))return!1;a=!0;continue}if(l!==""){let f;if(d>o?f="":f=r[d+1].toLowerCase(),i&2&&l!==f){if(Bn(i))return!1;a=!0}}}}return Bn(i)||a}function Bn(t){return(t&1)===0}function DA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return IA(n,t)}function NC(t,n,e=!1){for(let i=0;i<n.length;i++)if(wA(t,n[i],e))return!0;return!1}function EA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function SA(t){for(let n=0;n<t.length;n++){let e=t[n];if(Kx(e))return n}return t.length}function IA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function MA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ex(t,n){return t?":not("+n.trim()+")":n}function kA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Bn(a)&&(n+=Ex(o,r),r=""),i=a,o=o||!Bn(i);e++}return r!==""&&(n+=Ex(o,r)),n}function TA(t){return t.map(kA).join(",")}function AA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Bn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var tn={};function ov(t,n,e,i,r,o,a,s,c,l,d){let f=nt+i,v=f+r,h=RA(f,v),b=typeof l=="function"?l():l;return h[te]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:v,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:b,incompleteFirstPass:!1,ssrId:d}}function RA(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:tn);return e}function OA(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=ov(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function av(t,n,e,i,r,o,a,s,c,l,d){let f=n.blueprint.slice();return f[Pn]=r,f[ce]=i|4|128|8|64|1024,(l!==null||t&&t[ce]&2048)&&(f[ce]|=2048),Pp(f),f[Dt]=f[no]=t,f[ft]=e,f[Fn]=a||t&&t[Fn],f[Ge]=s||t&&t[Ge],f[Ti]=c||t&&t[Ti]||null,f[Xt]=o,f[Ai]=zT(),f[to]=d,f[kp]=l,f[Jt]=n.type==2?t[Jt]:f,f}function NA(t,n,e){let i=Cn(n,t),r=OA(e),o=t[Fn].rendererFactory,a=sv(t,av(t,r,null,PC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function PC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function FC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function sv(t,n){return t[ra]?t[Mp][yn]=n:t[ra]=n,t[Mp]=n,n}function m(t=1){LC(Je(),ne(),di()+t,!1)}function LC(t,n,e,i){if(!i)if((n[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Qd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Kd(n,o,0,e)}ur(e)}var Cu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Cu||{});function ua(t,n,e,i){let r=X(null);try{let[o,a,s]=t.inputs[e],c=null;(a&Cu.SignalBased)!==0&&(c=n[o][Xe]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Wx(n,c,o,i)}finally{X(r)}}var Hn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Hn||{}),PA;function cv(t,n){return PA(t,n)}var gq=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Sg=new WeakMap,Ks=new WeakSet;function FA(t,n){let e=Sg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ks.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function LA(t,n){let e=Sg.get(t);e?e.includes(n)||e.push(n):Sg.set(t,[n])}var uo=new Set,wu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(wu||{}),$n=new D(""),Sx=new Set;function Li(t){Sx.has(t)||(Sx.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Du=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),lv=[0,1,2,3],dv=(()=>{class t{ngZone=u(F);scheduler=u(ai);errorHandler=u(Qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u($n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ue(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of lv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ue(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ro]??=[]).push(e),so(i),i[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(wu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),tc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ro];n&&(this.view[ro]=n.filter(e=>e!==this))}};function ct(t,n){let e=n?.injector??u(K);return Li("NgAfterNextRender"),jA(t,e,n,!0)}function BA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function jA(t,n,e,i){let r=n.get(Du);r.impl??=n.get(dv);let o=n.get($n,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Lt):null,s=n.get(ca,null,{optional:!0}),c=new tc(r.impl,BA(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var BC=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Be)})});function jC(t,n,e){let i=t.get(BC);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function VA(t,n){let e=t.get(BC);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function UA(t,n){for(let[e,i]of n)jC(t,i.animateFns)}function Ix(t,n,e,i){let r=t?.[cr]?.enter;n!==null&&r&&r.has(e.index)&&UA(i,r)}function la(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;Ln(r)?c=r:Ri(r)&&(l=!0,r=r[Pn]);let d=xn(r);t===0&&i!==null?(Ix(s,i,o,e),a==null?IC(n,i,d):ou(n,i,d,a||null,!0)):t===1&&i!==null?(Ix(s,i,o,e),ou(n,i,d,a||null,!0),FA(o,d)):t===2?(s?.[cr]?.leave?.has(o.index)&&LA(o,d),Ks.delete(d),Mx(s,o,e,f=>{if(Ks.has(d)){Ks.delete(d);return}MC(n,d,l,f)})):t===3&&(Ks.delete(d),Mx(s,o,e,()=>{n.destroyNode(d)})),c!=null&&XA(n,t,e,c,o,i,a)}}function HA(t,n){VC(t,n),n[Pn]=null,n[Xt]=null}function zA(t,n,e,i,r,o){i[Pn]=r,i[Xt]=n,Su(t,i,e,1,r,o)}function VC(t,n){n[Fn].changeDetectionScheduler?.notify(9),Su(t,n,n[Ge],2,null,null)}function $A(t){let n=t[ra];if(!n)return og(t[te],t);for(;n;){let e=null;if(Ri(n))e=n[ra];else{let i=n[st];i&&(e=i)}if(!e){for(;n&&!n[yn]&&n!==t;)Ri(n)&&og(n[te],n),n=n[Dt];n===null&&(n=t),Ri(n)&&og(n[te],n),e=n&&n[yn]}n=e}}function uv(t,n){let e=t[oo],i=e.indexOf(n);e.splice(i,1)}function Eu(t,n){if(ao(n))return;let e=n[Ge];e.destroyNode&&Su(t,n,e,3,null,null),$A(n)}function og(t,n){if(ao(n))return;let e=X(null);try{n[ce]&=-129,n[ce]|=256,n[un]&&Di(n[un]),qA(t,n),GA(t,n),n[te].type===1&&n[Ge].destroy();let i=n[sr];if(i!==null&&Ln(n[Dt])){i!==n[Dt]&&uv(i,n);let r=n[si];r!==null&&r.detachView(t)}gg(n)}finally{X(e)}}function Mx(t,n,e,i){let r=t?.[cr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&uo.add(t[Ai]),jC(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:d}=l();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),WA(t,i)}else t&&uo.delete(t[Ai]),i(!1)},r)}function WA(t,n){let e=t[cr]?.running;if(e){e.then(()=>{t[cr].running=void 0,uo.delete(t[Ai]),n(!0)});return}n(!1)}function GA(t,n){let e=t.cleanup,i=n[ia];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ia]=null);let r=n[Ii];if(r!==null){n[Ii]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[tr];if(o!==null){n[tr]=null;for(let a of o)a.destroy()}}function qA(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof lo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];Ue(Pe.LifecycleHookStart,s,c);try{c.call(s)}finally{Ue(Pe.LifecycleHookEnd,s,c)}}else{Ue(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ue(Pe.LifecycleHookEnd,r,o)}}}}}function UC(t,n,e){return YA(t,n.parent,e)}function YA(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Pn];if(ci(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Un.None||r===Un.Emulated)return null}return Cn(i,e)}function HC(t,n,e){return QA(t,n,e)}function ZA(t,n,e){return t.type&40?Cn(t,e):null}var QA=ZA,kx;function fv(t,n,e,i){let r=UC(t,i,n),o=n[Ge],a=i.parent||n[Xt],s=HC(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Dx(o,r,e[c],s,!1);else Dx(o,r,e,s,!1);kx!==void 0&&kx(o,i,n,e,r)}function Xs(t,n){if(n!==null){let e=n.type;if(e&3)return Cn(n,t);if(e&4)return Ig(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Xs(t,i);{let r=t[n.index];return Ln(r)?Ig(-1,r):xn(r)}}else{if(e&128)return Xs(t,n.next);if(e&32)return cv(n,t)()||xn(t[n.index]);{let i=zC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=nr(t[Jt]);return Xs(r,i)}else return Xs(t,n.next)}}}return null}function zC(t,n){if(n!==null){let i=t[Jt][Xt],r=n.projection;return i.projection[r]}return null}function Ig(t,n){let e=st+t+1;if(e<n.length){let i=n[e],r=i[te].firstChild;if(r!==null)return Xs(i,r)}return n[lr]}function mv(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ti];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&ha(xn(c),i),e.flags|=2),!yu(e))if(l&8)mv(t,n,e.child,i,r,o,!1),la(n,t,s,r,c,e,o,i);else if(l&32){let d=cv(e,i),f;for(;f=d();)la(n,t,s,r,f,e,o,i);la(n,t,s,r,c,e,o,i)}else l&16?$C(t,n,i,e,r,o):la(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function Su(t,n,e,i,r,o){mv(e,i,t.firstChild,n,r,o,!1)}function KA(t,n,e){let i=n[Ge],r=UC(t,e,n),o=e.parent||n[Xt],a=HC(o,e,n);$C(i,0,n,e,r,a)}function $C(t,n,e,i,r,o){let a=e[Jt],c=a[Xt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];la(n,t,e[Ti],r,d,i,o,e)}else{let l=c,d=a[Dt];cC(i)&&(l.flags|=128),mv(t,n,l,d,r,o,!0)}}function XA(t,n,e,i,r,o,a){let s=i[lr],c=xn(i);s!==c&&la(n,t,e,o,s,r,a);for(let l=st;l<i.length;l++){let d=i[l];Su(d[te],d,t,n,o,s)}}function JA(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Hn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Hn.Important),t.setStyle(e,i,r,o))}}function WC(t,n,e,i,r){let o=di(),a=i&2;try{ur(-1),a&&n.length>nt&&LC(t,n,nt,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;Ue(s,r,e),e(i,r)}finally{ur(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;Ue(s,r,e)}}function hv(t,n,e){oR(t,n,e),(e.flags&64)===64&&aR(t,n,e)}function Iu(t,n,e=Cn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function eR(t,n,e,i){let o=i.get(gC,pC)||e===Un.ShadowDom||e===Un.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return tR(a),a}function tR(t){nR(t)}var nR=()=>null;function iR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function rR(t,n,e,i,r,o){let a=n[te];if(Mu(t,a,n,e,i)){ci(t)&&qC(n,t.index);return}t.type&3&&(e=iR(e)),GC(t,n,e,i,r,o)}function GC(t,n,e,i,r,o){if(t.type&3){let a=Cn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function qC(t,n){let e=wn(n,t);e[ce]&16||(e[ce]|=64)}function oR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;ci(e)&&NA(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||ru(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=ec(n,t,a,e);if(ha(c,n),o!==null&&lR(n,a-i,c,s,e,o),li(s)){let l=wn(e.index,n);l[ft]=ec(n,t,a,e)}}}function aR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=X0();try{ur(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];Bd(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&sR(c,l)}}finally{ur(-1),Bd(a)}}function sR(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function YC(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];NC(n,o.selectors,!1)&&(i??=[],li(o)?i.unshift(o):i.push(o))}return i}function cR(t,n,e,i,r,o){let a=Cn(t,n);ZC(n[Ge],a,o,t.value,e,i,r)}function ZC(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ea(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function lR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];ua(i,e,c,l)}}function QC(t,n,e,i,r){let o=nt+e,a=n[te],s=r(a,n,t,i,e);n[o]=s,aa(t,!0);let c=t.type===2;return c?(kC(n[Ge],s,t),($0()===0||zs(t))&&ha(s,n),W0()):ha(s,n),Hd()&&(!c||!yu(t))&&fv(a,n,s,t),t}function KC(t){let n=t;return Gp()?qp():(n=n.parent,aa(n,!1)),n}function dR(t,n){let e=t[Ti];if(!e)return;let i;try{i=e.get(mn,null)}catch{i=null}i?.(n)}function Mu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],d=a[c+1],f=n.data[l];ua(f,e[l],d,r),s=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];ua(d,l,i,r),s=!0}return s}function uR(t,n){let e=wn(n,t),i=e[te];fR(i,e);let r=e[Pn];r!==null&&e[to]===null&&(e[to]=vC(r,e[Ti])),Ue(Pe.ComponentStart);try{pv(i,e,e[ft])}finally{Ue(Pe.ComponentEnd,e[ft])}}function fR(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function pv(t,n,e){Vd(n);try{let i=t.viewQuery;i!==null&&vg(1,i,e);let r=t.template;r!==null&&WC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[si]?.finishViewCreation(t),t.staticContentQueries&&_C(t,n),t.staticViewQueries&&vg(2,t.viewQuery,e);let o=t.components;o!==null&&mR(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ce]&=-5,Ud()}}function mR(t,n){for(let e=0;e<n.length;e++)uR(t,n[e])}function uc(t,n,e,i){let r=X(null);try{let o=n.tView,s=t[ce]&4096?4096:16,c=av(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[sr]=l;let d=t[si];return d!==null&&(c[si]=d.createEmbeddedView(o)),pv(o,c,e),c}finally{X(r)}}function pa(t,n){return!n||n.firstChild===null||cC(t)}function nc(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(xn(o)),Ln(o)&&XC(o,i);let a=e.type;if(a&8)nc(t,n,e.child,i);else if(a&32){let s=cv(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=zC(n,e);if(Array.isArray(s))i.push(...s);else{let c=nr(n[Jt]);nc(c[te],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function XC(t,n){for(let e=st;e<t.length;e++){let i=t[e],r=i[te].firstChild;r!==null&&nc(i[te],i,r,n)}t[lr]!==t[Pn]&&n.push(t[lr])}function JC(t){if(t[ro]!==null){for(let n of t[ro])n.impl.addSequence(n);t[ro].length=0}}var ew=[];function hR(t){return t[un]??pR(t)}function pR(t){let n=ew.pop()??Object.create(vR);return n.lView=t,n}function gR(t){t.lView[un]!==t&&(t.lView=null,ew.push(t))}var vR=z(y({},Ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{so(t.lView)},consumerOnSignalRead(){this.lView[un]=this}});function _R(t){let n=t[un]??Object.create(bR);return n.lView=t,n}var bR=z(y({},Ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=nr(t.lView);for(;n&&!tw(n[te]);)n=nr(n);n&&Fp(n)},consumerOnSignalRead(){this.lView[un]=this}});function tw(t){return t.type!==2}function nw(t){if(t[tr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[tr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ce]&8192)}}var yR=100;function iw(t,n=0){let i=t[Fn].rendererFactory,r=!1;r||i.begin?.();try{xR(t,n)}finally{r||i.end?.()}}function xR(t,n){let e=Yp();try{Ps(!0),Mg(t,n);let i=0;for(;$s(t);){if(i===yR)throw new T(103,!1);i++,Mg(t,1)}}finally{Ps(e)}}function CR(t,n,e,i){if(ao(n))return;let r=n[ce],o=!1,a=!1;Vd(n);let s=!0,c=null,l=null;o||(tw(t)?(l=hR(n),c=ni(l)):Ll()===null?(s=!1,l=_R(n),c=ni(l)):n[un]&&(Di(n[un]),n[un]=null));try{Pp(n),Z0(t.bindingStartIndex),e!==null&&WC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Qd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Kd(n,h,0,null),ig(n,0)}if(a||wR(n),nw(n),rw(n,0),t.contentQueries!==null&&_C(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Qd(n,h)}else{let h=t.contentHooks;h!==null&&Kd(n,h,1),ig(n,1)}ER(t,n);let f=t.components;f!==null&&aw(n,f,0);let v=t.viewQuery;if(v!==null&&vg(2,v,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Qd(n,h)}else{let h=t.viewHooks;h!==null&&Kd(n,h,2),ig(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Rd]){for(let h of n[Rd])h();n[Rd]=null}o||(JC(n),n[ce]&=-73)}catch(d){throw o||so(n),d}finally{l!==null&&(wi(l,c),s&&gR(l)),Ud()}}function rw(t,n){for(let e=dC(t);e!==null;e=uC(e))for(let i=st;i<e.length;i++){let r=e[i];ow(r,n)}}function wR(t){for(let n=dC(t);n!==null;n=uC(n)){if(!(n[ce]&2))continue;let e=n[oo];for(let i=0;i<e.length;i++){let r=e[i];Fp(r)}}}function DR(t,n,e){Ue(Pe.ComponentStart);let i=wn(n,t);try{ow(i,e)}finally{Ue(Pe.ComponentEnd,i[ft])}}function ow(t,n){Pd(t)&&Mg(t,n)}function Mg(t,n){let i=t[te],r=t[ce],o=t[un],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&Fr(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)CR(i,t,i.template,t[ft]);else if(r&8192){let s=X(null);try{nw(t),rw(t,1);let c=i.components;c!==null&&aw(t,c,1),JC(t)}finally{X(s)}}}function aw(t,n,e){for(let i=0;i<n.length;i++)DR(t,n[i],e)}function ER(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)ur(~r);else{let o=r,a=e[++i],s=e[++i];K0(a,o);let c=n[o];Ue(Pe.HostBindingsUpdateStart,c);try{s(2,c)}finally{Ue(Pe.HostBindingsUpdateEnd,c)}}}}finally{ur(-1)}}function gv(t,n){let e=Yp()?64:1088;for(t[Fn].changeDetectionScheduler?.notify(n);t;){t[ce]|=e;let i=nr(t);if(oa(t)&&!i)return t;t=i}return null}function sw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function cw(t,n){let e=st+n;if(e<t.length)return t[e]}function fc(t,n,e,i=!0){let r=n[te];if(SR(r,n,t,e),i){let a=Ig(e,t),s=n[Ge],c=s.parentNode(t[lr]);c!==null&&zA(r,t[Xt],s,n,c,a)}let o=n[to];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function lw(t,n){let e=ic(t,n);return e!==void 0&&Eu(e[te],e),e}function ic(t,n){if(t.length<=st)return;let e=st+n,i=t[e];if(i){let r=i[sr];r!==null&&r!==t&&uv(r,i),n>0&&(t[e-1][yn]=i[yn]);let o=Vs(t,st+n);HA(i[te],i);let a=o[si];a!==null&&a.detachView(o[te]),i[Dt]=null,i[yn]=null,i[ce]&=-129}return i}function SR(t,n,e,i){let r=st+i,o=e.length;i>0&&(e[r-1][yn]=n),i<o-st?(n[yn]=e[r],Cp(e,st+i,n)):(e.push(n),n[yn]=null),n[Dt]=e;let a=n[sr];a!==null&&e!==a&&dw(a,n);let s=n[si];s!==null&&s.insertView(t),Fd(n),n[ce]|=128}function dw(t,n){let e=t[oo],i=n[Dt];if(Ri(i))t[ce]|=2;else{let r=i[Dt][Jt];n[Jt]!==r&&(t[ce]|=2)}e===null?t[oo]=[n]:e.push(n)}var fr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[te];return nc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ft]}set context(n){this._lView[ft]=n}get destroyed(){return ao(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Dt];if(Ln(n)){let e=n[Hs],i=e?e.indexOf(this):-1;i>-1&&(ic(n,i),Vs(e,i))}this._attachedToViewContainer=!1}Eu(this._lView[te],this._lView)}onDestroy(n){Lp(this._lView,n)}markForCheck(){gv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){Fd(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,iw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=oa(this._lView),e=this._lView[sr];e!==null&&!n&&uv(e,this._lView),VC(this._lView[te],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=n;let e=oa(this._lView),i=this._lView[sr];i!==null&&!e&&dw(i,this._lView),Fd(this._lView)}};var kt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=IR;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=uc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new fr(o)}}return t})();function IR(){return ku(Ft(),ne())}function ku(t,n){return t.type&4?new kt(n,t,_a(t,n)):null}function ba(t,n,e,i,r){let o=t.data[n];if(o===null)o=MR(t,n,e,i,r),Q0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=G0();o.injectorIndex=a===null?-1:a.injectorIndex}return aa(o,!0),o}function MR(t,n,e,i,r){let o=Wp(),a=Gp(),s=a?o:o&&o.parent,c=t.data[n]=TR(t,s,e,n,i,r);return kR(t,c,o,a),c}function kR(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function TR(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Hp()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function AR(t){let n=t[Tp]??[],i=t[Dt][Ge],r=[];for(let o of n)o.data[hC]!==void 0?r.push(o):RR(o,i);t[Tp]=r}function RR(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[mC];for(;e<r;){let o=i.nextSibling;MC(n,i,!1),i=o,e++}}}var OR=()=>null,NR=()=>null;function au(t,n){return OR(t,n)}function uw(t,n,e){return NR(t,n,e)}var fw=class{},Tu=class{},kg=class{resolveComponentFactory(n){throw new T(917,!1)}},mc=class{static NULL=new kg},bt=class{},He=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>PR()}return t})();function PR(){let t=ne(),n=Ft(),e=wn(n.index,t);return(Ri(e)?e:t)[Ge]}var mw=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>null})}return t})();var Jd={},Tg=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Jd,i);return r!==Jd||e===Jd?r:this.parentInjector.get(n,e,i)}};function su(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Ed(r,s);else if(o==2){let c=s,l=n[++a];i=Ed(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function j(t,n=0){let e=ne();if(e===null)return G(t,n);let i=Ft();return rC(i,e,Pt(t),n)}function hw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,c,l]=d.resolveHostDirectives(a);break}BR(t,n,e,s,o,c,l)}o!==null&&i!==null&&FR(e,i,o)}function FR(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new T(-301,!1);i.push(n[r],o)}}function LR(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function BR(t,n,e,i,r,o,a){let s=i.length,c=null;for(let v=0;v<s;v++){let h=i[v];c===null&&li(h)&&(c=h,LR(t,e,v)),hg(ru(e,n),t,h.type)}$R(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let v=0;v<s;v++){let h=i[v];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,f=FC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let v=0;v<s;v++){let h=i[v];if(e.mergedAttrs=ma(e.mergedAttrs,h.hostAttrs),VR(t,e,n,f,h),zR(f,h,r),a!==null&&a.has(h)){let[k,R]=a.get(h);e.directiveToIndex.set(h.type,[f,k+e.directiveStart,R+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!l&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}jR(t,e,o)}function jR(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Tx(0,n,r,i),Tx(1,n,r,i),Rx(n,i,!1);else{let o=e.get(r);Ax(0,n,o,i),Ax(1,n,o,i),Rx(n,i,!0)}}}function Tx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),pw(n,o)}}function Ax(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),pw(n,a)}}function pw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Rx(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||rv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){a??=[],a.push(l[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function VR(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=er(r.type,!0)),a=new lo(o,li(r),j,null);t.blueprint[i]=a,e[i]=a,UR(t,n,i,FC(t,e,r.hostVars,tn),r)}function UR(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;HR(a)!=s&&a.push(s),a.push(e,i,o)}}function HR(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function zR(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;li(n)&&(e[""]=t)}}function $R(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function gw(t,n,e,i,r,o,a,s){let c=n[te],l=c.consts,d=fn(l,a),f=ba(c,t,e,i,d);return o&&hw(c,n,f,fn(l,s),r),f.mergedAttrs=ma(f.mergedAttrs,f.attrs),f.attrs!==null&&su(f,f.attrs,!1),f.mergedAttrs!==null&&su(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function vw(t,n){Zx(t,n),Ap(n)&&t.queries.elementEnd(n)}function WR(t,n,e,i,r,o){let a=n.consts,s=fn(a,r),c=ba(n,t,e,i,s);if(c.mergedAttrs=ma(c.mergedAttrs,c.attrs),o!=null){let l=fn(a,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&su(c,c.attrs,!1),c.mergedAttrs!==null&&su(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function vv(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function _v(t,n,e){return t[n]=e}function GR(t,n){return t[n]}function Dn(t,n,e){if(e===tn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function _w(t,n,e,i){let r=Dn(t,n,e);return Dn(t,n+1,i)||r}function fa(t,n,e){return function i(r){let o=ci(t)?wn(t.index,n):n;gv(o,5);let a=n[ft],s=Ox(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=Ox(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function Ox(t,n,e,i){let r=X(null);try{return Ue(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return dR(t,o),!1}finally{Ue(Pe.OutputEnd,n,e),X(r)}}function bw(t,n,e,i,r,o,a,s){let c=zs(t),l=!1,d=null;if(!i&&c&&(d=YR(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,l=!0}else{let f=Cn(t,e),v=i?i(f):f;YT(e,v,o,s);let h=r.listen(v,o,s);if(!qR(o)){let b=i?k=>i(xn(k[t.index])):t.index;yw(b,n,e,o,s,h,!1)}}return l}function qR(t){return t.startsWith("animation")||t.startsWith("transition")}function YR(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ia],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function yw(t,n,e,i,r,o,a){let s=n.firstCreatePass?jp(n):null,c=Bp(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function cu(t,n,e,i,r,o){let a=n[e],s=n[te],l=s.data[e].outputs[i],f=a[l].subscribe(o);yw(t.index,s,n,r,o,f,!0)}function ya(){ZR()}function ZR(){let t=ne(),n=Je(),e=Ft();if(n.firstCreatePass&&KR(n,e),e.controlDirectiveIndex===-1)return;Li("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new lu(t,n,e))}function xa(){QR()}function QR(){let t=ne(),n=Je(),e=sa();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new lu(t,n,e))}var lu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){xw(this.tView.data[this.tNode.customControlIndex],n)&&cu(this.tNode,this.lView,this.tNode.customControlIndex,n,n,fa(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";cu(this.tNode,this.lView,this.tNode.customControlIndex,e,e,fa(this.tNode,this.lView,n))}listenToDom(n,e){bw(this.tNode,this.tView,this.lView,void 0,this.lView[Ge],n,e,fa(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];ua(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],c=this.tView.data[a],l=this.lView[a];ua(c,l,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";ua(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function KR(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}XR(t,n)}function XR(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(Nx(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(Nx(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function Nx(t,n){return JR(t,n)&&xw(t,n+"Change")}function JR(t,n){return n in t.inputs}function xw(t,n){return n in t.outputs}var Ag=Symbol("BINDING");function Cw(t){return t.debugInfo?.className||t.type.name||null}var du=class extends mc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=ki(n);return new fo(e,this.ngModule)}};function e1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Cu.SignalBased)!==0};return r&&(o.transform=r),o})}function t1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function n1(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Tg(e,i):e}function i1(t){let n=t.get(bt,null);if(n===null)throw new T(407,!1);let e=t.get(mw,null),i=t.get(ai,null),r=t.get($n,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function r1(t,n){let e=ww(t);return SC(n,e,e==="svg"?Rp:e==="math"?B0:null)}function ww(t){return(t.selectors[0][0]||"div").toLowerCase()}var fo=class extends Tu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=e1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=t1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=TA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ue(Pe.DynamicComponentStart);let s=X(null);try{let c=this.componentDef,l=n1(c,r||this.ngModule,n),d=i1(l),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Cw(c),()=>this.createComponentRef(d,l,e,i,o,a)):this.createComponentRef(d,l,e,i,o,a)}finally{X(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=o1(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),d=r?eR(l,r,s.encapsulation,e):r1(s,l),f=a?.some(Px)||o?.some(b=>typeof b!="function"&&b.bindings.some(Px)),v=av(null,c,null,512|PC(s),null,null,n,l,e,null,vC(d,e,!0));v[nt]=d,Vd(v);let h=null;try{let b=gw(nt,v,2,"#host",()=>c.directiveRegistry,!0,0);kC(l,d,b),ha(d,v),hv(c,v,b),bC(c,b,v),vw(c,b),i!==void 0&&s1(b,this.ngContentSelectors,i),h=wn(b.index,v),v[ft]=h[ft],pv(c,v,null)}catch(b){throw h!==null&&gg(h),gg(v),b}finally{Ue(Pe.DynamicComponentEnd),Ud()}return new uu(this.componentType,v,!!f)}};function o1(t,n,e,i){let r=t?["ng-version","21.2.10"]:AA(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Ag].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!="function")for(let v of f.bindings){s+=v[Ag].requiredVars;let h=d+1;v.create&&(v.targetIdx=h,(o??=[]).push(v)),v.update&&(v.targetIdx=h,(a??=[]).push(v))}}let c=[n];if(i)for(let d of i){let f=typeof d=="function"?d:d.type,v=bp(f);c.push(v)}return ov(0,null,a1(o,a),1,s,c,null,null,null,[r],null)}function a1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Px(t){let n=t[Ag].kind;return n==="input"||n==="twoWay"}var uu=class extends fw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Od(e[te],nt),this.location=_a(this._tNode,e),this.instance=wn(this._tNode.index,e)[ft],this.hostView=this.changeDetectorRef=new fr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Mu(i,r[te],r,n,e);this.previousInputValues.set(n,e);let a=wn(i.index,r);gv(a,1)}get injector(){return new co(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function s1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Bt=(()=>{class t{static __NG_ELEMENT_ID__=c1}return t})();function c1(){let t=Ft();return Dw(t,ne())}var Rg=class t extends Bt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return _a(this._hostTNode,this._hostLView)}get injector(){return new co(this._hostTNode,this._hostLView)}get parentInjector(){let n=Yg(this._hostTNode,this._hostLView);if(Xx(n)){let e=nu(n,this._hostLView),i=tu(n),r=e[te].data[i+8];return new co(r,e)}else return new co(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Fx(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-st}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=au(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,pa(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!xT(n),l;if(c)l=e;else{let R=e||{};l=R.index,i=R.injector,r=R.projectableNodes,o=R.environmentInjector||R.ngModuleRef,a=R.directives,s=R.bindings}let d=c?n:new fo(ki(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let P=(c?f:this.parentInjector).get(Be,null);P&&(o=P)}let v=ki(d.componentType??{}),h=au(this._lContainer,v?.id??null),b=h?.firstChild??null,k=d.create(f,r,b,o,a,s);return this.insertImpl(k.hostView,l,pa(this._hostTNode,h)),k}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(V0(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[Dt],l=new t(c,c[Xt],c[Dt]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return fc(a,r,o,i),n.attachToViewContainerRef(),Cp(ag(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Fx(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ic(this._lContainer,e);i&&(Vs(ag(this._lContainer),e),Eu(i[te],i))}detach(n){let e=this._adjustIndex(n,-1),i=ic(this._lContainer,e);return i&&Vs(ag(this._lContainer),e)!=null?new fr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Fx(t){return t[Hs]}function ag(t){return t[Hs]||(t[Hs]=[])}function Dw(t,n){let e,i=n[t.index];return Ln(i)?e=i:(e=sw(i,n,null,t),n[t.index]=e,sv(n,e)),d1(e,n,t,i),new Rg(e,t,n)}function l1(t,n){let e=t[Ge],i=e.createComment(""),r=Cn(n,t),o=e.parentNode(r);return ou(e,o,i,e.nextSibling(r),!1),i}var d1=m1,u1=()=>!1;function f1(t,n,e){return u1(t,n,e)}function m1(t,n,e,i){if(t[lr])return;let r;e.type&8?r=xn(i):r=l1(n,e),t[lr]=r}var Og=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ng=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)yv(n,e).matches!==null&&this.queries[e].setDirty()}},fu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=_1(n):this.predicate=n}},Pg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Fg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,h1(e,o)),this.matchTNodeWithReadOption(n,e,Xd(e,n,o,!1,!1))}else i===kt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Xd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===B||r===Bt||r===kt&&e.type&4)this.addMatch(e.index,-2);else{let o=Xd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function h1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function p1(t,n){return t.type&11?_a(t,n):t.type&4?ku(t,n):null}function g1(t,n,e,i){return e===-1?p1(n,t):e===-2?v1(t,n,i):ec(t,t[te],e,n)}function v1(t,n,e){if(e===B)return _a(n,t);if(e===kt)return ku(n,t);if(e===Bt)return Dw(n,t)}function Ew(t,n,e,i){let r=n[si].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let d=o[l];s.push(g1(n,d,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function Lg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=Ew(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],d=n[-c];for(let f=st;f<d.length;f++){let v=d[f];v[sr]===v[Dt]&&Lg(v[te],v,l,i)}if(d[oo]!==null){let f=d[oo];for(let v=0;v<f.length;v++){let h=f[v];Lg(h[te],h,l,i)}}}}}return i}function bv(t,n){return t[si].queries[n].queryList}function Sw(t,n,e){let i=new Vn((e&4)===4);return z0(t,n,i,i.destroy),(n[si]??=new Ng).queries.push(new Og(i))-1}function Iw(t,n,e){let i=Je();return i.firstCreatePass&&(kw(i,new fu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Sw(i,ne(),n)}function Mw(t,n,e,i){let r=Je();if(r.firstCreatePass){let o=Ft();kw(r,new fu(n,e,i),o.index),b1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Sw(r,ne(),e)}function _1(t){return t.split(",").map(n=>n.trim())}function kw(t,n,e){t.queries===null&&(t.queries=new Pg),t.queries.track(new Fg(n,e))}function b1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function yv(t,n){return t.queries.getByIndex(n)}function Tw(t,n){let e=t[te],i=yv(e,n);return i.crossesNgTemplate?Lg(e,t,n,[]):Ew(e,t,i,n)}function Aw(t,n,e){let i,r=ws(()=>{i._dirtyCounter();let o=y1(i,t);if(n&&o===void 0)throw new T(-951,!1);return o});return i=r[Xe],i._dirtyCounter=L(0),i._flatValue=void 0,r}function xv(t){return Aw(!0,!1,t)}function Cv(t){return Aw(!0,!0,t)}function Rw(t,n){let e=t[Xe];e._lView=ne(),e._queryIndex=n,e._queryList=bv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function y1(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ce]&4)return n?void 0:zt;let r=bv(e,i),o=Tw(e,i);return r.reset(o,sC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var fi=class{},Au=class{};var mu=class extends fi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new du(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=_p(n);this._bootstrapComponents=RC(o.bootstrap),this._r3Injector=Kp(n,e,[{provide:fi,useValue:this},{provide:mc,useValue:this.componentFactoryResolver},...i],Bs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},hu=class extends Au{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new mu(this.moduleType,n,[])}};var rc=class extends fi{injector;componentFactoryResolver=new du(this);instance=null;constructor(n){super();let e=new Jr([...n.providers,{provide:fi,useValue:this},{provide:mc,useValue:this.componentFactoryResolver}],n.parent||na(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function hc(t,n,e=null){return new rc({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var x1=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Ep(!1,e.type),r=i.length>0?hc([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(G(Be))})}return t})();function I(t){return ac(()=>{let n=Ow(t),e=z(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Zg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(x1).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Un.Emulated,styles:t.styles||zt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Li("NgStandalone"),Nw(e);let i=t.dependencies;return e.directiveDefs=Lx(i,C1),e.pipeDefs=Lx(i,w0),e.id=E1(e),e})}function C1(t){return ki(t)||bp(t)}function se(t){return ac(()=>({type:t.type,bootstrap:t.bootstrap||zt,declarations:t.declarations||zt,imports:t.imports||zt,exports:t.exports||zt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function w1(t,n){if(t==null)return rr;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=Cu.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function D1(t){if(t==null)return rr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function N(t){return ac(()=>{let n=Ow(t);return Nw(n),n})}function wv(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Ow(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||rr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||zt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:w1(t.inputs,n),outputs:D1(t.outputs),debugInfo:null}}function Nw(t){t.features?.forEach(n=>n(t))}function Lx(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function E1(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Dv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function S1(t){return Object.getPrototypeOf(t.prototype).constructor}function Te(t){let n=S1(t.type),e=!0,i=[t];for(;n;){let r;if(li(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new T(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=sg(t.inputs),a.declaredInputs=sg(t.declaredInputs),a.outputs=sg(t.outputs);let s=r.hostBindings;s&&A1(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&k1(t,c),l&&T1(t,l),I1(t,r),C0(t.outputs,r.outputs),li(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Te&&(e=!1)}}n=Object.getPrototypeOf(n)}M1(i)}function I1(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function M1(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=ma(r.hostAttrs,e=ma(e,r.hostAttrs))}}function sg(t){return t===rr?{}:t===zt?[]:t}function k1(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function T1(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function A1(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Pw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=ma(t.mergedAttrs,t.attrs);let d=t.tView=ov(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),aa(t,!1);let c=O1(e,n,t,i);Hd()&&fv(e,n,c,t),ha(c,n);let l=sw(c,n,c,t);n[i+nt]=l,sv(n,l),f1(l,t,n)}function R1(t,n,e,i,r,o,a,s,c,l,d){let f=e+nt,v;return n.firstCreatePass?(v=ba(n,f,4,a||null,s||null),Up()&&hw(n,t,v,fn(n.consts,l),YC),Zx(n,v)):v=n.data[f],Pw(v,t,n,e,i,r,o,c),zs(v)&&hv(n,t,v),l!=null&&Iu(t,v,d),v}function ga(t,n,e,i,r,o,a,s,c,l,d){let f=e+nt,v;if(n.firstCreatePass){if(v=ba(n,f,4,a||null,s||null),l!=null){let h=fn(n.consts,l);v.localNames=[];for(let b=0;b<h.length;b+=2)v.localNames.push(h[b],-1)}}else v=n.data[f];return Pw(v,t,n,e,i,r,o,c),l!=null&&Iu(t,v,d),v}function Tt(t,n,e,i,r,o,a,s){let c=ne(),l=Je(),d=fn(l.consts,o);return R1(c,l,t,n,e,i,r,d,void 0,a,s),Tt}function Ca(t,n,e,i,r,o,a,s){let c=ne(),l=Je(),d=fn(l.consts,o);return ga(c,l,t,n,e,i,r,d,void 0,a,s),Ca}var O1=N1;function N1(t,n,e,i){return zd(!0),n[Ge].createComment("")}var Ru=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Bi(t){return typeof t=="function"&&t[Xe]!==void 0}var Ev=new D("");function ji(t){return!!t&&typeof t.then=="function"}function Sv(t){return!!t&&typeof t.subscribe=="function"}var Fw=new D("");var Iv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Fw,{optional:!0})??[];injector=u(K);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=ut(this.injector,r);if(ji(o))e.push(o);else if(Sv(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ou=new D("");function Lw(){Ph(()=>{let t="";throw new T(600,t)})}function Bw(t){return t.isBoundToModule}var P1=10;var hn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(mn);afterRenderManager=u(Du);zonelessEnabled=u(Zs);rootEffectScheduler=u(Wd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new A;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Oi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ee(e=>!e))}constructor(){u($n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=K.NULL){return this._injector.get(F).run(()=>{Ue(Pe.BootstrapComponentStart);let a=e instanceof Tu;if(!this._injector.get(Iv).done){let b="";throw new T(405,b)}let c;a?c=e:c=this._injector.get(mc).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Bw(c)?void 0:this._injector.get(fi),d=i||c.selector,f=c.create(r,[],d,l),v=f.location.nativeElement,h=f.injector.get(Ev,null);return h?.registerApplication(v),f.onDestroy(()=>{this.detachView(f.hostView),Js(this.components,f),h?.unregisterApplication(v)}),this._loadComponent(f),Ue(Pe.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ue(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(wu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ue(Pe.ChangeDetectionEnd),new T(101,!1);let e=X(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,X(e),this.afterTick.next(),Ue(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(bt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<P1;){Ue(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ue(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!$s(r))continue;let o=i&&!this.zonelessEnabled?0:1;iw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>$s(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Js(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ou,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Js(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new T(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Js(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Nu(t,n){let e=ne(),i=dr();if(Dn(e,i,n)){let r=Je(),o=sa();if(Mu(o,r,e,t,n))ci(o)&&qC(e,o.index);else{let s=Cn(o,e);ZC(e[Ge],s,null,o.value,t,n,null)}}return Nu}function xe(t,n,e,i){let r=ne(),o=dr();if(Dn(r,o,n)){let a=Je(),s=sa();cR(s,r,t,n,e,i)}return xe}var Bg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function cg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function F1(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){X(i);let l=n.length-1;for(X(null);a<=s&&a<=l;){let d=t.at(a),f=n[a],v=cg(a,d,a,f,e);if(v!==0){v<0&&t.updateValue(a,f),a++;continue}let h=t.at(s),b=n[l],k=cg(s,h,l,b,e);if(k!==0){k<0&&t.updateValue(s,b),s--,l--;continue}let R=e(a,d),P=e(s,h),me=e(a,f);if(Object.is(me,P)){let ke=e(l,b);Object.is(ke,R)?(t.swap(a,s),t.updateValue(s,b),l--,s--):t.move(s,a),t.updateValue(a,f),a++;continue}if(r??=new pu,o??=jx(t,a,s,e),jg(t,r,a,me))t.updateValue(a,f),a++,s++;else if(o.has(me))r.set(R,t.detach(a)),s--;else{let ke=t.create(a,n[a]);t.attach(a,ke),a++,s++}}for(;a<=l;)Bx(t,r,e,a,n[a]),a++}else if(n!=null){X(i);let l=n[Symbol.iterator]();X(null);let d=l.next();for(;!d.done&&a<=s;){let f=t.at(a),v=d.value,h=cg(a,f,a,v,e);if(h!==0)h<0&&t.updateValue(a,v),a++,d=l.next();else{r??=new pu,o??=jx(t,a,s,e);let b=e(a,v);if(jg(t,r,a,b))t.updateValue(a,v),a++,s++,d=l.next();else if(!o.has(b))t.attach(a,t.create(a,v)),a++,s++,d=l.next();else{let k=e(a,f);r.set(k,t.detach(a)),s--}}}for(;!d.done;)Bx(t,r,e,t.length,d.value),d=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function jg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Bx(t,n,e,i,r){if(jg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function jx(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var pu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Li("NgControlFlow");let c=ne(),l=Je(),d=fn(l.consts,o);return ga(c,l,t,n,e,i,r,d,256,a,s),Mv}function Mv(t,n,e,i,r,o,a,s){Li("NgControlFlow");let c=ne(),l=Je(),d=fn(l.consts,o);return ga(c,l,t,n,e,i,r,d,512,a,s),Mv}function w(t,n){Li("NgControlFlow");let e=ne(),i=dr(),r=e[i]!==tn?e[i]:-1,o=r!==-1?gu(e,nt+r):void 0,a=0;if(Dn(e,i,t)){let s=X(null);try{if(o!==void 0&&lw(o,a),t!==-1){let c=nt+t,l=gu(e,c),d=zg(e[te],c),f=uw(l,d,e),v=uc(e,d,n,{dehydratedView:f});fc(l,v,a,pa(d,f))}}finally{X(s)}}else if(o!==void 0){let s=cw(o,a);s!==void 0&&(s[ft]=n)}}var Vg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-st}};function Ye(t){return t}function En(t,n){return n}var Ug=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function le(t,n,e,i,r,o,a,s,c,l,d,f,v){Li("NgControlFlow");let h=ne(),b=Je(),k=c!==void 0,R=ne(),P=s?a.bind(R[Jt][ft]):a,me=new Ug(k,P);R[nt+t]=me,ga(h,b,t+1,n,e,i,r,fn(b.consts,o),256),k&&ga(h,b,t+2,c,l,d,f,fn(b.consts,v),512)}var Hg=class extends Bg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-st}at(n){return this.getLView(n)[ft].$implicit}attach(n,e){let i=e[to];this.needsIndexUpdate||=n!==this.length,fc(this.lContainer,e,n,pa(this.templateTNode,i)),L1(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,B1(this.lContainer,n),j1(this.lContainer,n)}create(n,e){let i=au(this.lContainer,this.templateTNode.tView.ssrId);return uc(this.hostLView,this.templateTNode,new Vg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Eu(n[te],n)}updateValue(n,e){this.getLView(n)[ft].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ft].$index=n}getLView(n){return V1(this.lContainer,n)}};function de(t){let n=X(null),e=di();try{let i=ne(),r=i[te],o=i[e],a=e+1,s=gu(i,a);if(o.liveCollection===void 0){let l=zg(r,a);o.liveCollection=new Hg(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(F1(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=dr(),d=c.length===0;if(Dn(i,l,d)){let f=e+2,v=gu(i,f);if(d){let h=zg(r,f),b=uw(v,h,i),k=uc(i,h,void 0,{dehydratedView:b});fc(v,k,0,pa(h,b))}else r.firstUpdatePass&&AR(v),lw(v,0)}}}finally{X(n)}}function gu(t,n){return t[n]}function L1(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[cr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ti];VA(o,r),uo.delete(i[Ai]),r.detachedLeaveAnimationFns=void 0}}function B1(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[cr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function j1(t,n){return ic(t,n)}function V1(t,n){return cw(t,n)}function zg(t,n){return Od(t,n)}function M(t,n,e){let i=ne(),r=dr();if(Dn(i,r,n)){let o=Je(),a=sa();rR(a,i,t,n,i[Ge],e)}return M}function $g(t,n,e,i,r){Mu(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=ne(),o=r[te],a=t+nt,s=o.firstCreatePass?gw(a,r,2,n,YC,Up(),e,i):o.data[a];if(ci(s)){let c=r[Fn].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(Cw(l),()=>(Vx(t,n,r,s,i),g))}}return Vx(t,n,r,s,i),g}function Vx(t,n,e,i,r){if(QC(i,e,t,n,jw),zs(i)){let o=e[te];hv(o,e,i),bC(o,i,e)}r!=null&&Iu(e,i)}function p(){let t=Je(),n=Ft(),e=KC(n);return t.firstCreatePass&&vw(t,e),zp(e)&&$p(),Vp(),e.classesWithoutHost!=null&&IT(e)&&$g(t,e,ne(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&MT(e)&&$g(t,e,ne(),e.stylesWithoutHost,!1),p}function E(t,n,e,i){return g(t,n,e,i),p(),E}function ue(t,n,e,i){let r=ne(),o=r[te],a=t+nt,s=o.firstCreatePass?WR(a,o,2,n,e,i):o.data[a];return QC(s,r,t,n,jw),i!=null&&Iu(r,s),ue}function ge(){let t=Ft(),n=KC(t);return zp(n)&&$p(),Vp(),ge}function Ae(t,n,e,i){return ue(t,n,e,i),ge(),Ae}var jw=(t,n,e,i,r)=>(zd(!0),SC(n[Ge],i,rx()));function an(){return ne()}function $e(t,n,e){let i=ne(),r=dr();if(Dn(i,r,n)){let o=Je(),a=sa();GC(a,i,t,n,i[Ge],e)}return $e}var pc="en-US";var U1=pc;function Vw(t){typeof t=="string"&&(U1=t.toLowerCase().replace(/_/g,"-"))}function q(t,n,e){let i=ne(),r=Je(),o=Ft();return H1(r,i,i[Ge],o,t,n,e),q}function H1(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=fa(i,n,o),bw(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let v=d[f],h=d[f+1];c??=fa(i,n,o),cu(i,n,v,h,r,c)}if(l&&l.length)for(let f of l)c??=fa(i,n,o),cu(i,n,f,r,r,c)}}function x(t=1){return ix(t)}function z1(t,n){let e=null,i=EA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?NC(t,o,!0):MA(i,o))return r}return e}function Re(t){let n=ne()[Jt][Xt];if(!n.projection){let e=t?t.length:1,i=n.projection=k0(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?z1(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function $(t,n=0,e,i,r,o){let a=ne(),s=Je(),c=i?t+1:null;c!==null&&ga(a,s,c,i,r,o,null,e);let l=ba(s,nt+t,16,null,e||null);l.projection===null&&(l.projection=n),qp();let f=!a[to]||Hp();a[Jt][Xt].projection[l.projection]===null&&c!==null?$1(a,s,c):f&&!yu(l)&&KA(s,a,l)}function $1(t,n,e){let i=nt+e,r=n.data[i],o=t[i],a=au(o,r.tView.ssrId),s=uc(t,r,void 0,{dehydratedView:a});fc(o,s,0,pa(r,a))}function jt(t,n,e,i){return Mw(t,n,e,i),jt}function Ze(t,n,e){return Iw(t,n,e),Ze}function U(t){let n=ne(),e=Je(),i=jd();Gs(i+1);let r=yv(e,i);if(t.dirty&&j0(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Tw(n,i);t.reset(o,sC),t.notifyOnChanges()}return!0}return!1}function H(){return bv(ne(),jd())}function Pu(t,n,e,i,r){return Rw(n,Mw(t,e,i,r)),Pu}function Fu(t,n,e,i){return Rw(t,Iw(n,e,i)),Fu}function Lu(t=1){Gs(jd()+t)}function sn(t){let n=q0();return Nd(n,nt+t)}function Zd(t,n){return t<<17|n<<2}function mo(t){return t>>17&32767}function W1(t){return(t&2)==2}function G1(t,n){return t&131071|n<<17}function Wg(t){return t|2}function va(t){return(t&131068)>>2}function lg(t,n){return t&-131069|n<<2}function q1(t){return(t&1)===1}function Gg(t){return t|1}function Y1(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=mo(a),c=va(a);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||ta(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let v=mo(t[s+1]);t[i+1]=Zd(v,s),v!==0&&(t[v+1]=lg(t[v+1],i)),t[s+1]=G1(t[s+1],i)}else t[i+1]=Zd(s,0),s!==0&&(t[s+1]=lg(t[s+1],i)),s=i;else t[i+1]=Zd(c,0),s===0?s=i:t[c+1]=lg(t[c+1],i),c=i;l&&(t[i+1]=Wg(t[i+1])),Ux(t,d,i,!0),Ux(t,d,i,!1),Z1(n,d,t,i,o),a=Zd(s,c),o?n.classBindings=a:n.styleBindings=a}function Z1(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ta(o,n)>=0&&(e[i+1]=Gg(e[i+1]))}function Ux(t,n,e,i){let r=t[e+1],o=n===null,a=i?mo(r):va(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];Q1(c,n)&&(s=!0,t[a+1]=i?Gg(l):Wg(l)),a=i?mo(l):va(l)}s&&(t[e+1]=i?Wg(r):Gg(r))}function Q1(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ta(t,n)>=0:!1}var jn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function K1(t){return t.substring(jn.key,jn.keyEnd)}function X1(t){return J1(t),Uw(t,Hw(t,0,jn.textEnd))}function Uw(t,n){let e=jn.textEnd;return e===n?-1:(n=jn.keyEnd=eO(t,jn.key=n,e),Hw(t,n,e))}function J1(t){jn.key=0,jn.keyEnd=0,jn.value=0,jn.valueEnd=0,jn.textEnd=t.length}function Hw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function eO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function lt(t,n,e){return zw(t,n,e,!1),lt}function V(t,n){return zw(t,n,null,!0),V}function At(t){nO(cO,tO,t,!0)}function tO(t,n){for(let e=X1(n);e>=0;e=Uw(n,e))Td(t,K1(n),!0)}function zw(t,n,e,i){let r=ne(),o=Je(),a=Ld(2);if(o.firstUpdatePass&&Ww(o,t,a,i),n!==tn&&Dn(r,a,n)){let s=o.data[di()];Gw(o,s,r,r[Ge],t,r[a+1]=dO(n,e),i,a)}}function nO(t,n,e,i){let r=Je(),o=Ld(2);r.firstUpdatePass&&Ww(r,null,o,i);let a=ne();if(e!==tn&&Dn(a,o,e)){let s=r.data[di()];if(qw(s,i)&&!$w(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=Ed(c,e||"")),$g(r,s,a,e,i)}else lO(r,s,a,a[Ge],a[o+1],a[o+1]=sO(t,n,e),i,o)}}function $w(t,n){return n>=t.expandoStartIndex}function Ww(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[di()],a=$w(t,e);qw(o,i)&&n===null&&!a&&(n=!1),n=iO(r,o,n,i),Y1(r,o,n,e,a,i)}}function iO(t,n,e,i){let r=J0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=dg(null,t,n,e,i),e=oc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=dg(r,t,n,e,i),o===null){let c=rO(t,n,i);c!==void 0&&Array.isArray(c)&&(c=dg(null,t,n,c[1],i),c=oc(c,n.attrs,i),oO(t,n,i,c))}else o=aO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function rO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(va(i)!==0)return t[mo(i)]}function oO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[mo(r)]=i}function aO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=oc(i,a,e)}return oc(i,n.attrs,e)}function dg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=oc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function oc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Td(t,a,e?!0:n[++o]))}return t===void 0?null:t}function sO(t,n,e){if(e==null||e==="")return zt;let i=[],r=zn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function cO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Td(t,i,e)}function lO(t,n,e,i,r,o,a,s){r===tn&&(r=zt);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let v=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,b=null,k;d===f?(c+=2,l+=2,v!==h&&(b=f,k=h)):f===null||d!==null&&d<f?(c+=2,b=d):(l+=2,b=f,k=h),b!==null&&Gw(t,n,e,i,b,k,a,s),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function Gw(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],d=q1(l)?Hx(c,n,e,r,va(l),a):void 0;if(!vu(d)){vu(o)||W1(l)&&(o=Hx(c,null,e,r,s,a));let f=Op(di(),e);JA(i,a,f,r,o)}}function Hx(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,v=e[r+1];v===tn&&(v=f?zt:void 0);let h=f?Ad(v,i):d===i?v:void 0;if(l&&!vu(h)&&(h=Ad(c,i)),vu(h)&&(s=h,a))return s;let b=t[r+1];r=a?mo(b):va(b)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=Ad(c,i))}return s}function vu(t){return t!==void 0}function dO(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Bs(zn(t)))),t}function qw(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=ne(),i=Je(),r=t+nt,o=i.firstCreatePass?ba(i,r,1,n,null):i.data[r],a=uO(i,e,o,n);e[r]=a,Hd()&&fv(i,e,a,o),aa(o,!1)}var uO=(t,n,e,i)=>(zd(!0),hA(n[Ge],i));function fO(t,n,e,i=""){return Dn(t,dr(),e)?n+ea(e)+i:tn}function mO(t,n,e,i,r,o=""){let a=Y0(),s=_w(t,a,e,r);return Ld(2),s?n+ea(e)+i+ea(r)+o:tn}function ae(t){return De("",t),ae}function De(t,n,e){let i=ne(),r=fO(i,t,n,e);return r!==tn&&Yw(i,di(),r),De}function Vi(t,n,e,i,r){let o=ne(),a=mO(o,t,n,e,i,r);return a!==tn&&Yw(o,di(),a),Vi}function Yw(t,n,e){let i=Op(n,t);pA(t[Ge],i,e)}function zx(t,n,e){let i=Je();i.firstCreatePass&&Zw(n,i.data,i.blueprint,li(t),e)}function Zw(t,n,e,i,r){if(t=Pt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Zw(t[o],n,e,i,r);else{let o=Je(),a=ne(),s=Ft(),c=Xr(t)?t:Pt(t.provide),l=Ip(t),d=s.providerIndexes&1048575,f=s.directiveStart,v=s.providerIndexes>>20;if(Xr(t)||!t.multi){let h=new lo(l,r,j,null),b=fg(c,n,r?d:d+v,f);b===-1?(hg(ru(s,a),o,c),ug(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=fg(c,n,d+v,f),b=fg(c,n,d,d+v),k=h>=0&&e[h],R=b>=0&&e[b];if(r&&!R||!r&&!k){hg(ru(s,a),o,c);let P=gO(r?pO:hO,e.length,r,i,l,t);!r&&R&&(e[b].providerFactory=P),ug(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(P),a.push(P)}else{let P=Qw(e[r?b:h],l,!r&&i);ug(o,t,h>-1?h:b,P)}!r&&i&&R&&e[b].componentProviders++}}}function ug(t,n,e,i){let r=Xr(n),o=P0(n);if(r||o){let c=(o?Pt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function Qw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function fg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function hO(t,n,e,i,r){return qg(this.multi,[])}function pO(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=ec(i,i[te],this.providerFactory.index,r);a=c.slice(0,s),qg(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],qg(o,a);return a}function qg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function gO(t,n,e,i,r,o){let a=new lo(t,e,j,null);return a.multi=[],a.index=n,a.componentProviders=0,Qw(a,r,i&&!e),a}function Ne(t,n){return e=>{e.providersResolver=(i,r)=>zx(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>zx(i,r?r(n):n,!0))}}function Sn(t,n){let e=Ws()+t,i=ne();return i[e]===tn?_v(i,e,n()):GR(i,e)}function rt(t,n,e){return Xw(ne(),Ws(),t,n,e)}function Kw(t,n){let e=t[n];return e===tn?void 0:e}function Xw(t,n,e,i,r,o){let a=n+e;return Dn(t,a,r)?_v(t,a+1,o?i.call(o,r):i(r)):Kw(t,a+1)}function vO(t,n,e,i,r,o,a){let s=n+e;return _w(t,s,r,o)?_v(t,s+2,a?i.call(a,r,o):i(r,o)):Kw(t,s+2)}function Wn(t,n){let e=Je(),i,r=t+nt;e.firstCreatePass?(i=_O(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=er(i.type,!0)),a,s=Zt(j);try{let c=iu(!1),l=o();return iu(c),Np(e,ne(),r,l),l}finally{Zt(s)}}function _O(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function gc(t,n,e){let i=t+nt,r=ne(),o=Nd(r,i);return Jw(r,i)?Xw(r,Ws(),n,o.transform,e,o):o.transform(e)}function go(t,n,e,i){let r=t+nt,o=ne(),a=Nd(o,r);return Jw(o,r)?vO(o,Ws(),n,a.transform,e,i,a):a.transform(e,i)}function Jw(t,n){return t[te].data[n].pure}function Bu(t,n){return ku(t,n)}var _u=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},kv=(()=>{class t{compileModuleSync(e){return new hu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=_p(e),o=RC(r.declarations).reduce((a,s)=>{let c=ki(s);return c&&a.push(new fo(c)),a},[]);return new _u(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eD=(()=>{class t{applicationErrorHandler=u(mn);appRef=u(hn);taskService=u(Oi);ngZone=u(F);zonelessEnabled=u(Zs);tracing=u($n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _e;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Fs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(ng,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?cx:Xp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Fs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tD(){return[{provide:ai,useExisting:eD},{provide:F,useClass:Ls},{provide:Zs,useValue:!0}]}function bO(){return typeof $localize<"u"&&$localize.locale||pc}var ju=new D("",{factory:()=>u(ju,{optional:!0,skipSelf:!0})||bO()});function Z(t){return v0(t)}function W(t,n){return ws(t,n?.equal)}var yO=t=>t;function mi(t,n){if(typeof t=="function"){let e=Xh(t,yO,n?.equal);return nD(e,n?.debugName)}else{let e=Xh(t.source,t.computation,t.equal);return nD(e,t.debugName)}}function nD(t,n){let e=t[Xe],i=t;return i.set=r=>p0(e,r),i.update=r=>g0(e,r),i.asReadonly=$d.bind(t),i}var lD=Symbol("InputSignalNode#UNSET"),LO=z(y({},Ds),{transformFn:void 0,applyValueToInputSignal(t,n){Lr(t,n)}});function dD(t,n){let e=Object.create(LO);e.value=t,e.transformFn=n?.transform;function i(){if(Ji(e),e.value===lD){let r=null;throw new T(-950,r)}return e.value}return i[Xe]=e,i}var Ui=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>sc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function iD(t,n){return dD(t,n)}function BO(t){return dD(lD,t)}var fe=(iD.required=BO,iD);function rD(t,n){return xv(n)}function jO(t,n){return Cv(n)}var _c=(rD.required=jO,rD);function oD(t,n){return xv(n)}function VO(t,n){return Cv(n)}var uD=(oD.required=VO,oD);var Av=new D(""),UO=new D("");function vc(t){return!t.moduleRef}function HO(t){let n=vc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{vc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(mn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),vc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Av);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Av);a.add(o),t.moduleRef.onDestroy(()=>{Js(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return $O(i,e,()=>{let o=n.get(Oi),a=o.add(),s=n.get(Iv);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(ju,pc);if(Vw(c||pc),!n.get(UO,!0))return vc(t)?n.get(hn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(vc(t)){let d=n.get(hn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return zO?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var zO;function $O(t,n,e){try{let i=e();return ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Vu=null;function WO(t=[],n){return K.create({name:n,providers:[{provide:Us,useValue:"platform"},{provide:Av,useValue:new Set([()=>Vu=null])},...t]})}function GO(t=[]){if(Vu)return Vu;let n=WO(t);return Vu=n,Lw(),qO(n),n}function qO(t){let n=t.get(bu,null);ut(t,()=>{n?.forEach(e=>e())})}var YO=1e4;var fK=YO-1e3;var Qe=(()=>{class t{static __NG_ELEMENT_ID__=ZO}return t})();function ZO(t){return QO(Ft(),ne(),(t&16)===16)}function QO(t,n,e){if(ci(t)&&!e){let i=wn(t.index,n);return new fr(i,i)}else if(t.type&175){let i=n[Jt];return new fr(i,n)}return null}var Rv=class{supports(n){return n instanceof Map||vv(n)}create(){return new Ov}},Ov=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||vv(n)))throw new T(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Nv(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Nv=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function aD(){return new Uu([new Rv])}var Uu=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:aD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||aD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new T(901,!1)}}return t})();function fD(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ue(Pe.BootstrapApplicationStart);try{let o=r?.injector??GO(i),a=[tD(),dx,...e||[]],s=new rc({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return HO({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ue(Pe.BootstrapApplicationEnd)}}function ie(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function hr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Tv=Symbol("NOT_SET"),mD=new Set,KO=z(y({},Ds),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Tv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Tv&&!Fr(this))return this.signal;try{for(let r of this.cleanup??mD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ni(this),i;try{i=this.userFn.apply(null,n)}finally{wi(this,e)}return(this.value===Tv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Pv=class extends tc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Lt),a),this.scheduler=r;for(let s of lv){let c=e[s];if(c===void 0)continue;let l=Object.create(KO);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(Ji(l),l.value),l.signal[Xe]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[s]=l,this.hooks[s]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??mD)e()}finally{Di(n)}}};function Hu(t,n){let e=n?.injector??u(K),i=e.get(ai),r=e.get(Du),o=e.get($n,null,{optional:!0});r.impl??=e.get(dv);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ca,null,{optional:!0}),c=new Pv(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function zu(t,n){let e=ki(t),i=n.elementInjector||na();return new fo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var hD=null;function In(){return hD}function Fv(t){hD??=t}var bc=class{},$u=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(pD),providedIn:"platform"})}return t})();var pD=(()=>{class t extends $u{_location;_history;_doc=u(J);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return In().getBaseHref(this._doc)}onPopState(e){let i=In().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=In().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function _D(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function gD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function pr(t){return t&&t[0]!=="?"?`?${t}`:t}var wa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(JO),providedIn:"root"})}return t})(),XO=new D(""),JO=(()=>{class t extends wa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(J).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return _D(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+pr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+pr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+pr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(G($u),G(XO,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gr=(()=>{class t{_subject=new A;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=nN(gD(vD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+pr(i))}normalize(e){return t.stripTrailingSlash(tN(this._basePath,vD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+pr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+pr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=pr;static joinWithSlash=_D;static stripTrailingSlash=gD;static \u0275fac=function(i){return new(i||t)(G(wa))};static \u0275prov=S({token:t,factory:()=>eN(),providedIn:"root"})}return t})();function eN(){return new gr(G(wa))}function tN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function vD(t){return t.replace(/\/index.html$/,"")}function nN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Lv=/\s+/,bD=[],Hi=(()=>{class t{_ngEl;_renderer;initialClasses=bD;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Lv):bD}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Lv):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Lv).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(j(B),j(He))};static \u0275dir=N({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Bv=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:Hn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(j(B),j(Uu),j(He))};static \u0275dir=N({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),jv=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(K);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(j(Bt))};static \u0275dir=N({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Se]})}return t})();function rN(t,n){return{key:t,value:n}}var zi=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=yD;transform(e,i=yD){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(rN(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(j(Uu,16))};static \u0275pipe=wv({name:"keyvalue",type:t,pure:!1})}return t})();function yD(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Wu(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var vo=class{};var Vv="browser";function xD(t){return t===Vv}var yc=class{_doc;constructor(n){this._doc=n}manager},Gu=(()=>{class t extends yc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(G(J))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Zu=new D(""),$v=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Gu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Gu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(G(Zu),G(F))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Uv="ng-app-id";function CD(t){for(let n of t)n.remove()}function wD(t,n){let e=n.createElement("style");return e.textContent=t,e}function cN(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Uv}="${n}"],link[${Uv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Uv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function zv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Wv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,cN(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,wD);i?.forEach(r=>this.addUsage(r,this.external,zv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(CD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])CD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,wD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,zv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(G(J),G(mr),G(po,8),G(ho))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Hv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Gv=/%COMP%/g;var ED="%COMP%",lN=`_nghost-${ED}`,dN=`_ngcontent-${ED}`,uN=!0,fN=new D("",{factory:()=>uN});function mN(t){return dN.replace(Gv,t)}function hN(t){return lN.replace(Gv,t)}function SD(t,n){return n.map(e=>e.replace(Gv,t))}var qv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new xc(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Yu?r.applyToHost(e):r instanceof Cc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Un.Emulated:o=new Yu(c,l,i,this.appId,d,a,s,f);break;case Un.ShadowDom:return new qu(c,e,i,a,s,this.nonce,f,l);case Un.ExperimentalIsolatedShadowDom:return new qu(c,e,i,a,s,this.nonce,f);default:o=new Cc(c,l,i,d,a,s,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(G($v),G(Wv),G(mr),G(fN),G(J),G(F),G(po),G($n,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),xc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Hv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(DD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(DD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new T(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Hv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Hv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Hn.DashCase|Hn.Important)?n.style.setProperty(e,i,r&Hn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Hn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=In().getGlobalEventTarget(this.doc,n),!n))throw new T(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function DD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var qu=class extends xc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=SD(i.id,l);for(let f of l){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=f,this.shadowRoot.appendChild(v)}let d=i.getExternalStyles?.();if(d)for(let f of d){let v=zv(f,r);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Cc=class extends xc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?SD(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&uo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Yu=class extends Cc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=mN(l),this.hostAttr=hN(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Qu=class t extends bc{supportsDOMEvents=!0;static makeCurrent(){Fv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=pN();return e==null?null:gN(e)}resetBaseElement(){wc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Wu(document.cookie,n)}},wc=null;function pN(){return wc=wc||document.head.querySelector("base"),wc?wc.getAttribute("href"):null}function gN(t){return new URL(t,document.baseURI).pathname}var vN=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),ID=["alt","control","meta","shift"],_N={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bN={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},MD=(()=>{class t extends yc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>In().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),ID.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=_N[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ID.forEach(a=>{if(a!==r){let s=bN[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(G(J))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function Yv(t,n,e){let i=y({rootComponent:t},yN(n,e));return fD(i)}function yN(t,n){return{platformRef:n?.platformRef,appProviders:[...EN,...t?.providers??[]],platformProviders:DN}}function xN(){Qu.makeCurrent()}function CN(){return new Qt}function wN(){return Qg(document),document}var DN=[{provide:ho,useValue:Vv},{provide:bu,useValue:xN,multi:!0},{provide:J,useFactory:wN}];var EN=[{provide:Us,useValue:"root"},{provide:Qt,useFactory:CN},{provide:Zu,useClass:Gu,multi:!0},{provide:Zu,useClass:MD,multi:!0},qv,Wv,$v,{provide:bt,useExisting:qv},{provide:vo,useClass:vN},[]];var vr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Qv=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Kv=class{encodeKey(n){return kD(n)}encodeValue(n){return kD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function SN(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var IN=/%(\d[a-f0-9])/gi,MN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function kD(t){return encodeURIComponent(t).replace(IN,(n,e)=>MN[e]??n)}function Ku(t){return`${t}`}var $i=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Kv,n.fromString){if(n.fromObject)throw new T(2805,!1);this.map=SN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Ku):[Ku(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Ku(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Ku(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function kN(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function TD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function AD(t){return typeof Blob<"u"&&t instanceof Blob}function RD(t){return typeof FormData<"u"&&t instanceof FormData}function TN(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var OD="Content-Type",ND="Accept",PD="text/plain",FD="application/json",AN=`${FD}, ${PD}, */*`,Da=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(kN(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new T(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new vr,this.context??=new Qv,!this.params)this.params=new $i,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||TD(this.body)||AD(this.body)||RD(this.body)||TN(this.body)?this.body:this.body instanceof $i?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||RD(this.body)?null:AD(this.body)?this.body.type||null:TD(this.body)?null:typeof this.body=="string"?PD:this.body instanceof $i?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?FD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer||this.referrer,v=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,k=n.timeout??this.timeout,R=n.body!==void 0?n.body:this.body,P=n.withCredentials??this.withCredentials,me=n.reportProgress??this.reportProgress,ke=n.headers||this.headers,Ce=n.params||this.params,et=n.context??this.context;return n.setHeaders!==void 0&&(ke=Object.keys(n.setHeaders).reduce((St,qt)=>St.set(qt,n.setHeaders[qt]),ke)),n.setParams&&(Ce=Object.keys(n.setParams).reduce((St,qt)=>St.set(qt,n.setParams[qt]),Ce)),new t(e,i,R,{params:Ce,headers:ke,context:et,reportProgress:me,responseType:r,withCredentials:P,transferCache:b,keepalive:o,cache:s,priority:a,timeout:k,mode:c,redirect:l,credentials:d,referrer:f,integrity:v,referrerPolicy:h})}},_o=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(_o||{}),Dc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new vr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Xv=class t extends Dc{constructor(n={}){super(n)}type=_o.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ec=class t extends Dc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=_o.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ea=class extends Dc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},RN=200,ON=204;var NN=/^\)\]\}',?\n/;var PN=(()=>{class t{xhrFactory;tracingService=u($n,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return Q(null).pipe(vt(()=>new re(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((R,P)=>a.setRequestHeader(R,P.join(","))),e.headers.has(ND)||a.setRequestHeader(ND,AN),!e.headers.has(OD)){let R=e.detectContentTypeHeader();R!==null&&a.setRequestHeader(OD,R)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let R=e.responseType.toLowerCase();a.responseType=R!=="json"?R:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let R=a.statusText||"OK",P=new vr(a.getAllResponseHeaders()),me=a.responseURL||e.url;return c=new Xv({headers:P,status:a.status,statusText:R,url:me}),c},d=this.maybePropagateTrace(()=>{let{headers:R,status:P,statusText:me,url:ke}=l(),Ce=null;P!==ON&&(Ce=typeof a.response>"u"?a.responseText:a.response),P===0&&(P=Ce?RN:0);let et=P>=200&&P<300;if(e.responseType==="json"&&typeof Ce=="string"){let St=Ce;Ce=Ce.replace(NN,"");try{Ce=Ce!==""?JSON.parse(Ce):null}catch(qt){Ce=St,et&&(et=!1,Ce={error:qt,text:Ce})}}et?(o.next(new Ec({body:Ce,headers:R,status:P,statusText:me,url:ke||void 0})),o.complete()):o.error(new Ea({error:Ce,headers:R,status:P,statusText:me,url:ke||void 0}))}),f=this.maybePropagateTrace(R=>{let{url:P}=l(),me=new Ea({error:R,status:a.status||0,statusText:a.statusText||"Unknown Error",url:P||void 0});o.error(me)}),v=f;e.timeout&&(v=this.maybePropagateTrace(R=>{let{url:P}=l(),me=new Ea({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:P||void 0});o.error(me)}));let h=!1,b=this.maybePropagateTrace(R=>{h||(o.next(l()),h=!0);let P={type:_o.DownloadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),e.responseType==="text"&&a.responseText&&(P.partialText=a.responseText),o.next(P)}),k=this.maybePropagateTrace(R=>{let P={type:_o.UploadProgress,loaded:R.loaded};R.lengthComputable&&(P.total=R.total),o.next(P)});return a.addEventListener("load",d),a.addEventListener("error",f),a.addEventListener("timeout",v),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",k)),a.send(s),o.next({type:_o.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",d),a.removeEventListener("timeout",v),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",k)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(G(vo))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function FN(t,n){return n(t)}function LN(t,n,e){return(i,r)=>ut(e,()=>n(i,o=>t(o,r)))}var BN=new D("",{factory:()=>[]}),LD=new D(""),jN=new D("",{factory:()=>!0});var VN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(PN),r},providedIn:"root"})}return t})();var UN=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Qs);contributeToStability=u(jN);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(BN),...this.injector.get(LD,[])]));this.chain=i.reduceRight((r,o)=>LN(r,o,this.injector),FN)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Yr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(G(VN),G(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),HN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(UN),r},providedIn:"root"})}return t})();function Zv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Da)o=e;else{let c;r.headers instanceof vr?c=r.headers:c=new vr(r.headers);let l;r.params&&(r.params instanceof $i?l=r.params:l=new $i({fromObject:r.params})),o=new Da(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(Qo(c=>this.handler.handle(c)));if(e instanceof Da||r.observe==="events")return a;let s=a.pipe(Oe(c=>c instanceof Ec));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ee(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new T(2806,!1);return c.body}));case"blob":return s.pipe(ee(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new T(2807,!1);return c.body}));case"text":return s.pipe(ee(c=>{if(c.body!==null&&typeof c.body!="string")throw new T(2808,!1);return c.body}));default:return s.pipe(ee(c=>c.body))}case"response":return s;default:throw new T(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new $i().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Zv(r,i))}post(e,i,r={}){return this.request("POST",e,Zv(r,i))}put(e,i,r={}){return this.request("PUT",e,Zv(r,i))}static \u0275fac=function(i){return new(i||t)(G(HN))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var BD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(G(J))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(zN),r},providedIn:"root"})}return t})(),zN=(()=>{class t extends Sc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Et.NONE:return i;case Et.HTML:return Pi(i,"HTML")?zn(i):nv(this._doc,String(i)).toString();case Et.STYLE:return Pi(i,"Style")?zn(i):i;case Et.SCRIPT:if(Pi(i,"Script"))return zn(i);throw new T(5200,!1);case Et.URL:return Pi(i,"URL")?zn(i):lc(String(i));case Et.RESOURCE_URL:if(Pi(i,"ResourceURL"))return zn(i);throw new T(5201,!1);default:throw new T(5202,!1)}}bypassSecurityTrustHtml(e){return Kg(e)}bypassSecurityTrustStyle(e){return Xg(e)}bypassSecurityTrustScript(e){return Jg(e)}bypassSecurityTrustUrl(e){return ev(e)}bypassSecurityTrustResourceUrl(e){return tv(e)}static \u0275fac=function(i){return new(i||t)(G(J))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he="primary",Vc=Symbol("RouteTitle"),r_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function yo(t){return new r_(t)}function e_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function qD(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return e_(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!e_(o,t.slice(0,o.length),s)||!e_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function rf(t){return new Promise((n,e)=>{t.pipe(Si()).subscribe({next:i=>n(i),error:i=>e(i)})})}function $N(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!hi(t[e],n[e]))return!1;return!0}function hi(t,n){let e=t?o_(t):void 0,i=n?o_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!YD(t[r],n[r]))return!1;return!0}function o_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function YD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function WN(t){return t.length>0?t[t.length-1]:null}function wo(t){return Ms(t)?t:ji(t)?tt(Promise.resolve(t)):Q(t)}function ZD(t){return Ms(t)?rf(t):Promise.resolve(t)}var GN={exact:XD,subset:JD},QD={exact:qN,subset:YN,ignored:()=>!0},KD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},a_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function VD(t,n,e){return GN[e.paths](t.root,n.root,e.matrixParams)&&QD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function qN(t,n){return hi(t,n)}function XD(t,n,e){if(!bo(t.segments,n.segments)||!ef(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!XD(t.children[i],n.children[i],e))return!1;return!0}function YN(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>YD(t[e],n[e]))}function JD(t,n,e){return eE(t,n,n.segments,e)}function eE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!bo(r,e)||n.hasChildren()||!ef(r,e,i))}else if(t.segments.length===e.length){if(!bo(t.segments,e)||!ef(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!JD(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!bo(t.segments,r)||!ef(t.segments,r,i)||!t.children[he]?!1:eE(t.children[he],n,o,i)}}function ef(t,n,e){return n.every((i,r)=>QD[e](t[r].parameters,i.parameters))}var gn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new je([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=yo(this.queryParams),this._queryParamMap}toString(){return KN.serialize(this)}},je=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tf(this)}},_r=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=yo(this.parameters),this._parameterMap}toString(){return nE(this)}};function ZN(t,n){return bo(t,n)&&t.every((e,i)=>hi(e.parameters,n[i].parameters))}function bo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function QN(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===he&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==he&&(e=e.concat(n(r,i)))}),e}var Na=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new br,providedIn:"root"})}return t})(),br=class{parse(n){let e=new c_(n);return new gn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Ic(n.root,!0)}`,i=eP(n.queryParams),r=typeof n.fragment=="string"?`#${XN(n.fragment)}`:"";return`${e}${i}${r}`}},KN=new br;function tf(t){return t.segments.map(n=>nE(n)).join("/")}function Ic(t,n){if(!t.hasChildren())return tf(t);if(n){let e=t.children[he]?Ic(t.children[he],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==he&&i.push(`${r}:${Ic(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=QN(t,(i,r)=>r===he?[Ic(t.children[he],!1)]:[`${r}:${Ic(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[he]!=null?`${tf(t)}/${e[0]}`:`${tf(t)}/(${e.join("//")})`}}function tE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xu(t){return tE(t).replace(/%3B/gi,";")}function XN(t){return encodeURI(t)}function s_(t){return tE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nf(t){return decodeURIComponent(t)}function UD(t){return nf(t.replace(/\+/g,"%20"))}function nE(t){return`${s_(t.path)}${JN(t.parameters)}`}function JN(t){return Object.entries(t).map(([n,e])=>`;${s_(n)}=${s_(e)}`).join("")}function eP(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Xu(e)}=${Xu(r)}`).join("&"):`${Xu(e)}=${Xu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var tP=/^[^\/()?;#]+/;function t_(t){let n=t.match(tP);return n?n[0]:""}var nP=/^[^\/()?;=#]+/;function iP(t){let n=t.match(nP);return n?n[0]:""}var rP=/^[^=?&#]+/;function oP(t){let n=t.match(rP);return n?n[0]:""}var aP=/^[^&#]+/;function sP(t){let n=t.match(aP);return n?n[0]:""}var c_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new T(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[he]=new je(e,i)),r}parseSegment(){let n=t_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(n),new _r(nf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=iP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=t_(this.remaining);r&&(i=r,this.capture(i))}n[nf(e)]=nf(i)}parseQueryParam(n){let e=oP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=sP(this.remaining);a&&(i=a,this.capture(i))}let r=UD(e),o=UD(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=t_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new T(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=he);let s=this.parseChildren(e+1);i[a??he]=Object.keys(s).length===1&&s[he]?s[he]:new je([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new T(4011,!1)}};function iE(t){return t.segments.length>0?new je([],{[he]:t}):t}function rE(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=rE(r);if(i===he&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new je(t.segments,n);return cP(e)}function cP(t){if(t.numberOfChildren===1&&t.children[he]){let n=t.children[he];return new je(t.segments.concat(n.segments),n.children)}return t}function yr(t){return t instanceof gn}function oE(t,n,e=null,i=null,r=new br){let o=aE(t);return sE(o,n,e,i,r)}function aE(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new je(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=iE(i);return n??r}function sE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return n_(o,o,o,e,i,r);let a=lP(n);if(a.toRoot())return n_(o,o,new je([],{}),e,i,r);let s=dP(a,o,t),c=s.processChildren?kc(s.segmentGroup,s.index,a.commands):lE(s.segmentGroup,s.index,a.commands);return n_(o,s.segmentGroup,c,e,i,r)}function of(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Rc(t){return typeof t=="object"&&t!=null&&t.outlets}function HD(t,n,e){t||="\u0275";let i=new gn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function n_(t,n,e,i,r,o){let a={};for(let[l,d]of Object.entries(i??{}))a[l]=Array.isArray(d)?d.map(f=>HD(l,f,o)):HD(l,d,o);let s;t===n?s=e:s=cE(t,n,e);let c=iE(rE(s));return new gn(c,a,r)}function cE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=cE(o,n,e)}),new je(t.segments,i)}var af=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&of(i[0]))throw new T(4003,!1);let r=i.find(Rc);if(r&&r!==WN(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function lP(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new af(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new af(e,n,i)}var Ia=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function dP(t,n,e){if(t.isAbsolute)return new Ia(n,!0,0);if(!e)return new Ia(n,!1,NaN);if(e.parent===null)return new Ia(e,!0,0);let i=of(t.commands[0])?0:1,r=e.segments.length-1+i;return uP(e,r,t.numberOfDoubleDots)}function uP(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new Ia(i,!1,r-o)}function fP(t){return Rc(t[0])?t[0].outlets:{[he]:t}}function lE(t,n,e){if(t??=new je([],{}),t.segments.length===0&&t.hasChildren())return kc(t,n,e);let i=mP(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new je(t.segments.slice(0,i.pathIndex),{});return o.children[he]=new je(t.segments.slice(i.pathIndex),t.children),kc(o,0,r)}else return i.match&&r.length===0?new je(t.segments,{}):i.match&&!t.hasChildren()?l_(t,n,e):i.match?kc(t,0,r):l_(t,n,e)}function kc(t,n,e){if(e.length===0)return new je(t.segments,{});{let i=fP(e),r={};if(Object.keys(i).some(o=>o!==he)&&t.children[he]&&t.numberOfChildren===1&&t.children[he].segments.length===0){let o=kc(t.children[he],n,e);return new je(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=lE(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new je(t.segments,r)}}function mP(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Rc(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!$D(c,l,a))return o;i+=2}else{if(!$D(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function l_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Rc(o)){let c=hP(o.outlets);return new je(i,c)}if(r===0&&of(e[0])){let c=t.segments[n];i.push(new _r(c.path,zD(e[0]))),r++;continue}let a=Rc(o)?o.outlets[he]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&of(s)?(i.push(new _r(a,zD(s))),r+=2):(i.push(new _r(a,{})),r++)}return new je(i,{})}function hP(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=l_(new je([],{}),0,i))}),n}function zD(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function $D(t,n,e){return t==e.path&&hi(n,e.parameters)}var Tc="imperative",Rt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Rt||{}),vn=class{id;url;constructor(n,e){this.id=n,this.url=e}},xo=class extends vn{type=Rt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pi=class extends vn{urlAfterRedirects;type=Rt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},$t=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})($t||{}),Oc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Oc||{}),Mn=class extends vn{reason;code;type=Rt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function dE(t){return t instanceof Mn&&(t.code===$t.Redirect||t.code===$t.SupersededByNewNavigation)}var qi=class extends vn{reason;code;type=Rt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Co=class extends vn{error;target;type=Rt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Nc=class extends vn{urlAfterRedirects;state;type=Rt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sf=class extends vn{urlAfterRedirects;state;type=Rt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cf=class extends vn{urlAfterRedirects;state;shouldActivate;type=Rt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},lf=class extends vn{urlAfterRedirects;state;type=Rt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},df=class extends vn{urlAfterRedirects;state;type=Rt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},uf=class{route;type=Rt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ff=class{route;type=Rt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mf=class{snapshot;type=Rt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hf=class{snapshot;type=Rt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pf=class{snapshot;type=Rt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gf=class{snapshot;type=Rt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ka=class{},Pc=class{},Ta=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function pP(t){return!(t instanceof ka)&&!(t instanceof Ta)&&!(t instanceof Pc)}var vf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Pa(this.rootInjector)}},Pa=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new vf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(G(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_f=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=d_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=d_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=u_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return u_(n,this._root).map(e=>e.value)}};function d_(t,n){if(t===n.value)return n;for(let e of n.children){let i=d_(t,e);if(i)return i}return null}function u_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=u_(t,e);if(i.length)return i.unshift(n),i}return[]}var pn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Sa(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Fc=class extends _f{snapshot;constructor(n,e){super(n),this.snapshot=e,y_(this,n)}toString(){return this.snapshot.toString()}};function uE(t,n){let e=gP(t,n),i=new pt([new _r("",{})]),r=new pt({}),o=new pt({}),a=new pt({}),s=new pt(""),c=new Vt(i,r,a,s,o,he,t,e.root);return c.snapshot=e.root,new Fc(new pn(c,[]),e)}function gP(t,n){let e={},i={},r={},a=new Aa([],e,r,"",i,he,t,null,{},n);return new Lc("",new pn(a,[]))}var Vt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ee(l=>l[Vc]))??Q(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ee(n=>yo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ee(n=>yo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function b_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&mE(r)&&(i.resolve[Vc]=r.title),i}var Aa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Vc]}constructor(n,e,i,r,o,a,s,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=yo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=yo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Lc=class extends _f{url;constructor(n,e){super(e),this.url=n,y_(this,e)}toString(){return fE(this._root)}};function y_(t,n){n.value._routerState=t,n.children.forEach(e=>y_(t,e))}function fE(t){let n=t.children.length>0?` { ${t.children.map(fE).join(", ")} } `:"";return`${t.value}${n}`}function i_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,hi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),hi(n.params,e.params)||t.paramsSubject.next(e.params),$N(n.url,e.url)||t.urlSubject.next(e.url),hi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function f_(t,n){let e=hi(t.params,n.params)&&ZN(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||f_(t.parent,n.parent))}function mE(t){return typeof t.title=="string"||t.title===null}var hE=new D(""),Uc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=he;activateEvents=new Y;deactivateEvents=new Y;attachEvents=new Y;detachEvents=new Y;routerOutletData=fe();parentContexts=u(Pa);location=u(Bt);changeDetector=u(Qe);inputBinder=u(Cf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new m_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Se]})}return t})(),m_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Vt?this.route:n===Pa?this.childContexts:n===hE?this.outletData:this.parent.get(n,e)}},Cf=new D("");var x_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[Uc],encapsulation:2})}return t})();function C_(t){let n=t.children&&t.children.map(C_),e=n?z(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==he&&(e.component=x_),e}function vP(t,n,e){let i=Bc(t,n._root,e?e._root:void 0);return new Fc(i,n)}function Bc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=_P(t,n,e);return new pn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Bc(t,s)),a}}let i=bP(n.value),r=n.children.map(o=>Bc(t,o));return new pn(i,r)}}function _P(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Bc(t,i,r);return Bc(t,i)})}function bP(t){return new Vt(new pt(t.url),new pt(t.params),new pt(t.queryParams),new pt(t.fragment),new pt(t.data),t.outlet,t.component,t)}var Ra=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},pE="ngNavigationCancelingError";function bf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=yr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=gE(!1,$t.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function gE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[pE]=!0,e.cancellationCode=n,e}function yP(t){return vE(t)&&yr(t.url)}function vE(t){return!!t&&t[pE]}var h_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),i_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Sa(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Sa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Sa(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Sa(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new gf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new hf(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(i_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),i_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},yf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ma=class{component;route;constructor(n,e){this.component=n,this.route=e}};function xP(t,n,e){let i=t._root,r=n?n._root:null;return Mc(i,r,e,[i.value])}function CP(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Fa(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!fp(t)?t:n.get(t):i}function Mc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Sa(n);return t.children.forEach(a=>{wP(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Ac(s,e.getContext(a),r)),r}function wP(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=DP(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new yf(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Mc(t,n,s?s.children:null,i,r):Mc(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ma(s.outlet.component,a))}else a&&Ac(n,s,r),r.canActivateChecks.push(new yf(i)),o.component?Mc(t,null,s?s.children:null,i,r):Mc(t,null,e,i,r);return r}function DP(t,n,e){if(typeof e=="function")return ut(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!bo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!bo(t.url,n.url)||!hi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!f_(t,n)||!hi(t.queryParams,n.queryParams);default:return!f_(t,n)}}function Ac(t,n,e){let i=Sa(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Ac(a,n.children.getContext(o),e):Ac(a,null,e):Ac(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ma(n.outlet.component,r)):e.canDeactivateChecks.push(new Ma(null,r)):e.canDeactivateChecks.push(new Ma(null,r))}function Hc(t){return typeof t=="function"}function EP(t){return typeof t=="boolean"}function SP(t){return t&&Hc(t.canLoad)}function IP(t){return t&&Hc(t.canActivate)}function MP(t){return t&&Hc(t.canActivateChild)}function kP(t){return t&&Hc(t.canDeactivate)}function TP(t){return t&&Hc(t.canMatch)}function _E(t){return t instanceof $r||t?.name==="EmptyError"}var Ju=Symbol("INITIAL_VALUE");function Oa(){return vt(t=>ks(t.map(n=>n.pipe(gt(1),Nt(Ju)))).pipe(ee(n=>{for(let e of n)if(e!==!0){if(e===Ju)return Ju;if(e===!1||AP(e))return e}return!0}),Oe(n=>n!==Ju),gt(1)))}function AP(t){return yr(t)||t instanceof Ra}function bE(t){return t.aborted?Q(void 0).pipe(gt(1)):new re(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function yE(t){return Le(bE(t))}function RP(t){return Ot(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Q(z(y({},n),{guardsResult:!0})):OP(o,e,i).pipe(Ot(a=>a&&EP(a)?NP(e,r,t):Q(a)),ee(a=>z(y({},n),{guardsResult:a})))})}function OP(t,n,e){return tt(t).pipe(Ot(i=>jP(i.component,i.route,e,n)),Si(i=>i!==!0,!0))}function NP(t,n,e){return tt(n).pipe(Qo(i=>ri(FP(i.route.parent,e),PP(i.route,e),BP(t,i.path),LP(t,i.route))),Si(i=>i!==!0,!0))}function PP(t,n){return t!==null&&n&&n(new pf(t)),Q(!0)}function FP(t,n){return t!==null&&n&&n(new mf(t)),Q(!0)}function LP(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let i=e.map(r=>Wr(()=>{let o=n._environmentInjector,a=Fa(r,o),s=IP(a)?a.canActivate(n,t):ut(o,()=>a(n,t));return wo(s).pipe(Si())}));return Q(i).pipe(Oa())}function BP(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>CP(o)).filter(o=>o!==null).map(o=>Wr(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=Fa(s,c),d=MP(l)?l.canActivateChild(e,t):ut(c,()=>l(e,t));return wo(d).pipe(Si())});return Q(a).pipe(Oa())}));return Q(r).pipe(Oa())}function jP(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Fa(a,s),l=kP(c)?c.canDeactivate(t,n,e,i):ut(s,()=>c(t,n,e,i));return wo(l).pipe(Si())});return Q(o).pipe(Oa())}function VP(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let c=Fa(s,t),l=SP(c)?c.canLoad(n,e):ut(t,()=>c(n,e)),d=wo(l);return r?d.pipe(yE(r)):d});return Q(a).pipe(Oa(),xE(i))}function xE(t){return $h(_t(n=>{if(typeof n!="boolean")throw bf(t,n)}),ee(n=>n===!0))}function UP(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(c=>{let l=Fa(c,t),d=TP(l)?l.canMatch(n,e,r):ut(t,()=>l(n,e,r));return wo(d).pipe(yE(o))});return Q(s).pipe(Oa(),xE(i))}var Gi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},jc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function HP(t){throw new T(4e3,!1)}function zP(t){throw gE(!1,$t.GuardRejected)}var p_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[he])throw HP(`${n.redirectTo}`);r=r.children[he]}}async applyRedirectCommands(n,e,i,r,o){let a=await $P(e,r,o);if(a instanceof gn)throw new jc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new jc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new gn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new je(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function $P(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return rf(wo(ut(e,()=>i(n))))}function WP(t,n){return t.providers&&!t._injector&&(t._injector=hc(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Gn(t){return t.outlet||he}function GP(t,n){let e=t.filter(i=>Gn(i)===n);return e.push(...t.filter(i=>Gn(i)!==n)),e}var g_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function CE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function qP(t,n,e,i,r,o,a){let s=wE(t,n,e);if(!s.matched)return Q(s);let c=CE(o(s));return i=WP(n,i),UP(i,n,e,r,c,a).pipe(ee(l=>l===!0?s:y({},g_)))}function wE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},g_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||qD)(e,t,n);if(!r)return y({},g_);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function WD(t,n,e,i,r){return e.length>0&&QP(t,e,i,r)?{segmentGroup:new je(n,ZP(i,new je(e,t.children))),slicedSegments:[]}:e.length===0&&KP(t,e,i)?{segmentGroup:new je(t.segments,YP(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new je(t.segments,t.children),slicedSegments:e}}function YP(t,n,e,i){let r={};for(let o of e)if(wf(t,n,o)&&!i[Gn(o)]){let a=new je([],{});r[Gn(o)]=a}return y(y({},i),r)}function ZP(t,n){let e={};e[he]=n;for(let i of t)if(i.path===""&&Gn(i)!==he){let r=new je([],{});e[Gn(i)]=r}return e}function QP(t,n,e,i){return e.some(r=>!wf(t,n,r)||!(Gn(r)!==he)?!1:!(i!==void 0&&Gn(r)===i))}function KP(t,n,e){return e.some(i=>wf(t,n,i))}function wf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function XP(t,n,e){return n.length===0&&!t.children[e]}var v_=class{};async function JP(t,n,e,i,r,o,a="emptyOnly",s){return new __(t,n,e,i,r,a,o,s).recognize()}var eF=31,__=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new p_(this.urlSerializer,this.urlTree)}noMatchError(n){return new T(4002,`'${n.segmentGroup}'`)}async recognize(){let n=WD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new pn(i,e),o=new Lc("",r),a=oE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Aa([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),he,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,he,e),rootSnapshot:e}}catch(i){if(i instanceof jc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Gi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof pn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],d=GP(e,c),f=await this.processSegmentGroup(n,d,l,c,r);a.push(...f)}let s=DE(a);return tF(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof Gi||_E(l))continue;throw l}if(XP(i,r,o))return new v_;throw new Gi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(Gn(i)!==a&&(a===he||!wf(r,o,i)))throw new Gi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new Gi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:v}=wE(e,r,o);if(!c)throw new Gi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>eF&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,CE(h),n),k=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,k.concat(v),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Aa(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,iF(e),Gn(e),e.component??e._loadedComponent??null,e,rF(e),n),s=b_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ke=>this.createSnapshot(n,i,ke.consumedSegments,ke.parameters,a),c=await rf(qP(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new Gi(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:v,remainingSegments:h}=c,b=this.createSnapshot(n,i,v,f,a),{segmentGroup:k,slicedSegments:R}=WD(e,v,h,l,o);if(R.length===0&&k.hasChildren()){let ke=await this.processChildren(d,l,k,b);return new pn(b,ke)}if(l.length===0&&R.length===0)return new pn(b,[]);let P=Gn(i)===o,me=await this.processSegment(d,l,k,R,P?he:o,!0,b);return new pn(b,me instanceof pn?[me]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await rf(VP(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw zP(e)}return{routes:[],injector:n}}};function tF(t){t.sort((n,e)=>n.value.outlet===he?-1:e.value.outlet===he?1:n.value.outlet.localeCompare(e.value.outlet))}function nF(t){let n=t.value.routeConfig;return n&&n.path===""}function DE(t){let n=[],e=new Set;for(let i of t){if(!nF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=DE(i.children);n.push(new pn(i.value,r))}return n.filter(i=>!e.has(i))}function iF(t){return t.data||{}}function rF(t){return t.resolve||{}}function oF(t,n,e,i,r,o,a){return Ot(async s=>{let{state:c,tree:l}=await JP(t,n,e,i,s.extractedUrl,r,o,a);return z(y({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function aF(t){return Ot(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Q(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of EE(s))o.add(c);let a=0;return tt(o).pipe(Qo(s=>r.has(s)?sF(s,e,t):(s.data=b_(s,s.parent,t).resolve,Q(void 0))),_t(()=>a++),hd(1),Ot(s=>a===o.size?Q(n):at))})}function EE(t){let n=t.children.map(e=>EE(e)).flat();return[t,...n]}function sF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!mE(i)&&(r[Vc]=i.title),Wr(()=>(t.data=b_(t,t.parent,e).resolve,cF(r,t,n).pipe(ee(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function cF(t,n,e){let i=o_(t);if(i.length===0)return Q({});let r={};return tt(i).pipe(Ot(o=>lF(t[o],n,e).pipe(Si(),_t(a=>{if(a instanceof Ra)throw bf(new br,a);r[o]=a}))),hd(1),ee(()=>r),qr(o=>_E(o)?at:Is(o)))}function lF(t,n,e){let i=n._environmentInjector,r=Fa(t,i),o=r.resolve?r.resolve(n,e):ut(i,()=>r(n,e));return wo(o)}function GD(t){return vt(n=>{let e=t(n);return e?tt(e).pipe(ee(()=>n)):Q(n)})}var w_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===he);return i}getResolvedTitleForRoute(e){return e.data[Vc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(SE),providedIn:"root"})}return t})(),SE=(()=>{class t extends w_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(G(BD))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),La=new D("",{factory:()=>({})}),zc=new D(""),IE=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(kv);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await ZD(ut(e,()=>i.loadComponent())),a=await TE(kE(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await ME(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function ME(t,n,e,i){let r=await ZD(ut(e,()=>t.loadChildren())),o=await TE(kE(r)),a;o instanceof Au||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(zc,[],{optional:!0,self:!0}).flat()),{routes:c.map(C_),injector:s,factory:d}}function dF(t){return t&&typeof t=="object"&&"default"in t}function kE(t){return dF(t)?t.default:t}async function TE(t){return t}var Df=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(uF),providedIn:"root"})}return t})(),uF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),AE=new D("");var fF=()=>{},RE=new D(""),OE=(()=>{class t{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new A;transitionAbortWithErrorSubject=new A;configLoader=u(IE);environmentInjector=u(Be);destroyRef=u(Lt);urlSerializer=u(Na);rootContexts=u(Pa);location=u(gr);inputBindingEnabled=u(Cf,{optional:!0})!==null;titleStrategy=u(w_);options=u(La,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Df);createViewTransition=u(AE,{optional:!0});navigationErrorHandler=u(RE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new uf(r)),i=r=>this.events.next(new ff(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Z(()=>{this.transitions?.next(z(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pt(null),this.transitions.pipe(Oe(i=>i!==null),vt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Q(i).pipe(vt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",$t.SupersededByNewNavigation),at;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?z(y({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new qi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Oc.IgnoredSameUrlNavigation)),s.resolve(!1),at;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(vt(f=>(this.events.next(new xo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?at:Promise.resolve(f))),oF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(v=>(v.finalUrl=f.urlAfterRedirects,v)),this.events.next(new Pc)}),vt(f=>tt(i.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(ee(()=>f))),_t(()=>{let f=new Nc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:v,source:h,restoredState:b,extras:k}=s,R=new xo(f,this.urlSerializer.serialize(v),h,b);this.events.next(R);let P=uE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=z(y({},s),{targetSnapshot:P,urlAfterRedirects:v,extras:z(y({},k),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(me=>(me.finalUrl=v,me)),Q(i)}else return this.events.next(new qi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Oc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),at}),ee(s=>{let c=new sf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=z(y({},s),{guards:xP(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),RP(s=>this.events.next(s)),vt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw bf(this.urlSerializer,s.guardsResult);let c=new cf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return at;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",$t.GuardRejected),at;if(s.guards.canActivateChecks.length===0)return Q(s);let l=new lf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return at;let d=!1;return Q(s).pipe(aF(this.paramsInheritanceStrategy),_t({next:()=>{d=!0;let f=new df(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(s,"",$t.NoDataFromResolver)}}))}),GD(s=>{let c=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let v=d._environmentInjector;f.push(this.configLoader.loadComponent(v,d.routeConfig).then(h=>{d.component=h}))}for(let v of d.children)f.push(...c(v));return f},l=c(s.targetSnapshot.root);return l.length===0?Q(s):tt(Promise.all(l).then(()=>s))}),GD(()=>this.afterPreactivation()),vt(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?tt(l).pipe(ee(()=>i)):Q(i)}),gt(1),vt(s=>{let c=vP(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=z(y({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new ka);let l=i.beforeActivateHandler.deferredHandle;return l?tt(l.then(()=>s)):Q(s)}),_t(s=>{new h_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=fF,c)),this.lastSuccessfulNavigation.set(Z(this.currentNavigation)),this.events.next(new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(bE(o.signal).pipe(Oe(()=>!r&&!i.targetRouterState),_t(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",$t.Aborted)}))),_t({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),Yr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",$t.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),qr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),at;if(vE(s))this.events.next(new Mn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),yP(s)?this.events.next(new Ta(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Co(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=ut(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Ra){let{message:d,cancellationCode:f}=bf(this.urlSerializer,l);this.events.next(new Mn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,f)),this.events.next(new Ta(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return at}))}))}cancelNavigationTransition(e,i,r){let o=new Mn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Z(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mF(t){return t!==Tc}var NE=new D("");var PE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(hF),providedIn:"root"})}return t})(),xf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},hF=(()=>{class t extends xf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ef=(()=>{class t{urlSerializer=u(Na);options=u(La,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(gr);urlHandlingStrategy=u(Df);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new gn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof gn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=uE(null,u(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(pF),providedIn:"root"})}return t})(),pF=(()=>{class t extends Ef{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof xo?this.updateStateMemento():e instanceof qi?this.commitTransition(i):e instanceof Nc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ka?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Mn&&!dE(e)?this.restoreHistory(i):e instanceof Co?this.restoreHistory(i,!0):e instanceof pi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=y(y({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function D_(t,n){t.events.pipe(Oe(e=>e instanceof pi||e instanceof Mn||e instanceof Co||e instanceof qi),ee(e=>e instanceof pi||e instanceof qi?0:(e instanceof Mn?e.code===$t.Redirect||e.code===$t.SupersededByNewNavigation:!1)?2:1),Oe(e=>e!==2),gt(1)).subscribe(()=>{n()})}var Ba=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Ru);stateManager=u(Ef);options=u(La,{optional:!0})||{};pendingTasks=u(Oi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(OE);urlSerializer=u(Na);location=u(gr);urlHandlingStrategy=u(Df);injector=u(Be);_events=new A;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(PE);injectorCleanup=u(NE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(zc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Cf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _e;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Z(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Mn&&i.code!==$t.Redirect&&i.code!==$t.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof pi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ta){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||mF(r.source)},a);this.scheduleNavigation(s,Tc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}pP(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Tc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=z(y({},o),{browserUrl:e})),r){let l=y({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(l=>{this.disposed||this.injector.get(mn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Z(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(C_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let v=r?r.snapshot:this.routerState.snapshot.root;f=aE(v)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return sE(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=yr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Tc,null,i)}navigate(e,i={skipLocationChange:!1}){return gF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Mi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},KD):i===!1?r=y({},a_):r=y(y({},a_),i),yr(e))return VD(this.currentUrlTree,e,r);let o=this.parseUrl(e);return VD(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((f,v)=>{s=f,c=v});let d=this.pendingTasks.add();return D_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new T(4008,!1)}var bF=(()=>{class t{router=u(Ba);stateManager=u(Ef);fragment=L("");queryParams=L({});path=L("");serializer=u(Na);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof pi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new gn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ja=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Ui("href"),{optional:!0});reactiveHref=mi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Z(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Z(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Z(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Z(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Z(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return Z(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Z(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Z(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Z(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Z(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Z(this._replaceUrl)}_replaceUrl=L(!1);isAnchorElement;onChanges=new A;applicationErrorHandler=u(mn);options=u(La,{optional:!0});reactiveRouterState=u(bF);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(yr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=W(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:yr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Z(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(j(Ba),j(Vt),sc("tabindex"),j(He),j(B),j(wa))};static \u0275dir=N({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&q("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),iv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ie],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ie],replaceUrl:[2,"replaceUrl","replaceUrl",ie],routerLink:"routerLink"},features:[Se]})}return t})();var yF=new D("");function E_(t,...n){return ar([{provide:zc,multi:!0,useValue:t},[],{provide:Vt,useFactory:xF},{provide:Ou,multi:!0,useFactory:CF},n.map(e=>e.\u0275providers)])}function xF(){return u(Ba).routerState.root}function CF(){let t=u(K);return n=>{let e=t.get(hn);if(n!==e.components[0])return;let i=t.get(Ba),r=t.get(wF);t.get(DF)===1&&i.initialNavigation(),t.get(EF,null,{optional:!0})?.setUpPreloading(),t.get(yF,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var wF=new D("",{factory:()=>new A}),DF=new D("",{factory:()=>1});var EF=new D("");var Va=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();teams=L([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(G(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var IF=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(J)}),MF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function LE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?MF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var cn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=L("ltr");change=new Y;constructor(){let e=u(IF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(LE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var We=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({})}return t})();var kF=["*"];var TF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],AF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],RF=new D("MAT_CARD_CONFIG"),BE=(()=>{class t{appearance;constructor(){let e=u(RF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&V("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:kF,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),jE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var VE=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),UE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:AF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Re(TF),$(0),ue(1,"div",0),$(2,1),ge(),$(3,2))},encapsulation:2,changeDetection:0})}return t})();function $c(t){return t.buttons===0||t.detail===0}function Wc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var S_;function HE(){if(S_==null){let t=typeof document<"u"?document.head:null;S_=!!(t&&(t.createShadowRoot||t.attachShadow))}return S_}function I_(t){if(HE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Sf(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Wt(t){return t.composedPath?t.composedPath()[0]:t.target}var M_;try{M_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{M_=!1}var Ie=(()=>{class t{_platformId=u(ho);isBrowser=this._platformId?xD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||M_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gc;function zE(){if(Gc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Gc=!0}))}finally{Gc=Gc||!1}return Gc}function Ua(t){return zE()?t:!!t.capture}function gi(t,n=0){return $E(t)?Number(t):arguments.length===2?n:0}function $E(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function nn(t){return t instanceof B?t.nativeElement:t}var WE=new D("cdk-input-modality-detector-options"),GE={ignoreKeys:[18,17,224,91,16]},qE=650,k_={passive:!0,capture:!0},YE=(()=>{class t{_platform=u(Ie);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Wt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<qE||(this._modality.next($c(e)?"keyboard":"mouse"),this._mostRecentTarget=Wt(e))};_onTouchstart=e=>{if(Wc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Wt(e)};constructor(){let e=u(F),i=u(J),r=u(WE,{optional:!0});if(this._options=y(y({},GE),r),this.modalityDetected=this._modality.pipe(Zr(1)),this.modalityChanged=this.modalityDetected.pipe(md()),this._platform.isBrowser){let o=u(bt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,k_),o.listen(i,"mousedown",this._onMousedown,k_),o.listen(i,"touchstart",this._onTouchstart,k_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(qc||{}),ZE=new D("cdk-focus-monitor-default-options"),If=Ua({passive:!0,capture:!0}),Do=(()=>{class t{_ngZone=u(F);_platform=u(Ie);_inputModalityDetector=u(YE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(J);_stopInputModalityDetector=new A;constructor(){let e=u(ZE,{optional:!0});this._detectionMode=e?.detectionMode||qc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Wt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=nn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=I_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new A,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=nn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=nn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===qc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===qc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?qE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Wt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,If),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,If)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,If),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,If),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),T_=(()=>{class t{_elementRef=u(B);_focusMonitor=u(Do);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Y;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Mf=new WeakMap,yt=(()=>{class t{_appRef;_injector=u(K);_environmentInjector=u(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(hn),r=Mf.get(i);r||(r={loaders:new Set,refs:[]},Mf.set(i,r),i.onDestroy(()=>{Mf.get(i)?.refs.forEach(o=>o.destroy()),Mf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(zu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Tf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),kf;function OF(){if(kf===void 0&&(kf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(kf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return kf}function Eo(t){return OF()?.createHTML(t)||t}function QE(t,n,e){let i=e.sanitize(Et.HTML,n);t.innerHTML=Eo(i||"")}function Yi(t){return Array.isArray(t)?t:[t]}var KE=new Set,So,Af=(()=>{class t{_platform=u(Ie);_nonce=u(po,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):PF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&NF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function NF(t,n){if(!KE.has(t))try{So||(So=document.createElement("style"),n&&So.setAttribute("nonce",n),So.setAttribute("type","text/css"),document.head.appendChild(So)),So.sheet&&(So.sheet.insertRule(`@media ${t} {body{ }}`,0),KE.add(t))}catch(e){console.error(e)}}function PF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Io=(()=>{class t{_mediaMatcher=u(Af);_zone=u(F);_queries=new Map;_destroySubject=new A;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return XE(Yi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=XE(Yi(e)).map(a=>this._registerQuery(a).observable),o=ks(r);return o=ri(o.pipe(gt(1)),o.pipe(Zr(1),Nn(0))),o.pipe(ee(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new re(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Nt(i),ee(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XE(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function FF(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var JE=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),LF=(()=>{class t{_mutationObserverFactory=u(JE);_observedElements=new Map;_ngZone=u(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=nn(e);return new re(r=>{let a=this._observeElement(i).pipe(ee(s=>s.filter(c=>!FF(c))),Oe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new A,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rf=(()=>{class t{_contentObserver=u(LF);_elementRef=u(B);event=new Y;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=gi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Nn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ie],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Of=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({providers:[JE]})}return t})();var Pf=(()=>{class t{_platform=u(Ie);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return jF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=BF(qF(e));if(i&&(eS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=eS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!WF(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return GF(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BF(t){try{return t.frameElement}catch{return null}}function jF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function VF(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function UF(t){return zF(t)&&t.type=="hidden"}function HF(t){return $F(t)&&t.hasAttribute("href")}function zF(t){return t.nodeName.toLowerCase()=="input"}function $F(t){return t.nodeName.toLowerCase()=="a"}function tS(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function eS(t){if(!tS(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function WF(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function GF(t){return UF(t)?!1:VF(t)||HF(t)||t.hasAttribute("contenteditable")||tS(t)}function qF(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Nf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ct(n,{injector:this._injector}):setTimeout(n)}},A_=(()=>{class t{_checker=u(Pf);_ngZone=u(F);_document=u(J);_injector=u(K);constructor(){u(yt).load(Tf)}create(e,i=!1){return new Nf(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nS=new D("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),iS=new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),YF=0,R_=(()=>{class t{_ngZone=u(F);_defaultOptions=u(iS,{optional:!0});_liveElement;_document=u(J);_sanitizer=u(Sc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(nS,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:QE(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${YF++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ZF=200,Ff=class{_letterKeyStream=new A;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new A;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:ZF;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),Nn(n),Oe(()=>this._pressedLetters.length>0),ee(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function kn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ha=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=_e.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Vn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Bi(n)&&(this._effectRef=en(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new A;change=new A;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ff(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||kn(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Bi(this._items)?this._items():this._items instanceof Vn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Yc=class extends Ha{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Zc=class extends Ha{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var N_={},mt=class t{_appId=u(mr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),N_.hasOwnProperty(n)||(N_[n]=0),`${n}${e?t._infix+"-":""}${N_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var aS=" ";function P_(t,n,e){let i=sS(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(aS)))}function Lf(t,n,e){let i=sS(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(aS)):t.removeAttribute(n)}function sS(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var qn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(qn||{}),Bf,Mo;function jf(){if(Mo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Mo=!1,Mo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Mo=!0;else{let t=Element.prototype.scrollTo;t?Mo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Mo=!1}}return Mo}function za(){if(typeof document!="object"||!document)return qn.NORMAL;if(Bf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Bf=qn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Bf=t.scrollLeft===0?qn.NEGATED:qn.INVERTED),t.remove()}return Bf}function F_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var $a,cS=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function L_(){if($a)return $a;if(typeof document!="object"||!document)return $a=new Set(cS),$a;let t=document.createElement("input");return $a=new Set(cS.filter(n=>(t.setAttribute("type",n),t.type===n))),$a}var Vf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var QF=new D("MATERIAL_ANIMATIONS"),lS=null;function KF(){return u(QF,{optional:!0})?.animationsDisabled||u(cc,{optional:!0})==="NoopAnimations"?"di-disabled":(lS??=u(Af).matchMedia("(prefers-reduced-motion)").matches,lS?"reduced-motion":"enabled")}function Ke(){return KF()!=="enabled"}function ht(t){return t==null?"":typeof t=="string"?t:`${t}px`}function dt(t){return t!=null&&`${t}`!="false"}var Tn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Tn||{}),B_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Tn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},dS=Ua({passive:!0,capture:!0}),j_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,dS)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,dS)))}_delegateEventHandler=n=>{let e=Wt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Qc={enterDuration:225,exitDuration:150},XF=800,uS=Ua({passive:!0,capture:!0}),fS=["mousedown","touchstart"],mS=["mouseup","mouseleave","touchend","touchcancel"],JF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ko=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new j_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=nn(i)),o&&o.get(yt).load(JF)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},Qc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||eL(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),v=f.transitionProperty,h=f.transitionDuration,b=v==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,k=new B_(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",k.state=Tn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=k);let R=null;return!b&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let P=()=>{R&&(R.fallbackTimer=null),clearTimeout(ke),this._finishRippleTransition(k)},me=()=>this._destroyRipple(k),ke=setTimeout(me,l+100);d.addEventListener("transitionend",P),d.addEventListener("transitioncancel",me),R={onTransitionEnd:P,onTransitionCancel:me,fallbackTimer:ke}}),this._activeRipples.set(k,R),(b||!l)&&this._finishRippleTransition(k),k}fadeOutRipple(n){if(n.state===Tn.FADING_OUT||n.state===Tn.HIDDEN)return;let e=n.element,i=y(y({},Qc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Tn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=nn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,fS.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{mS.forEach(e=>{this._triggerElement.addEventListener(e,this,uS)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Tn.FADING_IN?this._startFadeOutTransition(n):n.state===Tn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Tn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Tn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=$c(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+XF;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Wc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Tn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Tn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(fS.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(mS.forEach(e=>n.removeEventListener(e,this,uS)),this._pointerUpEventsRegistered=!1))}};function eL(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Wa=new D("mat-ripple-global-options"),To=(()=>{class t{_elementRef=u(B);_animationsDisabled=Ke();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(F),i=u(Ie),r=u(Wa,{optional:!0}),o=u(K);this._globalOptions=r||{},this._rippleRenderer=new ko(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var tL={capture:!0},nL=["focus","mousedown","mouseenter","touchstart"],V_="mat-ripple-loader-uninitialized",U_="mat-ripple-loader-class-name",hS="mat-ripple-loader-centered",Uf="mat-ripple-loader-disabled",pS=(()=>{class t{_document=u(J);_animationsDisabled=Ke();_globalRippleOptions=u(Wa,{optional:!0});_platform=u(Ie);_ngZone=u(F);_injector=u(K);_eventCleanups;_hosts=new Map;constructor(){let e=u(bt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>nL.map(i=>e.listen(this._document,i,this._onInteraction,tL)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(V_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(U_))&&e.setAttribute(U_,i.className||""),i.centered&&e.setAttribute(hS,""),i.disabled&&e.setAttribute(Uf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Uf,""):e.removeAttribute(Uf)}_onInteraction=e=>{let i=Wt(e);if(i instanceof HTMLElement){let r=i.closest(`[${V_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(U_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Qc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Qc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Uf),rippleConfig:{centered:e.hasAttribute(hS),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new ko(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(V_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var iL=["mat-icon-button",""],rL=["*"],oL=new D("MAT_BUTTON_CONFIG");function gS(t){return t==null?void 0:hr(t)}var Hf=(()=>{class t{_elementRef=u(B);_ngZone=u(F);_animationsDisabled=Ke();_config=u(oL,{optional:!0});_focusMonitor=u(Do);_cleanupClick;_renderer=u(He);_rippleLoader=u(pS);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(yt).load(vi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),At(r.color?"mat-"+r.color:""),V("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ie],disabled:[2,"disabled","disabled",ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],tabIndex:[2,"tabIndex","tabIndex",gS],_tabindex:[2,"tabindex","_tabindex",gS]}})}return t})(),Kc=(()=>{class t extends Hf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Te],attrs:iL,ngContentSelectors:rL,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(),Ae(0,"span",0),$(1),Ae(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ga=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[We]})}return t})();var aL=["matButton",""],_S=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],bS=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],sL=["mat-fab",""];var vS=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ao=(()=>{class t extends Hf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=cL(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?vS.get(this._appearance):null,o=vS.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Te],attrs:aL,ngContentSelectors:bS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(_S),Ae(0,"span",0),$(1),ue(2,"span",1),$(3,1),ge(),$(4,2),Ae(5,"span",2)(6,"span",3)),i&2&&V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function cL(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var yS=Ao,lL=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>H_}),H_={color:"accent"},xS=(()=>{class t extends Hf{_options=u(lL,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||H_,this.color=this._options.color||H_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&V("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ie]},exportAs:["matButton","matAnchor"],features:[Te],attrs:sL,ngContentSelectors:bS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(_S),Ae(0,"span",0),$(1),ue(2,"span",1),$(3,1),ge(),$(4,2),Ae(5,"span",2)(6,"span",3)),i&2&&V("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var z_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[Ga,We]})}return t})();var uL=t=>[t,"map"],fL=t=>[t,"convoy"],mL=t=>[t,"shop"],zf=class t{team=fe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(g(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),p()(),g(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),_(8," Map "),p()(),g(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),p(),_(13," Convoy "),p()(),g(14,"button",4)(15,"span",2),E(16,"img",6),_(17," Shop "),p()()()()),e&2&&(m(3),De(" ",i.team().teamName," "),m(2),M("routerLink",rt(6,uL,i.GetTeamNameWithoutSpaces())),m(4),M("disabled",!i.team().showConvoyLink)("routerLink",rt(8,fL,i.GetTeamNameWithoutSpaces())),m(5),M("disabled",!i.team().showShopLink)("routerLink",rt(10,mL,i.GetTeamNameWithoutSpaces())))},dependencies:[BE,UE,jE,VE,Ao,ja],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var CS="(max-width: 900px)",_i=class t{breakpointObserver=u(Io);isSmallWidth=L(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([CS]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[CS])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var $f=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"div",1),Ae(2,"div",2),ue(3,"div",3),_(4,"Loading..."),ge()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var bi=class t{DARK_MODE_CLASS="dark-mode";document=u(J);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=L(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=W(()=>this.themeMode()==="dark");constructor(){en(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var $_=t=>({width:t});function hL(t,n){t&1&&E(0,"loading-icon")}function pL(t,n){if(t&1&&(g(0,"div",7)(1,"p",17),_(2),p()()),t&2){let e=x();m(2),De(" ",e.teamListService.errorMessage()," ")}}function gL(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;M("team",e)}}function vL(t,n){t&1&&(g(0,"div",7)(1,"p",17),_(2," There are no teams available. "),p()())}function _L(t,n){if(t&1&&le(0,gL,1,1,"team-listing",14,Ye,!1,vL,3,0,"div",7),t&2){let e=x();de(e.teamListService.teamsList())}}var Wf=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(_i),this.themeService=u(bi),this.teamListService=u(Va),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(j(_i),j(bi),j(Va))};static \u0275cmp=I({type:t,selectors:[["home"]],decls:50,vars:15,consts:[[1,"decorativeTriangleTop"],[1,"decorativeTriangleBottom"],[1,"homeViewContainer"],[3,"ngClass"],[2,"width","450px","height","250px","background-color","#CEFC86","text-align","center"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0)(1,"div",1),g(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),_(6),p(),g(7,"button",5),q("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),_(8,"Toggle Theme"),p()(),g(9,"div",6),C(10,hL,1,0,"loading-icon")(11,pL,3,1,"div",7)(12,_L,3,1),p()(),g(13,"div",3)(14,"div",8)(15,"h1",9),_(16,"Information"),p(),g(17,"p"),_(18,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),p(),g(19,"h2",9),_(20,"Resources"),p(),g(21,"ul")(22,"li")(23,"a",10),_(24,"Reddit Emblem Maps Documentation"),p()(),g(25,"li")(26,"a",11),_(27,"API Github Repository"),p()(),g(28,"li")(29,"a",12),_(30,"Webapp Github Repository"),p()()(),g(31,"h2",9),_(32,"Example"),p(),g(33,"p"),_(34,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),p(),g(35,"ul")(36,"li")(37,"a",13),_(38,"Team Example Google Spreadsheet"),p()()(),E(39,"team-listing",14),p(),g(40,"div",8)(41,"h2",9),_(42,"Credits"),p(),g(43,"ul")(44,"li")(45,"a",15),_(46,'Website background texture "Az Subtle" by Anli'),p()(),g(47,"li")(48,"a",16),_(49,`"Mac's Minecraft" pixel font`),p()()()()()()),e&2&&(m(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),m(),M("ngClass",i.breakpointService.isScreenSmallWidth()?"logoRow":"logoColumn"),m(2),De(" This will be the logo! Screen width is <= 900px: ",i.breakpointService.isScreenSmallWidth()," "),m(3),M("ngStyle",rt(9,$_,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),m(),w(i.teamListService.isLoading()?10:i.teamListService.errorMessage().length>0?11:12),m(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),m(),M("ngStyle",rt(11,$_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),m(25),M("team",i.teamExample),m(),M("ngStyle",rt(13,$_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[zf,Hi,Bv,$f],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var bL=20,qa=(()=>{class t{_ngZone=u(F);_platform=u(Ie);_renderer=u(bt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new A;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=bL){return this._platform.isBrowser?new re(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(fd(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Oe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=nn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xr=(()=>{class t{elementRef=u(B);scrollDispatcher=u(qa);ngZone=u(F);dir=u(cn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new A;_renderer=u(He);_cleanupScroll;_elementScrolled=new A;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&za()!=qn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),za()==qn.INVERTED?e.left=e.right:za()==qn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;jf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&za()==qn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&za()==qn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),yL=20,Yn=(()=>{class t{_platform=u(Ie);_listeners;_viewportSize=null;_change=new A;_document=u(J);constructor(){let e=u(F),i=u(bt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=yL){return e>0?this._change.pipe(fd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({})}return t})(),W_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[We,Xc,We,Xc]})}return t})();var Zf=["*"],xL=["content"],CL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],wL=["mat-drawer","mat-drawer-content","*"];function DL(t,n){if(t&1){let e=an();g(0,"div",1),q("click",function(){It(e);let r=x();return Mt(r._onBackdropClicked())}),p()}if(t&2){let e=x();V("mat-drawer-shown",e._isShowingBackdrop())}}function EL(t,n){t&1&&(g(0,"mat-drawer-content"),$(1,2),p())}var SL=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],IL=["mat-sidenav","mat-sidenav-content","*"];function ML(t,n){if(t&1){let e=an();g(0,"div",1),q("click",function(){It(e);let r=x();return Mt(r._onBackdropClicked())}),p()}if(t&2){let e=x();V("mat-drawer-shown",e._isShowingBackdrop())}}function kL(t,n){t&1&&(g(0,"mat-sidenav-content"),$(1,2),p())}var TL=`.mat-drawer-container {
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
`;var AL=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Y_=new D("MAT_DRAWER_CONTAINER"),Gf=(()=>{class t extends xr{_platform=u(Ie);_changeDetectorRef=u(Qe);_container=u(q_);constructor(){let e=u(B),i=u(qa),r=u(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(lt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),V("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ne([{provide:xr,useExisting:t}]),Te],ngContentSelectors:Zf,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},encapsulation:2,changeDetection:0})}return t})(),G_=(()=>{class t{_elementRef=u(B);_focusTrapFactory=u(A_);_focusMonitor=u(Do);_platform=u(Ie);_ngZone=u(F);_renderer=u(He);_interactivityChecker=u(Pf);_doc=u(J);_container=u(Y_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=dt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=dt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(dt(e))}_opened=L(!1);_openedVia=null;_animationStarted=new A;_animationEnd=new A;openedChange=new Y(!0);_openedStream=this.openedChange.pipe(Oe(e=>e),ee(()=>{}));openedStart=this._animationStarted.pipe(Oe(()=>this.opened),Ko(void 0));_closedStream=this.openedChange.pipe(Oe(e=>!e),ee(()=>{}));closedStart=this._animationStarted.pipe(Oe(()=>!this.opened),Ko(void 0));_destroyed=new A;onPositionChanged=new Y;_content;_modeChanged=new A;_injector=u(K);_changeDetectorRef=u(Qe);constructor(){this.openedChange.pipe(Le(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!kn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ct(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(gt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ze(xL,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),lt("visibility",!r._container&&!r.opened?"hidden":null),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Zf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Re(),g(0,"div",1,0),$(2),p())},dependencies:[xr],encapsulation:2,changeDetection:0})}return t})(),q_=(()=>{class t{_dir=u(cn,{optional:!0});_element=u(B);_ngZone=u(F);_changeDetectorRef=u(Qe);_animationDisabled=Ke();_transitionsEnabled=!1;_allDrawers;_drawers=new Vn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=dt(e)}_autosize=u(AL);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:dt(e)}_backdropOverride=null;backdropClick=new Y;_start=null;_end=null;_left=null;_right=null;_destroyed=new A;_doCheckSubject=new A;_contentMargins={left:null,right:null};_contentMarginChanges=new A;get scrollable(){return this._userContent||this._content}_injector=u(K);constructor(){let e=u(Ie),i=u(Yn);this._dir?.change.pipe(Le(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Le(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Nt(this._allDrawers),Le(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Nt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Nn(10),Le(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Le(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Le(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Le(this._drawers.changes)).subscribe(()=>{ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Le(Yt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&jt(o,Gf,5)(o,G_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ze(Gf,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ne([{provide:Y_,useExisting:t}])],ngContentSelectors:wL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Re(CL),C(0,DL,1,2,"div",0),$(1),$(2,1),C(3,EL,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),m(3),w(r._content?-1:3))},dependencies:[Gf],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),qf=(()=>{class t extends Gf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ne([{provide:xr,useExisting:t}]),Te],ngContentSelectors:Zf,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},encapsulation:2,changeDetection:0})}return t})(),Z_=(()=>{class t extends G_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=dt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=gi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=gi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),lt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),V("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ne([{provide:G_,useExisting:t}]),Te],ngContentSelectors:Zf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Re(),g(0,"div",1,0),$(2),p())},dependencies:[xr],encapsulation:2,changeDetection:0})}return t})(),ES=(()=>{class t extends q_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&jt(o,qf,5)(o,Z_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&V("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ne([{provide:Y_,useExisting:t},{provide:q_,useExisting:t}]),Te],ngContentSelectors:IL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Re(SL),C(0,ML,1,2,"div",0),$(1),$(2,1),C(3,kL,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),m(3),w(r._content?-1:3))},dependencies:[qf],styles:[TL],encapsulation:2,changeDetection:0})}return t})();var Jc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ya=class extends Jc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Zn=class extends Jc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Q_=class extends Jc{element;constructor(n){super(),this.element=n instanceof B?n.nativeElement:n}},Za=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ya)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Zn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Q_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Qf=class extends Za{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(fi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||K.NULL,o=r.get(Be,i.injector);e=zu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},SS=(()=>{class t extends Zn{constructor(){let e=u(kt),i=u(Bt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Te]})}return t})(),Qa=(()=>{class t extends Za{_moduleRef=u(fi,{optional:!0});_document=u(J);_viewContainerRef=u(Bt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Y;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Te]})}return t})(),K_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({})}return t})();var X_=class{_box;_destroyed=new A;_resizeSubject=new A;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new re(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Oe(e=>e.some(i=>i.target===n)),gd({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Kf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new X_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rb=["*"];function RL(t,n){t&1&&$(0)}var OL=["tabListContainer"],NL=["tabList"],PL=["tabListInner"],FL=["nextPaginator"],LL=["previousPaginator"],BL=["content"];function jL(t,n){}var VL=["tabBodyWrapper"],UL=["tabHeader"];function HL(t,n){}function zL(t,n){if(t&1&&Tt(0,HL,0,0,"ng-template",12),t&2){let e=x().$implicit;M("cdkPortalOutlet",e.templateLabel)}}function $L(t,n){if(t&1&&_(0),t&2){let e=x().$implicit;ae(e.textLabel)}}function WL(t,n){if(t&1){let e=an();g(0,"div",7,2),q("click",function(){let r=It(e),o=r.$implicit,a=r.$index,s=x(),c=sn(1);return Mt(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=It(e).$index,a=x();return Mt(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),g(4,"span",10)(5,"span",11),C(6,zL,1,1,null,12)(7,$L,1,1),p()()()}if(t&2){let e=n.$implicit,i=n.$index,r=sn(1),o=x();At(e.labelClass),V("mdc-tab--active",o.selectedIndex===i),M("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),M("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),m(3),w(e.templateLabel?6:7)}}function GL(t,n){t&1&&$(0)}function qL(t,n){if(t&1){let e=an();g(0,"mat-tab-body",13),q("_onCentered",function(){It(e);let r=x();return Mt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){It(e);let o=x();return Mt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){It(e);let o=x();return Mt(o._bodyCentered(r))}),p()}if(t&2){let e=n.$implicit,i=n.$index,r=x();At(e.bodyClass),M("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var YL=new D("MatTabContent"),ZL=(()=>{class t{template=u(kt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matTabContent",""]],features:[Ne([{provide:YL,useExisting:t}])]})}return t})(),QL=new D("MatTabLabel"),TS=new D("MAT_TAB"),ob=(()=>{class t extends SS{_closestTab=u(TS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ne([{provide:QL,useExisting:t}]),Te]})}return t})(),AS=new D("MAT_TAB_GROUP"),ab=(()=>{class t{_viewContainerRef=u(Bt);_closestTabGroup=u(AS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new A;position=null;origin=null;isActive=!1;constructor(){u(yt).load(vi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Zn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&jt(o,ob,5)(o,ZL,7,kt),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ze(kt,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",ie],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ne([{provide:TS,useExisting:t}]),Se],ngContentSelectors:rb,decls:1,vars:0,template:function(i,r){i&1&&(Re(),Ca(0,RL,1,0,"ng-template"))},encapsulation:2})}return t})(),J_="mdc-tab-indicator--active",IS="mdc-tab-indicator--no-transition",eb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},KL=(()=>{class t{_elementRef=u(B);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(J_);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(IS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(IS),i.classList.add(J_),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(J_)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie]}})}return t})();var RS=(()=>{class t extends KL{elementRef=u(B);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),V("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ie]},features:[Te]})}return t})(),MS={passive:!0},XL=650,JL=100,e2=(()=>{class t{_elementRef=u(B);_changeDetectorRef=u(Qe);_viewportRuler=u(Yn);_dir=u(cn,{optional:!0});_ngZone=u(F);_platform=u(Ie);_sharedResizeObserver=u(Kf);_injector=u(K);_renderer=u(He);_animationsDisabled=Ke();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new A;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new A;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new Y;indexFocused=new Y;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),MS),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),MS))}ngAfterContentInit(){let e=this._dir?this._dir.change:Q("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Nn(32),Le(this._destroyed)),r=this._viewportRuler.change(150).pipe(Le(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Zc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ct(o,{injector:this._injector}),Yt(e,r,i,this._items.changes,this._itemsResized()).pipe(Le(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?at:this._items.changes.pipe(Nt(this._items),vt(e=>new re(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Zr(1),Oe(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!kn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Gr(XL,JL).pipe(Le(Yt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ie],selectedIndex:[2,"selectedIndex","selectedIndex",hr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),t2=(()=>{class t extends e2{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new eb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&jt(o,RS,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ze(OL,7)(NL,7)(PL,7)(FL,5)(LL,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&V("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ie]},features:[Te],ngContentSelectors:rb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Re(),g(0,"div",5,0),q("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),p(),g(3,"div",7,1),q("keydown",function(a){return r._handleKeydown(a)}),g(5,"div",8,2),q("cdkObserveContent",function(){return r._onContentChanges()}),g(7,"div",9,3),$(9),p()()(),g(10,"div",10,4),q("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),p()),i&2&&(V("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),M("matRippleDisabled",r._disableScrollBefore||r.disableRipple),m(3),V("_mat-animation-noopable",r._animationsDisabled),m(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),m(5),V("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),M("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[To,Rf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),n2=new D("MAT_TABS_CONFIG"),kS=(()=>{class t extends Qa{_host=u(tb);_ngZone=u(F);_centeringSub=_e.EMPTY;_leavingSub=_e.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Nt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matTabBodyHost",""]],features:[Te]})}return t})(),tb=(()=>{class t{_elementRef=u(B);_dir=u(cn,{optional:!0});_ngZone=u(F);_injector=u(K);_renderer=u(He);_diAnimationsDisabled=Ke();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=_e.EMPTY;_position;_previousPosition;_onCentering=new Y;_beforeCentering=new Y;_afterLeavingCenter=new Y;_onCentered=new Y(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ct(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ct(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ze(kS,5)(BL,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(g(0,"div",1,0),Tt(2,jL,0,0,"ng-template",2),p()),i&2&&V("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[kS,xr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),OS=(()=>{class t{_elementRef=u(B);_changeDetectorRef=u(Qe);_ngZone=u(F);_tabsSubscription=_e.EMPTY;_tabLabelSubscription=_e.EMPTY;_tabBodySubscription=_e.EMPTY;_diAnimationsDisabled=Ke();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Vn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Y;focusChange=new Y;animationDone=new Y;selectedTabChange=new Y(!0);_groupId;_isServer=!u(Ie).isBrowser;constructor(){let e=u(n2,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Nt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new nb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Yt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&jt(o,ab,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ze(VL,5)(UL,5)(tb,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),At("mat-"+(r.color||"primary")),lt("--mat-tab-animation-duration",r.animationDuration),V("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ie],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ie],selectedIndex:[2,"selectedIndex","selectedIndex",hr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",hr],disablePagination:[2,"disablePagination","disablePagination",ie],disableRipple:[2,"disableRipple","disableRipple",ie],preserveContent:[2,"preserveContent","preserveContent",ie],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ne([{provide:AS,useExisting:t}])],ngContentSelectors:rb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Re(),g(0,"mat-tab-header",3,0),q("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),le(2,WL,8,17,"div",4,En),p(),C(4,GL,1,0),g(5,"div",5,1),le(7,qL,1,10,"mat-tab-body",6,En),p()),i&2&&(M("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Nu("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),m(2),de(r._tabs),m(2),w(r._isServer?4:-1),m(),V("_mat-animation-noopable",r._animationsDisabled()),m(2),de(r._tabs))},dependencies:[t2,RS,T_,To,Qa,tb],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),nb=class{index;tab};var yi=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=dt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=dt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),V("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),NS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[We]})}return t})();var i2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),r2={passive:!0},PS=(()=>{class t{_platform=u(Ie);_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_styleLoader=u(yt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return at;this._styleLoader.load(i2);let i=nn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new A,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,r2)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=nn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var FS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({})}return t})();var HS=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(j(He),j(B))};static \u0275dir=N({type:t})}return t})(),o2=(()=>{class t extends HS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,features:[Te]})}return t})(),wr=new D("");var a2={provide:wr,useExisting:Kt(()=>lm),multi:!0};function s2(){let t=In()?In().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var c2=new D(""),lm=(()=>{class t extends HS{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!s2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(j(He),j(B),j(c2,8))};static \u0275dir=N({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&q("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ne([a2]),Te]})}return t})();function cb(t){return t==null||lb(t)===0}function lb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var sl=new D(""),db=new D(""),l2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ja=class{static min(n){return d2(n)}static max(n){return u2(n)}static required(n){return f2(n)}static requiredTrue(n){return m2(n)}static email(n){return h2(n)}static minLength(n){return p2(n)}static maxLength(n){return g2(n)}static pattern(n){return v2(n)}static nullValidator(n){return zS()}static compose(n){return ZS(n)}static composeAsync(n){return QS(n)}};function d2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function u2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function f2(t){return cb(t.value)?{required:!0}:null}function m2(t){return t.value===!0?null:{required:!0}}function h2(t){return cb(t.value)||l2.test(t.value)?null:{email:!0}}function p2(t){return n=>{let e=n.value?.length??lb(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function g2(t){return n=>{let e=n.value?.length??lb(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function v2(t){if(!t)return zS;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(cb(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function zS(t){return null}function $S(t){return t!=null}function WS(t){return ji(t)?tt(t):t}function GS(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function qS(t,n){return n.map(e=>e(t))}function _2(t){return!t.validate}function YS(t){return t.map(n=>_2(n)?n:e=>n.validate(e))}function ZS(t){if(!t)return null;let n=t.filter($S);return n.length==0?null:function(e){return GS(qS(e,n))}}function ub(t){return t!=null?ZS(YS(t)):null}function QS(t){if(!t)return null;let n=t.filter($S);return n.length==0?null:function(e){let i=qS(e,n).map(WS);return Ts(i).pipe(ee(GS))}}function fb(t){return t!=null?QS(YS(t)):null}function LS(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function KS(t){return t._rawValidators}function XS(t){return t._rawAsyncValidators}function sb(t){return t?Array.isArray(t)?t:[t]:[]}function Jf(t,n){return Array.isArray(t)?t.includes(n):t===n}function BS(t,n){let e=sb(n);return sb(t).forEach(r=>{Jf(e,r)||e.push(r)}),e}function jS(t,n){return sb(n).filter(e=>!Jf(t,e))}var em=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ub(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=fb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Ro=class extends em{name;get formDirective(){return null}get path(){return null}},Zi=class extends em{_parent=null;name=null;valueAccessor=null},tm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var JS=(()=>{class t extends tm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(j(Zi,2))};static \u0275dir=N({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Te]})}return t})(),eI=(()=>{class t extends tm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(j(Ro,10))};static \u0275dir=N({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&V("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Te]})}return t})();var tl="VALID",Xf="INVALID",Ka="PENDING",nl="DISABLED",Cr=class{},nm=class extends Cr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},rl=class extends Cr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ol=class extends Cr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Xa=class extends Cr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},im=class extends Cr{source;constructor(n){super(),this.source=n}},rm=class extends Cr{source;constructor(n){super(),this.source=n}};function tI(t){return(dm(t)?t.validators:t)||null}function b2(t){return Array.isArray(t)?ub(t):t||null}function nI(t,n){return(dm(n)?n.asyncValidators:t)||null}function y2(t){return Array.isArray(t)?fb(t):t||null}function dm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function x2(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new T(1e3,"");if(!i[e])throw new T(1001,"")}function C2(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new T(-1002,"")})}var es=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(n){Z(()=>this.statusReactive.set(n))}_status=W(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===tl}get invalid(){return this.status===Xf}get pending(){return this.status===Ka}get disabled(){return this.status===nl}get enabled(){return this.status!==nl}errors;get pristine(){return Z(this.pristineReactive)}set pristine(n){Z(()=>this.pristineReactive.set(n))}_pristine=W(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(n){Z(()=>this.touchedReactive.set(n))}_touched=W(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new A;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(BS(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(BS(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(jS(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(jS(n,this._rawAsyncValidators))}hasValidator(n){return Jf(this._rawValidators,n)}hasAsyncValidator(n){return Jf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(z(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ol(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new ol(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(z(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new rl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new rl(!0,i))}markAsPending(n={}){this.status=Ka;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xa(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(z(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=nl,this.errors=null,this._forEachChild(r=>{r.disable(z(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new nm(this.value,i)),this._events.next(new Xa(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=tl,this._forEachChild(i=>{i.enable(z(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(z(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===tl||this.status===Ka)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new nm(this.value,e)),this._events.next(new Xa(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(z(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?nl:tl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ka,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=WS(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Xa(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Y,this.statusChanges=new Y}_calculateStatus(){return this._allControlsDisabled()?nl:this.errors?Xf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ka)?Ka:this._anyControlsHaveStatus(Xf)?Xf:tl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new rl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ol(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){dm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=b2(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=y2(this._rawAsyncValidators)}},al=class extends es{constructor(n,e,i){super(tI(e),nI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){C2(this,!0,n),Object.keys(n).forEach(i=>{x2(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,z(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new rm(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var cl=new D("",{factory:()=>um}),um="always";function om(t,n,e=um){mb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),D2(t,n),S2(t,n),E2(t,n),w2(t,n)}function am(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),cm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function sm(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function w2(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function mb(t,n){let e=KS(t);n.validator!==null?t.setValidators(LS(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=XS(t);n.asyncValidator!==null?t.setAsyncValidators(LS(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();sm(n._rawValidators,r),sm(n._rawAsyncValidators,r)}function cm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=KS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=XS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return sm(n._rawValidators,i),sm(n._rawAsyncValidators,i),e}function D2(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&iI(t,n)})}function E2(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&iI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function iI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function S2(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function rI(t,n){t==null,mb(t,n)}function I2(t,n){return cm(t,n)}function M2(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function k2(t){return Object.getPrototypeOf(t.constructor)===o2}function oI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function T2(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===lm?e=o:k2(o)?i=o:r=o}),r||i||e||null}function A2(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var R2={provide:Ro,useExisting:Kt(()=>ll)},il=Promise.resolve(),ll=(()=>{class t extends Ro{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=W(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new Y;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new al({},ub(e),fb(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){il.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),om(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){il.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){il.then(()=>{let i=this._findContainer(e.path),r=new al({});rI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){il.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){il.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),oI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new im(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(j(sl,10),j(db,10),j(cl,8))};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([R2]),Te]})}return t})();function VS(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function US(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hb=class extends es{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(tI(e),nI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(US(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new rm(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){VS(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){VS(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){US(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var O2=t=>t instanceof hb;var aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var N2=(()=>{class t extends Ro{callSetDisabledState;get submitted(){return Z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=W(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(cm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return om(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){am(e.control||null,e,!1),A2(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,oI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new im(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(am(i||null,e),O2(r)&&(om(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);rI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&I2(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){mb(this.form,this),this._oldForm&&cm(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(j(sl,10),j(db,10),j(cl,8))};static \u0275dir=N({type:t,features:[Te,Se]})}return t})();var sI=new D(""),P2={provide:Zi,useExisting:Kt(()=>pb)},pb=(()=>{class t extends Zi{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Y;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=T2(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&am(i,this,!1),om(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}M2(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&am(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(j(sl,10),j(db,10),j(wr,10),j(sI,8),j(cl,8))};static \u0275dir=N({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Ne([P2]),Te,Se]})}return t})();var F2={provide:Ro,useExisting:Kt(()=>gb)},gb=(()=>{class t extends N2{form=null;ngSubmit=new Y;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([F2]),Te]})}return t})();var cI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({})}return t})();var lI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:cl,useValue:e.callSetDisabledState??um}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[cI]})}return t})(),dI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:sI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:cl,useValue:e.callSetDisabledState??um}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[cI]})}return t})();var uI=new D("MAT_INPUT_VALUE_ACCESSOR");var B2=["notch"],j2=["matFormFieldNotchedOutline",""],V2=["*"],fI=["iconPrefixContainer"],mI=["textPrefixContainer"],hI=["iconSuffixContainer"],pI=["textSuffixContainer"],U2=["textField"],H2=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],z2=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function $2(t,n){t&1&&E(0,"span",21)}function W2(t,n){if(t&1&&(g(0,"label",20),$(1,1),C(2,$2,1,0,"span",21),p()),t&2){let e=x(2);M("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function G2(t,n){if(t&1&&C(0,W2,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function q2(t,n){t&1&&E(0,"div",7)}function Y2(t,n){}function Z2(t,n){if(t&1&&Tt(0,Y2,0,0,"ng-template",13),t&2){x(2);let e=sn(1);M("ngTemplateOutlet",e)}}function Q2(t,n){if(t&1&&(g(0,"div",9),C(1,Z2,1,1,null,13),p()),t&2){let e=x();M("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),w(e._forceDisplayInfixLabel()?-1:1)}}function K2(t,n){t&1&&(g(0,"div",10,2),$(2,2),p())}function X2(t,n){t&1&&(g(0,"div",11,3),$(2,3),p())}function J2(t,n){}function eB(t,n){if(t&1&&Tt(0,J2,0,0,"ng-template",13),t&2){x();let e=sn(1);M("ngTemplateOutlet",e)}}function tB(t,n){t&1&&(g(0,"div",14,4),$(2,4),p())}function nB(t,n){t&1&&(g(0,"div",15,5),$(2,5),p())}function iB(t,n){t&1&&E(0,"div",16)}function rB(t,n){t&1&&(g(0,"div",18),$(1,6),p())}function oB(t,n){if(t&1&&(g(0,"mat-hint",22),_(1),p()),t&2){let e=x(2);M("id",e._hintLabelId),m(),ae(e.hintLabel)}}function aB(t,n){if(t&1&&(g(0,"div",19),C(1,oB,2,2,"mat-hint",22),$(2,7),E(3,"div",23),$(4,8),p()),t&2){let e=x();m(),w(e.hintLabel?1:-1)}}var ts=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-label"]]})}return t})(),CI=new D("MatError"),hm=(()=>{class t{id=u(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&$e("id",r.id)},inputs:{id:"id"},features:[Ne([{provide:CI,useExisting:t}])]})}return t})(),mm=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("align",null),V("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),sB=new D("MatPrefix");var cB=new D("MatSuffix");var wI=new D("FloatingLabelParent"),gI=(()=>{class t{_elementRef=u(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Kf);_ngZone=u(F);_parent=u(wI);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return lB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function lB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var vI="mdc-line-ripple--active",fm="mdc-line-ripple--deactivating",_I=(()=>{class t{_elementRef=u(B);_cleanupTransitionEnd;constructor(){let e=u(F),i=u(He);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(fm),e.add(vI)}deactivate(){this._elementRef.nativeElement.classList.add(fm)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(fm);e.propertyName==="opacity"&&r&&i.remove(vI,fm)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),bI=(()=>{class t{_elementRef=u(B);_ngZone=u(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ze(B2,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:j2,ngContentSelectors:V2,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Re(),Ae(0,"div",1),ue(1,"div",2,0),$(3),ge(),Ae(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),vb=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t})}return t})();var dl=new D("MatFormField"),dB=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),yI="fill",uB="auto",xI="fixed",fB="translateY(-50%)",Oo=(()=>{class t{_elementRef=u(B);_changeDetectorRef=u(Qe);_platform=u(Ie);_idGenerator=u(mt);_ngZone=u(F);_defaults=u(dB,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=_c("iconPrefixContainer");_textPrefixContainerSignal=_c("textPrefixContainer");_iconSuffixContainerSignal=_c("iconSuffixContainer");_textSuffixContainerSignal=_c("textSuffixContainer");_prefixSuffixContainers=W(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=uD(ts);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=dt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||uB}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||yI;this._appearanceSignal.set(i)}_appearanceSignal=L(yI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||xI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new A;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ke();constructor(){let e=this._defaults,i=u(cn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),en(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=W(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Nt([void 0,void 0]),ee(()=>[i.errorState,i.userAriaDescribedBy]),pd(),Oe(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Yt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Hu({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=W(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${fB} translateX(${h}))`,k=a+s+c+l;return[b,k]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Pu(o,r._labelChild,ts,5),jt(o,vb,5)(o,sB,5)(o,cB,5)(o,CI,5)(o,mm,5)),i&2){Lu();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Fu(r._iconPrefixContainerSignal,fI,5)(r._textPrefixContainerSignal,mI,5)(r._iconSuffixContainerSignal,hI,5)(r._textSuffixContainerSignal,pI,5),Ze(U2,5)(fI,5)(mI,5)(hI,5)(pI,5)(gI,5)(bI,5)(_I,5)),i&2){Lu(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&V("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:dl,useExisting:t},{provide:wI,useExisting:t}])],ngContentSelectors:z2,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Re(H2),Tt(0,G2,1,1,"ng-template",null,0,Bu),g(2,"div",6,1),q("click",function(a){return r._control.onContainerClick(a)}),C(4,q2,1,0,"div",7),g(5,"div",8),C(6,Q2,2,2,"div",9),C(7,K2,3,0,"div",10),C(8,X2,3,0,"div",11),g(9,"div",12),C(10,eB,1,1,null,13),$(11),p(),C(12,tB,3,0,"div",14),C(13,nB,3,0,"div",15),p(),C(14,iB,1,0,"div",16),p(),g(15,"div",17),C(16,rB,2,0,"div",18)(17,aB,5,1,"div",19),p()),i&2){let o;m(2),V("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),m(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),m(2),w(r._hasOutline()?6:-1),m(),w(r._hasIconPrefix?7:-1),m(),w(r._hasTextPrefix?8:-1),m(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),m(2),w(r._hasTextSuffix?12:-1),m(),w(r._hasIconSuffix?13:-1),m(),w(r._hasOutline()?-1:14),m(),V("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();m(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[gI,bI,jv,_I,mm],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var DI=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pm=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var ul=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[Of,Oo,We]})}return t})();var pB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],gB=new D("MAT_INPUT_CONFIG"),gm=(()=>{class t{_elementRef=u(B);_platform=u(Ie);ngControl=u(Zi,{optional:!0,self:!0});_autofillMonitor=u(PS);_ngZone=u(F);_formField=u(dl,{optional:!0});_renderer=u(He);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(gB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new A;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=dt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ja.required)??!1}set required(e){this._required=dt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&L_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=dt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>L_().has(e));constructor(){let e=u(ll,{optional:!0}),i=u(gb,{optional:!0}),r=u(DI),o=u(uI,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Bi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new pm(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&en(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){pB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&($e("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),V("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie]},exportAs:["matInput"],features:[Ne([{provide:vb,useExisting:t}]),Se]})}return t})(),vm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[ul,ul,FS,We]})}return t})();var vB=["mat-internal-form-field",""],_B=["*"],SI=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&V("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:vB,ngContentSelectors:_B,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var bB=["input"],yB=["label"],xB=["*"],_b={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},CB=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>_b}),Gt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Gt||{}),bb=class{source;checked},yb=(()=>{class t{_elementRef=u(B);_changeDetectorRef=u(Qe);_ngZone=u(F);_animationsDisabled=Ke();_options=u(CB,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new bb;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Y;indeterminateChange=new Y;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Gt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(yt).load(vi);let e=u(new Ui("tabindex"),{optional:!0});this._options=this._options||_b,this.color=this._options.color||_b.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(mt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Gt.Indeterminate):this._transitionCheckState(this.checked?Gt.Checked:Gt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Gt.Checked:Gt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Gt.Init:if(i===Gt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Gt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Gt.Unchecked:return i===Gt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Gt.Checked:return i===Gt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Gt.Indeterminate:return i===Gt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ze(bB,5)(yB,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),At(r.color?"mat-"+r.color:"mat-accent"),V("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ie],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ie],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ie],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:hr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],checked:[2,"checked","checked",ie],disabled:[2,"disabled","disabled",ie],indeterminate:[2,"indeterminate","indeterminate",ie]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ne([{provide:wr,useExisting:Kt(()=>t),multi:!0},{provide:sl,useExisting:t,multi:!0}]),Se],ngContentSelectors:xB,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Re(),g(0,"div",3),q("click",function(a){return r._preventBubblingFromLabel(a)}),g(1,"div",4,0)(3,"div",5),q("click",function(){return r._onTouchTargetClick()}),p(),g(4,"input",6,1),q("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),p(),E(6,"div",7),g(7,"div",8),qs(),g(8,"svg",9),E(9,"path",10),p(),Ys(),E(10,"div",11),p(),E(11,"div",12),p(),g(12,"label",13,2),$(14),p()()),i&2){let o=sn(2);M("labelPosition",r.labelPosition),m(4),V("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),m(7),M("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),m(),M("for",r.inputId)}},dependencies:[To,SI],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),II=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[yb,We]})}return t})();var xb=0;function DB(){return xb}function Dr(t,n){return(...e)=>{try{return xb=n,t(...e)}finally{xb=0}}}function EB(t){return!t}function MI(t){return t}function Qn(t){return Array.isArray(t)}function ns(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var No=Symbol(),Em=Symbol(),ml=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(kI(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>kI(this.predicates,i)):n.fns;this.fns.push(...e)}},bm=class extends ml{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==Em})}},is=class t extends ml{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===Em?e:Qn(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Cb=class extends is{constructor(n){super(n,void 0)}},wb=class extends ml{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==Em&&(e=this.key.reducer.reduce(e,r))}return e}};function kI(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Z(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Em}return n(e)}}var rs=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new bm(n),this.disabledReasons=new Cb(n),this.readonly=new bm(n),this.syncErrors=is.ignoreNull(n),this.syncTreeErrors=is.ignoreNull(n),this.asyncErrors=is.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new wb(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},ym=class{depth;constructor(n){this.depth=n}build(){return new xm(this,[],0)}},os=class t extends ym{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===No){let e=this.getCurrent().children;e.size>(e.has(No)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Dr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new hl(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},hl=class extends ym{logic=new rs([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Dr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Dr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Dr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Dr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Dr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Dr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Dr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new os(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},xm=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?SB(n,e,i):new rs([])}getChild(n){let e=this.builder?RI(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>Eb(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>Eb(a,this.depth))],this.depth+1));return new Db(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Db=class t{all;logic;constructor(n){this.all=n,this.logic=new rs([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function RI(t,n){if(t instanceof os)return t.all.flatMap(({builder:e,predicate:i})=>{let r=RI(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof hl)return[...n!==No&&t.children.has(No)?[{builder:t.getChild(No),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new T(1909,!1)}function SB(t,n,e){let i=new rs(n);if(t instanceof os){let r=t.all.map(({builder:o,predicate:a})=>new xm(o,a?[...n,Eb(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof hl)i.mergeIn(t.logic);else throw new T(1909,!1);return i}function Eb(t,n){return z(y({},t),{depth:n})}var OI=Symbol("PATH"),xi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,IB);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=os.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[OI]}static newRoot(){return new t([],void 0,void 0,void 0)}},IB={get(t,n){return n===OI?t:t.getChild(n).fieldPathProxy}},_m,fl=new Map,Cm=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(fl.has(this))return fl.get(this);let n=xi.newRoot();fl.set(this,n);let e=_m;try{_m=n,this.schemaFn(n.fieldPathProxy)}finally{_m=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return fl.clear(),n===void 0?xi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{fl.clear()}}};function MB(t){return t instanceof Cm||typeof t=="function"}function Sm(t){if(_m!==xi.unwrapFieldPath(t).root)throw new T(1908,!1)}function Po(t,n,e){return Sm(t),xi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var Er={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:kB};function kB(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var wm=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function Kn(t){return new wm(t??Er.override())}var Lb=Kn(Er.or()),Bb=Kn(Er.max()),jb=Kn(Er.min()),NI=Kn(Er.max()),PI=Kn(Er.min()),FI=Kn(Er.list());function TB(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var Sb=class{node;constructor(n){this.node=n}rawSyncTreeErrors=W(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=W(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...AB(this.node.submitState.submissionErrors())]);syncValid=W(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),EB));syncTreeErrors=W(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=W(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=W(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=W(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=W(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=W(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Z(()=>n.sort(RB)),n});pending=W(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=W(()=>{if(this.shouldSkipValidation())return"valid";let n=TB(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=W(()=>this.status()==="valid");invalid=W(()=>this.status()==="invalid");shouldSkipValidation=W(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function AB(t){return t===void 0?[]:Qn(t)?t:[t]}function Im(t,n){if(Qn(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function TI(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function RB(t,n){let e=TI(t),i=TI(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Ib=Kn(),Mb=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=W(()=>{let i=xi.unwrapFieldPath(n),r=this.node,o=DB();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new T(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new T(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=W(()=>{let n=this.key();if(!Qn(Z(this.node.structure.parent.value)))throw new T(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof es)throw new T(1907,!1);return e}},kb=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Z(()=>ut(this.node.structure.injector,()=>e.create(W(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new T(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,W(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},OB={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Z(i.value);if(Qn(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(ns(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Z(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Z(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function NB(t,n){let e=W(()=>t()[n()]);return e[Xe]=t[Xe],e.set=i=>{t.update(r=>PB(r,i,n()))},e.update=i=>{e.set(i(Z(e)))},e.asReadonly=()=>e,e}function PB(t,n,e){if(Qn(t)){let i=[...t];return i[e]=n,i}else return z(y({},t),{[e]:n})}var Dm=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=K.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Z(e.reader))}getChild(n){let e=n.toString(),i=Z(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Z(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return LI;if(e===void 0){let r=i;return W(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new T(1902,!1);return r})}else{let r=i;return W(()=>{let o=this.parent.structure.value();if(!Qn(o))throw new T(1903,!1);let a=o[r];if(ns(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(ns(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new T(1904,!1)})}}createChildrenMap(){return mi({source:this.value,computation:(n,e)=>{if(!ns(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=Qn(n);i!==void 0&&(o?r=LB(i,n,this.identitySymbol):r=BB(i,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&ns(c)&&!Qn(c)&&(s=c[this.identitySymbol]??=Symbol(""));let l;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l??this.createChildNode(a,s,o)})):l&&l!==d.node&&(r??=y({},i),d.node=l)}return r??i}})}createReader(n){return W(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},Tb=class extends Dm{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return FB}get keyInParent(){return LI}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Ab=class extends Dm{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=W(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=NB(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var FB=W(()=>[]),LI=W(()=>{throw new T(1905,!1)});function LB(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),ns(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function BB(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var Rb=class{node;selfSubmitting=L(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=mi({source:this.node.structure.value,computation:()=>[]})}submitting=W(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},pl=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Mb(this)}fieldProxy=new Proxy(()=>this,OB);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new kb(this),this.submitState=new Rb(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(AI,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(AI,void 0)}pendingSync=mi({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(jb)}get maxLength(){return this.metadata(PI)}get min(){return this.metadata(Bb)}get minLength(){return this.metadata(NI)}get pattern(){return this.metadata(FI)??jB}get required(){return this.metadata(Lb)??VB}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Z(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Z(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=mi(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Z(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new Tb(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Ab(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(No),o=this.structure.logic.getChild(No)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},jB=W(()=>[]),VB=W(()=>!1);function AI(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var Ob=class{node;selfTouched=L(!1);selfDirty=L(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=L([]);constructor(n){this.node=n}dirty=W(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),MI)});touched=W(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),MI)});disabledReasons=W(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=W(()=>!!this.disabledReasons().length);readonly=W(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=W(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=W(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=W(()=>{if(this.node.logicNode.logic.hasMetadata(Ib)){let e=this.node.logicNode.logic.getMetadata(Ib).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=W(()=>this.hidden()||this.disabled()||this.readonly())},Nb=class{newRoot(n,e,i,r){return new pl({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new pl(n)}createNodeState(n){return new Ob(n)}createValidationState(n){return new Sb(n)}createStructure(n,e){return n.createStructure(e)}},Pb=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(mr)}.form${UB++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){en(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Z(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},UB=0;function HB(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?MB(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Vb(...t){let[n,e,i]=HB(t),r=i?.injector??u(K),o=ut(r,()=>Cm.rootCompile(e)),a=new Pb(r,i?.name,i?.submission),s=i?.adapter??new Nb,c=pl.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}async function Ub(t,n){let e=Z(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new T(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;Z(()=>{BI(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let l=await Z(()=>o?.(i,r));return l&&zB(e,l),!l||Qn(l)&&l.length===0}else Z(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function BI(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())BI(n)}}function zB(t,n){Qn(n)||(n=[n]);let e=new Map;for(let i of n){let r=Im(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var Fb=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function jI(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof Fb?e.context:e;return n}var $B=new D("");function as(t,n){return t instanceof Function?t(n):t}function Yb(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function VI(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function Zb(t,n){Sm(t),xi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Im(n(i),i.fieldTree))}function WB(t){return new Hb(t)}function GB(t,n){return new zb(t,n)}function qB(t,n){return new $b(t,n)}var ss=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Hb=class extends ss{kind="required"},zb=class extends ss{min;kind="min";constructor(n,e){super(e),this.min=n}},$b=class extends ss{max;kind="max";constructor(n,e){super(e),this.max=n}};var Wb=class extends ss{kind="parse"};function Mm(t,n,e){let i=Po(t,Kn(),r=>typeof n=="number"?n:n(r));Po(t,jb,({state:r})=>r.metadata(i)()),Zb(t,r=>{if(Yb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?as(e.error,r):qB(o,{message:as(e?.message,r)})})}function km(t,n,e){let i=Po(t,Kn(),r=>typeof n=="number"?n:n(r));Po(t,Bb,({state:r})=>r.metadata(i)()),Zb(t,r=>{if(Yb(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?as(e.error,r):GB(o,{message:as(e?.message,r)})})}function Tm(t,n){let e=Po(t,Kn(),i=>n?.when?n.when(i):!0);Po(t,Lb,({state:i})=>i.metadata(e)()),Zb(t,i=>{if(i.state.metadata(e)()&&Yb(i.value()))return n?.error?as(n.error,i):WB({message:as(n?.message,i)})})}function HI(t,n){Sm(t),xi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Im(n(i),i.fieldTree))}var YB=new D("");function ZB(t,n,e){let i=mi({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(VI(a.error)),a.value!==void 0&&n(a.value),i.set(VI(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var Gb=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return jI(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new T(1910,!1)}valueAccessor=null;hasValidator(n){return n===Ja.required?this.field().required():!1}updateValueAndValidity(){}},qb={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},QB=(()=>{let t={};for(let n of Object.keys(qb))t[qb[n]]=n;return t})();function Qb(t,n){let e=QB[n];return t[e]?.()}var Kb=Object.values(qb);function Am(){return{}}function Fo(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function KB(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function XB(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function JB(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function ej(t,n){let e;if(t.validity.badInput)return{error:new Wb};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Z(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Z(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function tj(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){UI(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){UI(t,n);return}}t.value=n}function UI(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function Xb(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function nj(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Am();return()=>{let i=n.state(),r=i.controlValue();Fo(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of Kb){let a;o==="errors"?a=n.errors():a=Qb(i,o),Fo(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&Xb(n.renderer,n.nativeFormElement,o,a))}}}function ij(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Am();return()=>{let i=n.state(),r=i.value();Fo(e,"controlValue",r)&&Z(()=>n.controlValueAccessor.writeValue(r));for(let o of Kb){let a=Qb(i,o);if(Fo(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Z(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&Xb(n.renderer,n.nativeFormElement,o,a)}}}}function rj(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>oj(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function oj(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function aj(t,n,e){let i=!1,r=n.nativeFormElement,o=ZB(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>ej(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&rj(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Am();return()=>{let s=n.state(),c=s.controlValue();Fo(a,"controlValue",c)&&tj(r,c);for(let l of Kb){let d=Qb(s,l);Fo(a,l,d)&&(t.setInputOnDirectives(l,d),n.elementAcceptsNativeProperty(l)&&Xb(n.renderer,r,l,d))}i=!0}}var sj=Symbol(),cj=new D(""),zI=(()=>{class t{field=fe.required({alias:"formField"});renderer=u(He);destroyRef=u(Lt);state=W(()=>this.field()());injector=u(K);element=u(B).nativeElement;elementIsNativeFormElement=KB(this.element);elementAcceptsNumericValues=XB(this.element);elementAcceptsTextualValues=JB(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(wr,{optional:!0,self:!0});config=u($B,{optional:!0});parseErrorsSource=L(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Gb(this.state)}parseErrors=W(()=>this.parseErrorsSource()?.().map(e=>z(y({},e),{fieldTree:Z(this.state).fieldTree,formField:this}))??[]);errors=W(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,W(()=>o(this))]);if(e.length===0)return;let i=Am();Hu({write:()=>{for(let[r,o]of e){let a=o();Fo(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new T(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),en(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[sj];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=ij(e,this);else if(e.customControl)this.\u0275ngControlUpdate=nj(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=aj(e,this,this.parseErrorsSource);else throw new T(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ne([{provide:cj,useExisting:t},{provide:Zi,useFactory:()=>u(t).interopNgControl},{provide:YB,useFactory:()=>u(t).parseErrorsSource}]),Dv("formField")]})}return t})();function lj(t,n){if(t&1&&(g(0,"mat-error"),_(1),p()),t&2){let e=n.$implicit;m(),ae(e.message)}}function dj(t,n){if(t&1&&(g(0,"mat-error"),_(1),p()),t&2){let e=n.$implicit;m(),ae(e.message)}}function uj(t,n){if(t&1&&(g(0,"mat-error"),_(1),p()),t&2){let e=n.$implicit;m(),ae(e.message)}}function fj(t,n){t&1&&_(0," + ")}function mj(t,n){if(t&1&&(_(0),C(1,fj,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;De(" ",e," "),m(),w(i!==r-1?1:-1)}}function hj(t,n){if(t&1&&(g(0,"div"),_(1),g(2,"span",18),_(3,"= ("),le(4,mj,2,2,null,null,Ye),_(6),p()()),t&2){let e=x().$implicit;lt("width","100%"),m(),De(" ",e.calculateRollAverage()," "),m(3),de(e.diceValues),m(2),De(") / ",e.diceValues.length)}}function pj(t,n){if(t&1&&(g(0,"div"),_(1),p()),t&2){let e=x().$implicit;m(),ae(e.diceValues[0])}}function gj(t,n){if(t&1&&C(0,hj,7,4,"div",17)(1,pj,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function vj(t,n){if(t&1&&(g(0,"div",12)(1,"div",14)(2,"b"),_(3,"# of Rolls"),p(),g(4,"p"),_(5),p(),g(6,"b"),_(7,"Bounds"),p(),g(8,"p"),_(9),p()(),g(10,"div",15)(11,"b"),_(12,"Results"),p(),g(13,"div",16),le(14,gj,2,1,null,null,Ye),p()()()),t&2){let e=n.$implicit;m(5),ae(e.numberOfRolls),m(4),Vi("",e.lowerBound," - ",e.upperBound),m(5),de(e.rolls)}}function _j(t,n){t&1&&(g(0,"div",13)(1,"span",19),_(2,"No rolls yet :("),p()())}var Rm=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=L({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Vb(this.customRollParams,n=>{Tm(n.minimum),Tm(n.maximum),Tm(n.count),km(n.minimum,1,{message:"Must be > 0"}),km(n.maximum,2,{message:"Must be > 1"}),km(n.count,1,{message:"Must be > 0"}),Mm(n.minimum,999,{message:"Must be <= 999"}),Mm(n.maximum,1e3,{message:"Must be <= 1000"}),Mm(n.count,20,{message:"Must be <= 20"}),HI(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){Ub(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new Jb(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"h1"),_(3,"Dice Roller"),p(),g(4,"div",2)(5,"mat-form-field")(6,"mat-label"),_(7,"Lowest Value"),p(),E(8,"input",3),ya(),le(9,lj,2,1,"mat-error",null,En),p(),g(11,"mat-form-field")(12,"mat-label"),_(13,"Highest Value"),p(),E(14,"input",3),ya(),le(15,dj,2,1,"mat-error",null,En),p(),g(17,"mat-form-field")(18,"mat-label"),_(19,"# of Dice"),p(),E(20,"input",3),ya(),le(21,uj,2,1,"mat-error",null,En),p()(),g(23,"mat-checkbox",4),_(24,"Use averaged rolls (True Hit)"),p(),ya(),g(25,"button",5),q("click",function(){return i.customRollDice()}),_(26,"Roll Dice"),p(),g(27,"div",6)(28,"button",7),q("click",function(){return i.quickRollDice(1,2,1,!1)}),_(29,"1 d2"),p(),g(30,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!1)}),_(31,"1 d100"),p(),g(32,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!0)}),_(33,"1 d100 Avg."),p()(),E(34,"mat-divider"),g(35,"div",8)(36,"h2"),_(37,"History"),p(),g(38,"button",9),q("click",function(){return i.clearRollHistory()}),E(39,"img",10),p()()(),g(40,"div",11),le(41,vj,16,3,"div",12,Ye,!1,_j,3,0,"div",13),p()()),e&2&&(m(5),lt("width","30%"),m(3),M("formField",i.customDiceRollForm.minimum),xa(),m(),de(i.customDiceRollForm.minimum().errors()),m(2),lt("width","30%"),m(3),M("formField",i.customDiceRollForm.maximum),xa(),m(),de(i.customDiceRollForm.maximum().errors()),m(2),lt("width","30%"),m(3),M("formField",i.customDiceRollForm.count),xa(),m(),de(i.customDiceRollForm.count().errors()),m(2),M("formField",i.customDiceRollForm.useAverages),xa(),m(2),lt("width","100%"),m(3),lt("width","30%"),m(2),lt("width","30%"),m(2),lt("width","30%"),m(9),de(i.rollHistory))},dependencies:[yi,z_,Ao,Kc,vm,gm,Oo,ts,hm,II,yb,zI],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},Jb=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new ey(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},ey=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Me=class t{constructor(n){this.http=n;this.http=u(Wi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();map=L({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(G(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var $I=(()=>{class t{_animationsDisabled=Ke();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&V("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var bj=["text"],yj=[[["mat-icon"]],"*"],xj=["mat-icon","*"];function Cj(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function wj(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();M("disabled",e.disabled)}}function Dj(t,n){if(t&1&&(g(0,"span",4),_(1),p()),t&2){let e=x();m(),De("(",e.group.label,")")}}var ty=new D("MAT_OPTION_PARENT_COMPONENT"),ny=new D("MatOptgroup");var gl=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},cs=(()=>{class t{_element=u(B);_changeDetectorRef=u(Qe);_parent=u(ty,{optional:!0});group=u(ny,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Y;_text;_stateChanges=new A;constructor(){let e=u(yt);e.load(vi),e.load(Tf),this._signalDisableRipple=!!this._parent&&Bi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!kn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gl(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ze(bj,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&q("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&($e("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),V("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ie]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:xj,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Re(yj),C(0,Cj,1,2,"mat-pseudo-checkbox",1),$(1),g(2,"span",2,0),$(4,1),p(),C(5,wj,1,1,"mat-pseudo-checkbox",3),C(6,Dj,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),m(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),m(),w(r.group&&r.group._inert?6:-1),m(),M("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[$I,To],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function WI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function GI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var qI=jf();function eM(t){return new Om(t.get(Yn),t.get(J))}var Om=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ht(-this._previousScrollPosition.left),n.style.top=ht(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),qI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),qI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function tM(t,n){return new Nm(t.get(qa),t.get(F),t.get(Yn),n)}var Nm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Oe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var vl=class{enable(){}disable(){}attach(){}};function iy(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function YI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Vm(t,n){return new Pm(t.get(qa),t.get(Yn),t.get(F),n)}var Pm=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();iy(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},nM=(()=>{class t{_injector=u(K);constructor(){}noop=()=>new vl;close=e=>tM(this._injector,e);block=()=>eM(this._injector);reposition=e=>Vm(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sr=class{positionStrategy;scrollStrategy=new vl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Fm=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var iM=(()=>{class t{_attachedOverlays=[];_document=u(J);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rM=(()=>{class t extends iM{_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oM=(()=>{class t extends iM{_platform=u(Ie);_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Wt(e)};_clickListener=e=>{let i=Wt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(ZI(s.overlayElement,i)||ZI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var aM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),sM=(()=>{class t{_platform=u(Ie);_containerElement;_document=u(J);_styleLoader=u(yt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||F_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),F_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(aM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ry=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function oy(t){return t&&t.nodeType===1}var Lm=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new A;_attachments=new A;_detachments=new A;_positionStrategy;_scrollStrategy;_locationChanges=_e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new A;_outsidePointerEvents=new A;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,d=!1,f,v){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=v,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ct(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=z(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ht(this._config.width),n.height=ht(this._config.height),n.minWidth=ht(this._config.minWidth),n.minHeight=ht(this._config.minHeight),n.maxWidth=ht(this._config.maxWidth),n.maxHeight=ht(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;oy(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ry(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Yi(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ct(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},QI="cdk-overlay-connected-position-bounding-box",Ej=/([A-Za-z%]+)$/;function Um(t,n){return new Bm(n,t.get(Yn),t.get(J),t.get(Ie),t.get(sM))}var Bm=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new A;_resizeSubscription=_e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(QI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),d=this._getOverlayFit(l,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Lo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(QI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:oy(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=XI(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let d=0-a,f=a+o.width-i.width,v=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,d,f),k=this._subtractOverflows(o.height,v,h),R=b*k;return{visibleArea:R,isCompletelyWithinViewport:o.width*o.height===R,fitsInViewportVertically:k===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=KI(this._overlayRef.getConfig().minHeight),s=KI(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=XI(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-s:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Sj(this._lastScrollVisibility,i)){let r=new Fm(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,f,v;if(l)v=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-b/2)}return{top:a,left:f,bottom:s,right:v,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ht(i.width),r.height=ht(i.height),r.top=ht(i.top)||"auto",r.bottom=ht(i.bottom)||"auto",r.left=ht(i.left)||"auto",r.right=ht(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ht(o)),a&&(r.maxWidth=ht(a))}this._lastBoundingBoxSize=i,Lo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Lo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Lo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Lo(i,this._getExactOverlayY(e,n,d)),Lo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ht(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ht(a.maxWidth):o&&(i.maxWidth="")),Lo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ht(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ht(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:YI(n,i),isOriginOutsideView:iy(n,i),isOverlayClipped:YI(e,i),isOverlayOutsideView:iy(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Yi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof B)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Lo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function KI(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(Ej);return!e||e==="px"?parseFloat(n):null}return t||null}function XI(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Sj(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var JI="cdk-global-overlay-wrapper";function Hm(t){return new jm}var jm=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(JI),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,f=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",h="",b="",k="";c?k="flex-start":d==="center"?(k="center",v?b=f:h=f):v?d==="left"||d==="end"?(k="flex-end",h=f):(d==="right"||d==="start")&&(k="flex-start",b=f):d==="left"||d==="start"?(k="flex-start",h=f):(d==="right"||d==="end")&&(k="flex-end",b=f),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":b,e.justifyContent=k,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(JI),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},cM=(()=>{class t{_injector=u(K);constructor(){}global(){return Hm()}flexibleConnectedTo(e){return Um(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lM=new D("OVERLAY_DEFAULT_CONFIG");function ls(t,n){t.get(yt).load(aM);let e=t.get(sM),i=t.get(J),r=t.get(mt),o=t.get(hn),a=t.get(cn),s=t.get(He,null,{optional:!0})||t.get(bt).createRenderer(null,null),c=new Sr(n),l=t.get(lM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),f=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),c.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let v=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return oy(v)?v.after(f):v?.type==="parent"?v.element.appendChild(f):e.getContainerElement().appendChild(f),new Lm(new Qf(d,o,t),f,d,c,t.get(F),t.get(rM),i,t.get(gr),t.get(oM),n?.disableAnimations??t.get(cc,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var dM=(()=>{class t{scrollStrategies=u(nM);_positionBuilder=u(cM);_injector=u(K);constructor(){}create(e){return ls(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({providers:[dM],imports:[We,K_,W_,W_]})}return t})();var $m=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[We]})}return t})();var ay=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[Ga,$m,cs,We]})}return t})();var Ij=["panel"],Mj=["*"];function kj(t,n){if(t&1&&(ue(0,"div",1,0),$(2),ge()),t&2){let e=n.id,i=x();At(i._classList),V("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),$e("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var sy=class{source;option;constructor(n,e){this.source=n,this.option=e}},uM=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),fM=(()=>{class t{_changeDetectorRef=u(Qe);_elementRef=u(B);_defaults=u(uM);_animationsDisabled=Ke();_activeOptionChanges=_e.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Y;opened=new Y;closed=new Y;optionActivated=new Y;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Ie);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Yc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new sy(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&jt(o,cs,5)(o,ny,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ze(kt,7)(Ij,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ie],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ie],requireSelection:[2,"requireSelection","requireSelection",ie],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ie],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ie]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ne([{provide:ty,useExisting:t}])],ngContentSelectors:Mj,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Re(),Ca(0,kj,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var Tj={provide:wr,useExisting:Kt(()=>cy),multi:!0};var Aj=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(K);return()=>Vm(t)}}),cy=(()=>{class t{_environmentInjector=u(Be);_element=u(B);_injector=u(K);_viewContainerRef=u(Bt);_zone=u(F);_changeDetectorRef=u(Qe);_dir=u(cn,{optional:!0});_formField=u(dl,{optional:!0,host:!0});_viewportRuler=u(Yn);_scrollStrategy=u(Aj);_renderer=u(He);_animationsDisabled=Ke();_defaults=u(uM,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new A;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=_e.EMPTY;_breakpointObserver=u(Io);_handsetLandscapeSubscription=_e.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new A;_overlayPanelClass=Yi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Lf(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Yt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Oe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Oe(()=>this._overlayAttached)):Q()).pipe(ee(e=>e instanceof gl?e:null))}optionSelections=Wr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Nt(e),vt(()=>Yt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(vt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new re(e=>{let i=o=>{let a=Wt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=kn(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Sf()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new re(r=>{ct(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(_t(()=>this._positionStrategy.reapplyLastPosition()),Zh(0))??Q();return Yt(e,i).pipe(vt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),gt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;P_(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Zn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=ls(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Vf.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!kn(e)||e.keyCode===38&&kn(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Sr({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Um(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=WI(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=GI(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Lf(this._trackedModal,"aria-owns",i),P_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Lf(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&q("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ie]},exportAs:["matAutocompleteTrigger"],features:[Ne([Tj]),Se]})}return t})(),mM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[zm,ay,Xc,ay,We]})}return t})();function Oj(t,n){if(t&1&&(ue(0,"a",4),_(1),ge()),t&2){let e=x();$e("href",e.titleHref(),qe),m(),ae(e.title())}}function Nj(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.title()," ")}}function Pj(t,n){if(t&1&&(ue(0,"p"),_(1),ge()),t&2){let e=n.$implicit;m(),ae(e)}}var Wm=class t{label=fe.required();title=fe.required();titleHref=fe();textFields=fe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"h2",1),_(2),ge(),Ae(3,"div",2),ue(4,"h2",3),C(5,Oj,2,2,"a",4)(6,Nj,1,1),ge()(),le(7,Pj,2,1,"p",null,Ye)),e&2&&(m(2),ae(i.label()),m(3),w(i.titleHref()?5:6),m(2),de(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function Fj(t,n){t&1&&_(0," \xA0 ")}function Lj(t,n){if(t&1&&(_(0),C(1,Fj,1,0),_(2)),t&2){let e=x(3);De(" ",e.constants.currencySymbol," "),m(),w(e.constants.includeSpace?1:-1),m(),De(" ",e.amount()," ")}}function Bj(t,n){t&1&&_(0," \xA0 ")}function jj(t,n){if(t&1&&(_(0),C(1,Bj,1,0),_(2)),t&2){let e=x(3);De(" ",e.amount()," "),m(),w(e.constants.includeSpace?1:-1),m(),De(" ",e.constants.currencySymbol," ")}}function Vj(t,n){if(t&1&&C(0,Lj,3,3)(1,jj,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function Uj(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" ",e.amount()," ")}}function Hj(t,n){if(t&1&&C(0,Vj,2,1)(1,Uj,1,1),t&2){let e=x();w(e.constants?0:1)}}var Gm=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me),this.constants=this.teamDataService.getCurrencyConstants()}amount=fe.required();constants;static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,Hj,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function zj(t,n){if(t&1&&Ae(0,"img",1),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}var qm=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}tag=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Se],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(ue(0,"div",0),C(1,zj,1,1,"img",1),ue(2,"p"),_(3),ge()()),e&2&&($e("title",i.tag()),m(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),m(2),ae(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Ym=class t{percentage=fe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Se],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Ae(0,"div",0),e&2&&lt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function $j(t,n){if(t&1&&Ae(0,"img",1),t&2){let e=x(3);$e("height",e.height())}}function Wj(t,n){if(t&1&&Ae(0,"img",2),t&2){let e=x(3);$e("height",e.height())}}function Gj(t,n){if(t&1&&C(0,$j,1,1,"img",1)(1,Wj,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function qj(t,n){if(t&1&&Ae(0,"img",3),t&2){let e=x(3);$e("height",e.height())}}function Yj(t,n){if(t&1&&Ae(0,"img",4),t&2){let e=x(3);$e("height",e.height())}}function Zj(t,n){if(t&1&&C(0,qj,1,1,"img",3)(1,Yj,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function Qj(t,n){if(t&1&&C(0,Gj,2,1)(1,Zj,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var ds=class t{base=fe.required();final=fe.required();invertColors=fe(!1);height=fe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(ue(0,"span",0),C(1,Qj,2,1),ue(2,"span"),_(3),ge()()),e&2&&(m(),w(i.base()!==i.final()?1:-1),m(2),ae(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var Kj=t=>({shaded:t}),Xj=(t,n)=>n.key;function Jj(t,n){if(t&1&&(g(0,"div",10)(1,"p"),_(2),p(),g(3,"p"),_(4),p()()),t&2){let e=n.$implicit,i=n.$index;M("ngClass",rt(3,Kj,i%2===0)),m(2),ae(e.key),m(2),ae(e.value)}}function eV(t,n){if(t&1&&(g(0,"div",6),E(1,"div",7),g(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),p(),g(6,"p"),_(7),p()(),le(8,Jj,5,5,"div",10,Xj),Wn(10,"keyvalue"),p()()),t&2){let e=x();m(7),ae(e.values().baseValue),m(),de(gc(10,1,e.values().modifiers))}}var Zm=class t{name=fe.required();values=fe.required();expanded=fe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4),p(),E(5,"div",4),p(),E(6,"stat-with-buff-icon",5),p(),C(7,eV,11,3,"div",6),p()),e&2&&(m(4),ae(i.name()),m(2),M("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),m(),w(i.expanded()?7:-1))},dependencies:[Hi,ds,zi],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var tV=(t,n)=>n.key;function nV(t,n){if(t&1&&Ae(0,"img",4),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function iV(t,n){if(t&1&&_(0),t&2){let e=x(2);Vi(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function rV(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" (",e.status().remainingTurns," turns) ")}}function oV(t,n){if(t&1&&C(0,iV,1,2)(1,rV,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function aV(t,n){t&1&&_(0,", ")}function sV(t,n){if(t&1&&(_(0),C(1,aV,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Vi(" ",e.value," ",e.key),m(),w(i!==r-1?1:-1)}}function cV(t,n){t&1&&Ae(0,"img",6)}function lV(t,n){t&1&&Ae(0,"img",7)}function dV(t,n){t&1&&Ae(0,"img",8)}function uV(t,n){t&1&&Ae(0,"img",9)}function fV(t,n){if(t&1&&(ue(0,"p"),_(1),ge()),t&2){let e=n.$implicit;m(),ae(e)}}var Qm=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}status=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Se],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(ue(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,nV,1,1,"img",4),_(5),C(6,oV,2,1),ge(),ue(7,"p"),le(8,sV,2,3,null,null,tV),Wn(10,"keyvalue"),ge()(),ue(11,"div",5),C(12,cV,1,0,"img",6),C(13,lV,1,0,"img",7)(14,dV,1,0,"img",8)(15,uV,1,0,"img",9),ge()(),le(16,fV,2,1,"p",null,Ye),ge()),e&2){let r;m(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),De(" ",i.status().name," "),m(),w((i.status().remainingTurns??0)>0?6:-1),m(2),de(gc(10,5,i.status().additionalStats)),m(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),m(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),m(3),de(i.systemData==null?null:i.systemData.textFields)}},dependencies:[zi],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var ly=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(ly||{});function mV(t,n){if(t&1&&Ae(0,"img",2),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function hV(t,n){if(t&1&&(ue(0,"p"),_(1),ge()),t&2){let e=n.$implicit;m(),ae(e)}}var Km=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}name=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Se],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(ue(0,"div",0)(1,"div",1),C(2,mV,1,1,"img",2),ue(3,"span"),_(4),ge()(),le(5,hV,2,1,"p",null,Ye),ge()),e&2&&(m(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),m(2),ae(i.name()),m(),de(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var pV=t=>({opacity50:t}),gV=t=>({droppableTextColor:t}),_l=()=>[],vV=(t,n)=>n.key;function _V(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function bV(t,n){if(t&1&&_(0),t&2){let e=x();De(" (",e.item().uses,") ")}}function yV(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,qe)("title",i)}}function xV(t,n){if(t&1&&C(0,yV,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function CV(t,n){if(t&1&&le(0,xV,1,1,null,null,En),t&2){let e=x();de(e.item().engravings)}}function wV(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getTagByName(i))==null?null:e.spriteURL,qe)("title",i)}}function DV(t,n){if(t&1&&C(0,wV,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function EV(t,n){if(t&1&&le(0,DV,1,1,null,null,En),t&2){let e=x();de(e.item().tags)}}function SV(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function IV(t,n){t&1&&E(0,"img",8)}function MV(t,n){t&1&&E(0,"img",9)}function kV(t,n){t&1&&E(0,"img",10)}function TV(t,n){if(t&1&&(g(0,"div",14)(1,"div"),_(2),p(),E(3,"stat-with-buff-icon",15),p()),t&2){let e=n.$implicit;m(2),ae(e.key),m(),M("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function AV(t,n){if(t&1&&(le(0,TV,4,5,"div",14,vV),Wn(2,"keyvalue")),t&2){let e=x(3);de(go(2,0,e.item().stats,e.sortStats))}}function RV(t,n){if(t&1&&(_(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);m(),M("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function OV(t,n){if(t&1&&(g(0,"div",14)(1,"div"),_(2,"Rng"),p(),g(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,RV,2,3),p()()),t&2){let e,i,r,o=x(3);m(4),M("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),m(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function NV(t,n){t&1&&_(0," Square ")}function PV(t,n){t&1&&_(0," Cross ")}function FV(t,n){t&1&&_(0," Saltire ")}function LV(t,n){t&1&&_(0," Star ")}function BV(t,n){if(t&1&&(g(0,"div",14)(1,"div"),_(2,"Shp"),p(),g(3,"div"),C(4,NV,1,0)(5,PV,1,0)(6,FV,1,0)(7,LV,1,0),p()()),t&2){let e,i=x(3);m(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function jV(t,n){t&1&&_(0," Quantity ")}function VV(t,n){t&1&&_(0," Uses ")}function UV(t,n){if(t&1&&_(0),t&2){let e=x(4);De(" ",e.item().uses," ")}}function HV(t,n){t&1&&_(0," /\xA0 ")}function zV(t,n){if(t&1&&(C(0,HV,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),m(),M("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function $V(t,n){if(t&1&&(g(0,"div",14)(1,"div"),C(2,jV,1,0)(3,VV,1,0),p(),g(4,"div",16),C(5,UV,1,1),C(6,zV,2,5),p()()),t&2){let e=x(3);m(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),m(3),w((e.item().uses??0)>0?5:-1),m(),w((e.item().maxUses??0)>0?6:-1)}}function WV(t,n){if(t&1&&(E(0,"mat-divider"),g(1,"div",13),C(2,AV,3,3),C(3,OV,6,4,"div",14),C(4,BV,8,1,"div",14),C(5,$V,7,3,"div",14),p()),t&2){let e,i=x(2);m(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??Sn(4,_l)).length>0||i.hasNonZeroStatValue()?2:-1),m(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),m(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),m(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function GV(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;M("name",e)}}function qV(t,n){if(t&1&&(g(0,"p"),_(1),p()),t&2){let e=n.$implicit;m(),ae(e)}}function YV(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);M("src",e.systemData==null?null:e.systemData.graphicURL,qe)}}function ZV(t,n){if(t&1&&(E(0,"mat-divider"),le(1,GV,1,1,"engraving",18,En),le(3,qV,2,1,"p",null,Ye),C(5,YV,1,1,"img",19)),t&2){let e=x(2);m(),de(e.item().engravings),m(2),de(e.systemData==null?null:e.systemData.textFields),m(2),w(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function QV(t,n){if(t&1&&(g(0,"div",11),C(1,WV,6,5),C(2,ZV,6,1),p()),t&2){let e,i=x();m(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??Sn(2,_l)).length>0?1:-1),m(),w(((i.systemData==null?null:i.systemData.textFields)??Sn(3,_l)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function KV(t,n){t&1&&(g(0,"div",20),E(1,"img",21),g(2,"span"),_(3,"Item Range Not Visible"),p()())}function XV(t,n){t&1&&(g(0,"div",20),E(1,"img",21),g(2,"span"),_(3,"Item Not Found In Inventory"),p()())}function JV(t,n){if(t&1&&(E(0,"mat-divider"),C(1,KV,4,0,"div",20),C(2,XV,4,0,"div",20)),t&2){let e=x();m(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),m(),w(e.item().isNotInInventory?2:-1)}}var Xm=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}ItemRangeShape=ly;item=fe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Se],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(g(0,"div",0),q("click",function(){return i.toggleExpansion()}),g(1,"div",1)(2,"div",2)(3,"div",3),C(4,_V,1,1,"img",4),g(5,"div",5),_(6),C(7,bV,1,1),p(),C(8,CV,2,0),C(9,EV,2,0),p(),g(10,"div",6),C(11,SV,1,1),_(12),p()(),g(13,"div",7),C(14,IV,1,0,"img",8),C(15,MV,1,0,"img",9),C(16,kV,1,0,"img",10),p()(),C(17,QV,3,4,"div",11),C(18,JV,3,2),p()),e&2&&(m(),M("ngClass",rt(15,pV,!i.item().canEquip||i.item().isUsePrevented)),m(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),M("ngClass",rt(17,gV,i.item().isDroppable)),m(),De(" ",i.item().name," "),m(),w((i.item().uses??0)>0?7:-1),m(),w((i.item().engravings??Sn(19,_l)).length>0?8:-1),m(),w((i.item().tags??Sn(20,_l)).length>0?9:-1),m(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),m(),Vi(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),m(2),w(i.item().isUsePrevented?14:-1),m(),w(i.item().isDroppable?15:-1),m(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),m(),w(i.isExpanded?17:-1),m(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[yi,ds,Hi,Km,zi],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function eU(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function tU(t,n){if(t&1&&(g(0,"div",5),_(1),p()),t&2){let e=x();m(),De(" ",e.getAdditionalStatsText()," ")}}function nU(t,n){t&1&&E(0,"img",7)}function iU(t,n){if(t&1&&(g(0,"p"),_(1),p()),t&2){let e=n.$implicit;m(),ae(e)}}function rU(t,n){if(t&1&&(E(0,"mat-divider"),le(1,iU,2,1,"p",null,Ye)),t&2){let e=x();m(),de(e.systemData==null?null:e.systemData.textFields)}}var Jm=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}skill=fe.required();expanded=fe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Se],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,eU,1,1,"img",4),_(5),p(),C(6,tU,2,1,"div",5),p(),g(7,"div",6),C(8,nU,1,0,"img",7),p()(),C(9,rU,3,0),p()),e&2&&(m(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),m(),De(" ",i.skill().name," "),m(),w(i.getAdditionalStatsText().length>0?6:-1),m(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),m(),w(i.expanded()?9:-1))},dependencies:[yi],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var oU=t=>({flipHorz:t}),eh=t=>({rotate90:t}),hM=()=>[],dy=(t,n)=>n.key;function aU(t,n){if(t&1&&(g(0,"div",0),E(1,"img",32),p()),t&2){let e=x();m(),M("src",e.unit().sprite.portraitURL,qe)}}function sU(t,n){if(t&1&&_(0),t&2){let e=x();De(" Lvl. ",e.unit().stats.level," ")}}function cU(t,n){if(t&1&&_(0),t&2){let e,i=x();De(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function lU(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();M("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,qe)}}function dU(t,n){if(t&1&&(g(0,"div",10)(1,"div",33)(2,"div",34),_(3),p(),g(4,"div",35),E(5,"div",36)(6,"div",37),p()()()),t&2){let e=x();M("title",e.unit().player),m(3),ae(e.unit().player)}}function uU(t,n){if(t&1&&(g(0,"p",41),_(1),p()),t&2){let e=n.$implicit;m(),ae(e)}}function fU(t,n){if(t&1&&le(0,uU,2,1,"p",41,Ye),t&2){let e=x(2);de(e.unit().textFields)}}function mU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);M("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function hU(t,n){if(t&1&&le(0,mU,1,3,"text-fields-with-labeled-header",42,Ye),t&2){let e=x(2);de(e.unit().classes)}}function pU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);M("titleHref",e.unit().characterApplicationURL)}}function gU(t,n){if(t&1&&(g(0,"div",13),C(1,fU,2,0),E(2,"text-fields-with-labeled-header",38),C(3,hU,2,0),E(4,"text-fields-with-labeled-header",39),C(5,pU,1,1,"text-fields-with-labeled-header",40),p()),t&2){let e,i=x();m(),w(i.unit().textFields?1:-1),m(),M("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),m(),w(i.unit().classes?3:-1),m(),M("title",i.unit().movementType),m(),w(i.unit().characterApplicationURL?5:-1)}}function vU(t,n){if(t&1&&(g(0,"div",22)(1,"div",17),_(2,"Exp"),p(),g(3,"div"),_(4),p()()),t&2){let e=x();m(4),ae(e.unit().stats.experience)}}function _U(t,n){if(t&1&&(g(0,"div",22)(1,"div",17),_(2,"Money"),p(),E(3,"currency",43),p()),t&2){let e=x();m(3),M("amount",e.unit().stats.heldCurrency)}}function bU(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;M("tag",e)}}function yU(t,n){if(t&1&&(g(0,"div",23)(1,"div",44),E(2,"img",45),p(),g(3,"div",46),le(4,bU,1,1,"unit-tag",47,Ye),p()()),t&2){let e=x();m(4),de(e.unit().tags)}}function xU(t,n){if(t&1&&(g(0,"div",24)(1,"div",48),E(2,"img",49),p(),g(3,"div",34)(4,"p"),_(5),p()()()),t&2){let e=x();m(5),ae(e.unit().behavior)}}function CU(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;M("status",e)}}function wU(t,n){if(t&1&&(g(0,"div",25)(1,"div",50),E(2,"img",51),p(),g(3,"div",52),le(4,CU,1,1,"unit-status-condition",53,Ye),p()()),t&2){let e=x();m(4),de(e.unit().statusConditions)}}function DU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function EU(t,n){if(t&1&&(g(0,"div",29),le(1,DU,1,3,"modified-unit-stat",54,dy),Wn(3,"keyvalue"),p()),t&2){let e=x();m(),de(go(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function SU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function IU(t,n){if(t&1&&(g(0,"div",29),le(1,SU,1,3,"modified-unit-stat",54,dy),Wn(3,"keyvalue"),p()),t&2){let e=x();m(),de(go(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function MU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function kU(t,n){if(t&1&&(g(0,"div",29),le(1,MU,1,3,"modified-unit-stat",54,dy),Wn(3,"keyvalue"),p()),t&2){let e=x();m(),de(go(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function TU(t,n){if(t&1&&(g(0,"h3"),_(1),p()),t&2){let e=x().$index,i=x(2);m(),ae(i.getInventorySubsectionLabel(e))}}function AU(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;M("item",e)}}function RU(t,n){if(t&1&&(g(0,"div",57)(1,"span"),_(2),p()()),t&2){let e=x().$implicit;m(),lt("opacity",.5),m(),De("Empty x",e.emptySlotCount)}}function OU(t,n){if(t&1&&(g(0,"div",55),C(1,TU,2,1,"h3"),le(2,AU,1,1,"inventory-item",56,Ye),C(4,RU,3,3,"div",57),p()),t&2){let e=n.$implicit,i=n.$index,r=x(2);m(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),m(),de(e.items),m(2),w(e.emptySlotCount>0?4:-1)}}function NU(t,n){if(t&1&&le(0,OU,5,2,"div",55,Ye),t&2){let e,i=x();de((e=i.unit().inventory)==null?null:e.subsections)}}function PU(t,n){if(t&1&&(g(0,"h3"),_(1),p()),t&2){let e=x().$index,i=x(3);m(),ae(i.getSkillSubsectionLabel(e))}}function FU(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;M("skill",e)}}function LU(t,n){if(t&1&&(g(0,"div",55),C(1,PU,2,1,"h3"),le(2,FU,1,1,"unit-skill",60,Ye),p()),t&2){let e=n.$implicit,i=n.$index,r=x(3);m(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),m(),de(e.skills)}}function BU(t,n){if(t&1&&le(0,LU,4,1,"div",55,Ye),t&2){let e=x(2);de(e.unit().skillSubsections)}}function jU(t,n){if(t&1){let e=an();E(0,"mat-divider"),g(1,"div",58)(2,"div",59)(3,"button",8),q("click",function(){It(e);let r=x();return Mt(r.toggleSkillsExpansion())}),E(4,"img",9),p(),g(5,"h2"),_(6),p()(),C(7,BU,2,0),p()}if(t&2){let e=x();m(3),M("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),m(),At(rt(5,eh,e.isSkillsInfoExpanded)),m(2),ae(e.getSkillsLabel()),m(),w(e.isSkillsInfoExpanded?7:-1)}}var th=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Me)}unit=fe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Se],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,aU,2,1,"div",0),g(1,"div",1),E(2,"img",2),g(3,"hgroup",3)(4,"h1",4),_(5),p(),g(6,"p",5),C(7,sU,1,1),C(8,cU,1,1),p()(),C(9,lU,1,1,"img",6),p(),g(10,"div",7)(11,"button",8),q("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),p(),C(13,dU,7,2,"div",10),g(14,"button",11),E(15,"img",12),p()(),C(16,gU,6,6,"div",13),g(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),_(21,"HP"),p(),g(22,"div",18)(23,"span",19),_(24),p(),g(25,"span",20),_(26),p()()(),E(27,"unit-hp-bar",21),p(),C(28,vU,5,1,"div",22),C(29,_U,4,1,"div",22),p(),C(30,yU,6,0,"div",23),C(31,xU,6,1,"div",24),C(32,wU,6,0,"div",25),g(33,"div",26)(34,"div",27)(35,"button",8),q("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),p(),g(37,"h2"),_(38,"Stats"),p()(),g(39,"div",28),C(40,EU,4,3,"div",29),C(41,IU,4,3,"div",29),C(42,kU,4,3,"div",29),p()(),E(43,"mat-divider"),g(44,"div",30)(45,"div",31)(46,"button",8),q("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),p(),g(48,"h2"),_(49),p()(),C(50,NU,2,0),p(),C(51,jU,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),m(2),M("src",i.unit().sprite.spriteURL,qe)("ngClass",rt(32,oU,i.shouldFlipUnitSprite())),m(3),ae(i.unit().name),m(2),w(i.unit().stats.level>0?7:-1),m(),w(i.unit().classes?8:-1),m(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),m(2),M("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),m(),At(rt(34,eh,i.isUnitInfoExpanded)),m(),w(i.unit().player?13:-1),m(3),w(i.isUnitInfoExpanded?16:-1),m(8),ae(i.unit().stats.hp.current),m(2),De("/ ",i.unit().stats.hp.maximum),m(),M("percentage",i.unit().stats.hp.percentage),m(),w((i.unit().stats.experience??0)>0?28:-1),m(),w((i.unit().stats.heldCurrency??0)>0?29:-1),m(),w((i.unit().tags??Sn(36,hM)).length>0?30:-1),m(),w(i.unit().behavior?31:-1),m(),w((i.unit().statusConditions??Sn(37,hM)).length>0?32:-1),m(3),M("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),m(),At(rt(38,eh,i.isStatsInfoExpanded)),m(4),w(i.unit().stats.combat?40:-1),m(),w(i.unit().stats.system_NonPrioritized?41:-1),m(),w(i.unit().stats.general?42:-1),m(4),M("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),m(),At(rt(40,eh,i.isInventoryExpanded)),m(2),ae(i.getInventoryLabel()),m(),w(i.isInventoryExpanded?50:-1),m(),w(i.unit().hasSkills?51:-1)}},dependencies:[Kc,Wm,Gm,qm,Ym,Zm,Qm,yi,Xm,Jm,Hi,zi],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var VU=["unitAutocompleteInput"],UU=(t,n)=>n.name;function HU(t,n){if(t&1&&(g(0,"mat-option",5)(1,"div",7),E(2,"img",8),g(3,"div"),_(4),p()()()),t&2){let e=n.$implicit;M("value",e),m(2),M("src",e.sprite.spriteURL,qe),m(2),ae(e.name)}}function zU(t,n){if(t&1&&E(0,"unit-sidenav-display",6),t&2){let e=x();M("unit",e.selectedUnit.value)}}var nh=class t{constructor(n){this.dataService=n;this.dataService=u(Me),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new hb(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(j(Me))};static \u0275cmp=I({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ze(VU,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(g(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),q("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),p(),g(5,"mat-autocomplete",4,1),le(7,HU,5,3,"mat-option",5,UU),p()()(),C(9,zU,1,1,"unit-sidenav-display",6),p()),e&2){let r=sn(6);m(3),M("formControl",i.selectedUnit)("matAutocomplete",r),m(2),M("displayWith",i.formatAutocompleteDisplayValue),m(2),de(i.filteredUnits),m(2),w(i.selectedUnit.value?9:-1)}},dependencies:[lI,aI,lm,JS,eI,ll,ul,Oo,vm,gm,mM,fM,cs,cy,dI,pb,th],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var ih=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),_(1,"map-tiles-view works!"),ge())},encapsulation:2})};var $U=["*"];var WU=["unscopedContent"],GU=["text"],qU=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],YU=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ZU=new D("ListOption"),QU=(()=>{class t{_elementRef=u(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),KU=(()=>{class t{_elementRef=u(B);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),fy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),pM=(()=>{class t{_listOption=u(ZU,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostVars:4,hostBindings:function(i,r){i&2&&V("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),XU=(()=>{class t extends pM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Te]})}return t})(),my=(()=>{class t extends pM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=N({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Te]})}return t})(),JU=new D("MAT_LIST_CONFIG"),uy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=dt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(dt(e))}_disabled=L(!1);_defaultOptions=u(JU,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),eH=(()=>{class t{_elementRef=u(B);_ngZone=u(F);_listBase=u(uy,{optional:!0});_platform=u(Ie);_hostElement;_isButtonElement;_noopAnimations=Ke();_avatars;_icons;set lines(e){this._explicitLines=gi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=dt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(dt(e))}_disabled=L(!1);_subscriptions=new _e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(yt).load(vi);let e=u(Wa,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ko(this,this._ngZone,this._hostElement,this._platform,u(K)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Yt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,contentQueries:function(i,r,o){if(i&1&&jt(o,XU,4)(o,my,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),V("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var gM=(()=>{class t extends uy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ne([{provide:uy,useExisting:t}]),Te],ngContentSelectors:$U,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var vM=(()=>{class t extends eH{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=dt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&jt(o,KU,5)(o,QU,5)(o,fy,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ze(WU,5)(GU,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),V("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Te],ngContentSelectors:YU,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Re(qU),$(0),g(1,"span",1),$(2,1),$(3,2),g(4,"span",2,0),q("cdkObserveContent",function(){return r._updateItemLines(!0)}),$(6,3),p()(),$(7,4),$(8,5),E(9,"div",3))},dependencies:[Rf],encapsulation:2,changeDetection:0})}return t})();var _M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=oe({imports:[Of,Ga,$m,We,NS]})}return t})();function bM(t){return Error(`Unable to find icon with the name "${t}"`)}function nH(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function yM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function xM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Ki=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},wM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Ki(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Et.HTML,r);if(!a)throw xM(r);let s=Eo(a);return this._addSvgIconConfig(e,i,new Ki("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Ki(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Et.HTML,i);if(!o)throw xM(i);let a=Eo(o);return this._addSvgIconSetConfig(e,new Ki("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Et.RESOURCE_URL,e);if(!i)throw yM(e);let r=this._cachedIconsByUrl.get(i);return r?Q(rh(r)):this._loadSvgIconFromConfig(new Ki(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(i,o)),ee(o=>rh(o)))}getNamedSvgIcon(e,i=""){let r=CM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Is(bM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(rh(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ee(i=>rh(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Q(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(qr(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),Q(null)})));return Ts(o).pipe(ee(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw bM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(i=>e.svgText=i),ee(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(_t(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Eo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Eo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw nH();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Et.RESOURCE_URL,i);if(!a)throw yM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ee(l=>Eo(l)),Yr(()=>this._inProgressUrlFetches.delete(a)),As());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(CM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return iH(o)?new Ki(o.url,null,o.options):new Ki(o,null)}}static \u0275fac=function(i){return new(i||t)(G(Wi,8),G(Sc),G(J,8),G(Qt))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rh(t){return t.cloneNode(!0)}function CM(t,n){return t+":"+n}function iH(t){return!!(t.url&&t.options)}var rH=["*"],oH=new D("MAT_ICON_DEFAULT_OPTIONS"),aH=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(J),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),DM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],sH=DM.map(t=>`[${t}]`).join(", "),cH=/^url\(['"]?#(.*?)['"]?\)$/,EM=(()=>{class t{_elementRef=u(B);_iconRegistry=u(wM);_location=u(aH);_errorHandler=u(Qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_e.EMPTY;constructor(){let e=u(new Ui("aria-hidden"),{optional:!0}),i=u(oH,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(sH),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)DM.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(cH):null;if(l){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(gt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),At(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:rH,decls:1,vars:0,template:function(i,r){i&1&&(Re(),$(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})();var lH=()=>["../.."],dH=t=>[t,"convoy"],uH=t=>[t,"shop"],fH=t=>[t,"map","analyze"];function mH(t,n){if(t&1&&(g(0,"a",1),E(1,"img",3),g(2,"span",4),_(3,"Google Sheets"),p(),g(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),p()()()),t&2){let e=x();M("href",e.getGoogleSheetUrl(),qe)}}function hH(t,n){if(t&1&&(g(0,"a",1),E(1,"img",3),g(2,"span",4),_(3,"Chapter Post"),p(),g(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),p()()()),t&2){let e=x();M("href",e.chapterPostUrl(),qe)}}function pH(t,n){if(t&1&&(g(0,"a",2),E(1,"img",3),g(2,"span",4),_(3,"Convoy"),p()()),t&2){let e=x();M("routerLink",rt(1,dH,`/${e.teamName}`))}}function gH(t,n){if(t&1&&(g(0,"a",2),E(1,"img",6),g(2,"span",4),_(3,"Shop"),p()()),t&2){let e=x();M("routerLink",rt(1,uH,`/${e.teamName}`))}}function vH(t,n){if(t&1&&(g(0,"a",2),E(1,"img",3),g(2,"span",4),_(3,"Map Analyzer Tool"),p()()),t&2){let e=x();M("routerLink",rt(1,fH,`/${e.teamName}`))}}var oh=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(Vt)}googleWorksheetID=fe(void 0);chapterPostUrl=fe(void 0);showConvoyLink=fe(!1);showShopLink=fe(!1);showMapAnalyzerLink=fe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(j(Vt))};static \u0275cmp=I({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"mat-action-list"),C(2,mH,7,1,"a",1),C(3,hH,7,1,"a",1),C(4,pH,4,3,"a",2),C(5,gH,4,3,"a",2),C(6,vH,4,3,"a",2),g(7,"a",2),E(8,"img",3),g(9,"span",4),_(10,"Home"),p()()()()),e&2&&(m(2),w((i.googleWorksheetID()??"").length>0?2:-1),m(),w((i.chapterPostUrl()??"").length>0?3:-1),m(),w(i.showConvoyLink()?4:-1),m(),w(i.showShopLink()?5:-1),m(),w(i.showMapAnalyzerLink()?6:-1),m(),M("routerLink",Sn(6,lH)))},dependencies:[_M,gM,vM,my,fy,ja,EM],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var SM;function bl(){return SM}function hy(t){SM=t}var IM;function py(t){IM=t}function gy(){return IM}function Ir(t,n){return t?typeof t=="number"?t:typeof t=="string"&&t.endsWith("%")?(n??(n=1),n*(parseFloat(t)/100)):Number.isNaN(parseFloat(t))?0:parseFloat(t):0}function Xn(t){return typeof t=="number"?"number":t.endsWith("%")?"percentage":Number.isNaN(parseInt(t,10))?"keyword":"number"}function ah(t,n,e){return(n[t]-e[t])/2}function MM(t,n,e,i,r){let o=n==="percentage"?i[e]-r[e]:1;return Ir(t)*o}function sh(t,n,e){let[i,r]=t,o=Xn(i),a=Xn(r),s={x:void 0,y:void 0};switch(i){case"top":s.y=0;break;case"bottom":s.y=n.height-e.height;break;case"center":r==="left"||r==="right"?s.y=ah("height",n,e):s.x=ah("width",n,e);break;case"left":s.x=0;break;case"right":s.x=n.width-e.width;break;default:{let c=r==="top"||r==="bottom"||a!=="keyword"?"width":"height",l=c==="width"?"x":"y";s[l]=MM(i,o,c,n,e)}}switch(r){case"top":s.y=0;break;case"bottom":s.y=n.height-e.height;break;case"center":s.y===void 0?s.y=ah("height",n,e):s.x=ah("width",n,e);break;case"left":s.x=0;break;case"right":s.x=n.width-e.width;break;default:{let c=s.y===void 0?"y":"x",l=c==="y"?"height":"width";s[c]=MM(r,a,l,n,e)}}return s}function ch(t,n,e,i){let r=t==="right"||t==="bottom",o=e==="percentage"?n*i:n;return r?-o:o}function kM(t,n,e){let[i,r,o,a]=t,s=Xn(i),c=Xn(r),l=Xn(o),d=Xn(a);if(c==="keyword"||d==="keyword")throw new Error("Invalid objectPosition value: second and fourth values must be numbers or percentages");if(s!=="keyword"||l!=="keyword")throw new Error("Invalid objectPosition value: first and third values must be keywords");let f=sh([i,o],n,e),v=y({},f),h=Ir(r),b=Ir(a);return i==="left"||i==="right"?v.x=f.x+ch(i,h,c,e.width):(i==="top"||i==="bottom")&&(v.y=f.y+ch(i,h,c,e.height)),o==="left"||o==="right"?v.x=f.x+ch(o,b,d,e.width):(o==="top"||o==="bottom")&&(v.y=f.y+ch(o,b,d,e.height)),v}function TM(t,n,e){let i=t[0],r={x:void 0,y:void 0};switch(i){case"top":r.y=0,r.x=(n.width-e.width)/2;break;case"bottom":r.y=n.height-e.height,r.x=(n.width-e.width)/2;break;case"left":r.x=0,r.y=(n.height-e.height)/2;break;case"right":r.x=n.width-e.width,r.y=(n.height-e.height)/2;break;case"center":r.x=(n.width-e.width)/2,r.y=(n.height-e.height)/2;break;default:{let a=Xn(i)==="percentage"?n.width-e.width:1;r.x=Ir(i)*a,r.y=(n.height-e.height)/2}}return r}function us(t,n,e){if(!t)return{x:0,y:0};let i=typeof t=="string"?t.split(" "):[t];switch(i.length){case 1:return TM(i,n,e);case 2:return sh(i,n,e);case 4:return kM(i,n,e);default:throw new Error("Invalid objectPosition value: must have 1, 2, or 4 values")}}var vy={width:0,height:0};function yl(t){let n=t.target.getLocalBounds(),e=t.target.scale;return vy.width=Math.abs(n.width*e.x),vy.height=Math.abs(n.height*e.y),vy}function lh(t,n,e=.49){return Math.abs(t-n)<e}function _H(t,n=0,e={}){let i,r,o=e.maxWait?e.maxWait:n,a,s,c,l=0,d=!!e.leading,f="maxWait"in e,v=e.trailing??!0,h=n!==0&&typeof globalThis.requestAnimationFrame=="function";if(typeof t!="function")throw new TypeError("Expected a function");function b(Fe){let Ct=i,Rn=r;return i=r=void 0,l=Fe,a=t.apply(Rn,Ct),a}function k(Fe,Ct){return h?(typeof s=="number"&&globalThis.cancelAnimationFrame(s),globalThis.requestAnimationFrame(Fe)):setTimeout(Fe,Ct)}function R(Fe){if(h){globalThis.cancelAnimationFrame(Fe);return}clearTimeout(Fe)}function P(Fe){return l=Fe,s=k(Ce,n),d?b(Fe):a}function me(Fe){let Ct=Fe-(c||0),Rn=Fe-l,gs=n-Ct;return f?Math.min(gs,o-Rn):gs}function ke(Fe){let Ct=Fe-(c||0),Rn=Fe-l;return c===void 0||Ct>=n||Ct<0||f&&Rn>=o}function Ce(){let Fe=Date.now();if(ke(Fe))return et(Fe);s=k(Ce,me(Fe))}function et(Fe){return s=void 0,v&&i?b(Fe):(i=r=void 0,a)}function St(){s!==void 0&&R(s),l=0,i=c=r=s=void 0}function qt(){return s===void 0?a:et(Date.now())}function ln(){return s!==void 0}function Ut(...Fe){let Ct=Date.now(),Rn=ke(Ct);if(i=Fe,r=this,c=Ct,Rn){if(s===void 0)return P(c);if(f)return s=k(Ce,n),b(c)}return s===void 0&&(s=k(Ce,n)),a}return Ut.cancel=St,Ut.flush=qt,Ut.pending=ln,Ut}function AM(t,n,e={}){let i=e.leading??!0,r=e.trailing??!0;if(typeof t!="function")throw new TypeError("Expected a function");return _H(t,n,{leading:i,trailing:r,maxWait:n})}var bH=Object.defineProperty,yH=(t,n,e)=>n in t?bH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Bo=(t,n,e)=>yH(t,typeof n!="symbol"?n+"":n,e),xl=class{constructor(){Bo(this,"autoUpdate",!0),Bo(this,"_debugEnabled",!1),Bo(this,"_debugRenderer",null),Bo(this,"_throttledUpdateSize"),Bo(this,"_throttle",100),Bo(this,"_modificationCount",50)}async init(n){hy(await Ay()),py(bl().Config.create());let{layout:e}=n??{},{autoUpdate:i,enableDebug:r,throttle:o,debugModificationCount:a}=e??{};r&&this.enableDebug(!0),i!==void 0&&(this.autoUpdate=i),this._throttle=o??this._throttle,this._throttledUpdateSize=AM(s=>this._updateSize(s),this._throttle,{leading:!0,trailing:!0}),this._modificationCount=a??this._modificationCount}async enableDebug(n=!this._debugEnabled){if(this._debugEnabled=n,!this._debugRenderer){let e=await import("./chunk-LSU5O5HI.js");this._debugRenderer=new e.DebugRenderer}this._debugEnabled||this._debugRenderer.reset()}update(n){this._debugEnabled&&this._debugRenderer&&(this._debugRenderer.reset(),n.addChild(this._debugRenderer.holder)),this._throttle===0?this._updateSize(n):this._throttledUpdateSize(n),this.updateLayout(n)}prerender({container:n}){this.autoUpdate&&this.update(n)}_updateSize(n){if(n.destroyed)return;let e=n._layout;if(e){let i=e.style;if(i.width==="intrinsic"||i.height==="intrinsic"){let r=yl(e);if(i.width==="intrinsic"){let o=e.yoga.getWidth().value;lh(o,r.width)||(e.yoga.setWidth(r.width),e.invalidateRoot())}if(i.height==="intrinsic"){let o=e.yoga.getHeight().value;lh(o,r.height)||(e.yoga.setHeight(r.height),e.invalidateRoot())}}if(!n.visible){e._onChildRemoved();return}}for(let i=0;i<n.children.length;i++)this._updateSize(n.children[i])}updateLayout(n){var e,i,r,o;let a=n._layout;if(n.visible){if(a){let s=a.yoga,c=a.style,l=(e=n.parent)==null?void 0:e.isOverflowContainer;if(!((i=n.parent)!=null&&i._layout)&&!l&&a._isDirty&&(a._isDirty=!1,s.calculateLayout(c.width,c.height,s.getDirection()??bs.LTR)),s.hasNewLayout()||a._forceUpdate){s.markLayoutSeen(),a._forceUpdate=!1,a._computedLayout=s.getComputedLayout();let f=us(c.transformOrigin,a._computedLayout,{width:0,height:0});a._computedPixiLayout=z(y({},n.computeLayoutData(a._computedLayout)),{originX:f.x,originY:f.y}),n.emit("layout",a),(r=n.onLayout)==null||r.call(n,a),n._onUpdate()}this._debugEnabled&&(a._styles.custom.debug||a._modificationCount>this._modificationCount&&a._styles.custom.debugHeat!==!1)&&((o=this._debugRenderer)==null||o.render(a))}for(let s=0;s<n.children.length;s++)this.updateLayout(n.children[s])}}destroy(){!this._debugEnabled&&this._debugRenderer&&this._debugRenderer.destroy()}};Bo(xl,"extension",{type:[vs.WebGLSystem,vs.WebGPUSystem],name:"layout"});var RM={"flex-start":wt.FlexStart,"flex-end":wt.FlexEnd,center:wt.Center,stretch:wt.Stretch,"space-between":wt.SpaceBetween,"space-around":wt.SpaceAround,"space-evenly":wt.SpaceEvenly},OM={"flex-start":wt.FlexStart,"flex-end":wt.FlexEnd,center:wt.Center,stretch:wt.Stretch,baseline:wt.Baseline},NM={auto:wt.Auto,"flex-start":wt.FlexStart,"flex-end":wt.FlexEnd,center:wt.Center,stretch:wt.Stretch,baseline:wt.Baseline},PM={"border-box":Ho.BorderBox,"content-box":Ho.ContentBox},FM={ltr:bs.LTR,rtl:bs.RTL},LM={none:Al.None,flex:Al.Flex,contents:Al.Contents},BM={row:ys.Row,column:ys.Column,"row-reverse":ys.RowReverse,"column-reverse":ys.ColumnReverse},jM={wrap:Pl.Wrap,nowrap:Pl.NoWrap,"wrap-reverse":Pl.WrapReverse},VM={"flex-start":Rr.FlexStart,"flex-end":Rr.FlexEnd,center:Rr.Center,"space-between":Rr.SpaceBetween,"space-around":Rr.SpaceAround,"space-evenly":Rr.SpaceEvenly},UM={visible:Ol.Visible,hidden:Ol.Hidden,scroll:Ol.Scroll},HM={absolute:Nl.Absolute,relative:Nl.Relative,static:Nl.Static},xH={alignContent:(t,n)=>t.setAlignContent(CH(n)),alignItems:(t,n)=>t.setAlignItems(wH(n)),alignSelf:(t,n)=>t.setAlignSelf(DH(n)),aspectRatio:(t,n)=>t.setAspectRatio(n),borderBottomWidth:(t,n)=>t.setBorder(ve.Bottom,n),borderEndWidth:(t,n)=>t.setBorder(ve.End,n),borderLeftWidth:(t,n)=>t.setBorder(ve.Left,n),borderRightWidth:(t,n)=>t.setBorder(ve.Right,n),borderStartWidth:(t,n)=>t.setBorder(ve.Start,n),borderTopWidth:(t,n)=>t.setBorder(ve.Top,n),borderWidth:(t,n)=>t.setBorder(ve.All,n),borderInlineWidth:(t,n)=>t.setBorder(ve.Horizontal,n),borderBlockWidth:(t,n)=>t.setBorder(ve.Vertical,n),bottom:(t,n)=>t.setPosition(ve.Bottom,n),boxSizing:(t,n)=>t.setBoxSizing(EH(n)),direction:(t,n)=>t.setDirection(SH(n)),display:(t,n)=>t.setDisplay(IH(n)),end:(t,n)=>t.setPosition(ve.End,n),flex:(t,n)=>t.setFlex(n),flexBasis:(t,n)=>t.setFlexBasis(n),flexDirection:(t,n)=>t.setFlexDirection(MH(n)),rowGap:(t,n)=>t.setGap(Rl.Row,n),gap:(t,n)=>t.setGap(Rl.All,n),columnGap:(t,n)=>t.setGap(Rl.Column,n),flexGrow:(t,n)=>t.setFlexGrow(n),flexShrink:(t,n)=>t.setFlexShrink(n),flexWrap:(t,n)=>t.setFlexWrap(kH(n)),height:(t,n)=>t.setHeight(n),justifyContent:(t,n)=>t.setJustifyContent(TH(n)),left:(t,n)=>t.setPosition(ve.Left,n),margin:(t,n)=>t.setMargin(ve.All,n),marginBottom:(t,n)=>t.setMargin(ve.Bottom,n),marginEnd:(t,n)=>t.setMargin(ve.End,n),marginLeft:(t,n)=>t.setMargin(ve.Left,n),marginRight:(t,n)=>t.setMargin(ve.Right,n),marginStart:(t,n)=>t.setMargin(ve.Start,n),marginTop:(t,n)=>t.setMargin(ve.Top,n),marginInline:(t,n)=>t.setMargin(ve.Horizontal,n),marginBlock:(t,n)=>t.setMargin(ve.Vertical,n),maxHeight:(t,n)=>t.setMaxHeight(n),maxWidth:(t,n)=>t.setMaxWidth(n),minHeight:(t,n)=>t.setMinHeight(n),minWidth:(t,n)=>t.setMinWidth(n),overflow:(t,n)=>t.setOverflow(AH(n)),padding:(t,n)=>t.setPadding(ve.All,n),paddingBottom:(t,n)=>t.setPadding(ve.Bottom,n),paddingEnd:(t,n)=>t.setPadding(ve.End,n),paddingLeft:(t,n)=>t.setPadding(ve.Left,n),paddingRight:(t,n)=>t.setPadding(ve.Right,n),paddingStart:(t,n)=>t.setPadding(ve.Start,n),paddingTop:(t,n)=>t.setPadding(ve.Top,n),paddingInline:(t,n)=>t.setPadding(ve.Horizontal,n),paddingBlock:(t,n)=>t.setPadding(ve.Vertical,n),position:(t,n)=>t.setPositionType(RH(n)),right:(t,n)=>t.setPosition(ve.Right,n),start:(t,n)=>t.setPosition(ve.Start,n),top:(t,n)=>t.setPosition(ve.Top,n),insetInline:(t,n)=>t.setPosition(ve.Horizontal,n),insetBlock:(t,n)=>t.setPosition(ve.Vertical,n),inset:(t,n)=>t.setPosition(ve.All,n),width:(t,n)=>t.setWidth(n)};function CH(t){if(t in RM)return RM[t];throw new Error(`"${t}" is not a valid value for alignContent`)}function wH(t){if(t in OM)return OM[t];throw new Error(`"${t}" is not a valid value for alignItems`)}function DH(t){if(t in NM)return NM[t];throw new Error(`"${t}" is not a valid value for alignSelf`)}function EH(t){if(t in PM)return PM[t];throw new Error(`"${t}" is not a valid value for boxSizing`)}function SH(t){if(t in FM)return FM[t];throw new Error(`"${t}" is not a valid value for direction`)}function IH(t){if(t in LM)return LM[t];throw new Error(`"${t}" is not a valid value for display`)}function MH(t){if(t in BM)return BM[t];throw new Error(`"${t}" is not a valid value for flexDirection`)}function kH(t){if(t in jM)return jM[t];throw new Error(`"${t}" is not a valid value for flexWrap`)}function TH(t){if(t in VM)return VM[t];throw new Error(`"${t}" is not a valid value for justifyContent`)}function AH(t){if(t in UM)return UM[t];throw new Error(`"${t}" is not a valid value for overflow`)}function RH(t){if(t in HM)return HM[t];throw new Error(`"${t}" is not a valid value for position`)}function _y(t,n={}){for(let[e,i]of Object.entries(n))try{let r=xH[e];r&&r(t,i)}catch{}if(n.width!==void 0){let e=n.left!==void 0&&n.right!==void 0?"auto":n.width;t.setWidth(e)}if(n.height!==void 0){let e=n.top!==void 0&&n.bottom!==void 0?"auto":n.height;t.setHeight(e)}}function by(t,n){let e=t._styles,i=y(y({},e.custom),n),r=y(y({},Jn.defaultStyle.shared),t.target instanceof kl||i.isLeaf||Jn.defaultStyle.shared.isLeaf?Jn.defaultStyle.leaf:Jn.defaultStyle.container);i=y(y({},r),i);let o=y({},i),a=i.width==="intrinsic",s=i.height==="intrinsic";if(a||s){let{width:c,height:l}=yl(t);a&&(o.width=c),s&&(o.height=l)}return{custom:i,yoga:o}}function yy(t,n){var e;let i=n.layout,r;if(!i&&n.isOverflowContainer&&(r=n,i=((e=r.parent)==null?void 0:e.layout)??null,n=r.parent),!i)return!1;let o=t.yoga.getParent();o&&o.removeChild(t.yoga);let a=OH(t,n,r);return a===-1?!1:(a===i.yoga.getChildCount(),i.yoga.insertChild(t.yoga,a),!0)}function OH(t,n,e){let i=t.target,r=0;if(e){for(let o of n.children){if(o===e){for(let a of e.children)if(!(!a.layout||!a.visible)){if(a===i)return r;r++}return-1}o.layout&&o.visible&&r++}return-1}for(let o of n.children)if(!(!o.layout||!o.visible)){if(o===i)return r;r++}return-1}function xy(t){let n=t.yoga.getParent();n&&n.removeChild(t.yoga)}var NH=Object.defineProperty,PH=(t,n,e)=>n in t?NH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,An=(t,n,e)=>PH(t,typeof n!="symbol"?n+"":n,e),Jn=class{constructor({target:n}){An(this,"yoga"),An(this,"target"),An(this,"destroyed",!1),An(this,"_isDirty",!1),An(this,"_computedPixiLayout",{x:0,y:0,offsetX:0,offsetY:0,scaleX:1,scaleY:1,originX:0,originY:0}),An(this,"_computedLayout",{left:0,right:0,top:0,bottom:0,width:0,height:0}),An(this,"_styles",{custom:{},yoga:{}}),An(this,"_modificationCount",0),An(this,"_forceUpdate",!1),An(this,"hasParent",!1),An(this,"_trackedStyleKeys",["borderRadius","borderColor","backgroundColor","objectFit","objectPosition","transformOrigin","isLeaf"]),this.target=n,this.yoga=bl().Node.create(gy()),n.on("added",this._onChildAdded,this),n.on("removed",this._onChildRemoved,this),n.on("destroyed",this.destroy,this)}get style(){return this._styles.custom}get computedLayout(){return this._computedLayout}get computedPixiLayout(){return this._computedPixiLayout}get realX(){return this.target.localTransform.tx}get realY(){return this.target.localTransform.ty}get realScaleX(){return this.target.localTransform.a}get realScaleY(){return this.target.localTransform.d}setStyle(n){let e=by(this,n),i=JSON.stringify(this._styles.custom)!==JSON.stringify(e.custom),r=JSON.stringify(this._styles.yoga)!==JSON.stringify(e.yoga),o=i||r,a=this._trackedStyleKeys.some(s=>e.custom[s]!==this._styles.custom[s]);this._styles=e,a&&(this._forceUpdate=!0),o&&(_y(this.yoga,this._styles.yoga),this.target._onUpdate(),this.invalidateRoot())}invalidateRoot(n){let e=this.getRoot(n);e.destroyed||(e._layout._isDirty=!0,e._onUpdate(),this._modificationCount++)}forceUpdate(){this._forceUpdate=!0}getRoot(n){let e=n||this.target;for(;;){let i=e.parent;if(!i||!i._layout&&!i.isOverflowContainer)break;e=i,e.isOverflowContainer&&(e=e.parent)}return e}_onChildAdded(n){this.hasParent||yy(this,n)!==!1&&(this.hasParent=!0,this.invalidateRoot())}_onChildRemoved(n){this.hasParent&&(this.hasParent=!1,this.invalidateRoot(n),xy(this))}destroy(){this.destroyed||(this.destroyed=!0,this.invalidateRoot(),this.yoga.free(),this.target.off("added",this._onChildAdded,this),this.target.off("removed",this._onChildRemoved,this),this._styles=null,this._computedPixiLayout=null,this._computedLayout=null,this.target=null,this.hasParent=!1)}};An(Jn,"defaultStyle",{leaf:{width:"intrinsic",height:"intrinsic"},container:{width:"auto",height:"auto"},shared:{transformOrigin:"50%",objectPosition:"center",flexShrink:1,flexDirection:"row",alignContent:"stretch",flexWrap:"nowrap",overflow:"visible"}});function dh(t,n,e){let i=1,r=1;switch(t){case"fill":i=n.width/e.width,r=n.height/e.height;break;case"contain":{let o=Math.min(n.width/e.width,n.height/e.height);i=o,r=o;break}case"cover":{let o=Math.max(n.width/e.width,n.height/e.height);i=o,r=o;break}case"none":i=1,r=1;break;case"scale-down":{let o=Math.min(1,n.width/e.width,n.height/e.height);i=o,r=o;break}}return{offsetScaleX:i,offsetScaleY:r}}function uh(t,n,e,i){let r=t.getLocalBounds(),o=t.layout.style.objectFit||e,{offsetScaleX:a,offsetScaleY:s}=dh(o,n,r),c={width:r.width*a,height:r.height*s},{x:l,y:d}=us(t.layout.style.objectPosition,n,c);i?(l+=r.width*a*i._x,d+=r.height*s*i._y):(l-=r.minX*a,d-=r.minY*s);let f=t.layout.style.applySizeDirectly;return(f===!0||f==null&&(t instanceof kh||t instanceof Th))&&(t.width=r.width*a,t.height=r.height*s,a=1,s=1),{x:n.left,y:n.top,offsetX:l,offsetY:d,scaleX:a,scaleY:s}}var Cy=Object.getOwnPropertyDescriptor(bn.prototype,"visible"),FH={_layout:null,get layout(){return this._layout??null},set layout(t){if(t=t===!0?{}:t,!t){this._layout&&(this._layout.destroy(),this._layout=null,this.updateLocalTransform=bn.prototype.updateLocalTransform,Object.defineProperty(bn.prototype,"visible",Cy));return}if(!this._layout){this._layout=new Jn({target:this}),Object.defineProperty(bn.prototype,"visible",z(y({},Cy),{set(n){Cy.set.call(this,n),this.layout&&(n&&this.parent?this.layout._onChildAdded(this.parent):this.layout._onChildRemoved())}}));for(let n of this.children)n.layout&&n.visible&&(n.layout._onChildRemoved(),n.layout._onChildAdded(this));this.parent&&this.visible&&this._layout._onChildAdded(this.parent)}this._layout.setStyle(t),this.updateLocalTransform=this.updateLocalTransformWithLayout,this._onUpdate()},updateLocalTransformWithLayout(){let t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;let n=this._layout,{x:e,y:i,offsetX:r,offsetY:o,scaleX:a,scaleY:s,originX:c,originY:l}=n._computedPixiLayout,d=this.localTransform,{rotation:f,skew:v,scale:h,position:b}=this,k=f+v._y,R=f-v._x,P=Math.cos(k)*h._x,me=Math.sin(k)*h._x,ke=-Math.sin(R)*h._y,Ce=Math.cos(R)*h._y,et=b._x+e-c*P-l*ke,St=b._y+i-c*me-l*Ce;d.a=P*a,d.b=me*a,d.c=ke*s,d.d=Ce*s,d.tx=et+(r*P+o*ke)+c,d.ty=St+(r*me+o*Ce)+l},computeLayoutData(t){let n=this._layout,{isLeaf:e}=n._styles.custom;return e?uh(this,t,"fill"):{x:t.left,y:t.top,offsetX:0,offsetY:0,scaleX:1,scaleY:1}}};ei.mixin(bn,FH);var zM=new Ml(0,0),LH={computeLayoutData(t){let n=this._style;zM.copyFrom(this.scale),this.scale=1,n.wordWrap&&(n.wordWrapWidth=t.width);let e=this.getLocalBounds(),i=this.layout.style.objectFit||"scale-down",{offsetScaleX:r,offsetScaleY:o}=dh(i,t,e);n.wordWrap&&(n.wordWrapWidth=t.width/Math.min(1,Math.max(r,o))),e=this.getLocalBounds();let a={width:e.width*r,height:e.height*o},{x:s,y:c}=us(this.layout.style.objectPosition,t,a);return s+=e.width*r*this.anchor._x,c+=e.height*o*this.anchor._y,this.layout.style.applySizeDirectly===!0&&(this.width=e.width*r,this.height=e.height*o),this.scale.copyFrom(zM),{x:t.left,y:t.top,offsetX:s,offsetY:c,scaleX:r,scaleY:o}}};ei.mixin(Tl,LH);var wy=Object.getOwnPropertyDescriptor(Tl.prototype,"text");Object.defineProperty(Tl.prototype,"text",z(y({},wy),{set(t){var n;let e=wy.get.call(this);wy.set.call(this,t),e!==t&&((n=this.layout)==null||n.forceUpdate())}}));var BH={computeLayoutData(t){return uh(this,t,"fill",this._anchor)}};ei.mixin(kl,BH);ei.add(xl);var jH=Object.defineProperty,VH=(t,n,e)=>n in t?jH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Cl=(t,n,e)=>VH(t,typeof n!="symbol"?n+"":n,e),wl=class{constructor(n={}){Cl(this,"x"),Cl(this,"ax"),Cl(this,"dx"),Cl(this,"tx"),Cl(this,"_options"),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=n,this._options.max=n.max??160,this._options.damp=n.damp??.8,this._options.springiness=n.springiness??.1}update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}};var UH=Object.defineProperty,HH=(t,n,e)=>n in t?UH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,fs=(t,n,e)=>HH(t,typeof n!="symbol"?n+"":n,e),Dl=class{constructor(n={}){fs(this,"done"),fs(this,"to"),fs(this,"_spring"),fs(this,"_pos"),fs(this,"_speed"),fs(this,"_correctSpeed"),this._spring=new wl(n),this._pos=0,this.to=0}start(n,e,i){this._speed=n,this._pos=e,this.to=i,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;let r=this.to-this._pos,o=Math.abs(r)/r,a=Math.abs(this._speed)/this._speed;o!==a?this._correctSpeed=!0:this._correctSpeed=!1}update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{let n=this.to-this._pos;Math.abs(n)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}};var zH=Object.defineProperty,$H=(t,n,e)=>n in t?zH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,rn=(t,n,e)=>$H(t,typeof n!="symbol"?n+"":n,e),ms=class{constructor(n={}){rn(this,"position",0),rn(this,"maxSpeed"),rn(this,"constrainPercent"),rn(this,"constrain"),rn(this,"min",0),rn(this,"max",0),rn(this,"_ease"),rn(this,"_offset",0),rn(this,"_prev",0),rn(this,"_speed",0),rn(this,"_hasStopped",!0),rn(this,"_targetSpeed",0),rn(this,"_speedChecker",0),rn(this,"_grab",0),rn(this,"_activeEase",null),this.constrain=n.constrain??!0,this.maxSpeed=n.maxSpeed??400,this._ease=n.ease??new Dl,this.constrainPercent=n.constrainPercent??0}set value(n){this._speed=0,this.position=n}get value(){return this.position}grab(n){this._grab=n,this._offset=this.position-n,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}hold(n){this._speedChecker++,this.position=n+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this.constrainPercent<0?(this.position=0,this._speed=0,this._hasStopped=!0):this.constrainPercent===0?this.position>this.min?this.position=this.min:this.position<this.max&&(this.position=this.max):this.position>this.min?this.position-=(this.position-this.min)/(1+this.constrainPercent):this.position<this.max&&(this.position+=(this.max-this.position)/(1+this.constrainPercent)))}slide(n=!1){this._hasStopped||(this.constrain?this._updateConstrain(n):this._updateDefault())}_updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?this._speed*-1:this._speed)<.01&&(this._hasStopped=!0),this.position>this.min?(this.position=this.min,this._hasStopped=!0):this.position<this.max&&(this.position=this.max,this._hasStopped=!0)}_updateConstrain(n=!1){let e=this.max;n?this.position>this.min?this.position=this.min:this.position<this.max&&(this.position=this.max):this.position>this.min||this.position<e||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,e)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}};var WH=Object.defineProperty,GH=(t,n,e)=>n in t?WH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Mr=(t,n,e)=>GH(t,typeof n!="symbol"?n+"":n,e),El=class{constructor(n){Mr(this,"xAxis"),Mr(this,"yAxis"),Mr(this,"_isDown"),Mr(this,"_globalPosition"),Mr(this,"_frame"),Mr(this,"_bounds"),Mr(this,"_dirty"),Mr(this,"disableEasing",!1),this.xAxis=new ms({ease:n.xEase,maxSpeed:n.maxSpeed,constrain:n.constrain,constrainPercent:n.xConstrainPercent}),this.yAxis=new ms({ease:n.yEase,maxSpeed:n.maxSpeed,constrain:n.constrain,constrainPercent:n.yConstrainPercent}),this.disableEasing=n.disableEasing??!1,this._frame=new Vo,this._bounds=new Vo,this._globalPosition=new Ml}pointerDown(n){this._globalPosition=n,this.xAxis.grab(n.x),this.yAxis.grab(n.y),this._isDown=!0}pointerUp(){this._isDown=!1}pointerMove(n){this._globalPosition=n}update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}resize(n,e){this._frame.x=0,this._frame.width=n,this._frame.y=0,this._frame.height=e,this._dirty=!0}setBounds(n,e,i,r){this._bounds.x=n,this._bounds.width=e-n,this._bounds.y=i,this._bounds.height=r-i,this._dirty=!0}get x(){return this.xAxis.value}set x(n){this.xAxis.value=n}get y(){return this.yAxis.value}set y(n){this.yAxis.value=n}};var qH=Object.defineProperty,YH=(t,n,e)=>n in t?qH(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Xi=(t,n,e)=>YH(t,typeof n!="symbol"?n+"":n,e),$M=["addChild","addChildAt","removeChild","removeChildAt","getChildAt","getChildIndex","setChildIndex","getChildByName","removeChildren","sortChildren","swapChildren","reparentChild","reparentChildAt","getChildByLabel","getChildrenByLabel"];function ZH(t,n,e){let i={},r=Object.getPrototypeOf(t);for(let o of e){let a=r[o];i[o]=a.bind(t),t[o]=(...s)=>n[o](...s)}return i}var hs=class extends bn{constructor(n={}){let s=n,{layout:e,trackpad:i,background:r,children:o}=s,a=_n(s,["layout","trackpad","background","children"]);super(a),Xi(this,"background"),Xi(this,"stroke",new _s({label:"stroke"})),Xi(this,"overflowContainer",new bn({label:"overflowContainer"})),Xi(this,"containerMethods"),Xi(this,"_trackpad"),Xi(this,"_mask",new _s),Xi(this,"_isUserBackground",!1),Xi(this,"_visualBounds",new Vo),Xi(this,"_scrollBounds",new Vo),this.layout=e??{},o?.forEach(c=>this.addChild(c)),this.overflowContainer.isOverflowContainer=!0,this.background=r??new _s({label:"background"}),this._isUserBackground=!!r,this.addChild(this.background,this.overflowContainer,this._mask,this.stroke),this.containerMethods=ZH(this,this.overflowContainer,$M),this._trackpad=new El(y({constrain:!0},i)),this.eventMode="static",this.on("pointerdown",c=>this.isPointWithinBounds(c.global.x,c.global.y)&&this._trackpad.pointerDown(c.global)),this.on("pointerup",()=>this._trackpad.pointerUp()),this.on("pointerupoutside",()=>this._trackpad.pointerUp()),this.on("pointermove",c=>this.isPointWithinBounds(c.global.x,c.global.y)&&this._trackpad.pointerMove(c.global)),this.on("pointercancel",()=>this._trackpad.pointerUp()),this.on("wheel",c=>{var l;if(((l=this.layout)==null?void 0:l.style.overflow)!=="scroll"||!this.isPointWithinBounds(c.global.x,c.global.y))return;let f=c.shiftKey?1:0,v=c.deltaX*(f?1:-1),h=c.deltaY*(f?-1:1),b=this._trackpad.xAxis.value-v,k=this._trackpad.yAxis.value-h;this._trackpad.xAxis.constrainPercent>=0&&(this._trackpad.xAxis.value=Math.max(this._trackpad.xAxis.max,Math.min(this._trackpad.xAxis.min,b))),this._trackpad.yAxis.constrainPercent>=0&&(this._trackpad.yAxis.value=Math.max(this._trackpad.yAxis.max,Math.min(this._trackpad.yAxis.min,k)))}),Sh.shared.add(this.update,this)}computeLayoutData(n){return this._drawBackground(n),{x:n.left,y:n.top,offsetX:0,offsetY:0,scaleX:1,scaleY:1}}_updateMask(n,e,i=0,r=0,o=!1){let a=o?-r:0,s=o?-r:0,c=o?n+r*2:n,l=o?e+r*2:e;this._mask.clear(),this._mask.roundRect(0,0,c,l,i),this._mask.position.set(a,s),this._mask.fill(16777215),this._scrollBounds.set(a+r,s+r,c-r*2,l-r*2)}_updateBackground(n){let e=this.layout.style,{backgroundColor:i,borderRadius:r}=e;if(this._isUserBackground)this.background.position.set(0,0),this.background.setSize(n.width,n.height);else{let o=this.background;o.clear(),o.roundRect(0,0,n.width,n.height,r??0),i!=null?o.fill({color:i}):o.fill({color:16777215,alpha:0})}}_drawBackground(n){var e;let i=this.layout.yoga.getBorder(ve.All);(isNaN(i)||i<0)&&(i=0);let r=this.layout.yoga.getBoxSizing(),o=r===Ho.BorderBox?1:0,a=this.layout.style,{borderColor:s,borderRadius:c}=a;if(this._updateBackground(n),this.stroke.clear(),i>0&&s!=null&&(this.stroke.roundRect(0,0,n.width,n.height,c??0),this.stroke.stroke({color:s,width:i,alignment:o})),((e=this.layout)==null?void 0:e.style.overflow)!=="visible"){this._updateMask(n.width,n.height,a.borderRadius??0,i,r===Ho.ContentBox),this._updateScrollArea(),this.setMask({mask:this._mask});let d=n.width-this._visualBounds.width,f=n.height-this._visualBounds.height;this._trackpad.xAxis.max=Math.min(0,d),this._trackpad.yAxis.max=Math.min(0,f)}else this.mask=null,this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.overflowContainer.position.set(0,0)}_updateScrollArea(){let n=0,e=0;for(let r=0;r<this.layout.yoga.getChildCount();r++){let o=this.layout.yoga.getChild(r),a=o.getComputedTop()+o.getComputedHeight(),s=o.getComputedLeft()+o.getComputedWidth();s>e&&(e=s),a>n&&(n=a)}e+=this.layout.yoga.getComputedPadding(ve.Right),n+=this.layout.yoga.getComputedPadding(ve.Bottom);let i=this.layout.yoga.getBorder(ve.All)||0;e+=i,n+=i,this._visualBounds.width=Math.max(0,e),this._visualBounds.height=Math.max(0,n)}isPointWithinBounds(n,e){return this._scrollBounds.contains(n-this.worldTransform.tx,e-this.worldTransform.ty)}update(){var n;((n=this.layout)==null?void 0:n.style.overflow)==="scroll"&&(this._trackpad.update(),this.overflowContainer.x=this._trackpad.x,this.overflowContainer.y=this._trackpad.y)}destroy(n){for(let e of $M)this[e]=this.containerMethods[e];this.overflowContainer.destroy(n),Sh.shared.remove(this.update,this),super.destroy(n)}};var vh=nk(QM(),1);var Sl=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=ke=>{let Ce=null;for(let et of ke.frames)Ce=et.gce??Ce,"image"in et&&!("gce"in et)&&(et.gce=Ce)},r=(0,vh.parseGIF)(n);i(r);let o=(0,vh.decompressFrames)(r,!0),a=[],s=r.lsd.width,c=r.lsd.height,l=Uo.get().createCanvas(s,c),d=l.getContext("2d",{willReadFrequently:!0}),f=Uo.get().createCanvas(),v=f.getContext("2d"),h=0,b=null,me=e??{},{fps:k=30}=me,R=_n(me,["fps"]),P=1e3/k;for(let ke=0;ke<o.length;ke++){let{disposalType:Ce=2,delay:et=P,patch:St,dims:{width:qt,height:ln,left:Ut,top:Fe}}=o[ke];f.width=qt,f.height=ln,v.clearRect(0,0,qt,ln);let Ct=v.createImageData(qt,ln);Ct.data.set(St),v.putImageData(Ct,0,0),Ce===3&&(b=d.getImageData(0,0,s,c)),d.drawImage(f,Ut,Fe);let Rn=d.getImageData(0,0,s,c);Ce===2?d.clearRect(0,0,s,c):Ce===3&&d.putImageData(b,0,0);let gs=Uo.get().createCanvas(Rn.width,Rn.height);gs.getContext("2d").putImageData(Rn,0,0),a.push({start:h,end:h+et,texture:new Eh({source:new ky(y({resource:gs},R))})}),h+=et}return l.width=l.height=0,f.width=f.height=0,new t(a)}};var KM={extension:vs.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>My.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Uo.get().fetch(t)).arrayBuffer();return Sl.from(i,n?.data)},unload:async t=>{t.destroy()}}};ei.add(KM);function Sz(t,n){if(t&1){let e=an();g(0,"div",1)(1,"button",2),q("click",function(){It(e);let r=x();return Mt(r.action())}),_(2),p()()}if(t&2){let e=x();m(2),De(" ",e.data.action," ")}}var Iz=["label"];function Mz(t,n){}var kz=Math.pow(2,31)-1,Il=class{_overlayRef;instance;containerInstance;_afterDismissed=new A;_afterOpened=new A;_onAction=new A;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,kz))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},XM=new D("MatSnackBarData"),ps=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Tz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),Az=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Rz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),Oz=(()=>{class t{snackBarRef=u(Il);data=u(XM);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(g(0,"div",0),_(1),p(),C(2,Sz,3,1,"div",1)),i&2&&(m(),De(" ",r.data.message,`
`),m(),w(r.hasAction?2:-1))},dependencies:[Ao,Tz,Az,Rz],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Sy="_mat-snack-bar-enter",Iy="_mat-snack-bar-exit",Nz=(()=>{class t extends Za{_ngZone=u(F);_elementRef=u(B);_changeDetectorRef=u(Qe);_platform=u(Ie);_animationsDisabled=Ke();snackBarConfig=u(ps);_document=u(J);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(K);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new A;_onExit=new A;_onEnter=new A;_animationState="void";_live;_label;_role;_liveElementId=u(mt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===Iy?this._completeExit():e===Sy&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Sy)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Sy)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Iy)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Iy),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ze(Qa,7)(Iz,7),i&2){let o;U(o=H())&&(r._portalOutlet=o.first),U(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&q("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&V("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Te],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(g(0,"div",1)(1,"div",2,0)(3,"div",3),Tt(4,Mz,0,0,"ng-template",4),p(),E(5,"div"),p()()),i&2&&(m(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Qa],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),Pz=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new ps}),JM=(()=>{class t{_live=u(R_);_injector=u(K);_breakpointObserver=u(Io);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(Pz);_animationsDisabled=Ke();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Oz;snackBarContainerComponent=Nz;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=K.create({parent:r||this._injector,providers:[{provide:ps,useValue:i}]}),a=new Ya(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new ps),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Il(a,o);if(e instanceof kt){let c=new Zn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),l=new Ya(e,void 0,c),d=a.attachComponentPortal(l);s.instance=d.instance}return this._breakpointObserver.observe(Vf.HandsetPortrait).pipe(Le(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Sr;i.direction=e.direction;let r=Hm(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,ls(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return K.create({parent:r||this._injector,providers:[{provide:Il,useValue:i},{provide:XM,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bh=class t{segment=fe.required();snackBar;snackBarMessageQueue;currentSnackBar;pixiApp;constructor(){this.snackBar=u(JM),this.pixiApp=new Ty,this.snackBarMessageQueue=[]}async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await Mh.setPreferences({crossOrigin:"*"}),await this.initializePixiApp(n),await this.AddMapParentContainer()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&(this.pixiApp.stage.removeChildren(),await this.AddMapParentContainer())}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0,resizeTo:n}),n.appendChild(this.pixiApp.canvas),this.pixiApp.stage.layout={width:this.pixiApp.screen.width,height:this.pixiApp.screen.height}}async AddMapParentContainer(){let n=new hs({layout:{width:this.pixiApp.screen.width,height:this.pixiApp.screen.height,overflow:"scroll",padding:8},trackpad:{constrain:!1}});this.pixiApp.stage.addChild(n);let e=new bn({layout:{width:this.segment().widthInPixels,height:this.segment().heightInPixels}});n.addChild(e);let i=await this.loadExternalAsset(this.segment().imageURL).catch(o=>{this.queueImageLoadFailedSnackBar(this.segment().imageURL)});if(i===void 0)return;let r=new Ih(i);e.addChild(r)}async loadExternalAsset(n){return Mh.load({src:n})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-segment"]],inputs:{segment:[1,"segment"]},features:[Se],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Ae(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:100%;width:100%}"]})};var Fz=(t,n)=>n.title;function Lz(t,n){t&1&&_(0," U ")}function Bz(t,n){t&1&&E(0,"img",10)}function jz(t,n){t&1&&E(0,"img",11)}function Vz(t,n){t&1&&E(0,"img",12)}function Uz(t,n){t&1&&E(0,"img",13)}function Hz(t,n){if(t&1){let e=an();g(0,"button",14),q("click",function(){let r=It(e).$implicit,o=x();return Mt(o.setCurrentSegment(r))}),_(1),p()}if(t&2){let e=n.$implicit;m(),ae(e.title)}}function zz(t,n){if(t&1&&E(0,"map-segment",9),t&2){let e=x();M("segment",e.currentSegment)}}var yh=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Vt),this.breakpointService=u(_i),this.themeService=u(bi),this.teamDataService=u(Me),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(j(Vt),j(_i),j(bi),j(Me))};static \u0275cmp=I({type:t,selectors:[["map-view"]],decls:28,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],["id","mapSegmentContainer"],[3,"segment"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=an();g(0,"button",1),q("click",function(){It(r);let a=sn(4);return Mt(a.toggle())}),_(1,">"),p(),g(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Tt(7,Lz,1,0,"ng-template",4),E(8,"map-units-sidenav"),p(),g(9,"mat-tab"),Tt(10,Bz,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),p(),g(12,"mat-tab"),Tt(13,jz,1,0,"ng-template",4),_(14," Image download "),p(),g(15,"mat-tab"),Tt(16,Vz,1,0,"ng-template",4),E(17,"links-sidenav",5),p(),g(18,"mat-tab"),Tt(19,Uz,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),p()()(),g(21,"mat-sidenav-content")(22,"div",6),le(23,Hz,2,1,"button",7,Fz),p(),E(25,"mat-divider"),g(26,"div",8),C(27,zz,1,1,"map-segment",9),p()()()}if(e&2){let r;m(3),M("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),m(14),M("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),m(6),de((r=i.teamDataService.mapData().map)==null?null:r.segments),m(4),w(i.currentSegment!==void 0?27:-1)}},dependencies:[Z_,ES,qf,ab,OS,ob,xS,nh,ih,Rm,oh,bh,yS,yi],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}#mapSegmentContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%}']})};var xh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),_(1,"map-analysis-view works!"),ge())},encapsulation:2})};var Ch=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),_(1,"convoy-view works!"),ge())},encapsulation:2})};var wh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ue(0,"p"),_(1,"shop-view works!"),ge())},encapsulation:2})};var ek=[{path:"",component:Wf,title:"Reddit Emblem Maps"},{path:":teamName/map",component:yh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:xh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Ch,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:wh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var tk={providers:[tg(),E_(ek)]};var Dh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[Uc],encapsulation:2})};Yv(Dh,tk).catch(t=>console.error(t));
