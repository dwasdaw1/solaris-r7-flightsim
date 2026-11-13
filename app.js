(()=>{var Hd=0,lu=1,Vd=2;var Cf=1,Zc=2,vi=3,si=0,Qe=1,Ge=2,Ki=0,ar=1,Ji=2,cu=3,hu=4,Gd=5,bs=100,Wd=101,Xd=102,qd=103,Yd=104,$d=200,Kd=201,Zd=202,Jd=203,Bl=204,kl=205,jd=206,Qd=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,op=214,zl=0,Hl=1,Vl=2,ur=3,Gl=4,Wl=5,Xl=6,ql=7,Jc=0,ap=1,lp=2,Zi=0,cp=1,hp=2,up=3,jc=4,fp=5,dp=6,pp=7,uu="attached",mp="detached",Pf=300,fr=301,dr=302,Yl=303,$l=304,Na=306,ri=1e3,Mi=1001,eo=1002,tn=1003,Qc=1004;var rr=1005;var qe=1006,Jr=1007;var Pn=1008;var wi=1009,If=1010,Lf=1011,no=1012,th=1013,Ts=1014,Wn=1015,ho=1016,eh=1017,nh=1018,pr=1020,Df=35902,Nf=1021,Uf=1022,mn=1023,Ff=1024,Of=1025,lr=1026,mr=1027,uo=1028,ih=1029,Bf=1030,sh=1031;var rh=1033,ea=33776,na=33777,ia=33778,sa=33779,Kl=35840,Zl=35841,Jl=35842,jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,fc=37818,dc=37819,pc=37820,mc=37821,ra=36492,gc=36494,xc=36495,kf=36283,_c=36284,vc=36285,yc=36286;var gr=2300,xr=2301,rl=2302,fu=2400,du=2401,pu=2402,gp=2500;var zf=0,Ua=1,fo=2,xp=3200,_p=3201;var oh=0,vp=1,qi="",Ae="srgb",sn="srgb-linear",Fa="linear",me="srgb";var zs=7680;var mu=519,yp=512,Mp=513,Sp=514,Hf=515,bp=516,wp=517,Tp=518,Ep=519,Mc=35044;var gu="300 es",Si=2e3,oa=2001,ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,jr=Math.PI/180,_r=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function ah(i,t){return(i%t+t)%t}function Ap(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rp(i,t,e){return i!==t?(e-i)/(t-i):0}function Qr(i,t,e){return(1-e)*i+e*t}function Cp(i,t,e,n){return Qr(i,t,1-Math.exp(-e*n))}function Pp(i,t=1){return t-Math.abs(ah(i,t*2)-t)}function Ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Np(i,t){return i+Math.random()*(t-i)}function Up(i){return i*(.5-Math.random())}function Fp(i){i!==void 0&&(xu=i);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Op(i){return i*jr}function Bp(i){return i*_r}function kp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vf={DEG2RAD:jr,RAD2DEG:_r,generateUUID:Xn,clamp:je,euclideanModulo:ah,mapLinear:Ap,inverseLerp:Rp,lerp:Qr,damp:Cp,pingpong:Pp,smoothstep:Ip,smootherstep:Lp,randInt:Dp,randFloat:Np,randFloatSpread:Up,seededRandom:Fp,degToRad:Op,radToDeg:Bp,isPowerOfTwo:kp,ceilPowerOfTwo:zp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Vp,normalize:de,denormalize:Gn},zt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],_=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*v+l*T,r[6]=o*p+a*_+l*A,r[1]=c*x+h*y+u*R,r[4]=c*m+h*v+u*T,r[7]=c*p+h*_+u*A,r[2]=f*x+d*y+g*R,r[5]=f*m+d*v+g*T,r[8]=f*p+d*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new $t;function Gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gp(){let i=io("canvas");return i.style.display="block",i}var _u={};function Kr(i){i in _u||(_u[i]=!0,console.warn(i))}function Wp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vu=[.64,.33,.3,.6,.15,.06],yu=[.2126,.7152,.0722],Mu=[.3127,.329],Su=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[sn]:{primaries:vu,whitePoint:Mu,transfer:Fa,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:yu,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:vu,whitePoint:Mu,transfer:me,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:yu,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var Hs,Sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=io("canvas")),Hs.width=t.width,Hs.height=t.height;let n=Hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yp=0,aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $p=0,We=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=qe,o=Pn,a=mn,l=wi,c=i.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Xn(),this.name="",this.source=new aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Pf;We.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(d+1)/2,R=(p+1)/2,T=(h+f)/4,A=(u+x)/4,C=(g+m)/4;return v>_&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},la=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let _=a*y;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new P,wu=new Ye,$e=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Eo.subVectors(this.max,Br),Vs.subVectors(t.a,Br),Gs.subVectors(t.b,Br),Ws.subVectors(t.c,Br),zi.subVectors(Gs,Vs),Hi.subVectors(Ws,Gs),gs.subVectors(Vs,Ws);let e=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-gs.z,gs.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,gs.z,0,-gs.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-gs.y,gs.x,0];return!cl(e,Vs,Gs,Ws,Eo)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Vs,Gs,Ws,Eo))?!1:(Ao.crossVectors(zi,Hi),e=[Ao.x,Ao.y,Ao.z],cl(e,Vs,Gs,Ws,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},di=[new P,new P,new P,new P,new P,new P,new P,new P],zn=new P,To=new $e,Vs=new P,Gs=new P,Ws=new P,zi=new P,Hi=new P,gs=new P,Br=new P,Eo=new P,Ao=new P,xs=new P;function cl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xs.fromArray(i,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kp=new $e,kr=new P,hl=new P,bn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);let e=kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(hl)),this.expandByPoint(kr.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new P,ul=new P,Ro=new P,Vi=new P,fl=new P,Co=new P,dl=new P,vr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Vi.dot(this.direction),l=-Vi.dot(Ro),c=Vi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(Ro,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){fl.subVectors(e,t),Co.subVectors(n,t),dl.crossVectors(fl,Co);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);let l=a*this.direction.dot(Co.crossVectors(Vi,Co));if(l<0)return null;let c=a*this.direction.dot(fl.cross(Vi));if(c<0||l+c>o)return null;let h=-a*Vi.dot(dl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,Jp)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Gi.crossVectors(n,Mn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Gi.crossVectors(n,Mn)),Gi.normalize(),Po.crossVectors(Mn,Gi),s[0]=Gi.x,s[4]=Po.x,s[8]=Mn.x,s[1]=Gi.y,s[5]=Po.y,s[9]=Mn.y,s[2]=Gi.z,s[6]=Po.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],R=n[15],T=s[0],A=s[4],C=s[8],w=s[12],S=s[1],I=s[5],z=s[9],B=s[13],H=s[2],J=s[6],W=s[10],rt=s[14],O=s[3],Q=s[7],it=s[11],_t=s[15];return r[0]=o*T+a*S+l*H+c*O,r[4]=o*A+a*I+l*J+c*Q,r[8]=o*C+a*z+l*W+c*it,r[12]=o*w+a*B+l*rt+c*_t,r[1]=h*T+u*S+f*H+d*O,r[5]=h*A+u*I+f*J+d*Q,r[9]=h*C+u*z+f*W+d*it,r[13]=h*w+u*B+f*rt+d*_t,r[2]=g*T+x*S+m*H+p*O,r[6]=g*A+x*I+m*J+p*Q,r[10]=g*C+x*z+m*W+p*it,r[14]=g*w+x*B+m*rt+p*_t,r[3]=y*T+v*S+_*H+R*O,r[7]=y*A+v*I+_*J+R*Q,r[11]=y*C+v*z+_*W+R*it,r[15]=y*w+v*B+_*rt+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,v=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,R=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,T=e*y+n*v+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*A,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*A,t[4]=v*A,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*A,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=R*A,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,v=l*h,_=l*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(d+_)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);let c=1/r,h=1/o,u=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Si)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Si){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,x;if(a===Si)g=(o+r)*u,x=-2*u;else if(a===oa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xs=new P,Hn=new Ot,Zp=new P(0,0,0),Jp=new P(1,1,1),Gi=new P,Po=new P,Mn=new P,Tu=new Ot,Eu=new Ye,qn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jp=0,Au=new P,qs=new Ye,mi=new Ot,Io=new P,zr=new P,Qp=new P,tm=new Ye,Ru=new P(1,0,0),Cu=new P(0,1,0),Pu=new P(0,0,1),Iu={type:"added"},em={type:"removed"},Ys={type:"childadded",child:null},pl={type:"childremoved",child:null},Te=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new qn,n=new Ye,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new $t}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Cu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Au.copy(t).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Cu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(zr,Io,this.up):mi.lookAt(Io,zr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(mi),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new P,gi=new P,ml=new P,xi=new P,$s=new P,Ks=new P,Lu=new P,gl=new P,xl=new P,_l=new P,vl=new ae,yl=new ae,Ml=new ae,Yi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),gi.subVectors(n,e),ml.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(gi),l=Vn.dot(ml),c=gi.dot(gi),h=gi.dot(ml),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return vl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),gi.subVectors(t,e),Vn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Ks.subVectors(r,n),gl.subVectors(t,n);let l=$s.dot(gl),c=Ks.dot(gl);if(l<=0&&c<=0)return e.copy(n);xl.subVectors(t,s);let h=$s.dot(xl),u=Ks.dot(xl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($s,o);_l.subVectors(t,r);let d=$s.dot(_l),g=Ks.dot(_l);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ks,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Lu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Lu,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector($s,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ah(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ee.fromWorkingColorSpace(Je.copy(this),t),Math.round(je(Je.r*255,0,255))*65536+Math.round(je(Je.g*255,0,255))*256+Math.round(je(Je.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ae){ee.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Lo);let n=Qr(Wi.h,Lo.h,e),s=Qr(Wi.s,Lo.s,e),r=Qr(Wi.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new bt;bt.NAMES=Wf;var nm=0,cn=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Xn(),this.name="",this.blending=ar,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},en=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new P,Do=new zt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}};var ha=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ua=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},im=0,Cn=new Ot,bl=new Te,Zs=new P,Sn=new $e,Hr=new $e,Ve=new P,ge=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?ua:ha)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(Sn.min,Hr.min),Sn.expandByPoint(Ve),Ve.addVectors(Sn.max,Hr.max),Sn.expandByPoint(Ve)):(Sn.expandByPoint(Hr.min),Sn.expandByPoint(Hr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),Ve.add(Zs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new P,l[C]=new P;let c=new P,h=new P,u=new P,f=new zt,d=new zt,g=new zt,x=new P,m=new P;function p(C,w,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(x),a[w].add(x),a[S].add(x),l[C].add(m),l[w].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,w=y.length;C<w;++C){let S=y[C],I=S.start,z=S.count;for(let B=I,H=I+z;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new P,_=new P,R=new P,T=new P;function A(C){R.fromBufferAttribute(s,C),T.copy(R);let w=a[C];v.copy(w),v.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(T,w);let I=_.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,w=y.length;C<w;++C){let S=y[C],I=S.start,z=S.count;for(let B=I,H=I+z;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Ot,_s=new vr,No=new bn,Nu=new P,Uo=new P,Fo=new P,Oo=new P,wl=new P,Bo=new P,Uu=new P,ko=new P,pe=class extends Te{constructor(t=new ge,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(wl.fromBufferAttribute(u,t),o?Bo.addScaledVector(wl,h):Bo.addScaledVector(wl.sub(e),h))}e.add(Bo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(No.containsPoint(_s.origin)===!1&&(_s.intersectSphere(No,Nu)===null||_s.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,R=v;_<R;_+=3){let T=a.getX(_),A=a.getX(_+1),C=a.getX(_+2);s=zo(this,p,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=zo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,R=v;_<R;_+=3){let T=_,A=_+1,C=_+2;s=zo(this,p,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;s=zo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sm(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:i}}function zo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Uo),i.getVertexPosition(l,Fo),i.getVertexPosition(c,Oo);let h=sm(i,t,e,n,Uo,Fo,Oo,Uu);if(h){let u=new P;Yi.getBarycoord(Uu,Uo,Fo,Oo,u),s&&(h.uv=Yi.getInterpolatedAttribute(s,a,l,c,u,new zt)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,a,l,c,u,new zt)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};Yi.getNormal(Uo,Fo,Oo,f.normal),h.face=f,h.barycoord=u}return h}var gn=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(x,m,p,y,v,_,R,T,A,C,w){let S=_/A,I=R/C,z=_/2,B=R/2,H=T/2,J=A+1,W=C+1,rt=0,O=0,Q=new P;for(let it=0;it<W;it++){let _t=it*I-B;for(let Mt=0;Mt<J;Mt++){let Ct=Mt*S-z;Q[x]=Ct*y,Q[m]=_t*v,Q[p]=H,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Mt/A),u.push(1-it/C),rt+=1}}for(let it=0;it<C;it++)for(let _t=0;_t<A;_t++){let Mt=f+_t+J*it,Ct=f+_t+J*(it+1),X=f+(_t+1)+J*(it+1),nt=f+(_t+1)+J*it;l.push(Mt,Ct,nt),l.push(Ct,X,nt),O+=6}a.addGroup(d,O,w),d+=O,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=yr(i[e]);for(let s in n)t[s]=n[s]}return t}function rm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Ar={clone:yr,merge:ln},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fa=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new P,Fu=new zt,Ou=new zt,Ue=class extends fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Ou),e.subVectors(Ou,Fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Js=-90,js=1,Tc=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Js,js,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Js,js,t,e);r.layers=this.layers,this.add(r);let o=new Ue(Js,js,t,e);o.layers=this.layers,this.add(o);let a=new Ue(Js,js,t,e);a.layers=this.layers,this.add(a);let l=new Ue(Js,js,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Js,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},da=class extends We{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ec=class extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ki});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===Pn&&(e.minFilter=qe),new Tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Tl=new P,lm=new P,cm=new $t,yi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tl.subVectors(n,e).cross(lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cm.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new bn,Ho=new P,so=class{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+o,f+h,m+g,_+y).normalize(),n[3].setComponents(l-o,f-h,m-g,_-y).normalize(),n[4].setComponents(l-a,f-u,m-x,_-v).normalize(),e===Si)n[5].setComponents(l+a,f+u,m+x,_+v).normalize();else if(e===oa)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qi=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let v=0;v<c;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,_=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;d.push(v,_,T),d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:um,alphahash_pars_fragment:fm,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:xm,aomap_pars_fragment:_m,batching_pars_vertex:vm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:bm,iridescence_fragment:wm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:Ym,fog_vertex:$m,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:o0,lights_phong_pars_fragment:a0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:u0,lights_fragment_end:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:x0,map_pars_fragment:_0,map_particle_fragment:v0,map_particle_pars_fragment:y0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:b0,morphcolor_vertex:w0,morphnormal_vertex:T0,morphtarget_pars_vertex:E0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:O0,opaque_fragment:B0,packing:k0,premultiplied_alpha_fragment:z0,project_vertex:H0,dithering_fragment:V0,dithering_pars_fragment:G0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:$0,shadowmask_pars_fragment:K0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:j0,skinnormal_vertex:Q0,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:fg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distanceRGBA_vert:_g,distanceRGBA_frag:vg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:bg,meshbasic_vert:wg,meshbasic_frag:Tg,meshlambert_vert:Eg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Ug,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:kg,shadow_vert:zg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Gg},mt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ii={basic:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ln([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ln([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ln([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ln([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ln([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ln([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ln([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ln([mt.lights,mt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ii.physical={uniforms:ln([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Vo={r:0,b:0,g:0},ys=new qn,Wg=new Ot;function Xg(i,t,e,n,s,r,o){let a=new bt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Na)?(h===void 0&&(h=new pe(new gn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:yr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(ys)),h.material.toneMapped=ee.getTransfer(_.colorSpace)!==me,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new pe(new Qi(2,2),new nn({name:"BackgroundMaterial",uniforms:yr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Vo,Xf(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,I,z,B,H){let J=!1,W=u(B,z,I);r!==W&&(r=W,c(r.object)),J=d(S,B,z,H),J&&g(S,B,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(S,I,z,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,z){let B=z.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let J=H[I.id];J===void 0&&(J={},H[I.id]=J);let W=J[B];return W===void 0&&(W=f(l()),J[B]=W),W}function f(S){let I=[],z=[],B=[];for(let H=0;H<e;H++)I[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,I,z,B){let H=r.attributes,J=I.attributes,W=0,rt=z.getAttributes();for(let O in rt)if(rt[O].location>=0){let it=H[O],_t=J[O];if(_t===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,I,z,B){let H={},J=I.attributes,W=0,rt=z.getAttributes();for(let O in rt)if(rt[O].location>=0){let it=J[O];it===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),H[O]=_t,W++}r.attributes=H,r.attributesNum=W,r.index=B}function x(){let S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){let z=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;z[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),H[S]!==I&&(i.vertexAttribDivisor(S,I),H[S]=I)}function y(){let S=r.newAttributes,I=r.enabledAttributes;for(let z=0,B=I.length;z<B;z++)I[z]!==S[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function v(S,I,z,B,H,J,W){W===!0?i.vertexAttribIPointer(S,I,z,H,J):i.vertexAttribPointer(S,I,z,B,H,J)}function _(S,I,z,B){x();let H=B.attributes,J=z.getAttributes(),W=I.defaultAttributeValues;for(let rt in J){let O=J[rt];if(O.location>=0){let Q=H[rt];if(Q===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){let it=Q.normalized,_t=Q.itemSize,Mt=t.get(Q);if(Mt===void 0)continue;let Ct=Mt.buffer,X=Mt.type,nt=Mt.bytesPerElement,dt=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===th;if(Q.isInterleavedBufferAttribute){let ht=Q.data,K=ht.stride,lt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let Tt=0;Tt<O.locationSize;Tt++)p(O.location+Tt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Tt=0;Tt<O.locationSize;Tt++)m(O.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Tt=0;Tt<O.locationSize;Tt++)v(O.location+Tt,_t/O.locationSize,X,it,K*nt,(lt+_t/O.locationSize*Tt)*nt,dt)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<O.locationSize;ht++)p(O.location+ht,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<O.locationSize;ht++)m(O.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ht=0;ht<O.locationSize;ht++)v(O.location+ht,_t/O.locationSize,X,it,_t*nt,_t/O.locationSize*ht*nt,dt)}}else if(W!==void 0){let it=W[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(O.location,it);break;case 3:i.vertexAttrib3fv(O.location,it);break;case 4:i.vertexAttrib4fv(O.location,it);break;default:i.vertexAttrib1fv(O.location,it)}}}}y()}function R(){C();for(let S in n){let I=n[S];for(let z in I){let B=I[z];for(let H in B)h(B[H].object),delete B[H];delete I[z]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let z in I){let B=I[z];for(let H in B)h(B[H].object),delete B[H];delete I[z]}delete n[S.id]}function A(S){for(let I in n){let z=n[I];if(z[S.id]===void 0)continue;let B=z[S.id];for(let H in B)h(B[H].object),delete B[H];delete z[S.id]}}function C(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Yg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Wn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function Kg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new yi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,_=p.clippingState||null;l.value=_,_=h(g,f,v,d);for(let R=0;R!==v;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Zg(i){let t=new WeakMap;function e(o,a){return a===Yl?o.mapping=fr:a===$l&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yl||a===$l)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ec(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mr=class extends fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},or=4,Bu=[.125,.215,.35,.446,.526,.582],ws=20,El=new Mr,ku=new bt,Al=null,Rl=0,Cl=0,Pl=!1,Ss=(1+Math.sqrt(5))/2,Qs=1/Ss,zu=[new P(-Ss,Qs,0),new P(Ss,Qs,0),new P(-Qs,0,Ss),new P(Qs,0,Ss),new P(0,Ss,-Qs),new P(0,Ss,Qs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ho,format:mn,colorSpace:sn,depthBuffer:!1},s=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=jg(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,n,s){let a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=Zi,h.autoClear=!1;let d=new en({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new pe(new gn,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(ku),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Go(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fr||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,El)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(s-r-1)%zu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ws-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let p=[],y=0;for(let A=0;A<ws;++A){let C=A/x,w=Math.exp(-C*C/2);p.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],R=3*_*(s>v-or?s-v+or:0),T=4*(this._cubeSize-_);Go(e,R,T,3*_,2*_),l.setRenderTarget(e),l.render(u,El)}};function Jg(i){let t=[],e=[],n=[],s=i,r=i-or+1+Bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-or?l=Bu[o-i+or-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,C=T>2?0:-1,w=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(w,x*g*T),v.set(f,m*g*T);let S=[T,T,T,T,T,T];_.set(S,p*g*T)}let R=new ge;R.setAttribute("position",new ve(y,x)),R.setAttribute("uv",new ve(v,m)),R.setAttribute("faceIndex",new ve(_,p)),t.push(R),s>or&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hu(i,t,e){let n=new Ti(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jg(i,t,e){let n=new Float32Array(ws),s=new P(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Gu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yl||l===$l,h=l===fr||l===dr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Sr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Sr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ex(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let R=y[v+0],T=y[v+1],A=y[v+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let R=v+0,T=v+1,A=v+2;f.push(R,T,T,A,A,R)}}else return;let m=new(Gf(f)?ua:ha)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ix(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sx(i,t,e){let n=new WeakMap,s=new ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*u),A=new la(T,_,R,u);A.type=Wn,A.needsUpdate=!0;let C=v*4;for(let S=0;S<u;S++){let I=m[S],z=p[S],B=y[S],H=_*R*4*S;for(let J=0;J<I.count;J++){let W=J*C;d===!0&&(s.fromBufferAttribute(I,J),T[H+W+0]=s.x,T[H+W+1]=s.y,T[H+W+2]=s.z,T[H+W+3]=0),g===!0&&(s.fromBufferAttribute(z,J),T[H+W+4]=s.x,T[H+W+5]=s.y,T[H+W+6]=s.z,T[H+W+7]=0),x===!0&&(s.fromBufferAttribute(B,J),T[H+W+8]=s.x,T[H+W+9]=s.y,T[H+W+10]=s.z,T[H+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new zt(_,R)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function rx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var pa=class extends We{constructor(t,e,n,s,r,o,a,l,c,h=lr){if(h!==lr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lr&&(n=Ts),n===void 0&&h===mr&&(n=pr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yf=new We,Wu=new pa(1,1),$f=new la,Kf=new wc,Zf=new da,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function Rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),Be(e,n)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),Be(e,n)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),Be(e,n)}}function dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=Hf,r=Wu):r=Yf,e.setTexture2D(t||r,s)}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kf,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zf,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$f,s)}function Tx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}function Ex(i,t){i.uniform1fv(this.addr,t)}function Ax(i,t){let e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function Rx(i,t){let e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Cx(i,t){let e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function Px(i,t){let e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ix(i,t){let e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lx(i,t){let e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dx(i,t){i.uniform1iv(this.addr,t)}function Nx(i,t){i.uniform2iv(this.addr,t)}function Ux(i,t){i.uniform3iv(this.addr,t)}function Fx(i,t){i.uniform4iv(this.addr,t)}function Ox(i,t){i.uniform1uiv(this.addr,t)}function Bx(i,t){i.uniform2uiv(this.addr,t)}function kx(i,t){i.uniform3uiv(this.addr,t)}function zx(i,t){i.uniform4uiv(this.addr,t)}function Hx(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yf,r[o])}function Vx(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kf,r[o])}function Gx(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zf,r[o])}function Wx(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$f,r[o])}function Xx(i){switch(i){case 5126:return Ex;case 35664:return Ax;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Ix;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return kx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Wx}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Zu(i,t){i.seq.push(t),i.map[t.id]=t}function qx(i,t,e){let n=i.name,s=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),o=Il.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zu(e,c===void 0?new Ac(a,i,t):new Rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cc(a),Zu(e,u)),e=u}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ju(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yx=37297,$x=0;function Kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ju=new $t;function Zx(i){ee._getMatrix(ju,ee.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Fa:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kx(i.getShaderSource(t),o)}else return s}function Jx(i,t){let e=Zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jx(i,t){let e;switch(t){case cp:e="Linear";break;case hp:e="Reinhard";break;case up:e="Cineon";break;case jc:e="ACESFilmic";break;case dp:e="AgX";break;case pp:e="Neutral";break;case fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new P;function Qx(){ee.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function e_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zr(i){return i!==""}function tf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(i_,r_)}var s_=new Map;function r_(i,t){let e=jt[t];if(e===void 0){let n=s_.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(o_,a_)}function a_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case dr:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===dr&&(t="ENVMAP_MODE_REFRACTION"),t}function u_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jc:t="ENVMAP_BLENDING_MULTIPLY";break;case ap:t="ENVMAP_BLENDING_MIX";break;case lp:t="ENVMAP_BLENDING_ADD";break}return t}function f_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=l_(e),c=c_(e),h=h_(e),u=u_(e),f=f_(e),d=t_(e),g=e_(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),Qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Pc(o),o=tf(o,e),o=ef(o,e),a=Pc(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,R=Ju(s,s.VERTEX_SHADER,v),T=Ju(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(T).trim(),J=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{let rt=Qu(s,R,"vertex"),O=Qu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+rt+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:J,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(R),s.deleteShader(T),C=new hr(s,x),w=n_(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Yx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var p_=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}};function m_(i,t,e,n,s,r,o){let a=new ca,l=new Ic,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,I,z,B){let H=z.fog,J=B.geometry,W=w.isMeshStandardMaterial?z.environment:null,rt=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),O=rt&&rt.mapping===Na?rt.image.height:null,Q=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=it!==void 0?it.length:0,Mt=0;J.morphAttributes.position!==void 0&&(Mt=1),J.morphAttributes.normal!==void 0&&(Mt=2),J.morphAttributes.color!==void 0&&(Mt=3);let Ct,X,nt,dt;if(Q){let re=ii[Q];Ct=re.vertexShader,X=re.fragmentShader}else Ct=w.vertexShader,X=w.fragmentShader,l.update(w),nt=l.getVertexShaderID(w),dt=l.getFragmentShaderID(w);let ht=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),lt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Wt=!!w.map,Dt=!!w.matcap,ne=!!rt,L=!!w.aoMap,ie=!!w.lightMap,Vt=!!w.bumpMap,Bt=!!w.normalMap,Rt=!!w.displacementMap,fe=!!w.emissiveMap,Ut=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,Z=w.dispersion>0,j=w.iridescence>0,q=w.sheen>0,pt=w.transmission>0,ot=M&&!!w.anisotropyMap,ct=F&&!!w.clearcoatMap,qt=F&&!!w.clearcoatNormalMap,st=F&&!!w.clearcoatRoughnessMap,yt=j&&!!w.iridescenceMap,Pt=j&&!!w.iridescenceThicknessMap,Ft=q&&!!w.sheenColorMap,xt=q&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Xt=!!w.specularColorMap,ce=!!w.specularIntensityMap,D=pt&&!!w.transmissionMap,ft=pt&&!!w.thicknessMap,Y=!!w.gradientMap,k=!!w.alphaMap,et=w.alphaTest>0,ut=!!w.alphaHash,Et=!!w.extensions,Gt=Zi;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Me={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:Ct,fragmentShader:X,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:lt,instancingColor:lt&&B.instanceColor!==null,instancingMorph:lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:sn,alphaToCoverage:!!w.alphaToCoverage,map:Wt,matcap:Dt,envMap:ne,envMapMode:ne&&rt.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:ie,bumpMap:Vt,normalMap:Bt,displacementMap:f&&Rt,emissiveMap:fe,normalMapObjectSpace:Bt&&w.normalMapType===vp,normalMapTangentSpace:Bt&&w.normalMapType===oh,metalnessMap:Ut,roughnessMap:E,anisotropy:M,anisotropyMap:ot,clearcoat:F,clearcoatMap:ct,clearcoatNormalMap:qt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:j,iridescenceMap:yt,iridescenceThicknessMap:Pt,sheen:q,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:Zt,specularColorMap:Xt,specularIntensityMap:ce,transmission:pt,transmissionMap:D,thicknessMap:ft,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ar&&w.alphaToCoverage===!1,alphaMap:k,alphaTest:et,alphaHash:ut,combine:w.combine,mapUv:Wt&&x(w.map.channel),aoMapUv:L&&x(w.aoMap.channel),lightMapUv:ie&&x(w.lightMap.channel),bumpMapUv:Vt&&x(w.bumpMap.channel),normalMapUv:Bt&&x(w.normalMap.channel),displacementMapUv:Rt&&x(w.displacementMap.channel),emissiveMapUv:fe&&x(w.emissiveMap.channel),metalnessMapUv:Ut&&x(w.metalnessMap.channel),roughnessMapUv:E&&x(w.roughnessMap.channel),anisotropyMapUv:ot&&x(w.anisotropyMap.channel),clearcoatMapUv:ct&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&x(w.sheenRoughnessMap.channel),specularMapUv:Zt&&x(w.specularMap.channel),specularColorMapUv:Xt&&x(w.specularColorMap.channel),specularIntensityMapUv:ce&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:ft&&x(w.thicknessMap.channel),alphaMapUv:k&&x(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Bt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Wt||k),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:K,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Wt&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===me,decodeVideoTextureEmissive:fe&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ge,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Et&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&w.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(S,w),v(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let S=g[w.type],I;if(S){let z=ii[S];I=Ar.clone(z.uniforms)}else I=w.uniforms;return I}function R(w,S){let I;for(let z=0,B=h.length;z<B;z++){let H=h[z];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new d_(i,S,w,r),h.push(I)),I}function T(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function g_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function x_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||x_),n.length>1&&n.sort(f||rf),s.length>1&&s.sort(f||rf)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function __(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new of,i.set(n,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new bt};break;case"SpotLight":e={position:new P,direction:new P,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M_=0;function S_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i){let t=new v_,e=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ot,o=new Ot;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,R=0,T=0,A=0;c.sort(S_);for(let w=0,S=c.length;w<S;w++){let I=c[w],z=I.color,B=I.intensity,H=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*B,u+=z.g*B,f+=z.b*B;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],B);A++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let rt=I.shadow,O=e.get(I);O.shadowIntensity=rt.intensity,O.shadowBias=rt.bias,O.shadowNormalBias=rt.normalBias,O.shadowRadius=rt.radius,O.shadowMapSize=rt.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=I.shadow.matrix,y++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let rt=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,rt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=rt.matrix,I.castShadow){let O=e.get(I);O.shadowIntensity=rt.intensity,O.shadowBias=rt.bias,O.shadowNormalBias=rt.normalBias,O.shadowRadius=rt.radius,O.shadowMapSize=rt.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=J,_++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let rt=I.shadow,O=e.get(I);O.shadowIntensity=rt.intensity,O.shadowBias=rt.bias,O.shadowNormalBias=rt.normalBias,O.shadowRadius=rt.radius,O.shadowMapSize=rt.mapSize,O.shadowCameraNear=rt.camera.near,O.shadowCameraFar=rt.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(B),W.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=R,C.numLightProbes=A,n.version=M_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function af(i){let t=new b_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function w_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new af(i),t.set(s,[a])):r>=o.length?(a=new af(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Dc=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nc=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(i,t,e){let n=new so,s=new zt,r=new zt,o=new ae,a=new Dc({depthPacking:_p}),l=new Nc,c={},h=e.maxTextureSize,u={[si]:Qe,[Qe]:si,[Ge]:Ge},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:T_,fragmentShader:E_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let p=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ki),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=p!==vi&&this.type===vi,H=p===vi&&this.type!==vi;for(let J=0,W=T.length;J<W;J++){let rt=T[J],O=rt.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Q=O.getFrameExtents();if(s.multiply(Q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y)),O.map===null||B===!0||H===!0){let _t=this.type!==vi?{minFilter:tn,magFilter:tn}:{};O.map!==null&&O.map.dispose(),O.map=new Ti(s.x,s.y,_t),O.map.texture.name=rt.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let it=O.getViewportCount();for(let _t=0;_t<it;_t++){let Mt=O.getViewport(_t);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),z.viewport(o),O.updateMatrices(rt,_t),n=O.getFrustum(),_(A,C,O.camera,rt,this.type)}O.isPointLightShadow!==!0&&this.type===vi&&y(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,I)};function y(T,A){let C=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,d,x,null)}function v(T,A,C,w){let S=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=S.uuid,B=A.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let J=H[B];J===void 0&&(J=S.clone(),H[B]=J,A.addEventListener("dispose",R)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,w===vi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=i.properties.get(S);z.light=C}return S}function _(T,A,C,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===vi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let B=t.update(T),H=T.material;if(Array.isArray(H)){let J=B.groups;for(let W=0,rt=J.length;W<rt;W++){let O=J[W],Q=H[O.materialIndex];if(Q&&Q.visible){let it=v(T,Q,w,S);T.onBeforeShadow(i,T,A,C,B,it,O),i.renderBufferDirect(C,null,B,it,T,O),T.onAfterShadow(i,T,A,C,B,it,O)}}}else if(H.visible){let J=v(T,H,w,S);T.onBeforeShadow(i,T,A,C,B,J,null),i.renderBufferDirect(C,null,B,J,T,null),T.onAfterShadow(i,T,A,C,B,J,null)}}let z=T.children;for(let B=0,H=z.length;B<H;B++)_(z[B],A,C,w,S)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let w=c[C],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var R_={[zl]:Hl,[Vl]:Xl,[Gl]:ql,[ur]:Wl,[Hl]:zl,[Xl]:Vl,[ql]:Gl,[Wl]:ur};function C_(i,t){function e(){let D=!1,ft=new ae,Y=null,k=new ae(0,0,0,0);return{setMask:function(et){Y!==et&&!D&&(i.colorMask(et,et,et,et),Y=et)},setLocked:function(et){D=et},setClear:function(et,ut,Et,Gt,Me){Me===!0&&(et*=Gt,ut*=Gt,Et*=Gt),ft.set(et,ut,Et,Gt),k.equals(ft)===!1&&(i.clearColor(et,ut,Et,Gt),k.copy(ft))},reset:function(){D=!1,Y=null,k.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,Y=null,k=null,et=null;return{setReversed:function(ut){if(ft!==ut){let Et=t.get("EXT_clip_control");ft?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);let Gt=et;et=null,this.setClear(Gt)}ft=ut},getReversed:function(){return ft},setTest:function(ut){ut?ht(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(ut){Y!==ut&&!D&&(i.depthMask(ut),Y=ut)},setFunc:function(ut){if(ft&&(ut=R_[ut]),k!==ut){switch(ut){case zl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=ut}},setLocked:function(ut){D=ut},setClear:function(ut){et!==ut&&(ft&&(ut=1-ut),i.clearDepth(ut),et=ut)},reset:function(){D=!1,Y=null,k=null,et=null,ft=!1}}}function s(){let D=!1,ft=null,Y=null,k=null,et=null,ut=null,Et=null,Gt=null,Me=null;return{setTest:function(re){D||(re?ht(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(re){ft!==re&&!D&&(i.stencilMask(re),ft=re)},setFunc:function(re,on,fn){(Y!==re||k!==on||et!==fn)&&(i.stencilFunc(re,on,fn),Y=re,k=on,et=fn)},setOp:function(re,on,fn){(ut!==re||Et!==on||Gt!==fn)&&(i.stencilOp(re,on,fn),ut=re,Et=on,Gt=fn)},setLocked:function(re){D=re},setClear:function(re){Me!==re&&(i.clearStencil(re),Me=re)},reset:function(){D=!1,ft=null,Y=null,k=null,et=null,ut=null,Et=null,Gt=null,Me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new bt(0,0,0),C=0,w=!1,S=null,I=null,z=null,B=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=rt>=1):O.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=rt>=2);let Q=null,it={},_t=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Ct=new ae().fromArray(_t),X=new ae().fromArray(Mt);function nt(D,ft,Y,k){let et=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<Y;Et++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(ft+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return ut}let dt={};dt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(ur),Vt(!1),Bt(lu),ht(i.CULL_FACE),L(Ki);function ht(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function K(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function lt(D,ft){return u[D]!==ft?(i.bindFramebuffer(D,ft),u[D]=ft,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Tt(D,ft){let Y=d,k=!1;if(D){Y=f.get(ft),Y===void 0&&(Y=[],f.set(ft,Y));let et=D.textures;if(Y.length!==et.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Et=et.length;ut<Et;ut++)Y[ut]=i.COLOR_ATTACHMENT0+ut;Y.length=et.length,k=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,k=!0);k&&i.drawBuffers(Y)}function Wt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Dt={[bs]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};Dt[qd]=i.MIN,Dt[Yd]=i.MAX;let ne={[$d]:i.ZERO,[Kd]:i.ONE,[Zd]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ft,Y,k,et,ut,Et,Gt,Me,re){if(D===Ki){x===!0&&(K(i.BLEND),x=!1);return}if(x===!1&&(ht(i.BLEND),x=!0),D!==Gd){if(D!==m||re!==w){if((p!==bs||_!==bs)&&(i.blendEquation(i.FUNC_ADD),p=bs,_=bs),re)switch(D){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,R=null,T=null,A.set(0,0,0),C=0,m=D,w=re}return}et=et||ft,ut=ut||Y,Et=Et||k,(ft!==p||et!==_)&&(i.blendEquationSeparate(Dt[ft],Dt[et]),p=ft,_=et),(Y!==y||k!==v||ut!==R||Et!==T)&&(i.blendFuncSeparate(ne[Y],ne[k],ne[ut],ne[Et]),y=Y,v=k,R=ut,T=Et),(Gt.equals(A)===!1||Me!==C)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Me),A.copy(Gt),C=Me),m=D,w=!1}function ie(D,ft){D.side===Ge?K(i.CULL_FACE):ht(i.CULL_FACE);let Y=D.side===Qe;ft&&(Y=!Y),Vt(Y),D.blending===ar&&D.transparent===!1?L(Ki):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let k=D.stencilWrite;a.setTest(k),k&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Bt(D){D!==Hd?(ht(i.CULL_FACE),D!==I&&(D===lu?i.cullFace(i.BACK):D===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),I=D}function Rt(D){D!==z&&(W&&i.lineWidth(D),z=D)}function fe(D,ft,Y){D?(ht(i.POLYGON_OFFSET_FILL),(B!==ft||H!==Y)&&(i.polygonOffset(ft,Y),B=ft,H=Y)):K(i.POLYGON_OFFSET_FILL)}function Ut(D){D?ht(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+J-1),Q!==D&&(i.activeTexture(D),Q=D)}function M(D,ft,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+J-1:Y=Q);let k=it[Y];k===void 0&&(k={type:void 0,texture:void 0},it[Y]=k),(k.type!==D||k.texture!==ft)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(D,ft||dt[D]),k.type=D,k.texture=ft)}function F(){let D=it[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){Ct.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ct.copy(D))}function xt(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Zt(D,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let k=Y.get(D);k===void 0&&(k=i.getUniformBlockIndex(ft,D.name),Y.set(D,k))}function Xt(D,ft){let k=c.get(ft).get(D);l.get(ft)!==k&&(i.uniformBlockBinding(ft,k,D.__bindingPointIndex),l.set(ft,k))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,it={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new bt(0,0,0),C=0,w=!1,S=null,I=null,z=null,B=null,H=null,Ct.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:K,bindFramebuffer:lt,drawBuffers:Tt,useProgram:Wt,setBlending:L,setMaterial:ie,setFlipSided:Vt,setCullFace:Bt,setLineWidth:Rt,setPolygonOffset:fe,setScissorTest:Ut,activeTexture:E,bindTexture:M,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:yt,texImage3D:Pt,updateUBOMapping:Zt,uniformBlockBinding:Xt,texStorage2D:qt,texStorage3D:st,texSubImage2D:q,texSubImage3D:pt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:Ft,viewport:xt,reset:ce}}function lf(i,t,e,n){let s=P_(n);switch(e){case Nf:return i*t;case Ff:return i*t;case Of:return i*t*2;case uo:return i*t/s.components*s.byteLength;case ih:return i*t/s.components*s.byteLength;case Bf:return i*t*2/s.components*s.byteLength;case sh:return i*t*2/s.components*s.byteLength;case Uf:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case rh:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:case jl:return Math.max(i,16)*Math.max(t,8)/4;case Kl:case Jl:return Math.max(i,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case gc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kf:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P_(i){switch(i){case wi:case If:return{byteLength:1,components:1};case no:case Lf:case ho:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case Ts:case th:case Wn:return{byteLength:4,components:1};case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):io("canvas")}function x(E,M,F){let Z=1,j=Ut(E);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(Z*j.width),pt=Math.floor(Z*j.height);u===void 0&&(u=g(q,pt));let ot=M?g(q,pt):u;return ot.width=q,ot.height=pt,ot.getContext("2d").drawImage(E,0,0,q,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+pt+")."),ot}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,M,F,Z,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=M;if(M===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),M===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){let pt=j?Fa:ee.getTransfer(Z);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=pt===me?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(E,M){let F;return E?M===null||M===Ts||M===pr?F=i.DEPTH24_STENCIL8:M===Wn?F=i.DEPTH32F_STENCIL8:M===no&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ts||M===pr?F=i.DEPTH_COMPONENT24:M===Wn?F=i.DEPTH_COMPONENT32F:M===no&&(F=i.DEPTH_COMPONENT16),F}function R(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==qe?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){let M=E.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&h.delete(M)}function A(E){let M=E.target;M.removeEventListener("dispose",A),S(M)}function C(E){let M=n.get(E);if(M.__webglInit===void 0)return;let F=E.source,Z=f.get(F);if(Z){let j=Z[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(E),Object.keys(Z).length===0&&f.delete(F)}n.remove(E)}function w(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let F=E.source,Z=f.get(F);delete Z[M.__cacheKey],o.memory.textures--}function S(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let j=0;j<M.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=E.textures;for(let Z=0,j=F.length;Z<j;Z++){let q=n.get(F[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Z])}n.remove(E)}let I=0;function z(){I=0}function B(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function H(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function J(E,M){let F=n.get(E);if(E.isVideoTexture&&Rt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,E,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function W(E,M){let F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function rt(E,M){let F=n.get(E);if(E.version>0&&F.__version!==E.version){X(F,E,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function O(E,M){let F=n.get(E);if(E.version>0&&F.__version!==E.version){nt(F,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}let Q={[ri]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},it={[tn]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},_t={[yp]:i.NEVER,[Ep]:i.ALWAYS,[Mp]:i.LESS,[Hf]:i.LEQUAL,[Sp]:i.EQUAL,[Tp]:i.GEQUAL,[bp]:i.GREATER,[wp]:i.NOTEQUAL};function Mt(E,M){if(M.type===Wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===qe||M.magFilter===Jr||M.magFilter===rr||M.magFilter===Pn||M.minFilter===qe||M.minFilter===Jr||M.minFilter===rr||M.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Q[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==rr&&M.minFilter!==Pn||M.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(E,M){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));let Z=M.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let q=H(M);if(q!==E.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[q].usedTimes++;let pt=j[E.__cacheKey];pt!==void 0&&(j[E.__cacheKey].usedTimes--,pt.usedTimes===0&&w(M)),E.__cacheKey=q,E.__webglTexture=j[q].texture}return F}function X(E,M,F){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Ct(E,M),q=M.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+F);let pt=n.get(q);if(q.version!==pt.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let ot=ee.getPrimaries(ee.workingColorSpace),ct=M.colorSpace===qi?null:ee.getPrimaries(M.colorSpace),qt=M.colorSpace===qi||ot===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=x(M.image,!1,s.maxTextureSize);st=fe(M,st);let yt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Ft=v(M.internalFormat,yt,Pt,M.colorSpace,M.isVideoTexture);Mt(Z,M);let xt,Zt=M.mipmaps,Xt=M.isVideoTexture!==!0,ce=pt.__version===void 0||j===!0,D=q.dataReady,ft=R(M,st);if(M.isDepthTexture)Ft=_(M.format===mr,M.type),ce&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,Pt,null));else if(M.isDataTexture)if(Zt.length>0){Xt&&ce&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let Y=0,k=Zt.length;Y<k;Y++)xt=Zt[Y],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,yt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,xt.width,xt.height,0,yt,Pt,xt.data);M.generateMipmaps=!1}else Xt?(ce&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,st.width,st.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,yt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,st.width,st.height,0,yt,Pt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,Zt[0].width,Zt[0].height,st.depth);for(let Y=0,k=Zt.length;Y<k;Y++)if(xt=Zt[Y],M.format!==mn)if(yt!==null)if(Xt){if(D)if(M.layerUpdates.size>0){let et=lf(xt.width,xt.height,M.format,M.type);for(let ut of M.layerUpdates){let Et=xt.data.subarray(ut*et/xt.data.BYTES_PER_ELEMENT,(ut+1)*et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ut,xt.width,xt.height,1,yt,Et)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,st.depth,yt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,xt.width,xt.height,st.depth,0,yt,Pt,xt.data)}else{Xt&&ce&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Zt[0].width,Zt[0].height);for(let Y=0,k=Zt.length;Y<k;Y++)xt=Zt[Y],M.format!==mn?yt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,yt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,xt.width,xt.height,0,yt,Pt,xt.data)}else if(M.isDataArrayTexture)if(Xt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,st.width,st.height,st.depth),D)if(M.layerUpdates.size>0){let Y=lf(st.width,st.height,M.format,M.type);for(let k of M.layerUpdates){let et=st.data.subarray(k*Y/st.data.BYTES_PER_ELEMENT,(k+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,st.width,st.height,1,yt,Pt,et)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,yt,Pt,st.data);else if(M.isData3DTexture)Xt?(ce&&e.texStorage3D(i.TEXTURE_3D,ft,Ft,st.width,st.height,st.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,yt,Pt,st.data);else if(M.isFramebufferTexture){if(ce)if(Xt)e.texStorage2D(i.TEXTURE_2D,ft,Ft,st.width,st.height);else{let Y=st.width,k=st.height;for(let et=0;et<ft;et++)e.texImage2D(i.TEXTURE_2D,et,Ft,Y,k,0,yt,Pt,null),Y>>=1,k>>=1}}else if(Zt.length>0){if(Xt&&ce){let Y=Ut(Zt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ft,Y.width,Y.height)}for(let Y=0,k=Zt.length;Y<k;Y++)xt=Zt[Y],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,yt,Pt,xt):e.texImage2D(i.TEXTURE_2D,Y,Ft,yt,Pt,xt);M.generateMipmaps=!1}else if(Xt){if(ce){let Y=Ut(st);e.texStorage2D(i.TEXTURE_2D,ft,Ft,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ft,yt,Pt,st);m(M)&&p(Z),pt.__version=q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function nt(E,M,F){if(M.image.length!==6)return;let Z=Ct(E,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let q=n.get(j);if(j.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);let pt=ee.getPrimaries(ee.workingColorSpace),ot=M.colorSpace===qi?null:ee.getPrimaries(M.colorSpace),ct=M.colorSpace===qi||pt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let qt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let k=0;k<6;k++)!qt&&!st?yt[k]=x(M.image[k],!0,s.maxCubemapSize):yt[k]=st?M.image[k].image:M.image[k],yt[k]=fe(M,yt[k]);let Pt=yt[0],Ft=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Zt=v(M.internalFormat,Ft,xt,M.colorSpace),Xt=M.isVideoTexture!==!0,ce=q.__version===void 0||Z===!0,D=j.dataReady,ft=R(M,Pt);Mt(i.TEXTURE_CUBE_MAP,M);let Y;if(qt){Xt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,Pt.width,Pt.height);for(let k=0;k<6;k++){Y=yt[k].mipmaps;for(let et=0;et<Y.length;et++){let ut=Y[et];M.format!==mn?Ft!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,0,0,ut.width,ut.height,Ft,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,Zt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,0,0,ut.width,ut.height,Ft,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,Zt,ut.width,ut.height,0,Ft,xt,ut.data)}}}else{if(Y=M.mipmaps,Xt&&ce){Y.length>0&&ft++;let k=Ut(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Zt,k.width,k.height)}for(let k=0;k<6;k++)if(st){Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,yt[k].width,yt[k].height,Ft,xt,yt[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Zt,yt[k].width,yt[k].height,0,Ft,xt,yt[k].data);for(let et=0;et<Y.length;et++){let Et=Y[et].image[k].image;Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,0,0,Et.width,Et.height,Ft,xt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,Zt,Et.width,Et.height,0,Ft,xt,Et.data)}}else{Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ft,xt,yt[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Zt,Ft,xt,yt[k]);for(let et=0;et<Y.length;et++){let ut=Y[et];Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,0,0,Ft,xt,ut.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,Zt,Ft,xt,ut.image[k])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function dt(E,M,F,Z,j,q){let pt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ct=v(F.internalFormat,pt,ot,F.colorSpace),qt=n.get(M),st=n.get(F);if(st.__renderTarget=M,!qt.__hasExternalTextures){let yt=Math.max(1,M.width>>q),Pt=Math.max(1,M.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ct,yt,Pt,M.depth,0,pt,ot,null):e.texImage2D(j,q,ct,yt,Pt,0,pt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,st.__webglTexture,0,Vt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,st.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(E,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let Z=M.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,q=_(M.stencilBuffer,j),pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Vt(M);Bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,E)}else{let Z=M.textures;for(let j=0;j<Z.length;j++){let q=Z[j],pt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),ct=v(q.internalFormat,pt,ot,q.colorSpace),qt=Vt(M);F&&Bt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ct,M.width,M.height):Bt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let j=Z.__webglTexture,q=Vt(M);if(M.depthTexture.format===lr)Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===mr)Bt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function lt(E){let M=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Z}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");K(M.__webglFramebuffer,E)}else if(F){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),ht(M.__webglDepthbuffer[Z],E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ht(M.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(E,M,F){let Z=n.get(E);M!==void 0&&dt(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&lt(E)}function Wt(E){let M=E.texture,F=n.get(E),Z=n.get(M);E.addEventListener("dispose",A);let j=E.textures,q=E.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ct=0;ct<M.mipmaps.length;ct++)F.__webglFramebuffer[ot][ct]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(pt)for(let ot=0,ct=j.length;ot<ct;ot++){let qt=n.get(j[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Bt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ct=j[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let qt=r.convert(ct.format,ct.colorSpace),st=r.convert(ct.type),yt=v(ct.internalFormat,qt,st,ct.colorSpace,E.isXRRenderTarget===!0),Pt=Vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,yt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)dt(F.__webglFramebuffer[ot][ct],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else dt(F.__webglFramebuffer[ot],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ot=0,ct=j.length;ot<ct;ot++){let qt=j[ot],st=n.get(qt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Mt(i.TEXTURE_2D,qt),dt(F.__webglFramebuffer,E,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Mt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)dt(F.__webglFramebuffer[ct],E,M,i.COLOR_ATTACHMENT0,ot,ct);else dt(F.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ot,0);m(M)&&p(ot),e.unbindTexture()}E.depthBuffer&&lt(E)}function Dt(E){let M=E.textures;for(let F=0,Z=M.length;F<Z;F++){let j=M[F];if(m(j)){let q=y(E),pt=n.get(j).__webglTexture;e.bindTexture(q,pt),p(q),e.unbindTexture()}}}let ne=[],L=[];function ie(E){if(E.samples>0){if(Bt(E)===!1){let M=E.textures,F=E.width,Z=E.height,j=i.COLOR_BUFFER_BIT,q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(E),ot=M.length>1;if(ot)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ct]);let qt=n.get(M[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,i.NEAREST),l===!0&&(ne.length=0,L.length=0,ne.push(i.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ne.push(q),L.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ct]);let qt=n.get(M[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Vt(E){return Math.min(s.maxSamples,E.samples)}function Bt(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function fe(E,M){let F=E.colorSpace,Z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==sn&&F!==qi&&(ee.getTransfer(F)===me?(Z!==mn||j!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=O,this.rebindTextures=Tt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Bt}function L_(i,t){function e(n,s=qi){let r,o=ee.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===If)return i.BYTE;if(n===Lf)return i.SHORT;if(n===no)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===ho)return i.HALF_FLOAT;if(n===Nf)return i.ALPHA;if(n===Uf)return i.RGB;if(n===mn)return i.RGBA;if(n===Ff)return i.LUMINANCE;if(n===Of)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===ih)return i.RED_INTEGER;if(n===Bf)return i.RG;if(n===sh)return i.RG_INTEGER;if(n===rh)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Zl||n===Jl||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===tc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===_c||n===vc||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Uc=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fe=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},D_={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends ji{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Fc,m=e.getContextAttributes(),p=null,y=null,v=[],_=[],R=new zt,T=null,A=new Ue;A.viewport=new ae;let C=new Ue;C.viewport=new ae;let w=[A,C],S=new Uc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=v[X];return nt===void 0&&(nt=new to,v[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=v[X];return nt===void 0&&(nt=new to,v[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=v[X];return nt===void 0&&(nt=new to,v[X]=nt),nt.getHandSpace()};function B(X){let nt=_.indexOf(X.inputSource);if(nt===-1)return;let dt=v[nt];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let X=0;X<v.length;X++){let nt=_[X];nt!==null&&(_[X]=null,v[X].disconnect(nt))}I=null,z=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ti(d.framebufferWidth,d.framebufferHeight,{format:mn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,dt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?mr:lr,dt=m.stencil?pr:Ts);let K={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(K),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ti(f.textureWidth,f.textureHeight,{format:mn,type:wi,depthTexture:new pa(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(X){for(let nt=0;nt<X.removed.length;nt++){let dt=X.removed[nt],ht=_.indexOf(dt);ht>=0&&(_[ht]=null,v[ht].disconnect(dt))}for(let nt=0;nt<X.added.length;nt++){let dt=X.added[nt],ht=_.indexOf(dt);if(ht===-1){for(let lt=0;lt<v.length;lt++)if(lt>=_.length){_.push(dt),ht=lt;break}else if(_[lt]===null){_[lt]=dt,ht=lt;break}if(ht===-1)break}let K=v[ht];K&&K.connect(dt)}}let W=new P,rt=new P;function O(X,nt,dt){W.setFromMatrixPosition(nt.matrixWorld),rt.setFromMatrixPosition(dt.matrixWorld);let ht=W.distanceTo(rt),K=nt.projectionMatrix.elements,lt=dt.projectionMatrix.elements,Tt=K[14]/(K[10]-1),Wt=K[14]/(K[10]+1),Dt=(K[9]+1)/K[5],ne=(K[9]-1)/K[5],L=(K[8]-1)/K[0],ie=(lt[8]+1)/lt[0],Vt=Tt*L,Bt=Tt*ie,Rt=ht/(-L+ie),fe=Rt*-L;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(fe),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),K[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Ut=Tt+Rt,E=Wt+Rt,M=Vt-fe,F=Bt+(ht-fe),Z=Dt*Wt/E*Ut,j=ne*Wt/E*Ut;X.projectionMatrix.makePerspective(M,F,Z,j,Ut,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let nt=X.near,dt=X.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),S.near=C.near=A.near=nt,S.far=C.far=A.far=dt,(I!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;let ht=X.parent,K=S.cameras;Q(S,ht);for(let lt=0;lt<K.length;lt++)Q(K[lt],ht);K.length===2?O(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),it(X,S,ht)};function it(X,nt,dt){dt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_r*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let _t=null;function Mt(X,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ht=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let lt=0;lt<dt.length;lt++){let Tt=dt[lt],Wt=null;if(d!==null)Wt=d.getViewport(Tt);else{let ne=u.getViewSubImage(f,Tt);Wt=ne.viewport,lt===0&&(t.setRenderTargetTextures(y,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(y))}let Dt=w[lt];Dt===void 0&&(Dt=new Ue,Dt.layers.enable(lt),Dt.viewport=new ae,w[lt]=Dt),Dt.matrix.fromArray(Tt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Tt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),lt===0&&(S.matrix.copy(Dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(Dt)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let lt=u.getDepthInformation(dt[0]);lt&&lt.isValid&&lt.texture&&x.init(t,lt,s.renderState)}}for(let dt=0;dt<v.length;dt++){let ht=_[dt],K=v[dt];ht!==null&&K!==void 0&&K.update(ht,nt,c||o)}_t&&_t(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Ct=new qf;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}},Ms=new qn,F_=new Ot;function O_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,Ms.copy(_),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let _=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,A=_.length;T<A;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,S=C.length;w<S;w++){let I=C[w];if(d(I,T,w,R)===!0){let z=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],H=0;for(let J=0;J<B.length;J++){let W=B[J],rt=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,_,R){let T=y.value,A=v+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let C=R[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){let v=y.uniforms,_=0,R=16;for(let A=0,C=v.length;A<C;A++){let w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,I=w.length;S<I;S++){let z=w[S],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,J=B.length;H<J;H++){let W=B[H],rt=x(W),O=_%R,Q=O%rt.boundary,it=O+Q;_+=Q,it!==0&&R-it<rt.storage&&(_+=R-it),z.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=rt.storage}}}let T=_%R;return T>0&&(_+=R-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ma=class{constructor(t={}){let{canvas:e=Gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Zi,this.toneMappingExposure=1;let _=this,R=!1,T=0,A=0,C=null,w=-1,S=null,I=new ae,z=new ae,B=null,H=new bt(0),J=0,W=e.width,rt=e.height,O=1,Q=null,it=null,_t=new ae(0,0,W,rt),Mt=new ae(0,0,W,rt),Ct=!1,X=new so,nt=!1,dt=!1,ht=new Ot,K=new Ot,lt=new P,Tt=new ae,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function ne(){return C===null?O:1}let L=n;function ie(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){let N="webgl2";if(L=ie(N,b),L===null)throw ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Vt,Bt,Rt,fe,Ut,E,M,F,Z,j,q,pt,ot,ct,qt,st,yt,Pt,Ft,xt,Zt,Xt,ce,D;function ft(){Vt=new tx(L),Vt.init(),Xt=new L_(L,Vt),Bt=new $g(L,Vt,t,Xt),Rt=new C_(L,Vt),Bt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),fe=new ix(L),Ut=new g_,E=new I_(L,Vt,Rt,Ut,Bt,Xt,fe),M=new Zg(_),F=new Qg(_),Z=new hm(L),ce=new qg(L,Z),j=new ex(L,Z,fe,ce),q=new rx(L,j,Z,fe),Ft=new sx(L,Bt,E),st=new Kg(Ut),pt=new m_(_,M,F,Vt,Bt,ce,st),ot=new O_(_,Ut),ct=new __,qt=new w_(Vt),Pt=new Xg(_,M,F,Rt,q,d,l),yt=new A_(_,q,Bt),D=new B_(L,fe,Bt,Rt),xt=new Yg(L,Vt,fe),Zt=new nx(L,Vt,fe),fe.programs=pt.programs,_.capabilities=Bt,_.extensions=Vt,_.properties=Ut,_.renderLists=ct,_.shadowMap=yt,_.state=Rt,_.info=fe}ft();let Y=new Oc(_,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(W,rt,!1))},this.getSize=function(b){return b.set(W,rt)},this.setSize=function(b,N,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,rt=N,e.width=Math.floor(b*O),e.height=Math.floor(N*O),G===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*O,rt*O).floor()},this.setDrawingBufferSize=function(b,N,G){W=b,rt=N,O=G,e.width=Math.floor(b*G),e.height=Math.floor(N*G),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,N,G,V){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,N,G,V),Rt.viewport(I.copy(_t).multiplyScalar(O).round())},this.getScissor=function(b){return b.copy(Mt)},this.setScissor=function(b,N,G,V){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,N,G,V),Rt.scissor(z.copy(Mt).multiplyScalar(O).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){Rt.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,N=!0,G=!0){let V=0;if(b){let U=!1;if(C!==null){let at=C.texture.format;U=at===rh||at===sh||at===ih}if(U){let at=C.texture.type,vt=at===wi||at===Ts||at===no||at===pr||at===eh||at===nh,At=Pt.getClearColor(),It=Pt.getClearAlpha(),Yt=At.r,Jt=At.g,Lt=At.b;vt?(g[0]=Yt,g[1]=Jt,g[2]=Lt,g[3]=It,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Yt,x[1]=Jt,x[2]=Lt,x[3]=It,L.clearBufferiv(L.COLOR,0,x))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ct.dispose(),qt.dispose(),Ut.dispose(),M.dispose(),F.dispose(),q.dispose(),ce.dispose(),D.dispose(),pt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ci),Y.removeEventListener("sessionend",Bs),dn.stop()};function k(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=fe.autoReset,N=yt.enabled,G=yt.autoUpdate,V=yt.needsUpdate,U=yt.type;ft(),fe.autoReset=b,yt.enabled=N,yt.autoUpdate=G,yt.needsUpdate=V,yt.type=U}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){let N=b.target;N.removeEventListener("dispose",Et),Gt(N)}function Gt(b){Me(b),Ut.remove(b)}function Me(b){let N=Ut.get(b).programs;N!==void 0&&(N.forEach(function(G){pt.releaseProgram(G)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,G,V,U,at){N===null&&(N=Wt);let vt=U.isMesh&&U.matrixWorld.determinant()<0,At=ms(b,N,G,V,U);Rt.setMaterial(V,vt);let It=G.index,Yt=1;if(V.wireframe===!0){if(It=j.getWireframeAttribute(G),It===void 0)return;Yt=2}let Jt=G.drawRange,Lt=G.attributes.position,le=Jt.start*Yt,xe=(Jt.start+Jt.count)*Yt;at!==null&&(le=Math.max(le,at.start*Yt),xe=Math.min(xe,(at.start+at.count)*Yt)),It!==null?(le=Math.max(le,0),xe=Math.min(xe,It.count)):Lt!=null&&(le=Math.max(le,0),xe=Math.min(xe,Lt.count));let Se=xe-le;if(Se<0||Se===1/0)return;ce.setup(U,V,At,G,It);let pn,he=xt;if(It!==null&&(pn=Z.get(It),he=Zt,he.setIndex(pn)),U.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*ne()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(U.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),Rt.setLineWidth(Nt*ne()),U.isLineSegments?he.setMode(L.LINES):U.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else U.isPoints?he.setMode(L.POINTS):U.isSprite&&he.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)he.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))he.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Nt=U._multiDrawStarts,fi=U._multiDrawCounts,ue=U._multiDrawCount,kn=It?Z.get(It).bytesPerElement:1,ks=Ut.get(V).currentProgram.getUniforms();for(let yn=0;yn<ue;yn++)ks.setValue(L,"_gl_DrawID",yn),he.render(Nt[yn]/kn,fi[yn])}else if(U.isInstancedMesh)he.renderInstances(le,Se,U.count);else if(G.isInstancedBufferGeometry){let Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fi=Math.min(G.instanceCount,Nt);he.renderInstances(le,Se,fi)}else he.render(le,Se)};function re(b,N,G){b.transparent===!0&&b.side===Ge&&b.forceSinglePass===!1?(b.side=Qe,b.needsUpdate=!0,Le(b,N,G),b.side=si,b.needsUpdate=!0,Le(b,N,G),b.side=Ge):Le(b,N,G)}this.compile=function(b,N,G=null){G===null&&(G=b),p=qt.get(G),p.init(N),v.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==G&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let at=U.material;if(at)if(Array.isArray(at))for(let vt=0;vt<at.length;vt++){let At=at[vt];re(At,G,U),V.add(At)}else re(at,G,U),V.add(at)}),v.pop(),p=null,V},this.compileAsync=function(b,N,G=null){let V=this.compile(b,N,G);return new Promise(U=>{function at(){if(V.forEach(function(vt){Ut.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){U(b);return}setTimeout(at,10)}Vt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let on=null;function fn(b){on&&on(b)}function ci(){dn.stop()}function Bs(){dn.start()}let dn=new qf;dn.setAnimationLoop(fn),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(b){on=b,Y.setAnimationLoop(b),b===null?dn.stop():dn.start()},Y.addEventListener("sessionstart",ci),Y.addEventListener("sessionend",Bs),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,C),p=qt.get(b,v.length),p.init(N),v.push(p),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(K),dt=this.localClippingEnabled,nt=st.init(this.clippingPlanes,dt),m=ct.get(b,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&Fi(at,N,-1/0,_.sortObjects)}Fi(b,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,it),Dt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Dt&&Pt.addToRenderList(m,b),this.info.render.frame++,nt===!0&&st.beginShadows();let G=p.state.shadowsArray;yt.render(G,b,N),nt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let at=N.cameras;if(U.length>0)for(let vt=0,At=at.length;vt<At;vt++){let It=at[vt];hi(V,U,b,It)}Dt&&Pt.render(b);for(let vt=0,At=at.length;vt<At;vt++){let It=at[vt];ds(m,b,It,It.viewport)}}else U.length>0&&hi(V,U,b,N),Dt&&Pt.render(b),ds(m,b,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,N),ce.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],nt===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Fi(b,N,G,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){V&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);let vt=q.update(b),At=b.material;At.visible&&m.push(b,vt,At,G,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let vt=q.update(b),At=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Tt.copy(vt.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(K)),Array.isArray(At)){let It=vt.groups;for(let Yt=0,Jt=It.length;Yt<Jt;Yt++){let Lt=It[Yt],le=At[Lt.materialIndex];le&&le.visible&&m.push(b,vt,le,G,Tt.z,Lt)}}else At.visible&&m.push(b,vt,At,G,Tt.z,null)}}let at=b.children;for(let vt=0,At=at.length;vt<At;vt++)Fi(at[vt],N,G,V)}function ds(b,N,G,V){let U=b.opaque,at=b.transmissive,vt=b.transparent;p.setupLightsView(G),nt===!0&&st.setGlobalState(_.clippingPlanes,G),V&&Rt.viewport(I.copy(V)),U.length>0&&ei(U,N,G),at.length>0&&ei(at,N,G),vt.length>0&&ei(vt,N,G),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function hi(b,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ho:wi,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let at=p.state.transmissionRenderTarget[V.id],vt=V.viewport||I;at.setSize(vt.z,vt.w);let At=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(H),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Dt&&Pt.render(G);let It=_.toneMapping;_.toneMapping=Zi;let Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),nt===!0&&st.setGlobalState(_.clippingPlanes,V),ei(b,G,V),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Lt=0,le=N.length;Lt<le;Lt++){let xe=N[Lt],Se=xe.object,pn=xe.geometry,he=xe.material,Nt=xe.group;if(he.side===Ge&&Se.layers.test(V.layers)){let fi=he.side;he.side=Qe,he.needsUpdate=!0,He(Se,G,V,pn,he,Nt),he.side=fi,he.needsUpdate=!0,Jt=!0}}Jt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}_.setRenderTarget(At),_.setClearColor(H,J),Yt!==void 0&&(V.viewport=Yt),_.toneMapping=It}function ei(b,N,G){let V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,at=b.length;U<at;U++){let vt=b[U],At=vt.object,It=vt.geometry,Yt=V===null?vt.material:V,Jt=vt.group;At.layers.test(G.layers)&&He(At,N,G,It,Yt,Jt)}}function He(b,N,G,V,U,at){b.onBeforeRender(_,N,G,V,U,at),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,N,G,V,b,at),U.transparent===!0&&U.side===Ge&&U.forceSinglePass===!1?(U.side=Qe,U.needsUpdate=!0,_.renderBufferDirect(G,N,V,U,b,at),U.side=si,U.needsUpdate=!0,_.renderBufferDirect(G,N,V,U,b,at),U.side=Ge):_.renderBufferDirect(G,N,V,U,b,at),b.onAfterRender(_,N,G,V,U,at)}function Le(b,N,G){N.isScene!==!0&&(N=Wt);let V=Ut.get(b),U=p.state.lights,at=p.state.shadowsArray,vt=U.state.version,At=pt.getParameters(b,U.state,at,N,G),It=pt.getProgramCacheKey(At),Yt=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",Et),Yt=new Map,V.programs=Yt);let Jt=Yt.get(It);if(Jt!==void 0){if(V.currentProgram===Jt&&V.lightsStateVersion===vt)return ui(b,At),Jt}else At.uniforms=pt.getUniforms(b),b.onBeforeCompile(At,_),Jt=pt.acquireProgram(At,It),Yt.set(It,Jt),V.uniforms=At.uniforms;let Lt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=st.uniform),ui(b,At),V.needsLights=Oi(b),V.lightsStateVersion=vt,V.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Jt,V.uniformsList=null,Jt}function ps(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=hr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ui(b,N){let G=Ut.get(b);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ms(b,N,G,V,U){N.isScene!==!0&&(N=Wt),E.resetTextureUnits();let at=N.fog,vt=V.isMeshStandardMaterial?N.environment:null,At=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sn,It=(V.isMeshStandardMaterial?F:M).get(V.envMap||vt),Yt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Jt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!G.morphAttributes.position,le=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,Se=Zi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=_.toneMapping);let pn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=pn!==void 0?pn.length:0,Nt=Ut.get(V),fi=p.state.lights;if(nt===!0&&(dt===!0||b!==S)){let Rn=b===S&&V.id===w;st.setState(V,b,Rn)}let ue=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==fi.state.version||Nt.outputColorSpace!==At||U.isBatchedMesh&&Nt.batching===!1||!U.isBatchedMesh&&Nt.batching===!0||U.isBatchedMesh&&Nt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Nt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Nt.instancing===!1||!U.isInstancedMesh&&Nt.instancing===!0||U.isSkinnedMesh&&Nt.skinning===!1||!U.isSkinnedMesh&&Nt.skinning===!0||U.isInstancedMesh&&Nt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Nt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Nt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Nt.instancingMorph===!1&&U.morphTexture!==null||Nt.envMap!==It||V.fog===!0&&Nt.fog!==at||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==st.numPlanes||Nt.numIntersection!==st.numIntersection)||Nt.vertexAlphas!==Yt||Nt.vertexTangents!==Jt||Nt.morphTargets!==Lt||Nt.morphNormals!==le||Nt.morphColors!==xe||Nt.toneMapping!==Se||Nt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Nt.__version=V.version);let kn=Nt.currentProgram;ue===!0&&(kn=Le(V,N,U));let ks=!1,yn=!1,Fr=!1,be=kn.getUniforms(),ni=Nt.uniforms;if(Rt.useProgram(kn.program)&&(ks=!0,yn=!0,Fr=!0),V.id!==w&&(w=V.id,yn=!0),ks||S!==b){Rt.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Xp(ht),qp(ht),be.setValue(L,"projectionMatrix",ht)):be.setValue(L,"projectionMatrix",b.projectionMatrix),be.setValue(L,"viewMatrix",b.matrixWorldInverse);let Bi=be.map.cameraPosition;Bi!==void 0&&Bi.setValue(L,lt.setFromMatrixPosition(b.matrixWorld)),Bt.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,yn=!0,Fr=!0)}if(U.isSkinnedMesh){be.setOptional(L,U,"bindMatrix"),be.setOptional(L,U,"bindMatrixInverse");let Rn=U.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),be.setValue(L,"boneTexture",Rn.boneTexture,E))}U.isBatchedMesh&&(be.setOptional(L,U,"batchingTexture"),be.setValue(L,"batchingTexture",U._matricesTexture,E),be.setOptional(L,U,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",U._indirectTexture,E),be.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",U._colorsTexture,E));let Or=G.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Ft.update(U,G,kn),(yn||Nt.receiveShadow!==U.receiveShadow)&&(Nt.receiveShadow=U.receiveShadow,be.setValue(L,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ni.envMap.value=It,ni.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(ni.envMapIntensity.value=N.environmentIntensity),yn&&(be.setValue(L,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Ur(ni,Fr),at&&V.fog===!0&&ot.refreshFogUniforms(ni,at),ot.refreshMaterialUniforms(ni,V,O,rt,p.state.transmissionRenderTarget[b.id]),hr.upload(L,ps(Nt),ni,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hr.upload(L,ps(Nt),ni,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(L,"center",U.center),be.setValue(L,"modelViewMatrix",U.modelViewMatrix),be.setValue(L,"normalMatrix",U.normalMatrix),be.setValue(L,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Rn=V.uniformsGroups;for(let Bi=0,ki=Rn.length;Bi<ki;Bi++){let au=Rn[Bi];D.update(au,kn),D.bind(au,kn)}}return kn}function Ur(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Oi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,G){Ut.get(b.texture).__webglTexture=N,Ut.get(b.depthTexture).__webglTexture=G;let V=Ut.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let G=Ut.get(b);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,G=0){C=b,T=N,A=G;let V=!0,U=null,at=!1,vt=!1;if(b){let It=Ut.get(b);if(It.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(It.__hasExternalTextures)E.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(It.__boundDepthTexture!==Lt){if(Lt!==null&&Ut.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(vt=!0);let Jt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[N])?U=Jt[N][G]:U=Jt[N],at=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?U=Jt[G]:U=Jt,I.copy(b.viewport),z.copy(b.scissor),B=b.scissorTest}else I.copy(_t).multiplyScalar(O).floor(),z.copy(Mt).multiplyScalar(O).floor(),B=Ct;if(Rt.bindFramebuffer(L.FRAMEBUFFER,U)&&V&&Rt.drawBuffers(b,U),Rt.viewport(I),Rt.scissor(z),Rt.setScissorTest(B),at){let It=Ut.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,G)}else if(vt){let It=Ut.get(b.texture),Yt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,G||0,Yt)}w=-1},this.readRenderTargetPixels=function(b,N,G,V,U,at,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){Rt.bindFramebuffer(L.FRAMEBUFFER,At);try{let It=b.texture,Yt=It.format,Jt=It.type;if(!Bt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&G>=0&&G<=b.height-U&&L.readPixels(N,G,V,U,Xt.convert(Yt),Xt.convert(Jt),at)}finally{let It=C!==null?Ut.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,N,G,V,U,at,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){let It=b.texture,Yt=It.format,Jt=It.type;if(!Bt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-V&&G>=0&&G<=b.height-U){Rt.bindFramebuffer(L.FRAMEBUFFER,At);let Lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(N,G,V,U,Xt.convert(Yt),Xt.convert(Jt),0);let le=C!==null?Ut.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,le);let xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wp(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(Lt),L.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,G=0){b.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let V=Math.pow(2,-G),U=Math.floor(b.image.width*V),at=Math.floor(b.image.height*V),vt=N!==null?N.x:0,At=N!==null?N.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,vt,At,U,at),Rt.unbindTexture()},this.copyTextureToTexture=function(b,N,G=null,V=null,U=0){b.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],N=arguments[2],U=arguments[3]||0,G=null);let at,vt,At,It,Yt,Jt,Lt,le,xe,Se=b.isCompressedTexture?b.mipmaps[U]:b.image;G!==null?(at=G.max.x-G.min.x,vt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,It=G.min.x,Yt=G.min.y,Jt=G.isBox3?G.min.z:0):(at=Se.width,vt=Se.height,At=Se.depth||1,It=0,Yt=0,Jt=0),V!==null?(Lt=V.x,le=V.y,xe=V.z):(Lt=0,le=0,xe=0);let pn=Xt.convert(N.format),he=Xt.convert(N.type),Nt;N.isData3DTexture?(E.setTexture3D(N,0),Nt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Nt=L.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let fi=L.getParameter(L.UNPACK_ROW_LENGTH),ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kn=L.getParameter(L.UNPACK_SKIP_PIXELS),ks=L.getParameter(L.UNPACK_SKIP_ROWS),yn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jt);let Fr=b.isDataArrayTexture||b.isData3DTexture,be=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ni=Ut.get(b),Or=Ut.get(N),Rn=Ut.get(ni.__renderTarget),Bi=Ut.get(Or.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let ki=0;ki<At;ki++)Fr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,U,Jt+ki),b.isDepthTexture?(be&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.get(N).__webglTexture,U,xe+ki),L.blitFramebuffer(It,Yt,at,vt,Lt,le,at,vt,L.DEPTH_BUFFER_BIT,L.NEAREST)):be?L.copyTexSubImage3D(Nt,U,Lt,le,xe+ki,It,Yt,at,vt):L.copyTexSubImage2D(Nt,U,Lt,le,xe+ki,It,Yt,at,vt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Nt,U,Lt,le,xe,at,vt,At,pn,he,Se.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,U,Lt,le,xe,at,vt,At,pn,Se.data):L.texSubImage3D(Nt,U,Lt,le,xe,at,vt,At,pn,he,Se):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Lt,le,at,vt,pn,he,Se.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Lt,le,Se.width,Se.height,pn,Se.data):L.texSubImage2D(L.TEXTURE_2D,U,Lt,le,at,vt,pn,he,Se);L.pixelStorei(L.UNPACK_ROW_LENGTH,fi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ks),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yn),U===0&&N.generateMipmaps&&L.generateMipmap(Nt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,G=null,V=null,U=0){return b.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,G,V,U)},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,Rt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}},ga=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ro=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},br=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new P,Es=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ts=class extends cn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tr,Vr=new P,er=new P,nr=new P,ir=new zt,Gr=new zt,Jf=new Ot,Xo=new P,Wr=new P,qo=new P,cf=new zt,Ll=new zt,hf=new zt,As=class extends Te{constructor(t=new ts){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new br(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Es(n,3,0,!1)),tr.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=tr,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yo(Xo.set(-.5,-.5,0),nr,o,er,s,r),Yo(Wr.set(.5,-.5,0),nr,o,er,s,r),Yo(qo.set(.5,.5,0),nr,o,er,s,r),cf.set(0,0),Ll.set(1,0),hf.set(1,1);let a=t.ray.intersectTriangle(Xo,Wr,qo,!1,Vr);if(a===null&&(Yo(Wr.set(-.5,.5,0),nr,o,er,s,r),Ll.set(0,1),a=t.ray.intersectTriangle(Xo,qo,Wr,!1,Vr),a===null))return;let l=t.ray.origin.distanceTo(Vr);l<t.near||l>t.far||e.push({distance:l,point:Vr.clone(),uv:Yi.getInterpolation(Vr,Xo,Wr,qo,cf,Ll,hf,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yo(i,t,e,n,s,r){ir.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*ir.x-s*ir.y,Gr.y=s*ir.x+r*ir.y):Gr.copy(ir),i.copy(t),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(Jf)}var uf=new P,ff=new ae,df=new ae,k_=new P,pf=new Ot,$o=new P,Dl=new bn,mf=new Ot,Nl=new vr,xa=class extends pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dl.copy(this.boundingSphere),Dl.applyMatrix4(s),t.ray.intersectsSphere(Dl)!==!1&&(mf.copy(s).invert(),Nl.copy(t.ray).applyMatrix4(mf),!(this.boundingBox!==null&&Nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Nl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;ff.fromBufferAttribute(s.attributes.skinIndex,t),df.fromBufferAttribute(s.attributes.skinWeight,t),uf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=df.getComponent(r);if(o!==0){let a=ff.getComponent(r);pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(k_.copy(uf).applyMatrix4(pf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},oo=class extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rs=class extends We{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,h=tn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gf=new Ot,z_=new Ot,_a=class i{constructor(t=[],e=[]){this.uuid=Xn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:z_;gf.multiplyMatrices(a,e[r]),gf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Rs(e,t,t,mn,Wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new oo),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},In=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new Ot,xf=new Ot,Ko=[],_f=new $e,H_=new Ot,Xr=new pe,qr=new bn,Yn=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),_f.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(_f)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),qr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),xf.multiplyMatrices(n,sr),Xr.matrixWorld=xf,Xr.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){let l=Ko[o];l.instanceId=r,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,uo,Wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ao=class extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new P,ya=new P,vf=new Ot,Yr=new vr,Zo=new bn,Ul=new P,yf=new P,wr=class extends Te{constructor(t=new ge,e=new ao){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),ya.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=va.distanceTo(ya);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;vf.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(vf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),v=Jo(this,t,Yr,l,p,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Jo(this,t,Yr,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Jo(this,t,Yr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Jo(this,t,Yr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(va.fromBufferAttribute(o,s),ya.fromBufferAttribute(o,r),e.distanceSqToSegment(va,ya,Ul,yf)>n)return;Ul.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:yf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Mf=new P,Sf=new P,Ma=class extends wr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mf.fromBufferAttribute(e,s),Sf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mf.distanceTo(Sf);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Sa=class extends wr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ln=class extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bf=new Ot,Bc=new vr,jo=new bn,Qo=new P,$n=class extends Te{constructor(t=new ge,e=new Ln){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,t.ray.intersectsSphere(jo)===!1)return;bf.copy(s).invert(),Bc.copy(t.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Qo.fromBufferAttribute(u,m),wf(Qo,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Qo.fromBufferAttribute(u,g),wf(Qo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wf(i,t,e,n,s,r,o){let a=Bc.distanceSqToPoint(i);if(a<e){let l=new P;Bc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ei=class extends We{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xn=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function y(){let _=new P,R=new P,T=0,A=(e-t)/n;for(let C=0;C<=r;C++){let w=[],S=C/r,I=S*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,H=B*l+a,J=Math.sin(H),W=Math.cos(H);R.x=I*J,R.y=-S*n+m,R.z=I*W,u.push(R.x,R.y,R.z),_.set(J,A,W).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-S),w.push(g++)}x.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){let S=x[w][C],I=x[w+1][C],z=x[w+1][C+1],B=x[w][C+1];(t>0||w!==0)&&(h.push(S,I,B),T+=3),(e>0||w!==r-1)&&(h.push(I,z,B),T+=3)}c.addGroup(p,T,0),p+=T}function v(_){let R=g,T=new zt,A=new P,C=0,w=_===!0?t:e,S=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let I=g;for(let z=0;z<=s;z++){let H=z/s*l+a,J=Math.cos(H),W=Math.sin(H);A.x=w*W,A.y=m*S,A.z=w*J,u.push(A.x,A.y,A.z),f.push(0,S,0),T.x=J*.5+.5,T.y=W*.5*S+.5,d.push(T.x,T.y),g++}for(let z=0;z<s;z++){let B=R+z,H=I+z;_===!0?h.push(H,H+1,B):h.push(H+1,H,B),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class i extends xn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ba=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(v,_,T),(p!==n-1||l<Math.PI)&&d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wa=class i extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Re=class extends cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hn=class extends Re{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ta=class extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ta(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function G_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Tf(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function jf(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=t,a=2*e-n;break;case pu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case du:o=t,l=2*n-e;break;case pu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[c+R]+v*o[l+R]+_*o[u+R];return r}},zc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Hc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ta(e,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ta(t.times,Array),values:ta(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case xr:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&V_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=xr;var ns=class extends Dn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=gr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Dn{};Ea.prototype.ValueTypeName="color";var Ai=class extends Dn{};Ai.prototype.ValueTypeName="number";var Vc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ye.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ri=class extends Dn{InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Dn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=gr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Dn{};Ci.prototype.ValueTypeName="vector";var Aa=class{constructor(t="",e=-1,n=[],s=gp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(X_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=G_(l);l=Tf(l,1,h),c=Tf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];jf(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new Ai(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{let d=".bones["+e[u].name+"]";n(Ci,d+".position",f,"pos",s),n(Ri,d+".quaternion",f,"rot",s),n(Ci,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function W_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return Ea;case"quaternion":return Ri;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function X_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=W_(i.type);if(i.times===void 0){let e=[],n=[];jf(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var $i={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Gc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},q_=new Gc,Pi=class{constructor(t){this.manager=t!==void 0?t:q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},Wc=class extends Error{constructor(t,e){super(t),this.response=e}},lo=class extends Pi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=$i.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:n,onError:s});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=_i[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,A=h.length;T<A;T++){let C=h[T];C.onProgress&&C.onProgress(R)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Wc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{$i.add(t,c);let h=_i[t];delete _i[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=_i[t];if(h===void 0)throw this.manager.itemError(t),c;delete _i[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Xc=class extends Pi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=$i.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=io("img");function l(){h(),$i.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Ra=class extends Pi{constructor(t){super(t)}load(t,e,n,s){let r=new We,o=new Xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Tr=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ca=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fl=new Ot,Ef=new P,Af=new P,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qc=class extends co{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=_r*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Pa=class extends Tr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Rf=new Ot,$r=new P,Ol=new P,Yc=class extends co{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),n.position.copy($r),Ol.copy(n.position),Ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ol),n.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),Rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf)}},Ia=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$c=class extends co{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ss=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},La=class extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Da=class extends Pi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=$i.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $i.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),$i.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});$i.add(t,l),r.manager.itemStart(t)}};var ch="\\[\\]\\.:\\/",Y_=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",$_="[^"+ch.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",hh),Z_=/(WCOD+)?/.source.replace("WCOD",$_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Q_=new RegExp("^"+K_+Z_+J_+j_+"$"),tv=["material","materials","bones","map"],Kc=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y_,"")}static parseTrackName(t){let e=Q_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Kc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ny=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function uh(i,t){if(t===zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===fo||t===Ua){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===fo)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var ka=class extends Pi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _h(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new Rh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Ph(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new xh(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Eh(e)}),this.register(function(e){return new mh(e)}),this.register(function(e){return new Ih(e)}),this.register(function(e){return new Lh(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ss.extractUrlBase(t);o=ss.resolveURL(c,this.path)}else o=ss.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===id){try{o[te.KHR_BINARY_GLTF]=new Dh(t)}catch(u){s&&s(u);return}r=JSON.parse(o[te.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case te.KHR_MATERIALS_UNLIT:o[u]=new gh;break;case te.KHR_DRACO_MESH_COMPRESSION:o[u]=new Nh(r,this.dracoLoader);break;case te.KHR_TEXTURE_TRANSFORM:o[u]=new Uh;break;case te.KHR_MESH_QUANTIZATION:o[u]=new Fh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function ev(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mh=class{constructor(t){this.parser=t,this.name=te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new bt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Er(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ia(h),c.distance=u;break;case"spot":c=new Pa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},gh=class{constructor(){this.name=te.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(t,e,n){let s=[];t.color=new bt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],sn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ae))}return Promise.all(s)}},xh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},_h=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new zt(a,a)}return Promise.all(r)}},vh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},yh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Mh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new bt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Sh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new bt().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},wh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Th=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new bt().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(r)}},Eh=class{constructor(t){this.parser=t,this.name=te.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ah=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Rh=class{constructor(t){this.parser=t,this.name=te.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Ch=class{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Ph=class{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Ih=class{constructor(t){this.name=te.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Lh=class{constructor(t){this.name=te.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new Ot,m=new P,p=new Ye,y=new P(1,1,1),v=new Yn(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,p,y));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];v.instanceColor=new In(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Te.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},id="glTF",po=12,Qf={JSON:1313821514,BIN:5130562},Dh=class{constructor(t){this.name=te.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-po,r=new DataView(t,po),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Qf.JSON){let c=new Uint8Array(t,po+o,a);this.content=n.decode(c)}else if(l===Qf.BIN){let c=po+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=te.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Bh[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Bh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Cr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(d)},a,c,sn,f)})})}},Uh=class{constructor(){this.name=te.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Fh=class{constructor(){this.name=te.KHR_MESH_QUANTIZATION}},za=class extends es{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,g=t*c,x=g-c,m=-2*d+3*f,p=d-f,y=1-m,v=p-f+u;for(let _=0;_!==a;_++){let R=o[x+_+a],T=o[x+_+l]*h,A=o[g+_+a],C=o[g+_]*h;r[_]=y*R+v*T+m*A+p*C}return r}},nv=new Ye,Oh=class extends za{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return nv.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},td={9728:tn,9729:qe,9984:Qc,9985:Jr,9986:rr,9987:Pn},ed={33071:Mi,33648:eo,10497:ri},fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iv={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function Ps(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ii(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function rv(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ov(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function av(i){let t,e=i.extensions&&i.extensions[te.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ph(e.attributes):t=i.indices+":"+ph(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+ph(i.targets[n]);return t}function ph(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function kh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cv=new Ot,zh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new ev,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ra(this.options.manager):this.textureLoader=new Da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ps(r,a,s),Ii(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[te.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=fh[s.type],a=Cr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ve(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=fh[s.type],c=Cr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=e.cache.get(y);v||(x=new c(a,p*d,s.count*d/h),v=new br(x,d/h),e.cache.add(y,v)),m=new Es(v,l,f%d/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new ve(x,l,g);if(s.sparse!==void 0){let p=fh.SCALAR,y=Cr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new y(o[1],v,s.sparse.count*p),T=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new ve(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=R.length;A<C;A++){let w=R[A];if(m.setX(w,T[A*l]),l>=2&&m.setY(w,T[A*l+1]),l>=3&&m.setZ(w,T[A*l+2]),l>=4&&m.setW(w,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=td[f.magFilter]||qe,h.minFilter=td[f.minFilter]||Pn,h.wrapS=ed[f.wrapS]||ri,h.wrapT=ed[f.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==qe,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(x){let m=new We(x);m.needsUpdate=!0,f(m)}),e.load(ss.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ii(u,o),u.userData.mimeType=o.mimeType||lv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[te.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[te.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ln,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ao,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Re}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[te.KHR_MATERIALS_UNLIT]){let u=s[te.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new bt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ge);let h=r.alphaMode||dh.OPAQUE;if(h===dh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===dh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new zt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==en&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){let u=r.emissiveFactor;a.emissive=new bt().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==en&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ii(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ps(s,u,r),u})}createUniqueName(t){let e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return nd(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=av(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[te.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=nd(new ge,c,e),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?sv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,y=c[d];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new xa(x,y):new pe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=uh(p.geometry,Ua):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=uh(p.geometry,fo));else if(m.mode===Nn.LINES)p=new Ma(x,y);else if(m.mode===Nn.LINE_STRIP)p=new wr(x,y);else if(m.mode===Nn.LINE_LOOP)p=new Sa(x,y);else if(m.mode===Nn.POINTS)p=new $n(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ov(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Ii(p,r),m.extensions&&Ps(s,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];let f=new Fe;r.extensions&&Ps(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ue(Vf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Mr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ii(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ot;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new _a(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,v=f.length;y<v;y++){let _=f[y],R=d[y],T=g[y],A=x[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,R,T,A,C);if(w)for(let S=0;S<w.length;S++)p.push(w[S])}return new Aa(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,cv)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new oo:c.length>1?h=new Fe:c.length===1?h=c[0]:h=new Te,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ii(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new Ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new Fe;n.name&&(r.name=s.createUniqueName(n.name)),Ii(r,n),n.extensions&&Ps(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof cn||f instanceof We)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];rs[r.path]===rs.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(rs[r.path]){case rs.weights:c=Ai;break;case rs.rotation:c=Ri;break;case rs.position:case rs.scale:c=Ci;break;default:n.itemSize===1?c=Ai:c=Ci;break}let h=s.interpolation!==void 0?iv[s.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+rs[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=kh(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof Ri?Oh:za;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hv(i,t,e){let n=t.attributes,s=new $e;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=kh(Cr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=kh(Cr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function nd(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Bh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ee.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ee.workingColorSpace}" not supported.`),Ii(i,t),hv(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?rv(i,t.targets,e):i})}var mo=class i extends pe{constructor(){let t=i.SkyShader,e=new nn({name:t.name,uniforms:Ar.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Qe,depthWrite:!1});super(new gn(1,1,1),e),this.isSky=!0}};mo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var oi=Math.PI/180,Kn={size:16e4,n:512},un=[{id:"SOL",name:"SOLARIS INTL",n:0,e:0,elev:12,hdg:0,len:4e3,width:60,ids:["36","18"]},{id:"LUM",name:"LUMEN VALLEY",n:41e3,e:24e3,elev:380,hdg:70,len:3400,width:60,ids:["07","25"]}];function Ha(i,t){let e=i*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177|0,e=e^e>>>16,(e>>>0)/4294967295}function uv(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ha(e,n),c=Ha(e+1,n),h=Ha(e,n+1),u=Ha(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function Is(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*uv(i*r,t*r),s*=.5,r*=2.03;return n}var Pr=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Hh(i,t,e){let n=i.hdg*oi,s=t-i.n,r=e-i.e,o=s*Math.cos(n)+r*Math.sin(n),a=-s*Math.sin(n)+r*Math.cos(n);return{along:o,cross:a}}function sd(i,t){let e=Pr(-22e3,3e4,t+.35*i+9e3*(Is(i/26e3+7.1,t/26e3+3.3,3)-.5)*2),n=Is(i/9e3+11.7,t/9e3+5.2,5),s=1-Math.abs(2*Is(i/21e3+2.2,t/21e3+9.4,4)-1),r=Pr(.25,1,e)*Math.pow(s,2.2)*2300,o=-60+e*150+e*(n-.35)*420+r,a=Kn.size/2,l=Math.min(a-Math.abs(i),a-Math.abs(t)),c=Pr(0,14e3,l);return o=o*c-60*(1-c),o}var Ls=[[-8e3,5600,3800,1,-.35],[16e3,3e3,2200,.6,.6],[38e3,30500,2e3,.6,.1],[-3e3,15e3,1800,.5,-.12]],rd=null;function fv(i,t){let e=sd(i,t);rd??=Ls.map(n=>{let s=[];for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){let a=n[0]+r*n[2]/4,l=n[1]+o*n[2]/4;Math.hypot(r,o)<=4&&s.push(od(sd(a,l),a,l))}return s.sort((r,o)=>r-o),Math.max(9,s[Math.floor(s.length*.2)])});for(let n=0;n<Ls.length;n++){let s=Ls[n],r=Math.hypot(i-s[0],t-s[1]);if(r>s[2]*1.5)continue;let o=(1-Pr(s[2]*1.02,s[2]*1.5,r))*Pr(-3,5,e);e=e*(1-o)+rd[n]*o}return od(e,i,t)}function od(i,t,e){for(let n of un){let{along:s,cross:r}=Hh(n,t,e),o=Math.max(0,Math.abs(s)-n.len/2-1500),a=Math.max(0,Math.abs(r)-1300),l=Math.hypot(o,a),c=1-Pr(0,6500,l);i=i*(1-c)+n.elev*c}return i}var go=null;function xo(){if(go)return go;let{size:i,n:t}=Kn,e=t+1;go=new Float32Array(e*e);for(let n=0;n<e;n++){let s=-i/2+n/t*i;for(let r=0;r<e;r++){let o=-i/2+r/t*i;go[n*e+r]=fv(s,o)}}return go}function dv(i,t){for(let e of un){let{along:n,cross:s}=Hh(e,i,t);if(Math.abs(n)<e.len/2+1400&&Math.abs(s)<1200)return e}return null}function Zn(i,t){let e=dv(i,t);if(e)return e.elev;let n=xo(),{size:s,n:r}=Kn,o=r+1,a=(t+s/2)/s*r,l=(i+s/2)/s*r;if(a<0||l<0||a>=r||l>=r)return 0;let c=Math.floor(a),h=Math.floor(l),u=a-c,f=l-h,d=n[h*o+c],g=n[h*o+c+1],x=n[(h+1)*o+c],m=n[(h+1)*o+c+1],p=d+(g-d)*u+(x-d)*f+(d-g-x+m)*u*f;return Math.max(0,p)}function os(i,t){for(let p of un){let{along:y,cross:v}=Hh(p,i,t);if(Math.abs(y)<p.len/2+60&&Math.abs(v)<p.width/2)return"rwy";if(Math.abs(y)<p.len/2&&v>p.width/2-1&&v<520){if(Math.abs(v-190)<20||Math.abs(y)<520&&v>190)return"paved";for(let _ of[-p.len/2+40,-p.len/4,0,p.len/4,p.len/2-40])if(Math.abs(y-_)<20&&v<200)return"paved"}}let e=xo(),{size:n,n:s}=Kn,r=s+1,o=(t+n/2)/n*s,a=(i+n/2)/n*s;if(o<0||a<0||o>=s||a>=s)return"water";let l=Math.floor(o),c=Math.floor(a),h=o-l,u=a-c,f=e[c*r+l],d=e[c*r+l+1],g=e[(c+1)*r+l],x=e[(c+1)*r+l+1];return f+(d-f)*h+(g-f)*u+(f-d-g+x)*h*u<.2?"water":"grass"}var _n=[];for(let i of un)for(let t=0;t<2;t++){let e=(i.hdg+(t?180:0))%360,n=e*oi;_n.push({ap:i,id:i.id+" "+i.ids[t],ident:i.ids[t],crs:e,thrN:i.n-Math.cos(n)*i.len/2,thrE:i.e-Math.sin(n)*i.len/2,elev:i.elev,len:i.len})}function as(i,t,e,n){let s=i.crs*oi,r=t-i.thrN,o=e-i.thrE,a=r*Math.cos(s)+o*Math.sin(s),l=-r*Math.sin(s)+o*Math.cos(s),c=i.len+300-a,h=Math.atan2(l,Math.max(1,c))/oi,u=300-a,f=Math.atan2(n-i.elev,Math.max(1,u))/oi;return{along:a,xtk:l,loc:h,gs:f-3,dAim:u,dist:Math.hypot(r,o),valid:u>0&&u<6e4&&Math.abs(h)<35}}function Vh(i,t,e){let n=null,s=1e9;for(let r of _n){let o=as(r,i,t,0);if(!o.valid)continue;let a=Math.abs((e-r.crs+540)%360-180),l=o.dist/1e3+a*.8+Math.abs(o.loc)*2;a<100&&l<s&&(s=l,n=r)}return n}var tt=Math.PI/180,Ee=180/Math.PI,se=.514444,Ce=.3048,Li=9.80665,Ht=(i,t,e)=>Math.min(e,Math.max(t,i)),Gh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},kt={S:450,b:71.8,c:7.6,Ixx:25e6,Iyy:46e6,Izz:68e6,oew:178e3,payload:12e3,fuelMax:11e4,Tmax:218e3,eng:[{y:-19.5,z:1.4},{y:-10.5,z:2.75},{y:10.5,z:2.75},{y:19.5,z:1.4}],gear:[{name:"nose",r:[27.5,0,5.2],k:16e5,c:26e4,steer:!0,brake:!1},{name:"left",r:[-2,-5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0},{name:"right",r:[-2,5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0}],body:[{name:"\u6A5F\u9F3B",r:[31,0,1.6],fatal:!0},{name:"\u6A5F\u5C3E",r:[-31,0,-.9],fatal:!1},{name:"\u5DE6\u7FFC\u5C16",r:[-18,-35.9,-2.4],fatal:!0},{name:"\u53F3\u7FFC\u5C16",r:[-18,35.9,-2.4],fatal:!0},{name:"\u5DE6\u5167\u5074\u767C\u52D5\u6A5F",r:[0,-10.5,4.5],fatal:!1},{name:"\u53F3\u5167\u5074\u767C\u52D5\u6A5F",r:[0,10.5,4.5],fatal:!1},{name:"\u5DE6\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,-19.5,2.8],fatal:!1},{name:"\u53F3\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,19.5,2.8],fatal:!1},{name:"\u6A5F\u8179",r:[0,0,2.4],fatal:!0}],CLa:5.5,CD0:.017,k:1/(Math.PI*(71.8*71.8/450)*.8),flapDeg:[0,1,5,15,20,25,30],flapLift:[0,.25,.45,.65,.78,.9,1],flapDrag:[0,.006,.012,.028,.04,.058,.08],flapVmax:[340,265,245,230,225,200,180],vmo:340,mmo:.89,vle:270};function pv(i){let[t,e,n,s]=i;return[1-2*(n*n+s*s),2*(e*n-t*s),2*(e*s+t*n),2*(e*n+t*s),1-2*(e*e+s*s),2*(n*s-t*e),2*(e*s-t*n),2*(n*s+t*e),1-2*(e*e+n*n)]}var Wh=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]],ad=(i,t)=>[i[0]*t[0]+i[3]*t[1]+i[6]*t[2],i[1]*t[0]+i[4]*t[1]+i[7]*t[2],i[2]*t[0]+i[5]*t[1]+i[8]*t[2]],ld=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function cd(i,t,e){let n=Math.cos(i/2),s=Math.sin(i/2),r=Math.cos(t/2),o=Math.sin(t/2),a=Math.cos(e/2),l=Math.sin(e/2);return[n*r*a+s*o*l,s*r*a-n*o*l,n*o*a+s*r*l,n*r*l-s*o*a]}function mv(){let i=0,t=0;for(;i===0;)i=Math.random();return t=Math.random(),Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*t)}function Ir(i,t){let e=Ht(Math.floor(t),0,i.length-2),n=Ht(t-e,0,1);return i[e]+(i[e+1]-i[e])*n}function hd(i,t,e){let n=Ht((e-8500)/6500,0,1);return Math.pow(i/1.225,.52)*(1-.75*Math.min(t,.95)+.35*t*t)*(1+.55*n*n*(3-2*n))}function Xh(i){let t,e;return i<11e3?(t=288.15-.0065*i,e=101325*Math.pow(t/288.15,5.25588)):(t=216.65,e=22632.1*Math.exp(-(i-11e3)/6341.62)),{T:t,p:e,rho:e/(287.05*t),a:Math.sqrt(1.4*287.05*t)}}function _o(i,t){let e=t*(Math.pow(1+.2*i*i,3.5)-1);return 340.294*Math.sqrt(5*(Math.pow(e/101325+1,2/7)-1))}var Va=class{constructor(){this.wind={dir:0,spd:0,turb:0},this.ctl={pitch:0,roll:0,yaw:0,brake:0,reverse:!1},this.reset("runway")}mass(){return kt.oew+kt.payload+this.fuel}reset(t,e={}){let n=un[0],s=_n[0];this.t=0,this.crashed=null,this.msg="",this.msgT=0,this.fuel=72e3,this.vsDot=0,this.w=[0,0,0],this.n1=[22,22,22,22],this.engOn=[!0,!0,!0,!0],this.thrust=[0,0,0,0],this.ff=0,this.thr=0,this.rev=0,this.de=0,this.da=0,this.dr=0,this.trimI=0,this.manTrim=0,this.fbw=0,this.law="normal",this.thHold=null,this.phiHold=0,this.sb=0,this.sbSel=0,this.gndSpoiler=!1,this.gust=[0,0,0],this.park=!1,this.steer=0,this.wow=!1,this.wowN=!1,this.airT=0,this.gndT=0,this.touchdown=null,this.strike="",this.gearLoad=[0,0,0],this.ap={autoland:!1,on:!1,athr:!1,hdg:s.crs,alt:5e3,spd:250,vs:1800,app:!1,lat:"HDG",ver:"ALT",rw:null},this.nz=1,this.acc=0,this.iasPrev=0;let r=s.crs*tt;if(t==="runway")this.pos=[s.thrN+Math.cos(r)*90,s.thrE+Math.sin(r)*90,-(n.elev+5.1)],this.vel=[0,0,0],this.q=cd(0,0,r),this.flapSel=3,this.flapPos=3,this.gearSel=!0,this.gearPos=1,this.park=!0,this.ap.alt=5e3,this.ap.spd=250;else{let o=t==="cruise",a=e.dist??(o?15e4:22e3),l=e.alt??(o?35e3*Ce:3e3*Ce+0),c=(e.kt??(o?285:190))*se;this.flapSel=this.flapPos=e.flap??(o?0:2),this.gearSel=!!e.gear,this.gearPos=e.gear?1:0,this.pos=[s.thrN-Math.cos(r)*a,s.thrE-Math.sin(r)*a,-l],o&&(this.pos[0]=-62e3,this.pos[1]=-38e3,this.fuel=8e4),e.pos&&(this.pos[0]=e.pos[0],this.pos[1]=e.pos[1]),e.side&&(this.pos[0]-=Math.sin(r)*e.side,this.pos[1]+=Math.cos(r)*e.side);let h=Xh(l),u=c/h.a;for(let m=0;m<20;m++){let p=_o(u,h.p);u*=c/p}let f=u*h.a,d=this.trim(f,l),g=e.hdg!==void 0?e.hdg*tt:o?Math.atan2(s.thrE-this.pos[1],s.thrN-3e4-this.pos[0]):r;this.q=cd(0,d.alpha,g),this.vel=[f*Math.cos(g),f*Math.sin(g),0],this.thr=d.thr;let x=22+78*d.thr;this.n1=[x,x,x,x],this.trimI=d.de,this.fbw=1,this.thHold=d.alpha,this.ap.on=!e.manual,this.ap.athr=!0,this.ap.hdg=Math.round((g*Ee+360)%360),this.ap.alt=Math.round(l/Ce/100)*100,this.ap.spd=Math.round(c/se),this.airT=10}this.update0()}trim(t,e){let n=Xh(e),s=t/n.a,r=.5*n.rho*t*t*kt.S,o=this.mass()*Li,a=Ir(kt.flapLift,this.flapPos),l=1/Math.sqrt(1-Math.pow(Math.min(s,.85)*.75,2)),c=o/r,h=(c-(.25+.9*a))/(kt.CLa*l),f=(kt.CD0+Ir(kt.flapDrag,this.flapPos)+kt.k*c*c+.02*this.gearPos+(s>.82?8*(s-.82)**2:0))*r,d=hd(n.rho,s,e),g=Ht(f/(4*kt.Tmax*d),0,1),x=5+95*Math.pow(g,1/2.3),m=Ht((x-22)/78,0,1),p=f*2.07/(r*kt.c),y=-(.04-.1*a-1.2*h+p)/1.4;return{alpha:h,thr:m,de:y}}update0(){let t=pv(this.q);this.R=t;let[e,n,s,r]=this.q;this.phi=Math.atan2(2*(e*n+s*r),1-2*(n*n+s*s)),this.theta=Math.asin(Ht(2*(e*s-r*n),-1,1)),this.psi=Math.atan2(2*(e*r+n*s),1-2*(s*s+r*r)),this.alt=-this.pos[2],this.elev=Zn(this.pos[0],this.pos[1]),this.agl=this.alt-this.elev;let o=Xh(this.alt);this.at=o;let a=.55+.45*Math.min(1,Math.max(0,this.agl)/400),l=this.wind.dir*tt;this.windW=[-this.wind.spd*a*Math.cos(l)+this.gust[0],-this.wind.spd*a*Math.sin(l)+this.gust[1],this.gust[2]];let c=[this.vel[0]-this.windW[0],this.vel[1]-this.windW[1],this.vel[2]-this.windW[2]];this.vb=ad(t,c),this.tas=Math.hypot(c[0],c[1],c[2]),this.mach=this.tas/o.a,this.ias=_o(this.mach,o.p),this.alpha=this.tas>1?Math.atan2(this.vb[2],this.vb[0]):0,this.beta=this.tas>1?Math.asin(Ht(this.vb[1]/this.tas,-1,1)):0,this.vs=-this.vel[2],this.gs=Math.hypot(this.vel[0],this.vel[1]),this.track=this.gs>1?Math.atan2(this.vel[1],this.vel[0]):this.psi;let h=Ir(kt.flapLift,this.flapPos);this.clmax=1.5+1.1*h,this.cl0=.25+.9*h,this.aStall=(this.clmax-this.cl0)/kt.CLa,this.vstall=Math.sqrt(2*this.mass()*Li/(1.225*kt.S*this.clmax*.94)),this.vmaxKt=Math.min(kt.vmo,Ir(kt.flapVmax,this.flapPos),this.gearPos>.05?kt.vle:999,_o(kt.mmo,o.p)/se)}say(t,e=4){this.msg=t,this.msgT=e}step(t){if(this.crashed)return;this.t+=t,this.msgT>0&&(this.msgT-=t),this.update0();let e=this.ctl,n=this.ap,s=this.R,r=this.at,o=this.mass(),a=Math.max(this.tas,.01),[l,c,h]=this.w,u=.5*r.rho*a*a,f=u*kt.S,d=Math.sin(this.phi),g=Math.cos(this.phi),x=this.wind.turb*(.5+.5*Math.min(1,this.wind.spd/8+.3));for(let k=0;k<3;k++)this.gust[k]+=-this.gust[k]/2.2*t+x*(k===2?.7:1)*Math.sqrt(2*t/2.2)*mv();this.flapPos+=Ht(this.flapSel-this.flapPos,-.22*t,.22*t),this.gearPos+=Ht((this.gearSel?1:0)-this.gearPos,-t/12,t/12),this.wow&&this.thr<.1&&this.gs>25&&this.gndT>.2&&(this.gndSpoiler=!0),(!this.wow||this.thr>.3||this.gs<12)&&(this.gndSpoiler=!1);let m=this.gndSpoiler?1:this.sbSel*(this.wow?1:.6);this.sb+=Ht(m-this.sb,-1.2*t,1.2*t);let p=null,y=null,v=n.rw?as(n.rw,this.pos[0],this.pos[1],this.alt):null;if(this.ils=v,n.on&&this.fbw>.9){let k;if(n.app&&n.lat==="HDG"&&v&&v.valid&&Math.abs(v.loc)<2.2&&Math.abs(Gh(this.track-n.rw.crs*tt))<80*tt&&(n.lat="LOC",this.say("LOC \u622A\u7372")),n.lat==="LOC"&&v){let Gt=Ht(v.dAim/2e4,.35,1),Me=n.rw.crs*tt-Ht(v.xtk*.035/Gt,-32,32)*tt;k=Ht(1.6*Gh(Me-this.track),-27*tt,27*tt)}else k=Ht(1.3*Gh(n.hdg*tt-this.psi),-25*tt,25*tt);y=Ht(1.4*(k-this.phi),-6*tt,6*tt);let et;if(n.app&&n.lat==="LOC"&&n.ver!=="GS"&&n.ver!=="FLARE"&&v&&Math.abs(v.gs)<.12&&(n.ver="GS",this.say("G/S \u622A\u7372")),n.ver==="FLARE"){let Gt=this.agl-5.1;et=Ht(-.17*Gt-.3,-4.5,-.3),Gt<10&&(this.thr=Math.max(0,this.thr-.35*t)),this.wow&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1)}else if(n.ver==="GS"&&v){let Gt=this.alt-n.rw.elev-Math.tan(3*tt)*v.dAim;et=Ht(-this.gs*Math.tan(3*tt)-.16*Gt,-9,1.5)}else{let Gt=Math.abs(n.vs)*Ce/60;if(et=Ht(.13*(n.alt*Ce-this.alt),-Gt,Gt),et>0&&(!n.athr||this.thr>.9)){let Me=n.athr?Math.min(n.spd*se,_o(.84,r.p)):1.35*this.vstall;et=Math.max(-1.5,et-.8*Math.max(0,(Me-this.ias)/se-2))}}let ut=this.vs/Math.max(a,30),Et=et/Math.max(a,30);p=Ht((n.ver==="FLARE"?1.5:.9)*(Et-ut)-1.3*this.vsDot/Math.max(a,30),-2.2*tt,2.2*tt),n.ver==="GS"&&this.agl<30&&n.autoland?(n.ver="FLARE",n.athr=!1,this.say("\u81EA\u52D5\u843D\u5730\uFF1AFLARE",5)):n.ver==="GS"&&this.agl<30&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1,this.apDisc=!0,this.say("\u81EA\u52D5\u99D5\u99DB\u5DF2\u89E3\u9664 \u2014 \u8ACB\u624B\u52D5\u843D\u5730",6))}let _=(this.ias-this.iasPrev)/t;if(this.iasPrev=this.ias,this.acc+=(_-this.acc)*Math.min(1,t/.7),n.athr)if(this.wow&&this.gndT>1&&this.touchdown)n.athr=!1;else{let k=Math.max(Math.min(n.spd*se,_o(.84,r.p)),this.wow?0:1.18*this.vstall),et=Ht(.045*(k-this.ias)-.3*this.acc,-.3,.3);this.thr=Ht(this.thr+et*t,0,1)}let R=this.wow||this.law!=="normal"?0:1;this.fbw+=Ht(R-this.fbw,-t/.8,t/1.2);let T=this.fbw,A=Ht(3900/Math.max(u,1),.12,3),C=Math.max(a,40),w=Ht(this.phi,-45*tt,45*tt),S=Li*Math.sin(w)*Math.tan(w)/C,I=this.flapPos>.2,z;if(p!==null)z=p+S,this.thHold=null;else if(Math.abs(e.pitch)>.03){let k=Math.min(((I?2:2.5)-1)*Li/C,5*tt),et=Math.min((I?1:2)*Li/C,4*tt);z=(e.pitch>0?e.pitch*k:e.pitch*et)+S,this.thHold=null}else this.thHold===null&&Math.abs(c-S)<.6*tt&&(this.thHold=this.theta),z=(this.thHold!==null?Ht(1.2*(this.thHold-this.theta),-2*tt,2*tt):0)+S;let B=this.aStall-1.2*tt;this.aProt=this.alpha>B-2.5*tt&&T>.5,this.alpha>B-3*tt&&(z=Math.min(z,1.6*(B-this.alpha)+S)),this.theta>22*tt&&(z=Math.min(z,1*(30*tt-this.theta))),this.theta<-10*tt&&(z=Math.max(z,1*(-15*tt-this.theta))),this.ias>(this.vmaxKt+6)*se&&(z=Math.max(z,.004*(this.ias-(this.vmaxKt+6)*se)));let H=z-c;T>.5?this.trimI=Ht(this.trimI+A*4.5*H*t,-14*tt,18*tt):this.law==="normal"&&(this.trimI+=(1.5*tt-this.trimI)*Math.min(1,t/7));let J=Ht(Math.asin(Ht((this.agl+.4)/31,0,1))-1.7*tt,8*tt,.6);this.agl<22&&(z=Math.min(z,2*(J-this.theta)));let W=e.pitch*25*tt+(this.law==="normal"?this.trimI:this.manTrim);if(this.law==="normal"&&(this.wow||this.agl<22)&&e.pitch>.03&&this.ias>60*se){let k=Math.min(e.pitch*3.2*tt,2*(J-this.theta));W=Math.min(W,this.trimI+A*9*(k-c)+4*tt*e.pitch)}let rt=A*5*H+this.trimI,O=Ht(W*(1-T)+rt*T,-20*tt,28*tt),Q;y!==null?(Q=y,this.phiHold=this.phi):Math.abs(e.roll)>.03?(Q=e.roll*15*tt,this.phiHold=this.phi):(this.phiHold=Ht(this.phiHold,-33*tt,33*tt),Q=Ht(2*(this.phiHold-this.phi),-10*tt,10*tt)),Q=Math.min(Q,2.5*(67*tt-this.phi)),Q=Math.max(Q,2.5*(-67*tt-this.phi));let it=A*6*(Q-l),_t=Ht(e.roll*25*tt*(1-T)+it*T,-25*tt,25*tt),Mt=30*tt*Ht(Math.pow(75/Math.max(this.ias,1),2),.12,1),Ct=Li*d/C,X=Ht(-3*A*(h-Ct)+.6*this.beta,-8*tt,8*tt),nt=Ht(e.yaw*Mt+X*Math.max(T,this.law==="normal"&&this.ias>30?.5:0),-30*tt,30*tt);this.de+=Ht(O-this.de,-40*tt*t,40*tt*t),this.da+=Ht(_t-this.da,-50*tt*t,50*tt*t),this.dr+=Ht(nt-this.dr,-45*tt*t,45*tt*t);let dt=68*tt*Ht(1-(this.gs-8)/40,.09,1);this.steer+=Ht(e.yaw*dt-this.steer,-60*tt*t,60*tt*t);let ht=r.rho/1.225,K=this.mach,lt=hd(r.rho,K,this.alt),Tt=e.reverse&&this.wow&&this.thr<.05;this.rev+=Ht((Tt?1:0)-this.rev,-t/1.5,t/1.5);let Wt=0,Dt=0,ne=0,L=0;for(let k=0;k<4;k++){let et=0;this.engOn[k]&&(et=this.rev>.9&&Tt?72:22+78*(this.rev>.05?0:this.thr));let ut=.8+3.6*Math.pow(1-this.n1[k]/100,2);this.n1[k]+=Ht((et-this.n1[k])/ut,-22,26)*t;let Et=Math.pow(Ht((this.n1[k]-5)/95,0,1),2.3),Gt=kt.Tmax*lt*Et-(this.engOn[k]?0:.02*f*.3);this.rev>.5&&(Gt=-.42*Gt),this.thrust[k]=Gt,Wt+=Gt,Dt+=kt.eng[k].z*Gt,ne+=-kt.eng[k].y*Gt,this.engOn[k]&&(L+=Math.max(.14*Math.sqrt(ht),93e-7*(1+.45*K)*Math.abs(kt.Tmax*lt*Et)))}this.ff=L,this.fuel-=L*t,this.fuel<=0&&(this.fuel=0,this.engOn[0]&&this.say("\u71C3\u6599\u8017\u76E1 \u2014 \u5168\u90E8\u767C\u52D5\u6A5F\u7184\u706B",8),this.engOn=[!1,!1,!1,!1]);let ie=[Wt,0,0],Vt=[0,Dt,ne],Bt=0;if(this.tas>.5){let k=this.alpha,et=this.beta,ut=l*kt.b/(2*a),Et=c*kt.c/(2*a),Gt=h*kt.b/(2*a),Me=Ir(kt.flapLift,this.flapPos),re=1/Math.sqrt(1-Math.pow(Math.min(K,.85)*.75,2)),on=1-(this.wow?.6:.42)*this.sb,fn=(this.cl0+kt.CLa*re*k+5*Et-.3*this.de)*on,ci=this.aStall+2*tt,Bs=(-.9-this.cl0)/kt.CLa-2*tt,dn=1.1*tt,Fi=1/(1+Math.exp(-(k-ci)/dn)),ds=1/(1+Math.exp((k-Bs)/dn));Bt=Math.min(1,Fi+ds);let hi=Math.max(this.agl-1.5,.5)/kt.b,ei=(16*hi)**2/(1+(16*hi)**2);fn*=1+.08*(1-ei);let He=(1-Bt)*fn+Bt*1.05*Math.sin(2*k),Le=kt.CD0+Ir(kt.flapDrag,this.flapPos)+.021*this.gearPos+(this.wow?.075:.05)*this.sb+kt.k*ei*He*He*(1-Bt)+(K>.82?8*(K-.82)**2:0)+Bt*1.9*Math.sin(k)**2+.6*et*et,ps=-.85*et-.18*this.dr,ui=1-.6*Bt,ms=-.09*et-.45*ut*(1-.5*Bt)+(.06+.12*Math.max(He,0))*Gt+.1*this.da*ui-.008*this.dr+Bt*.012*Math.sin(this.t*2.3),Ur=.04-.1*Me-.012*this.gearPos-1.2*k-21*Et+1.4*this.de-.22*Bt*Math.sign(k)+.06*this.sb*(this.wow?0:1),Oi=.14*et-.28*Gt-.03*Math.max(He,0)*ut+.1*this.dr-.008*this.da,b=Math.cos(k),N=Math.sin(k);ie[0]+=f*(-Le*b+He*N),ie[1]+=f*ps,ie[2]+=f*(-Le*N-He*b),Vt[0]+=f*kt.b*ms,Vt[1]+=f*kt.c*Ur,Vt[2]+=f*kt.b*Oi,this.CL=He}this.stall=Bt;let Rt=Wh(s,ie),fe=ie[2],Ut=0,E=this.wow,M=!1,F=!1;this.strike="";let Z=(k,et,ut,Et)=>{let Gt=Wh(s,k),Me=this.pos[0]+Gt[0],re=this.pos[1]+Gt[1],on=this.pos[2]+Gt[2],fn=Zn(Me,re),ci=on+fn;if(ci<=0)return 0;let Bs=ld(this.w,k),dn=Wh(s,Bs),Fi=this.vel[0]+dn[0],ds=this.vel[1]+dn[1],hi=this.vel[2]+dn[2],ei=os(Me,re);if(ei==="water")return this.crash("\u589C\u5165\u6C34\u4E2D"),0;if(Et.fatal)return this.crash(Et.name+"\u89F8\u5730"),0;if(hi>(Et.gear?Et.steer?9.5:6.2:3.2))return this.crash(Et.gear?"\u843D\u5730\u904E\u91CD\uFF0C\u8D77\u843D\u67B6\u6298\u65B7 ("+Math.round(hi*196.85)+" fpm)":Et.name+"\u91CD\u64CA\u5730\u9762"),0;Et.gear||(this.strike=Et.name);let He=et*ci+ut*hi+(ci>.65?4*et*(ci-.65):0);He=Ht(He,0,6*o*Li);let Le=[s[0],s[3]];if(Et.steer){let vt=Math.cos(this.steer),At=Math.sin(this.steer);Le=[s[0]*vt+s[1]*At,s[3]*vt+s[4]*At]}let ps=Math.hypot(Le[0],Le[1])||1;Le=[Le[0]/ps,Le[1]/ps];let ui=[-Le[1],Le[0]],ms=Fi*Le[0]+ds*Le[1],Ur=Fi*ui[0]+ds*ui[1],Oi=ei!=="grass",b=Oi?.012:.09;Et.brake&&(b+=(Oi?.52:.3)*Math.max(e.brake,this.park?1:0)),Et.gear||(b=.55);let N=-He*b*Ht(ms/.4,-1,1),G=-He*(Oi?.75:.5)*Ht(Ur/(.1*Math.max(Math.abs(ms),3)),-1,1)*(Et.gear?1:.7),V=[N*Le[0]+G*ui[0],N*Le[1]+G*ui[1],-He];Rt[0]+=V[0],Rt[1]+=V[1],Rt[2]+=V[2];let U=ad(s,V),at=ld(k,U);return Vt[0]+=at[0],Vt[1]+=at[1],Vt[2]+=at[2],Ut+=U[2],!Oi&&He>0&&(this.rough=Math.min(1,Math.abs(ms)/30)),He};if(this.rough=0,this.gearPos>.88)for(let k=0;k<3;k++){let et=kt.gear[k],ut=Z(et.r,et.k,et.c,{gear:!0,steer:et.steer,brake:et.brake,name:et.name});this.gearLoad[k]=ut,ut>0&&(k===0?F=!0:M=!0)}else this.gearLoad=[0,0,0];if(this.agl<45)for(let k of kt.body){if(this.crashed)break;Z(k.r,6e6,12e5,{gear:!1,fatal:k.fatal,name:k.name})}if(this.crashed)return;this.wow=M,this.wowN=F,this.wow?(this.gndT+=t,E||(this.airT>2&&(this.touchdown={fpm:Math.round(-this.vs*196.85),g:this.nz,kt:Math.round(this.ias/se),t:this.t},this.tdEvent=!0),this.airT=0)):(this.airT+=t,this.airT>1&&(this.gndT=0)),this.nz=-(fe+Ut)/(o*Li),this.nzSm=(this.nzSm??1)+(this.nz-(this.nzSm??1))*Math.min(1,t/.15);let j=Rt[0]/o,q=Rt[1]/o,pt=Rt[2]/o+Li;this.vsDot+=(-pt-this.vsDot)*Math.min(1,t/.25),this.vel[0]+=j*t,this.vel[1]+=q*t,this.vel[2]+=pt*t,this.pos[0]+=this.vel[0]*t,this.pos[1]+=this.vel[1]*t,this.pos[2]+=this.vel[2]*t;let{Ixx:ot,Iyy:ct,Izz:qt}=kt,st=[(Vt[0]-(qt-ct)*c*h)/ot,(Vt[1]-(ot-qt)*h*l)/ct,(Vt[2]-(ct-ot)*l*c)/qt];this.w[0]+=st[0]*t,this.w[1]+=st[1]*t,this.w[2]+=st[2]*t;let[yt,Pt,Ft,xt]=this.q,[Zt,Xt,ce]=this.w,D=.5*t,ft=[yt+D*(-Pt*Zt-Ft*Xt-xt*ce),Pt+D*(yt*Zt+Ft*ce-xt*Xt),Ft+D*(yt*Xt-Pt*ce+xt*Zt),xt+D*(yt*ce+Pt*Xt-Ft*Zt)],Y=Math.hypot(ft[0],ft[1],ft[2],ft[3]);this.q=[ft[0]/Y,ft[1]/Y,ft[2]/Y,ft[3]/Y],this.wow&&this.park&&this.gs<.05&&this.thr<.2&&(this.vel[0]=0,this.vel[1]=0)}crash(t){this.crashed||(this.crashed=t)}flaps(t){this.flapSel=Ht(this.flapSel+t,0,6),this.say("\u895F\u7FFC "+kt.flapDeg[this.flapSel]+"\xB0")}toggleGear(){if(this.wow){this.say("\u5730\u9762\u4E0A\u4E0D\u53EF\u6536\u8D77\u843D\u67B6");return}this.gearSel=!this.gearSel,this.say(this.gearSel?"\u8D77\u843D\u67B6 \u653E\u4E0B":"\u8D77\u843D\u67B6 \u6536\u8D77")}toggleAP(){let t=this.ap;if(t.on)t.on=!1,t.lat="HDG",t.ver="ALT",this.apDisc=!0,this.thHold=this.theta,this.phiHold=this.phi,this.say("\u81EA\u52D5\u99D5\u99DB \u89E3\u9664");else{if(this.wow||this.fbw<.9){this.say("\u81EA\u52D5\u99D5\u99DB\u53EA\u80FD\u5728\u7A7A\u4E2D\u63A5\u901A");return}t.on=!0,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Ee+360)%360),this.say("\u81EA\u52D5\u99D5\u99DB \u63A5\u901A")}}toggleATHR(){let t=this.ap;t.athr=!t.athr,t.athr&&this.wow&&(t.spd=Math.max(t.spd,160)),this.say(t.athr?"\u81EA\u52D5\u6CB9\u9580 \u63A5\u901A ("+t.spd+" kt)":"\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664")}toggleAPP(){let t=this.ap;if(t.app){t.app=!1,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Ee+360)%360),t.alt=Math.round(this.alt/Ce/100)*100,this.say("\u9032\u5834\u6A21\u5F0F \u53D6\u6D88");return}let e=Vh(this.pos[0],this.pos[1],this.psi*Ee);if(!e){this.say("\u9644\u8FD1\u6C92\u6709\u53EF\u7528\u7684 ILS \u2014 \u8ACB\u5148\u5C0D\u6E96\u8DD1\u9053\u65B9\u5411");return}t.rw=e,t.app=!0,this.say("ILS \u9032\u5834\u9810\u4F4D\uFF1A"+e.id+"  \u822A\u9053 "+String(Math.round(e.crs)||360).padStart(3,"0")+"\xB0",6)}tuneILS(){if(this.ap.app)return;let t=Vh(this.pos[0],this.pos[1],this.psi*Ee);this.ap.rw=t}};var wn=140,Ga=112,Pe={PUNCH:0,GLASS:1,RESI:2,PLAIN:3,GROUND:4,ROUND:5,RIBBON:6};function gv(i){let t=new Re({roughness:.72,metalness:.1});return t.onBeforeCompile=e=>{e.uniforms.uNight=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aStyle; varying vec3 vLS; varying vec3 vBN; varying float vSt; varying vec2 vSeed; varying float vRad;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 isc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        vLS = position * isc; vBN = normal; vSt = aStyle; vSeed = instanceMatrix[3].xz; vRad = isc.x * 0.5;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uNight; varying vec3 vLS; varying vec3 vBN; varying float vSt; varying vec2 vSeed; varying float vRad;
        float hb(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 23758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float wLit = 0.0, gl = 0.0;
        int st = int(vSt + 0.5);
        if (st == 4) {
          if (vBN.y > 0.5) {
            vec2 q = abs(vLS.xz);
            float lot = step(q.x, ${(Ga/2).toFixed(1)}) * step(q.y, ${(Ga/2).toFixed(1)});
            float walk = step(q.x, ${(Ga/2+3).toFixed(1)}) * step(q.y, ${(Ga/2+3).toFixed(1)});
            float fade = clamp(1.0 - fwidth(vLS.x) * 0.5, 0.0, 1.0);
            float dx = ${(wn/2).toFixed(1)} - q.x, dz = ${(wn/2).toFixed(1)} - q.y;
            float dash = (step(dx, 0.4) * step(0.5, fract(vLS.z / 12.0)) + step(dz, 0.4) * step(0.5, fract(vLS.x / 12.0))) * fade;
            vec3 asph = mix(vec3(0.21, 0.195, 0.18), vec3(0.8), min(1.0, dash) * 0.8);
            diffuseColor.rgb = mix(mix(asph, vec3(0.40, 0.40, 0.385), walk), diffuseColor.rgb, lot);
            wLit = (1.0 - lot) * 0.05;
          } else diffuseColor.rgb = vec3(0.22, 0.22, 0.21);
        } else if (st != 3) {
          if (abs(vBN.y) < 0.5) {
            float u = st == 5 ? atan(vBN.z, vBN.x) * vRad : (abs(vBN.x) > 0.5 ? vLS.z : vLS.x);
            vec2 cell = st == 1 || st == 5 ? vec2(1.7, 3.9) : (st == 2 ? vec2(4.4, 3.1) : (st == 6 ? vec2(7.0, 3.8) : vec2(3.4, 3.7)));
            vec2 wc = vec2(u, vLS.y) / cell; vec2 wf = fract(wc); vec2 wi = floor(wc);
            float fw = max(fwidth(wc.x), fwidth(wc.y));
            float vis = clamp(1.0 - fw * 1.8, 0.0, 1.0);
            float win;
            if (st == 1 || st == 5) win = step(0.07, wf.x) * step(0.24, wf.y);
            else if (st == 2) win = step(0.30, wf.x) * step(wf.x, 0.70) * step(0.34, wf.y) * step(wf.y, 0.76);
            else if (st == 6) win = step(0.05, wf.x) * step(0.42, wf.y) * step(wf.y, 0.86);
            else win = step(0.18, wf.x) * step(wf.x, 0.82) * step(0.28, wf.y) * step(wf.y, 0.80);
            win *= step(4.2, vLS.y) + (st == 2 ? 1.0 : 0.0);            // solid ground floor band on big buildings
            float glassy = (st == 1 || st == 5) ? 1.0 : 0.0;
            vec3 glassCol = mix(vec3(0.07, 0.11, 0.15), diffuseColor.rgb * 0.55, glassy);
            diffuseColor.rgb = mix(diffuseColor.rgb, glassCol, win * mix(0.4, 0.82, vis) );
            gl = win * mix(0.55, 1.0, glassy) * mix(0.6, 1.0, vis);
            vec2 li = (st == 1 || st == 5 || st == 6) ? vec2(floor(wi.x / 3.0), wi.y) : wi;
            wLit = win * step(st == 2 ? 0.55 : 0.6, hb(li + floor(vSeed / 7.0))) * vis + (1.0 - vis) * 0.16;
          } else if (vBN.y > 0.5) diffuseColor.rgb = diffuseColor.rgb * 0.35 + vec3(0.16, 0.16, 0.165);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = st == 4 ? 0.97 : mix(roughnessFactor, 0.1, gl);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = mix(metalnessFactor, 0.85, gl);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += (st == 4 ? vec3(1.0, 0.72, 0.4) : vec3(1.0, 0.8, 0.5)) * wLit * uNight * 1.6;`)},t}function xv(){let i=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.5,1,0],[.5,1,0]],t=[[0,4,5],[0,5,1],[2,5,4],[2,4,3],[3,4,0],[1,5,2]],e=[];for(let s of t)for(let r of s)e.push(...i[r]);let n=new ge;return n.setAttribute("position",new oe(e,3)),n.computeVertexNormals(),n.setAttribute("uv",new oe(new Float32Array(e.length/3*2),2)),n}function ud(i,{rng:t,surfaceAt:e,groundElev:n,night:s,centers:r}){let o=t(99),a=gv(s),l={box:()=>new gn(1,1,1).translate(0,.5,0),cyl:()=>new xn(.5,.5,1,24).translate(0,.5,0),roof:xv,pyr:()=>new Cs(.7071,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)},c=[[.3,.46,.62],[.24,.45,.47],[.16,.19,.24],[.5,.4,.28],[.6,.66,.72],[.22,.34,.55]],h=[[.78,.76,.72],[.62,.62,.64],[.86,.85,.83],[.66,.5,.42],[.52,.5,.47],[.74,.69,.6]],u=[[.9,.89,.85],[.84,.78,.66],[.8,.82,.84],[.72,.6,.5]],f=[[.5,.22,.16],[.26,.27,.3],[.58,.32,.2],[.34,.24,.2]],d=S=>S[o()*S.length|0],g=(S,I=.06)=>S.map(z=>z*(1-I+o()*2*I)),x=[],m=new Ot,p=new Ye,y=new P(0,1,0),v=new P,_=new P,R=new bt,T=0;for(let[S,I,z,B,H]of r){let J={box:[],cyl:[],roof:[],pyr:[]},W=Math.cos(H),rt=Math.sin(H);p.setFromAxisAngle(y,-H);let O=(_t,Mt)=>[S+_t*W-Mt*rt,I+_t*rt+Mt*W],Q=(_t,Mt,Ct,X,nt,dt,ht,K,lt)=>{let[Tt,Wt]=O(Mt,Ct);J[_t].push({n:Tt,e:Wt,y0:X,sb:nt,sy:dt,sa:ht,c:K,st:lt})},it=Math.ceil(z/wn);for(let _t=-it;_t<=it;_t++)for(let Mt=-it;Mt<=it;Mt++){let Ct=_t*wn,X=Mt*wn,nt=Math.hypot(Ct,X),dt=z*(.82+.3*o());if(nt>dt)continue;let[ht,K]=O(Ct,X);if(e(ht,K)!=="grass")continue;let lt=1e9,Tt=-1e9,Wt=!0;for(let[F,Z]of[[0,0],[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]]){let[j,q]=O(Ct+F*wn,X+Z*wn),pt=n(j,q);e(j,q)!=="grass"&&(Wt=!1),lt=Math.min(lt,pt),Tt=Math.max(Tt,pt)}if(!Wt||lt<1.5||Tt>700||Tt-lt>4)continue;let Dt=Tt+.4,ne=1-nt/z,L=o(),ie=[.47,.47,.455],Vt=_t===0&&Mt===0,Bt=(F,Z,j,q,pt,ot,ct,qt="box")=>Q(qt,Ct+F,X+Z,Dt,j,pt,q,ot,ct),Rt=(F,Z,j,q,pt,ot)=>{o()<.6&&Q("box",Ct+F+(o()-.5)*q*.3,X+Z+(o()-.5)*j*.3,Dt+pt,j*(.25+o()*.3),2.5+o()*3,q*(.25+o()*.3),ot.map(ct=>ct*.7),Pe.PLAIN)};if(Vt)ie=[.6,.6,.58];else if(ne>.7){let F=o()<.6,Z=g(d(F?c:h)),j=F&&o()<.22,q=j?Pe.ROUND:F?Pe.GLASS:o()<.5?Pe.RIBBON:Pe.PUNCH,pt=(60+Math.pow(o(),1.6)*240*B)*(.55+1.5*(ne-.7)),ot=12+o()*12;Bt(0,0,84+o()*16,84+o()*16,ot,g(d(h)),o()<.5?Pe.RIBBON:Pe.PUNCH);let ct=40+o()*26,qt=j?ct:40+o()*26,st=ot,yt=pt>120?2+(o()*2|0):1+(o()*2|0),Pt=(o()-.5)*16,Ft=(o()-.5)*16;for(let xt=0;xt<yt;xt++){let Zt=(pt-ot)*(xt===0?yt===1?1:.58:.42/(yt-1));Q(j?"cyl":"box",Ct+Pt,X+Ft,Dt+st,ct,Zt,qt,Z,q),st+=Zt,ct*=.74,qt*=.74}Q("box",Ct+Pt,X+Ft,Dt+st,ct*.8,4+o()*4,qt*.8,Z.map(xt=>xt*.6),Pe.PLAIN),pt>150&&(o()<.5?Q("pyr",Ct+Pt,X+Ft,Dt+st+4,ct*.7,18+o()*30,qt*.7,Z.map(xt=>xt*.8),Pe.PLAIN):Q("cyl",Ct+Pt,X+Ft,Dt+st+4,1.6,30+o()*40,1.6,[.8,.8,.82],Pe.PLAIN)),ie=[.52,.52,.5]}else if(ne>.42)if(L<.07)ie=[.25,.4,.2];else for(let[F,Z]of[[-1,-1],[1,1],[-1,1],[1,-1]].slice(0,2+(o()*3|0))){let j=34+o()*14,q=34+o()*14,pt=(16+o()*46)*(.5+ne),ot=o()<.25?Pe.GLASS:o()<.5?Pe.RIBBON:o()<.75?Pe.PUNCH:Pe.RESI,ct=g(ot===Pe.GLASS?d(c):d(h));Bt(F*28,Z*28,j,q,pt,ct,ot),Rt(F*28,Z*28,j,q,pt,ct)}else if(ne>.18)if(L<.08)ie=[.25,.4,.2];else if(L<.2){let F=g([.7,.71,.72]);Bt(0,0,92,70,9+o()*4,F,Pe.PLAIN),Q("box",Ct,X,Dt+12,60,1.2,8,[.3,.3,.32],Pe.PLAIN),ie=[.38,.38,.37]}else for(let[F,Z]of[[-1,-1],[1,1],[-1,1],[1,-1]].slice(0,3+(o()*2|0))){let j=24+o()*20,q=24+o()*20,pt=7+o()*13,ot=g(d(h));Bt(F*28,Z*28,j,q,pt,ot,o()<.5?Pe.RESI:Pe.PUNCH),Rt(F*28,Z*28,j,q,pt,ot)}else if(ie=g([.27,.4,.2],.12),!(L<.25))for(let[F,Z]of[[-1,-1],[1,1],[-1,1],[1,-1],[0,-1],[0,1]].slice(0,3+(o()*3|0))){let j=F*36+(o()-.5)*8,q=Z*30+(o()-.5)*8,pt=11+o()*6,ot=8.5+o()*3,ct=4.5+(o()<.4?3:0);Bt(j,q,pt,ot,ct,g(d(u)),Pe.RESI),Q("roof",Ct+j,X+q,Dt+ct,pt+1,2.6+o()*1.2,ot+1,g(d(f)),Pe.PLAIN)}Q("box",Ct,X,Dt-8,wn+.5,8,wn+.5,ie,Pe.GROUND);let[fe,Ut]=O(Ct+wn/2,X+wn/4),[E,M]=O(Ct-wn/4,X+wn/2);x.push(Ut,Dt+9,-fe,M,Dt+9,-E)}for(let _t of Object.keys(J)){let Mt=J[_t];if(!Mt.length)continue;let Ct=l[_t](),X=new Float32Array(Mt.length),nt=new Yn(Ct,a,Mt.length);Mt.forEach((dt,ht)=>{m.compose(v.set(dt.e,dt.y0,-dt.n),p,_.set(dt.sb,dt.sy,dt.sa)),nt.setMatrixAt(ht,m),nt.setColorAt(ht,R.setRGB(dt.c[0],dt.c[1],dt.c[2])),X[ht]=dt.st}),Ct.setAttribute("aStyle",new In(X,1)),nt.computeBoundingSphere(),nt.receiveShadow=!1,i.add(nt),T+=Mt.length}}let A=new ge;A.setAttribute("position",new oe(x,3));let C=new Ln({size:2,sizeAttenuation:!1,color:16760944,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),w=new $n(A,C);return w.frustumCulled=!1,i.add(w),C.userData.count=T,C}function ls(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ds={night:{value:0},time:{value:0}};function _v(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256),s=ls(11),r=[4,8,16,32,64].map(l=>({p:l,v:Array.from({length:l*l},()=>s())})),o=l=>l*l*(3-2*l);for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0,u=.5;for(let g of r){let x=c/256*g.p,m=l/256*g.p,p=Math.floor(x),y=Math.floor(m),v=o(x-p),_=o(m-y),R=(T,A)=>g.v[A%g.p*g.p+T%g.p];h+=u*(R(p,y)*(1-v)*(1-_)+R(p+1,y)*v*(1-_)+R(p,y+1)*(1-v)*_+R(p+1,y+1)*v*_),u*=.5}let f=Math.min(255,Math.max(0,h/.97*255))|0,d=(l*256+c)*4;n.data[d]=n.data[d+1]=n.data[d+2]=f,n.data[d+3]=255}e.putImageData(n,0,0);let a=new Ei(t);return a.wrapS=a.wrapT=ri,a.anisotropy=8,a}function vv(i){let{size:t,n:e}=Kn,n=e+1,s=xo(),r=new Float32Array(n*n*3),o=new Float32Array(n*n*3),a=t/e,l=new bt,c=new bt;for(let x=0;x<n;x++)for(let m=0;m<n;m++){let p=x*n+m,y=-t/2+m*a,v=-t/2+x*a,_=s[p];r[p*3]=y,r[p*3+1]=_,r[p*3+2]=-v;let R=s[x*n+Math.min(e,m+1)]-s[x*n+Math.max(0,m-1)],T=s[Math.min(e,x+1)*n+m]-s[Math.max(0,x-1)*n+m],A=Math.hypot(R,T)/(2*a),C=Is(v/2500,y/2500,3),w=Is(v/700+31,y/700+17,2);_<3?l.setRGB(.72,.66,.5):_<500?(l.setRGB(.25,.38,.16),c.setRGB(.42,.44,.22),l.lerp(c,C),c.setRGB(.13,.24,.11),l.lerp(c,Math.max(0,w-.45)*1.6)):_<1400?(l.setRGB(.17,.28,.14),c.setRGB(.38,.36,.28),l.lerp(c,Math.min(1,(_-500)/900+C*.3))):(l.setRGB(.4,.38,.35),c.setRGB(.93,.95,.98),l.lerp(c,Math.min(1,Math.max(0,(_-1500)/500+(C-.5))))),A>.22&&_>60&&(c.setRGB(.36,.33,.3),l.lerp(c,Math.min(1,(A-.22)*4))),_<-1&&l.setRGB(.1,.22,.3),o[p*3]=l.r,o[p*3+1]=l.g,o[p*3+2]=l.b}let h=new Uint32Array(e*e*6),u=0;for(let x=0;x<e;x++)for(let m=0;m<e;m++){let p=x*n+m,y=p+1,v=p+n,_=v+1;h[u++]=p,h[u++]=y,h[u++]=v,h[u++]=y,h[u++]=_,h[u++]=v}let f=new ge;f.setAttribute("position",new ve(r,3)),f.setAttribute("color",new ve(o,3)),f.setIndex(new ve(h,1)),f.computeVertexNormals();let d=new Re({vertexColors:!0,roughness:.96,metalness:0});d.onBeforeCompile=x=>{x.uniforms.tNoise={value:i},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTP; varying float vTNy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTP = position; vTNy = normal.y;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
      uniform sampler2D tNoise; varying vec3 vTP; varying float vTNy;
      float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec2 p = vTP.xz; float h = vTP.y; float dist = length(vViewPosition);
        float n1 = texture2D(tNoise, p / 46.0).r, n2 = texture2D(tNoise, p / 610.0).r, n3 = texture2D(tNoise, p / 7300.0 + 0.37).r, n4 = texture2D(tNoise, p / 2900.0 + 0.11).r;
        float near = 1.0 - smoothstep(150.0, 2600.0, dist);
        vec3 base = diffuseColor.rgb;
        // farmland patchwork on flat lowland
        vec2 rp = mat2(0.94, -0.34, 0.34, 0.94) * p + (n4 - 0.5) * 260.0;
        vec2 fc = rp / vec2(430.0, 270.0); vec2 id = floor(fc); vec2 ff = fract(fc);
        float r1 = h21(id), r2 = h21(id + 17.3);
        vec3 field = r1 < 0.30 ? vec3(0.36, 0.44, 0.17) : r1 < 0.55 ? vec3(0.50, 0.47, 0.24) : r1 < 0.75 ? vec3(0.24, 0.36, 0.14) : r1 < 0.9 ? vec3(0.44, 0.34, 0.22) : vec3(0.58, 0.55, 0.30);
        field *= 0.85 + 0.3 * r2;
        float rows = 0.94 + 0.06 * sin((r2 > 0.5 ? rp.x : rp.y) * 0.9) * near;
        float edge = smoothstep(0.0, 0.035, ff.x) * smoothstep(0.0, 0.035, ff.y) * smoothstep(0.0, 0.035, 1.0 - ff.x) * smoothstep(0.0, 0.035, 1.0 - ff.y);
        field = mix(vec3(0.12, 0.20, 0.10), field * rows, edge);
        float fieldMask = smoothstep(5.0, 14.0, h) * (1.0 - smoothstep(210.0, 380.0, h)) * smoothstep(0.985, 0.996, vTNy) * smoothstep(0.42, 0.52, n3 * 0.6 + n4 * 0.5);
        field = mix(field, vec3(0.36, 0.41, 0.19) * (0.9 + 0.2 * r2), smoothstep(6000.0, 26000.0, dist) * 0.6);
        base = mix(base, field * 0.82, fieldMask * 0.9);
        // woodland blotches
        float wood = smoothstep(0.50, 0.58, n4 * 0.62 + n3 * 0.36 + n2 * 0.12 * (1.0 - smoothstep(3000.0, 15000.0, dist))) * smoothstep(8.0, 30.0, h) * (1.0 - smoothstep(900.0, 1300.0, h)) * (1.0 - fieldMask);
        base = mix(base, vec3(0.07, 0.15, 0.07) * (0.8 + 0.5 * n1), wood * 0.85);
        // country roads along the field grid, rivers winding through the lowland
        float lowl = smoothstep(4.0, 10.0, h) * (1.0 - smoothstep(260.0, 420.0, h)) * smoothstep(0.965, 0.99, vTNy);
        vec2 rd = abs(fract(rp / vec2(2150.0, 2160.0) + 0.5) - 0.5) * vec2(2150.0, 2160.0);
        float px = fwidth(rp.x) + fwidth(rp.y);
        float road = (1.0 - smoothstep(6.0, 8.0 + px * 1.2, min(rd.x, rd.y))) * lowl * clamp(1.0 - px / 90.0, 0.3, 1.0);
        base = mix(base, vec3(0.43, 0.42, 0.40), road * 0.85);
        float rv = abs(texture2D(tNoise, p / 31000.0 + vec2(0.63, 0.21)).r - 0.47);
        float river = (1.0 - smoothstep(0.003, 0.008, rv)) * smoothstep(1.0, 6.0, h) * (1.0 - smoothstep(350.0, 600.0, h)) * smoothstep(0.95, 0.985, vTNy);
        base = mix(base, vec3(0.07, 0.22, 0.31), river);
        // multi-scale albedo variation, fine grain only up close
        base *= (0.80 + 0.40 * n2) * (0.86 + 0.28 * n3) * mix(1.0, 0.72 + 0.56 * n1, near);
        diffuseColor.rgb = base;
      }`)};let g=new pe(f,d);return g.receiveShadow=!0,g.frustumCulled=!1,g}function yv(){let t=new Uint8Array(262144),e=ls(5),n=[];for(let r=0;r<22;r++){let o=Math.round((e()-.5)*22),a=Math.round((e()-.5)*22);!o&&!a||n.push({kx:o,ky:a,a:.5/Math.hypot(o,a),ph:e()*6.283})}for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=0,l=0,c=o/256*6.2832,h=r/256*6.2832;for(let m of n){let p=Math.cos(m.kx*c+m.ky*h+m.ph)*m.a;a+=p*m.kx,l+=p*m.ky}let u=.11,f=-a*u,d=-l*u,g=Math.hypot(f,d,1),x=(r*256+o)*4;t[x]=(f/g*.5+.5)*255,t[x+1]=(d/g*.5+.5)*255,t[x+2]=(1/g*.5+.5)*255,t[x+3]=255}let s=new Rs(t,256,256,mn);return s.wrapS=s.wrapT=ri,s.generateMipmaps=!0,s.minFilter=Pn,s.magFilter=qe,s.anisotropy=8,s.needsUpdate=!0,s}function Mv(i){let n=document.createElement("canvas");n.width=512,n.height=4096;let s=n.getContext("2d"),r=i.len,o=i.width,a=ls(i.len);s.setTransform(512/o,0,0,4096/r,0,0),s.fillStyle="#34363a",s.fillRect(0,0,o,r);for(let c=0;c<5e3;c++){let h=40+a()*35|0;s.fillStyle=`rgba(${h},${h},${h+2},0.5)`,s.fillRect(a()*o,a()*r,.5+a()*2.5,2+a()*14)}s.fillStyle="#e9e9e4",s.fillRect(1.2,0,.9,r),s.fillRect(o-2.1,0,.9,r);for(let c=95;c<r-95;c+=60)s.fillRect(o/2-.45,c,.9,30);for(let c=0;c<2;c++){s.save(),c===1&&(s.translate(o,r),s.rotate(Math.PI));let h=u=>r-u;s.fillStyle="#e9e9e4";for(let u=0;u<12;u++){let f=4+(u<6?u:u+.9)*4.05;s.fillRect(f,h(36),1.8,30)}s.font="700 26px Arial",s.textAlign="center",s.textBaseline="alphabetic",s.save(),s.translate(o/2,h(46)),s.scale(.75,1),s.fillText(i.ids[c],0,0),s.restore();for(let[u,f]of[[150,3],[300,2],[450,2],[600,1],[750,1]])for(let d=0;d<f;d++)for(let g of[-1,1])s.fillRect(o/2+g*(9+d*3)-.9,h(u+22.5),1.8,22.5);for(let u of[-1,1])s.fillRect(o/2+u*12-3,h(450),6,50);for(let u=0;u<260;u++){s.fillStyle=`rgba(15,15,16,${.05+a()*.1})`;let f=o/2+(a()-.5)*18;s.fillRect(f,h(250+a()*500+60),.9+a(),40+a()*90)}s.restore()}let l=new Ei(n);return l.anisotropy=16,l.colorSpace=Ae,l}function Sv(i,t){let e=new Fe;e.position.set(i.e,i.elev,-i.n),e.rotation.y=-i.hdg*oi;let n=i.len,s=i.width,r=(y,v,_,R,T,A)=>{let C=new pe(new Qi(y,v).rotateX(-Math.PI/2),A);return C.position.set(_,T,R),C.receiveShadow=!0,e.add(C),C};r(s,n+120,0,0,.25,new Re({color:3092788,roughness:.9})),r(s,n,0,0,.32,new Re({map:Mv(i),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),r(s+30,n+120,0,0,.12,new Re({color:5593178,roughness:1}));let o=new Re({color:4671820,roughness:.95}),a=new en({color:14201372,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});r(40,n,190,0,.2,o),r(.6,n,190,0,.3,a);for(let y of[-n/2+40,-n/4,0,n/4,n/2-40])r(180,40,110,-y,.2,o),r(170,.6,115,-y,.3,a);r(330,1040,355,0,.18,new Re({color:5264214,roughness:.95}));let l=new Re({color:12172996,roughness:.7,metalness:.1}),c=new Re({color:2704220,roughness:.25,metalness:.6}),h=(y,v,_,R,T,A=l)=>{let C=new pe(new gn(y,v,_),A);return C.position.set(R,v/2,T),C.castShadow=!0,C.receiveShadow=!0,e.add(C),C};h(70,24,620,580,0),h(72,14,600,579,0,c).position.y=14;for(let y=-2;y<=2;y++)h(90,10,14,500,y*130);h(16,70,16,640,-520),h(26,9,26,640,-520,c).position.y=72;for(let y=0;y<3;y++)h(120,34,110,620,520+y*140,new Re({color:9344926,roughness:.6,metalness:.3}));let u=[],f=[],d=(y,v,_,R,T,A)=>{u.push(y,v,_),f.push(R,T,A)};for(let y=-n/2;y<=n/2;y+=60)d(-s/2-1,.6,-y,1,1,.85),d(s/2+1,.6,-y,1,1,.85);for(let y=-n/2+30;y<=n/2;y+=30)d(0,.4,-y,1,1,1);for(let y of[-1,1]){for(let v=-s/2;v<=s/2;v+=3)d(v,.6,y*(n/2+2),0,1,.2),d(v,.6,y*(n/2-1),1,.05,.05);for(let v=30;v<=900;v+=30)for(let _=-4;_<=4;_+=2)d(_,1.5,y*(n/2+60+v),1,1,.9);for(let v=-22;v<=22;v+=2)d(v,1.5,y*(n/2+360),1,1,.9);for(let v=30;v<=900;v+=30)for(let _ of[-1,1])for(let R=0;R<3;R++)d(_*(9+R*1.5),.4,y*(n/2-v),1,1,1)}for(let y=-n/2;y<=n/2;y+=40)d(170,.5,-y,.1,.3,1),d(210,.5,-y,.1,.3,1);for(let y=0;y<26;y++)d(545,26,-300+y*24,1,.8,.5);let g=new ge;g.setAttribute("position",new oe(u,3)),g.setAttribute("color",new oe(f,3));let x=new Ln({size:2.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1}),m=new $n(g,x);m.frustumCulled=!1,e.add(m),t.push(x);let p=[];for(let y=0;y<2;y++){let v=y===0?1:-1,_=new ge,R=[],T=[];for(let w=0;w<4;w++)R.push(-v*(s/2+15+w*9),1,v*(n/2-300)),T.push(1,1,1);_.setAttribute("position",new oe(R,3)),_.setAttribute("color",new oe(T,3));let A=new Ln({size:5,sizeAttenuation:!1,vertexColors:!0,toneMapped:!1,depthWrite:!1,transparent:!0}),C=new $n(_,A);C.frustumCulled=!1,e.add(C),p.push({geo:_,rw:_n[un.indexOf(i)*2+y]})}return{grp:e,papi:p}}function bv(i){let t=ls(321),e=new Cs(.5,1,6,1).translate(0,.5,0),n=new Ta,s=14e3,r=new Yn(e,n,s),o=new Ot,a=new bt,l=0,c=0;for(;l<s&&c++<2e5;){let h=un[t()*un.length|0],u=h.n+(t()-.5)*22e3,f=h.e+(t()-.5)*22e3;if(Is(u/900+3.1,f/900+8.7,3)<.5+t()*.08||os(u,f)!=="grass")continue;let g=!1;for(let p of un){let y=p.hdg*oi,v=u-p.n,_=f-p.e,R=v*Math.cos(y)+_*Math.sin(y),T=-v*Math.sin(y)+_*Math.cos(y);Math.abs(R)<p.len/2+1300&&T>-260&&T<760&&(g=!0)}if(g)continue;let x=Zn(u,f);if(x<3||x>1100)continue;let m=9+t()*9;o.makeScale(m*(.75+t()*.4),m*(1.3+t()*.9),m*(.75+t()*.4)),o.setPosition(f,x-.5,-u),r.setMatrixAt(l,o),a.setRGB(.06+t()*.06,.16+t()*.1,.06+t()*.04),r.setColorAt(l,a),l++}r.count=l,r.frustumCulled=!1,i.add(r)}function wv(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=ls(77);for(let r=0;r<4;r++){let o=r%2*128+64,a=Math.floor(r/2)*128+128/2,l=Array.from({length:5+r},()=>({x:(n()-.5)*44,y:(n()-.35)*24,s:.6+n()*.6}));for(let c=0;c<150;c++){let h=l[n()*l.length|0],u=n()*6.283,f=Math.pow(n(),.8)*17*h.s,d=h.x+Math.cos(u)*f,g=h.y+Math.sin(u)*f;g>9&&(g=9+(g-9)*.3);let x=Math.min(4+n()*13*h.s,60-Math.max(Math.abs(d),Math.abs(g)));if(x<2)continue;let m=e.createRadialGradient(o+d,a+g,0,o+d,a+g,x),p=.05+n()*.12;m.addColorStop(0,`rgba(255,255,255,${p})`),m.addColorStop(.55,`rgba(255,255,255,${p*.45})`),m.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=m,e.fillRect(o-128/2,a-128/2,128,128)}}let s=new Ei(t);return s.flipY=!1,s}function Tv(i){let t=ls(4242),e=400,n=18,s=e*n,r=new Float32Array(s*3),o=new Float32Array(s*3),a=0;for(let u=0;u<e;u++){let f=t(),d=(t()-.5)*158e3,g=(t()-.5)*158e3,x=1500+t()*900,m=500+t()*1100,p=.35+t()*.75;f<.22?(x=850+t()*500,m=220+t()*300,p=.5+t()*.5):f<.4?(x=3600+t()*1900,m=1500+t()*1900,p=.05+t()*.08):f<.47&&(x=1300+t()*500,m=1300+t()*900,p=1.5+t()*1);for(let y=0;y<n;y++){let v=t()*6.283,_=Math.sqrt(t()),R=m*(.45+t()*.45)*(1.05-_*.5)*(p>1.4?.8:1),T=(1-_*_)*t()*m*p;r[a*3]=d+Math.cos(v)*_*m,r[a*3+1]=x+R*.22+T,r[a*3+2]=g+Math.sin(v)*_*m*.75,o[a*3]=R,o[a*3+1]=Math.min(1,T/(m*p*.8+1)),o[a*3+2]=t(),a++}}let l=new La;l.setAttribute("position",new oe([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),l.setIndex([0,1,2,0,2,3]),l.setAttribute("aOff",new In(r,3)),l.setAttribute("aPar",new In(o,3)),l.instanceCount=s;let c=new nn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Ar.merge([mt.fog,{tPuff:{value:null},uSun:{value:new P(0,1,0)},uLight:{value:new bt(1,1,1)},uShade:{value:new bt(.55,.6,.68)},uOpacity:{value:1}}]),vertexShader:`
      #include <common>
      #include <fog_pars_vertex>
      #include <logdepthbuf_pars_vertex>
      attribute vec3 aOff; attribute vec3 aPar; varying vec2 vUv; varying vec3 vPar; varying float vDist; varying float vSun; varying float vLy;
      uniform vec3 uSun;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(aOff, 1.0);
        float rot = (aPar.z - 0.5) * 0.8; vec2 cs = vec2(cos(rot), sin(rot));
        vec2 q = vec2(position.x * cs.x - position.y * cs.y, position.x * cs.y + position.y * cs.x);
        mvPosition.xy += q * aPar.x * vec2(1.0, 0.74);
        float vr = floor(fract(aPar.z * 13.7) * 4.0); vec2 lu = position.xy * 0.5 + 0.5; lu.y = 1.0 - lu.y;
        if (fract(aPar.z * 5.3) > 0.5) lu.x = 1.0 - lu.x;
        vUv = (lu + vec2(mod(vr, 2.0), floor(vr * 0.5))) * 0.5; vLy = position.y * 0.5 + 0.5;
        vPar = aPar; vDist = -mvPosition.z;
        vec3 sv = (viewMatrix * vec4(uSun, 0.0)).xyz; vSun = dot(q, sv.xy);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      #include <logdepthbuf_pars_fragment>
      uniform sampler2D tPuff; uniform vec3 uLight; uniform vec3 uShade; uniform float uOpacity;
      varying vec2 vUv; varying vec3 vPar; varying float vDist; varying float vSun; varying float vLy;
      void main() {
        #include <logdepthbuf_fragment>
        float a = texture2D(tPuff, vUv).a;
        a = smoothstep(0.03, 0.95, a); a = a * (0.35 + 0.65 * a) * 0.9 * uOpacity * smoothstep(60.0, 600.0, vDist);
        if (a < 0.004) discard;
        float lit = clamp(0.30 + 0.34 * vPar.y + 0.30 * vSun + 0.30 * vLy + 0.12 * a, 0.0, 1.0);
        vec3 col = mix(uShade, uLight, lit);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`});c.uniforms.tPuff.value=wv();let h=new pe(l,c);return h.frustumCulled=!1,h.renderOrder=5,i.add(h),{mesh:h,mat:c,geo:l,total:s,per:n}}function Ev(i,t){let e=(n,s,r)=>{let o=new nn({transparent:!0,depthWrite:!1,fog:!0,side:Ge,uniforms:Ar.merge([mt.fog,{tNoise:{value:null},uOrg:{value:new P},uCam:{value:new P},uLight:{value:new bt(1,1,1)},uShade:{value:new bt(.6,.65,.72)},uCov:{value:1},uAlt:{value:n},uKind:{value:s},uT:{value:0},uOpacity:{value:1}}]),vertexShader:`
        #include <common>
        #include <fog_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        uniform vec3 uOrg; varying vec3 vP;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz - uOrg;
          vec4 mvPosition = viewMatrix * wp;
          gl_Position = projectionMatrix * mvPosition;
          #include <logdepthbuf_vertex>
          #include <fog_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <fog_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        uniform sampler2D tNoise; uniform vec3 uCam; uniform vec3 uLight; uniform vec3 uShade; uniform float uCov; uniform float uAlt; uniform float uKind; uniform float uT; uniform float uOpacity;
        varying vec3 vP;
        void main() {
          #include <logdepthbuf_fragment>
          vec2 p = vP.xz; float d = length(p - uCam.xz); float n; float a;
          if (uKind < 0.5) {
            vec2 q = mat2(0.82, -0.57, 0.57, 0.82) * p + uT * vec2(16.0, 3.0);
            float w = texture2D(tNoise, q / vec2(61000.0, 23000.0)).r;
            n = texture2D(tNoise, q / vec2(39000.0, 9500.0) + w * 0.6).r * 0.66 + texture2D(tNoise, q / vec2(8200.0, 2600.0) + w * 0.4).r * 0.34;
            float patch_ = smoothstep(0.46, 0.70, texture2D(tNoise, q / 173000.0 + 0.31).r + 0.12 * uCov);
            a = smoothstep(0.50 - 0.05 * uCov, 0.84, n) * 0.42 * patch_;
          } else {
            vec2 q = p + uT * vec2(7.0, 2.0);
            n = texture2D(tNoise, q / 43000.0).r * 0.50 + texture2D(tNoise, q / 9700.0 + 0.4).r * 0.32 + texture2D(tNoise, q / 2300.0).r * 0.18;
            a = smoothstep(0.585 - 0.07 * uCov, 0.66 - 0.05 * uCov, n) * 0.94 * smoothstep(30000.0, 64000.0, d);
          }
          a *= smoothstep(60.0, 500.0, abs(uCam.y - uAlt)) * (1.0 - smoothstep(380000.0, 540000.0, d)) * uOpacity;
          if (a < 0.003) discard;
          float t = smoothstep(0.5, 0.85, n);
          vec3 col = mix(uShade, uLight, uCam.y > uAlt ? 0.62 + 0.38 * t : 0.80 - 0.45 * t);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`});o.uniforms.tNoise.value=t;let a=new pe(new Qi(1,1).rotateX(-Math.PI/2),o);return a.scale.set(13e5,1,13e5),a.position.y=n,a.frustumCulled=!1,a.renderOrder=r,i.add(a),{m:a,mat:o,alt:n}};return[e(11900,0,6),e(2500,1,3)]}function Av(i){let t=new Re({color:15330543,roughness:.55}),e=new Re({color:12728878,roughness:.6}),n=new Re({color:4871520,roughness:.5,metalness:.4}),s=(O,Q,it,_t,Mt)=>{let Ct=new pe(O,Q);return Ct.position.set(it,_t,-Mt),Ct.castShadow=!0,i.add(Ct),Ct},r=O=>{let Q=-1500;for(;Q>-4e4&&os(O,Q)!=="water";)Q-=100;return Q},o=[];for(let O=0;O<3;O++)for(let Q=0;Q<7;Q++){let it=-3600+Q*1050+O*350;o.push([it,r(it)-1700-O*900])}let a=new Yn(new xn(2,3.6,112,10).translate(0,56,0),t,o.length),l=new Yn(new gn(14,5,5).translate(-2,113,0),t,o.length),c=new Yn(new gn(.9,62,3.2).translate(0,31,0),t,o.length*3),h=new Ot,u=new Ye,f=new P,d=new P(1,1,1),g=new P(1,0,0);o.forEach(([O,Q],it)=>{h.makeTranslation(Q,0,-O),a.setMatrixAt(it,h),l.setMatrixAt(it,h)});for(let O of[a,l,c])O.frustumCulled=!1,O.castShadow=!0,i.add(O);let x=o.map((O,Q)=>Q*1.7),m=-5200,p=r(m)+160,y=Zn(m,p);s(new xn(4.2,6.5,44,16).translate(0,22,0),t,p,y,m),s(new xn(5,5.6,9,16).translate(0,22,0),e,p,y,m),s(new xn(3,3.6,6,12).translate(0,47,0),n,p,y,m);let v=new en({color:16773824,transparent:!0,opacity:0,depthWrite:!1,blending:Ji,side:Ge,toneMapped:!1,fog:!1}),_=s(new Cs(190,4200,12,1,!0).rotateZ(Math.PI/2).translate(2100,0,0),v,p,y+47,m);_.castShadow=!1;let R=new As(new ts({color:16773824,transparent:!0,opacity:0,depthWrite:!1,blending:Ji,toneMapped:!1,fog:!1,sizeAttenuation:!1}));R.scale.setScalar(.012),R.position.set(p,y+47,-m),i.add(R);let T=5937.5,A=23750,C=Zn(T,A);s(new xn(46,50,44,24).translate(0,16,0),t,A,C,T),s(new ba(46,24,12,0,Math.PI*2,0,Math.PI/2).translate(0,38,0),t,A,C,T),s(new gn(8,30,40).translate(0,62,14),n,A,C,T);let w=Ls[0][0],S=Ls[0][1],I=Zn(w,S);s(new xn(5,15,330,12).translate(0,165,0),t,S,I,w),s(new xn(24,15,22,20).translate(0,300,0),n,S,I,w),s(new xn(.8,2.5,110,6).translate(0,385,0),e,S,I,w);let z=[];for(let[O,Q]of o)z.push(Q,118,-O);z.push(S,I+442,-w,S,I+315,-w,A,C+86,-T);let B=new ge;B.setAttribute("position",new oe(z,3));let H=new Ln({size:3,sizeAttenuation:!1,color:16724e3,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),J=new $n(B,H);J.frustumCulled=!1,i.add(J);let W=0,rt=0;return{setNight(O){rt=O,v.opacity=O>.4?.1*O:0,R.material.opacity=O>.2?1:0},update(O){W+=O;for(let Q=0;Q<o.length;Q++)for(let it=0;it<3;it++)u.setFromAxisAngle(g,x[Q]+W*1.25+it*2.0944),f.set(o[Q][1]-9.5,113,-o[Q][0]),h.compose(f,u,d),c.setMatrixAt(Q*3+it,h);c.instanceMatrix.needsUpdate=!0,_.rotation.y=W*.7,H.opacity=rt>.3?W%1.6<.8?1:.15:0}}}function Rv(i){let t=new Fe;i.add(t);let e=new wa(130,7,10,64),n=[],s=new As(new ts({color:7208858,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1,sizeAttenuation:!1,opacity:.9}));s.scale.setScalar(.014),s.visible=!1,s.renderOrder=20,t.add(s);let r=-1,o=0;return{set(a){for(let l of n)t.remove(l.m),l.m.material.dispose();n.length=0,r=-1,s.visible=!1;for(let l of a){let c=new en({color:10475775,transparent:!0,opacity:.35,toneMapped:!1,fog:!1,depthWrite:!1}),h=new pe(e,c);h.position.set(l.e,l.alt,-l.n),h.rotation.y=-l.psi,h.frustumCulled=!1,t.add(h),n.push({m:h,mat:c})}},activate(a){r=a,n.forEach((l,c)=>{l.m.visible=c>=a,l.mat.color.set(c===a?5635976:10475775),l.mat.opacity=c===a?.95:.3}),s.visible=a>=0&&a<n.length,s.visible&&s.position.copy(n[a].m.position)},update(a){o+=a,r>=0&&r<n.length&&(n[r].mat.opacity=.75+.25*Math.sin(o*5))}}}function Cv(){let i=Kn.n+1,t=xo(),e=new Uint8Array(i*i);for(let s=0;s<e.length;s++)e[s]=Math.min(255,Math.max(0,t[s]+60));let n=new Rs(e,i,i,uo);return n.unpackAlignment=1,n.magFilter=n.minFilter=qe,n.needsUpdate=!0,n}function Pv(i){let t=ls(2024),e=3200,n=new Float32Array(e*3),s=new Float32Array(e*3);for(let l=0;l<e;l++){let c=t()*1.2-.2,h=t()*6.283,u=Math.sqrt(Math.max(0,1-c*c)),f=4e5;n[l*3]=Math.cos(h)*u*f,n[l*3+1]=c*f,n[l*3+2]=Math.sin(h)*u*f;let d=Math.pow(t(),2.6)*.9+.12,g=t();s[l*3]=d*(.85+.15*g),s[l*3+1]=d*.92,s[l*3+2]=d*(1-.2*g)}let r=new ge;r.setAttribute("position",new ve(n,3)),r.setAttribute("color",new ve(s,3));let o=new Ln({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}),a=new $n(r,o);return a.frustumCulled=!1,a.renderOrder=-5,i.add(a),o}function Iv(i){let t=new Fe;i.add(t);let e=[],n=[{R:23e4,a0:-1.25,a1:.9,h0:85e3,h1:235e3,ph:0},{R:285e3,a0:-.7,a1:1.3,h0:9e4,h1:26e4,ph:3.7},{R:345e3,a0:-1.45,a1:.35,h0:95e3,h1:3e5,ph:7.9}];for(let s of n){let a=[],l=[],c=[];for(let d=0;d<=20;d++)for(let g=0;g<=220;g++){let x=g/220,m=d/20;a.push(x,m,0),l.push(x,m)}for(let d=0;d<20;d++)for(let g=0;g<220;g++){let x=d*221+g;c.push(x,x+1,x+220+1,x+1,x+220+2,x+220+1)}let h=new ge;h.setAttribute("position",new oe(a,3)),h.setAttribute("uv",new oe(l,2)),h.setIndex(c);let u=new nn({transparent:!0,depthWrite:!1,side:Ge,blending:Ji,uniforms:{uT:Ds.time,uK:{value:0},uP:{value:new ae(s.R,s.a0,s.a1,s.ph)},uH:{value:new zt(s.h0,s.h1)}},vertexShader:`
        #include <common>
        #include <logdepthbuf_pars_vertex>
        uniform float uT; uniform vec4 uP; uniform vec2 uH; varying vec2 vUv;
        void main() {
          vUv = uv; float u = uv.x, t = uT * 0.02 + uP.w;
          float ang = mix(uP.y, uP.z, u);
          float fold = sin(u * 23.0 + t * 1.3) * 0.045 + sin(u * 61.0 - t * 2.1) * 0.016 + sin(u * 7.0 + t * 0.6) * 0.09;
          float R = uP.x * (1.0 + fold);
          vec3 p = vec3(sin(ang) * R, mix(uH.x, uH.y, uv.y), -cos(ang) * R);
          p.xz += vec2(sin(ang), -cos(ang)) * uv.y * 30000.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <logdepthbuf_pars_fragment>
        uniform float uT; uniform float uK; uniform vec4 uP; varying vec2 vUv;
        float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
        float n1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h1(i), h1(i + 1.0), f); }
        void main() {
          #include <logdepthbuf_fragment>
          float u = vUv.x, v = vUv.y, t = uT + uP.w * 10.0;
          float band = smoothstep(0.30, 0.75, n1(u * 5.0 + t * 0.035) * 0.65 + n1(u * 13.0 - t * 0.06) * 0.45);
          float rays = 0.45 + 0.55 * n1(u * 260.0 + t * 0.9) * (0.5 + 0.5 * n1(u * 90.0 - t * 0.5));
          float len = 0.55 + 0.45 * n1(u * 40.0 + t * 0.2);
          float prof = smoothstep(0.0, 0.035, v) * exp(-v * 3.4 / len);
          float edge = smoothstep(0.0, 0.04, u) * smoothstep(0.0, 0.04, 1.0 - u);
          float I = band * rays * prof * edge * uK;
          vec3 col = mix(vec3(0.16, 1.0, 0.42), vec3(0.20, 0.55, 1.0), smoothstep(0.18, 0.50, v));
          col = mix(col, vec3(0.75, 0.22, 0.85), smoothstep(0.42, 0.95, v));
          col += vec3(0.9, 0.25, 0.45) * smoothstep(0.05, 0.0, v) * 0.6;
          gl_FragColor = vec4(col * I * 1.5, 1.0);
        }`}),f=new pe(h,u);f.frustumCulled=!1,f.renderOrder=-4,t.add(f),e.push(u)}return t.visible=!1,{grp:t,mats:e}}function fd(i,t){let e=_v(),n=vv(e);i.add(n);let s=yv();s.repeat.set(7600,7600);let r=new Re({color:667986,roughness:.2,metalness:0,normalMap:s,normalScale:new zt(.28,.28),envMapIntensity:.8}),o=Cv();r.onBeforeCompile=v=>{v.uniforms.tH={value:o},v.uniforms.tNoise={value:e},v.uniforms.uNight=Ds.night,v.uniforms.uTime=Ds.time,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSeaP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSeaP = position;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tH; uniform sampler2D tNoise; uniform float uNight; uniform float uTime; varying vec3 vSeaP;`).replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec2 q = vec2(vSeaP.x, -vSeaP.z), huv = q / ${Kn.size.toFixed(1)} + 0.5; float depth = 60.0;
        if (huv.x > 0.0 && huv.x < 1.0 && huv.y > 0.0 && huv.y < 1.0) depth = 60.0 - texture2D(tH, huv * (${Kn.n}.0 / ${Kn.n+1}.0) + 0.5 / ${Kn.n+1}.0).r * 255.0;
        float n = texture2D(tNoise, q / 9000.0).r, n2 = texture2D(tNoise, q / 330.0).r, dayK = 1.0 - 0.9 * uNight;
        diffuseColor.rgb *= 0.80 + 0.40 * n;
        float sh_ = 1.0 - smoothstep(0.0, 44.0, depth + (n - 0.5) * 12.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.04, 0.36, 0.42) * dayK, sh_ * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.26, 0.60, 0.58) * dayK, smoothstep(0.72, 1.0, sh_) * 0.65);
        float foam = smoothstep(3.2, 0.6, depth) * smoothstep(0.38, 0.62, n2 + 0.12 * sin(uTime * 0.8 + q.x * 0.02));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92) * dayK, foam * 0.8);
      }`)};let a=new pe(new Qi(15e5,15e5).rotateX(-Math.PI/2),r);a.receiveShadow=!0,i.add(a);let l=Ev(i,e),c=Av(i),h=Rv(i),u=new P,f=[],d=[];for(let v of un){let _=Sv(v,f);i.add(_.grp),d.push(..._.papi)}let g=ud(i,{rng:ls,surfaceAt:os,groundElev:Zn,night:Ds.night,centers:Ls});bv(i);let x=Tv(i),m=Pv(t),p=Iv(t),y=0;return{terrain:n,sea:a,clouds:x,setEnv({night:v,sunDir:_,cloudFrac:R,sunColor:T,lowvis:A}){Ds.night.value=v;for(let w of f)w.size=2.2+2.6*v,w.opacity=.75+.25*v;g.opacity=v*.9,x.geo.instanceCount=Math.round(x.total*R/x.per)*x.per;let C=x.mat.uniforms;C.uSun.value.copy(_),C.uLight.value.copy(T).multiplyScalar(A?1.3:2.5).lerp(new bt(.1,.12,.17),v),C.uShade.value.setRGB(.66,.7,.78).multiplyScalar(A?1.1:1.45).lerp(new bt(.035,.045,.07),v),v>.2&&v<.9&&(C.uLight.value.setRGB(2,1.3,.9),C.uShade.value.setRGB(.5,.48,.62)),y=A?0:Math.max(0,v-.4)/.6,m.opacity=y,p.grp.visible=v>.9&&!A;for(let w of p.mats)w.uniforms.uK.value=v>.9?1:0;r.color.set(v>.9?265494:667986);for(let w of l){let S=w.mat.uniforms;S.uLight.value.copy(C.uLight.value),S.uShade.value.copy(C.uShade.value),S.uCov.value=R,S.uOpacity.value=A?0:1-.55*v}c.setNight(v)},gates:h,update(v,_,R){Ds.time.value+=v,R.getWorldPosition(u).sub(i.position);for(let T of l){T.m.position.x=u.x,T.m.position.z=u.z;let A=T.mat.uniforms;A.uOrg.value.copy(i.position),A.uCam.value.copy(u),A.uT.value=Ds.time.value}l[0].m.renderOrder=u.y>l[0].alt?6:2,c.update(v),h.update(v),s.offset.x+=v*.012,s.offset.y+=v*.007,m.opacity=Math.min(1,y+Math.max(0,(_-13e3)/9e3)*.5)},updatePapi(v,_,R){for(let T of d){let A=T.rw,C=A.crs*oi,w=v-A.thrN,S=_-A.thrE,I=w*Math.cos(C)+S*Math.sin(C),z=Math.atan2(R-A.elev,Math.max(1,300-I))/oi,B=T.geo.attributes.color,H=[3.5,3.17,2.83,2.5];for(let J=0;J<4;J++){let W=z>H[J];B.setXYZ(J,1,W?1:.05,W?1:.05)}B.needsUpdate=!0}}}}var Wa=class{constructor(){this.ctx=null,this.muted=!1,this.beepT=0,this.lastSay={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t,n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=Math.random()*2-1;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination);let o=(l,c,h)=>{let u=e.createBufferSource();u.buffer=s,u.loop=!0;let f=e.createBiquadFilter();f.type=l,f.frequency.value=c,f.Q.value=h;let d=e.createGain();return d.gain.value=0,u.connect(f),f.connect(d),d.connect(this.master),u.start(),{fl:f,g:d}},a=(l,c)=>{let h=e.createOscillator();h.type=l,h.frequency.value=c;let u=e.createGain();return u.gain.value=0,h.connect(u),u.connect(this.master),h.start(),{o:h,g:u}};this.roar=o("lowpass",300,.7),this.hiss=o("bandpass",2600,.8),this.wind=o("bandpass",800,.5),this.rumble=o("lowpass",70,1),this.fan=a("sawtooth",60),this.fan2=a("sawtooth",61.5),this.whine=a("triangle",800),this.warn=a("square",900)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7),t&&window.speechSynthesis&&speechSynthesis.cancel()}say(t,e=t,n=3){if(this.muted||!window.speechSynthesis)return;let s=performance.now()/1e3;if(this.lastSay[e]&&s-this.lastSay[e]<n)return;this.lastSay[e]=s;let r=new SpeechSynthesisUtterance(t);r.lang="en-US",r.rate=1.15,r.pitch=.9,r.volume=.9,speechSynthesis.pending&&speechSynthesis.cancel(),speechSynthesis.speak(r)}thump(t=1){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="sine",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(30,n+.35),r.gain.setValueAtTime(Math.min(1,.5*t),n),r.gain.exponentialRampToValueAtTime(.001,n+.5),s.connect(r),r.connect(this.master),s.start(n),s.stop(n+.55);let o=e.createOscillator(),a=e.createGain();o.type="sawtooth",o.frequency.setValueAtTime(1900,n),o.frequency.exponentialRampToValueAtTime(700,n+.25),a.gain.setValueAtTime(.08*t,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),o.connect(a),a.connect(this.master),o.start(n),o.stop(n+.32)}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=(d,g)=>d.setTargetAtTime(g,r,.08);if(s||t.crashed){for(let d of[this.roar,this.hiss,this.wind,this.rumble,this.fan,this.fan2,this.whine,this.warn])o(d.g.gain,0);return}let a=(t.n1[0]+t.n1[1]+t.n1[2]+t.n1[3])/400,l=e?.45:1,c=Math.pow(a,2.2);o(this.roar.g.gain,l*(.05+.75*c)),o(this.roar.fl.frequency,(e?160:260)+900*a),o(this.hiss.g.gain,l*.1*c*(e?.4:1)),o(this.fan.g.gain,l*(.03+.05*a)),o(this.fan.o.frequency,34+105*a),o(this.fan2.g.gain,l*(.03+.05*a)),o(this.fan2.o.frequency,34.6+106.5*a),o(this.whine.g.gain,l*.018*(.3+a)),o(this.whine.o.frequency,420+2400*a);let h=t.ias/(130*se);o(this.wind.g.gain,Math.min(.5,(e?.16:.1)*h*h+.12*t.sb*h*h+.05*t.gearPos*h*h)),o(this.wind.fl.frequency,500+500*Math.min(2,h)),o(this.rumble.g.gain,t.wow?Math.min(.9,t.gs/70)*(e?.9:.5)*(1+t.rough):0),this.beepT+=n;let u=0,f=900;t.stallWarn?(u=this.beepT%.12<.06?1:0,f=420):t.overspeed?(u=this.beepT%.18<.09?1:0,f=1400):t.cfgWarn||t.gearWarn?(u=this.beepT%1<.5?1:0,f=760):t.apDiscT>0&&(u=this.beepT%.3<.15?1:0,f=1100),o(this.warn.o.frequency,f),this.warn.g.gain.setTargetAtTime(u*.07,r,.005)}};var Lv=new Ye,dd=new P(1,0,0);function vo(i,t){Math.abs(t-i.ang)<1e-4||(i.ang=t,i.piv.quaternion.copy(i.q0).multiply(Lv.setFromAxisAngle(dd,t)))}function qh(i,t){i.updateMatrixWorld(!0);let e=new $e,n=new $e,s=new Ot().copy(i.matrixWorld).invert();i.traverse(h=>{h.isMesh&&(h.geometry.computeBoundingBox(),n.copy(h.geometry.boundingBox).applyMatrix4(new Ot().multiplyMatrices(s,h.matrixWorld)),e.union(n))});let r=e.getCenter(new P),o=new Ot().copy(t.matrixWorld).invert().multiply(i.matrixWorld),a=new $t().setFromMatrix4(o),l=r.clone().applyMatrix3(a),c=r.clone().applyAxisAngle(dd,.1).applyMatrix3(a);return{piv:i,q0:i.quaternion.clone(),down:c.y<l.y?1:-1,right:c.z<l.z?1:-1,ang:0}}function Dv(i){let t=new hn({color:662098,metalness:.55,roughness:.22,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6,side:Ge,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return t.name=i.name,t.onBeforeCompile=e=>{e.uniforms.uSolInv=pd.inv,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uSolInv; varying vec3 vSolP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSolP = (uSolInv * modelMatrix * vec4(position, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSolP;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 sp = vSolP.xz;
        vec2 gp = sp / vec2(0.80, 1.60);                      // panel modules
        vec2 gc = sp / vec2(0.16, 0.16);                      // individual cells
        vec2 fwp = fwidth(gp), fwc = fwidth(gc);
        vec2 lp = smoothstep(vec2(0.0), fwp * 1.5 + 0.03, abs(fract(gp) - 0.5) * -1.0 + 0.5);
        vec2 lc = smoothstep(vec2(0.0), fwc * 1.5 + 0.06, abs(fract(gc) - 0.5) * -1.0 + 0.5);
        float cellFade = clamp(1.0 - max(fwc.x, fwc.y) * 1.6, 0.0, 1.0);
        float cells = mix(1.0, min(lc.x, lc.y), 0.55 * cellFade);
        float mod_ = min(lp.x, lp.y);
        float h = fract(sin(dot(floor(gp), vec2(12.9898, 78.233))) * 43758.5453);
        vec3 cellCol = mix(vec3(0.020, 0.050, 0.200), vec3(0.050, 0.110, 0.330), h);
        diffuseColor.rgb = mix(vec3(0.62, 0.66, 0.72), cellCol * (0.55 + 0.45 * cells), mod_);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.45, roughnessFactor, mod_);`)},t}var pd={inv:{value:new Ot}};function md(i,t,e){t.updateMatrixWorld(!0),e.model=t;let n=e.surf={},s=h=>i.getObjectByName(h),r=Dv({name:"M_Ext_SolarCell"}),o=new Map;i.traverse(h=>{if(!h.isMesh)return;let u=h.material.name||"";if(/SolarCell/.test(u)){h.material=r;return}o.has(h.material)||(o.set(h.material,1),u==="M_Ext_Tire"&&(h.material.color.set(723724),h.material.roughness=.92,h.material.metalness=0),(u==="M_Ext_GearBay"||u==="M_Ext_Well")&&(h.material.envMapIntensity=.25),u==="M_Ext_Chrome"&&(h.material.envMapIntensity=1.4),/DoorInner|M_Ext_Wing|M_Ext_Navy|M_Ext_Paint/.test(u)&&/^(Door_|CS_|Gear_Main)/.test(h.parent?.name||h.name)&&(h.material.side=Ge))});for(let h of["R","L"]){let u=(f,d)=>{let g=s(d);g&&(n[f+h]=qh(g,t))};u("flapIn","CS_FlapIn_"+h),u("flapOut","CS_FlapOut_"+h),u("ail","CS_Aileron_"+h),u("elev","CS_Elevator_"+h);for(let f=0;f<4;f++)u("spl"+f,"CS_Spoiler"+(f+1)+"_"+h)}let a=s("CS_Rudder");a&&(n.rud=qh(a,t));let l=e.gear={legs:[],doors:{},bogies:[],wheels:[],tilt:0,spin:0,roll:0},c=(h,u,f)=>{let d=s(h);d&&l.legs.push({p:d,ax:u,ang:f})};c("Gear_Main_R","x",-90*tt),c("Gear_Main_L","x",90*tt),c("Gear_Nose","z",-110*tt);for(let h of["Gear_Main_R_Bogie","Gear_Main_L_Bogie"]){let u=s(h);u&&l.bogies.push(u)}l.steer=s("Gear_Nose_Steer"),i.traverse(h=>{/^Wheel_/.test(h.name)&&l.wheels.push({o:h,r:/^Wheel_N/.test(h.name)?.56:.62})});for(let[h,u,f]of[["main",["Door_Main_R","Door_Main_L"],95],["noseF",["Door_Nose_Fwd_R","Door_Nose_Fwd_L"],88],["noseA",["Door_Nose_Aft_R","Door_Nose_Aft_L"],88]])l.doors[h]={ang:f*tt,h:u.map(s).filter(Boolean).map(d=>qh(d,t))}}var Jn={da:0,de:0,dr:0},Xa=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i));function Nv(i){return{leg:Xa((i-.14)/.74),door:Xa(Math.min((1-i)/.12,i/.14)),aft:Xa(i/.12)}}function gd(i,t,e){let n=i.surf;if(!n)return;pd.inv.value.copy(i.model.matrixWorld).invert();let s=i.gear,r=Nv(t.gearPos),o=t.gearPos<.004;for(let f of s.legs)f.p.rotation[f.ax]=f.ang*(1-r.leg);for(let f of s.doors.main.h)vo(f,f.down*s.doors.main.ang*r.door);for(let f of s.doors.noseF.h)vo(f,f.down*s.doors.noseF.ang*r.door);for(let f of s.doors.noseA.h)vo(f,f.down*s.doors.noseA.ang*r.aft);if(!o){let f=t.wow?0:.2*Xa((r.leg-.75)/.25);s.tilt+=(f-s.tilt)*Math.min(1,e*3);for(let d of s.bogies)d.rotation.z=-s.tilt;s.spin=t.wow?t.gs:s.spin*Math.exp(-e*.35),s.roll+=s.spin*e;for(let d of s.wheels)d.o.rotation.z=-s.roll/d.r;s.steer&&(s.steer.rotation.y=(t.wow?-Jn.dr*.55*Math.max(.15,1-t.gs/40):0)*r.leg)}let a=Math.min(1,e*14);Jn.da+=(t.da-Jn.da)*a,Jn.de+=(t.de-Jn.de)*a,Jn.dr+=(t.dr-Jn.dr)*a;let l=Math.min(5,Math.floor(t.flapPos)),c=t.flapPos-l,h=(kt.flapDeg[l]+(kt.flapDeg[Math.min(6,l+1)]-kt.flapDeg[l])*c)*tt*1.15,u=(f,d)=>{let g=n[f];g&&vo(g,g.down*d)};for(let f of["R","L"]){let d=f==="R"?1:-1;u("flapIn"+f,h),u("flapOut"+f,h*.95),u("ail"+f,-d*Jn.da*.9+(h>.2?.08:0)),u("elev"+f,-Jn.de);let g=Math.max(0,d*Jn.da)*.9*(t.wow?0:1);for(let x=0;x<4;x++)u("spl"+x+f,-(t.sb*(t.wow?.85:.6)+g*(x>0?1:0)))}n.rud&&vo(n.rud,n.rud.right*Jn.dr*.9)}var Qt="#39e06b",Un="#ff5cf4",Ke="#3fd8ff",Ie="#ffb224",Fn="#ff3b30",Kt="#f2f4f7",Yh="#8b949e",Uv=(i,t=!0)=>`${t?"600 ":""}${i}px "Consolas","DejaVu Sans Mono","Menlo",monospace`,Tn=(i,t,e)=>Math.min(e,Math.max(t,i)),Lr=i=>String(Math.round((i%360+360)%360)||360).padStart(3,"0");function cs(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function wt(i,t,e,n,s=Kt,r=18,o="center"){i.font=Uv(r),i.fillStyle=s,i.textAlign=o,i.textBaseline="middle",i.fillText(t,e,n)}function xd(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);let s=t.ias/se,r=t.alt/Ce,o=t.vs*196.85,a=(t.psi*Ee%360+360)%360,l=t.ap,c=236,h=262,u=124,f=132,d=5.2;e.save(),e.beginPath(),e.roundRect(c-u,h-f,u*2,f*2,26),e.clip(),e.translate(c,h),e.rotate(-t.phi),e.translate(0,t.theta*Ee*d),e.fillStyle="#2b83d6",e.fillRect(-600,-900,1200,900),e.fillStyle="#7b4d22",e.fillRect(-600,0,1200,900),e.strokeStyle=Kt,e.lineWidth=2,e.beginPath(),e.moveTo(-600,0),e.lineTo(600,0),e.stroke();for(let K=-90;K<=90;K+=2.5){if(K===0)continue;let lt=-K*d,Tt=K%10===0?44:K%5===0?22:10;e.beginPath(),e.moveTo(-Tt,lt),e.lineTo(Tt,lt),e.stroke(),K%10===0&&(wt(e,Math.abs(K),-Tt-16,lt,Kt,15),wt(e,Math.abs(K),Tt+16,lt,Kt,15))}e.restore(),e.save(),e.translate(c,h),e.strokeStyle=Kt,e.lineWidth=2;for(let K of[-60,-45,-30,-20,-10,10,20,30,45,60]){let lt=(K-90)*tt,Tt=f-4,Wt=Tt-(Math.abs(K)===30||Math.abs(K)===60?14:8);e.beginPath(),e.moveTo(Math.cos(lt)*Tt,Math.sin(lt)*Tt),e.lineTo(Math.cos(lt)*Wt,Math.sin(lt)*Wt),e.stroke()}e.fillStyle=Kt,e.beginPath(),e.moveTo(0,-f+4),e.lineTo(-8,-f-8),e.lineTo(8,-f-8),e.fill(),e.rotate(-t.phi);let g=Math.abs(t.phi)>35*tt;e.fillStyle=g?Ie:Kt,e.beginPath(),e.moveTo(0,-f+6),e.lineTo(-9,-f+22),e.lineTo(9,-f+22),e.closePath(),e.fill();let x=Tn(-t.beta*Ee*3,-18,18);e.fillRect(-11+x,-f+25,22,5),e.restore(),e.fillStyle="#111",e.strokeStyle="#ffe94a",e.lineWidth=3;for(let K of[-1,1])e.beginPath(),e.rect(c+K*34-(K<0?46:0),h-4,46,8),e.fill(),e.stroke(),e.beginPath(),e.rect(c+K*34-(K<0?0:8),h-4,8,20),e.fill(),e.stroke();if(e.beginPath(),e.rect(c-4,h-4,8,8),e.fill(),e.stroke(),t.tas>30&&!t.wow){let K=Math.atan2(t.vs,Math.max(t.gs,1))*Ee,Tt=Tn((t.track-t.psi)*Ee,-20,20)*d,Wt=-(K-t.theta*Ee)*d,Dt=Math.cos(-t.phi),ne=Math.sin(-t.phi),L=c+Tt*Dt-Wt*ne,ie=h+Tt*ne+Wt*Dt;Math.abs(L-c)<u-10&&Math.abs(ie-h)<f-10&&(e.strokeStyle=Qt,e.lineWidth=2,e.beginPath(),e.arc(L,ie,7,0,7),e.moveTo(L-7,ie),e.lineTo(L-20,ie),e.moveTo(L+7,ie),e.lineTo(L+20,ie),e.moveTo(L,ie-7),e.lineTo(L,ie-15),e.stroke())}let m=(t.agl-5.1)/Ce;m<2500&&wt(e,Math.max(0,m<50?Math.round(m):Math.round(m/10)*10),c,h+f-16,m<400?Ie:Qt,22),t.stallWarn?(e.fillStyle=Fn,e.fillRect(c-48,h-80,96,28),wt(e,"STALL",c,h-66,"#fff",20)):t.gpwsPull&&(e.fillStyle=Fn,e.fillRect(c-56,h-80,112,28),wt(e,"PULL UP",c,h-66,"#fff",20));let p=t.ils;if(p&&p.valid&&l.rw){e.strokeStyle=Kt,e.lineWidth=1.5;for(let Wt of[-2,-1,1,2])e.beginPath(),e.arc(c+Wt*38,h+f+14,4,0,7),e.stroke(),e.beginPath(),e.arc(c+u+14,h+Wt*38,4,0,7),e.stroke();e.beginPath(),e.moveTo(c,h+f+5),e.lineTo(c,h+f+23),e.moveTo(c+u+5,h),e.lineTo(c+u+23,h),e.stroke();let K=Tn(-p.loc/.8,-2.4,2.4)*38,lt=Tn(p.gs/.35,-2.4,2.4)*38,Tt=(Wt,Dt,ne)=>{e.beginPath(),e.moveTo(Wt-9,Dt),e.lineTo(Wt,Dt-6),e.lineTo(Wt+9,Dt),e.lineTo(Wt,Dt+6),e.closePath(),e.strokeStyle=Un,e.lineWidth=2,e.stroke(),ne&&(e.fillStyle=Un,e.fill())};Tt(c+K,h+f+14,Math.abs(p.loc)<1.9),e.save(),e.translate(c+u+14,h+lt),e.rotate(Math.PI/2),Tt(0,0,Math.abs(p.gs)<.8),e.restore(),wt(e,`ILS ${l.rw.id}`,46,426,Un,14,"left"),wt(e,`${Lr(l.rw.crs)}\xB0  ${(p.dAim/1852).toFixed(1)} NM`,46,444,Un,14,"left")}let y=34,v=62,_=h-130,R=260,T=2.4;e.fillStyle="#39414c",e.fillRect(y,_,v,R),e.save(),e.beginPath(),e.rect(y-4,_,v+26,R),e.clip(),e.strokeStyle=Kt,e.lineWidth=2;let A=Math.floor((s-60)/10)*10;for(let K=Math.max(30,A);K<s+60;K+=10){let lt=h-(K-s)*T;e.beginPath(),e.moveTo(y+v-12,lt),e.lineTo(y+v,lt),e.stroke(),K%20===0&&wt(e,K,y+v-16,lt,Kt,17,"right")}let C=t.vstall/se*Math.sqrt(Math.max(.5,t.nzSm||1)),w=t.vmaxKt,S=h-(C-s)*T,I=h-(C*1.13-s)*T,z=h-(w-s)*T;if(!t.wow){e.fillStyle=Ie,e.fillRect(y+v,I,5,S-I),e.fillStyle=Fn;for(let K=S;K<_+R+8;K+=8)e.fillRect(y+v,K,8,5)}e.fillStyle=Fn;for(let K=z;K>_-8;K-=8)e.fillRect(y+v,K-5,8,5);if(l.athr||l.on){let K=Tn(h-(l.spd-s)*T,_+2,_+R-2);e.fillStyle=Un,e.beginPath(),e.moveTo(y+v,K),e.lineTo(y+v+12,K-8),e.lineTo(y+v+12,K+8),e.fill()}let B=Tn(t.acc/se*10,-50,50);Math.abs(B)>2&&(e.strokeStyle=Qt,e.lineWidth=3,e.beginPath(),e.moveTo(y+v+16,h),e.lineTo(y+v+16,h-B*T),e.stroke(),e.beginPath(),e.moveTo(y+v+11,h-B*T+Math.sign(B)*7),e.lineTo(y+v+16,h-B*T),e.lineTo(y+v+21,h-B*T+Math.sign(B)*7),e.stroke()),e.restore(),e.fillStyle="#000",e.strokeStyle=Kt,e.lineWidth=2,e.beginPath(),e.rect(y-6,h-18,v-4,36),e.fill(),e.stroke(),wt(e,Math.round(s<30?0:s),y+v-16,h,s>w?Fn:!t.wow&&s<C*1.05?Ie:Kt,24,"right"),wt(e,l.athr||l.on?l.spd:"---",y+v/2,_-14,Un,18),t.mach>.4?wt(e,"M "+t.mach.toFixed(3).slice(1),y+v/2,_+R+14,Qt,16):wt(e,"GS "+Math.round(t.gs/se),y+v/2,_+R+14,Qt,16);let H=392,J=72,W=.2;e.fillStyle="#39414c",e.fillRect(H,_,J,R),e.save(),e.beginPath(),e.rect(H-14,_,J+18,R),e.clip(),e.strokeStyle=Kt,e.lineWidth=2;let rt=Math.floor((r-700)/100)*100;for(let K=rt;K<r+700;K+=100){let lt=h-(K-r)*W;e.beginPath(),e.moveTo(H,lt),e.lineTo(H+10,lt),e.stroke(),K%200===0&&wt(e,K,H+J-4,lt,Kt,15,"right")}let O=h-(t.elev/Ce+17-r)*W;e.fillStyle="#a0652a",O<_+R&&e.fillRect(H,O,J,_+R-O);{let K=Tn(h-(l.alt-r)*W,_+2,_+R-2);e.strokeStyle=Un,e.lineWidth=3,e.beginPath(),e.moveTo(H-10,K-12),e.lineTo(H-10,K+12),e.lineTo(H+2,K+12),e.lineTo(H-6,K),e.lineTo(H+2,K-12),e.closePath(),e.stroke()}e.restore(),e.fillStyle="#000",e.strokeStyle=Kt,e.lineWidth=2,e.beginPath(),e.rect(H+4,h-18,J+6,36),e.fill(),e.stroke();let Q=Math.round(r/20)*20;wt(e,Q,H+J+6,h,Kt,22,"right"),wt(e,l.alt,H+J/2+4,_-14,Un,18),wt(e,"STD",H+J/2+4,_+R+14,Qt,16);let it=480;e.fillStyle="#39414c",e.beginPath(),e.moveTo(it,_+30),e.lineTo(it+14,_+30),e.lineTo(it+28,_+70),e.lineTo(it+28,_+R-70),e.lineTo(it+14,_+R-30),e.lineTo(it,_+R-30),e.fill();let _t=K=>{let lt=Math.abs(K),Tt=lt<1e3?lt/1e3*44:lt<2e3?44+(lt-1e3)/1e3*26:70+Tn((lt-2e3)/4e3,0,1)*26;return h-Math.sign(K)*Tt};e.strokeStyle=Kt,e.lineWidth=1.5;for(let K of[-6e3,-2e3,-1e3,-500,500,1e3,2e3,6e3]){let lt=_t(K);e.beginPath(),e.moveTo(it+2,lt),e.lineTo(it+9,lt),e.stroke()}e.strokeStyle=Kt,e.lineWidth=3,e.beginPath(),e.moveTo(it+30,h),e.lineTo(it+4,_t(o)),e.stroke(),Math.abs(o)>150&&wt(e,Math.round(Math.abs(o)/50)*50,it+30,o>0?_+14:_+R-14,o<-2500?Ie:Kt,15,"right");let Mt=468,Ct=3.4;e.fillStyle="#39414c",e.fillRect(c-124,Mt-14,248,44),e.save(),e.beginPath(),e.rect(c-124,Mt-16,248,48),e.clip(),e.strokeStyle=Kt,e.lineWidth=2;for(let K=Math.floor(a-40);K<=a+40;K++){if(K%5!==0)continue;let lt=c+(K-a)*Ct;e.beginPath(),e.moveTo(lt,Mt-14),e.lineTo(lt,Mt-(K%10===0?2:7)),e.stroke(),K%10===0&&wt(e,String(Math.round((K%360+360)%360/10)||36).padStart(2,"0"),lt,Mt+12,Kt,16)}let X=(l.hdg-a+540)%360-180;{let K=Tn(c+X*Ct,c-120,c+120);e.strokeStyle=Un,e.lineWidth=3,e.strokeRect(K-8,Mt-16,16,9)}let nt=Tn((t.track-t.psi)*Ee,-30,30);e.strokeStyle=Qt,e.lineWidth=2,e.beginPath();let dt=c+nt*Ct;e.moveTo(dt,Mt-12),e.lineTo(dt-6,Mt-4),e.lineTo(dt,Mt+2),e.lineTo(dt+6,Mt-4),e.closePath(),e.stroke(),e.restore(),e.fillStyle="#ffe94a",e.fillRect(c-1.5,Mt-22,3,14),wt(e,Lr(a)+"\xB0",c+150,Mt+6,Qt,18),e.strokeStyle="#586270",e.lineWidth=1.5;for(let K of[128,256,384])e.beginPath(),e.moveTo(K,6),e.lineTo(K,62),e.stroke();let ht=l.athr?"SPEED":t.rev>.5?"REV":t.thr>.97?"TOGA":"MAN THR";wt(e,ht,64,22,l.athr?Qt:Kt,19),wt(e,l.on?l.lat==="LOC"?"LOC":"HDG":"",192,22,Qt,19),wt(e,l.on?l.ver==="FLARE"?"FLARE":l.ver==="GS"?"G/S":Math.abs(l.alt*Ce-t.alt)<60?"ALT":l.alt*Ce>t.alt?"CLB":"DES":"",320,22,Qt,19),l.app&&l.lat!=="LOC"&&wt(e,"LOC",192,46,Ke,16),l.app&&l.ver==="ALT"&&wt(e,"G/S",320,46,Ke,16),wt(e,l.on?"AP1":"",448,18,Kt,18),wt(e,l.athr?"A/THR":"",448,38,Kt,15),wt(e,t.law==="normal"?t.fbw>.5?"NORMAL LAW":"GROUND LAW":"DIRECT LAW",448,56,t.law==="normal"?Qt:Ie,12),t.aProt&&!t.wow&&wt(e,"\u03B1 PROT",64,46,Ie,16)}function _d(i,t,e){let n=i.getContext("2d"),s=512;n.fillStyle="#05070a",n.fillRect(0,0,s,s);let r=256,o=420,a=330,l=t.psi*Ee,c=a/(e*1852);n.save(),n.translate(r,o),n.strokeStyle="#5b6470",n.lineWidth=1.5,n.setLineDash([6,8]);for(let p of[.25,.5,.75])n.beginPath(),n.arc(0,0,a*p,-Math.PI*.95,-Math.PI*.05),n.stroke();n.setLineDash([]),wt(n,e/2,-a*.5*.72,-a*.5*.72+4,Ke,14),n.save(),n.rotate(-t.psi),n.strokeStyle=Kt,n.lineWidth=2,n.beginPath(),n.arc(0,0,a,0,7),n.stroke();for(let p=0;p<360;p+=5)n.save(),n.rotate(p*tt),n.beginPath(),n.moveTo(0,-a),n.lineTo(0,-a+(p%10===0?14:7)),n.stroke(),p%30===0&&wt(n,p/10||36,0,-a+28,Kt,17),n.restore();n.save(),n.rotate(t.ap.hdg*tt),n.strokeStyle=Un,n.lineWidth=3,n.strokeRect(-9,-a-9,18,9),t.ap.on&&t.ap.lat==="HDG"&&(n.setLineDash([8,8]),n.lineWidth=1.5,n.beginPath(),n.moveTo(0,0),n.lineTo(0,-a),n.stroke()),n.restore();let h=(p,y)=>[(y-t.pos[1])*c,-(p-t.pos[0])*c];for(let p of un){let y=p.hdg*tt,v=Math.cos(y)*p.len/2,_=Math.sin(y)*p.len/2,R=h(p.n-v,p.e-_),T=h(p.n+v,p.e+_),A=h(p.n,p.e);n.strokeStyle="#7e8794",n.lineWidth=1.2,n.setLineDash([10,8]);let C=15*1852*c;n.beginPath(),n.moveTo(R[0]-Math.sin(y)*C,R[1]+Math.cos(y)*C),n.lineTo(R[0],R[1]),n.moveTo(T[0],T[1]),n.lineTo(T[0]+Math.sin(y)*C,T[1]-Math.cos(y)*C),n.stroke(),n.setLineDash([]),n.strokeStyle=Kt,n.lineWidth=Math.max(3,60*c),n.beginPath(),n.moveTo(R[0],R[1]),n.lineTo(T[0],T[1]),n.stroke(),n.strokeStyle=Ke,n.lineWidth=2,n.beginPath(),n.arc(A[0],A[1],9,0,7),n.stroke(),n.save(),n.translate(A[0]+14,A[1]-14),n.rotate(t.psi),wt(n,p.id,0,0,Ke,15,"left"),n.restore()}if(t.ap.rw&&t.ap.app){let p=t.ap.rw,y=h(p.thrN,p.thrE);n.strokeStyle=Un,n.lineWidth=2,n.beginPath(),n.arc(y[0],y[1],6,0,7),n.stroke()}n.restore(),n.save(),n.rotate(t.track-t.psi),n.strokeStyle=Qt,n.lineWidth=2,n.beginPath(),n.moveTo(0,-30),n.lineTo(0,-a),n.stroke(),n.restore(),n.strokeStyle="#ffe94a",n.lineWidth=3,n.beginPath(),n.moveTo(0,-16),n.lineTo(0,18),n.moveTo(-18,0),n.lineTo(18,0),n.moveTo(-8,14),n.lineTo(8,14),n.stroke(),n.fillStyle="#ffe94a",n.beginPath(),n.moveTo(0,-a+1),n.lineTo(-7,-a-11),n.lineTo(7,-a-11),n.fill(),n.restore(),n.fillStyle="#05070a",n.fillRect(0,0,s,54),wt(n,"GS "+Math.round(t.gs/se),12,16,Qt,17,"left"),wt(n,"TAS "+Math.round(t.tas/se),108,16,Qt,17,"left");let u=t.wind.dir,f=Math.hypot(t.windW[0],t.windW[1])/se;wt(n,Lr(u)+"\xB0 / "+Math.round(f),12,38,Qt,16,"left"),f>1&&(n.save(),n.translate(128,38),n.rotate((u+180)*tt-t.psi),n.strokeStyle=Qt,n.lineWidth=2,n.beginPath(),n.moveTo(0,10),n.lineTo(0,-10),n.lineTo(-5,-3),n.moveTo(0,-10),n.lineTo(5,-3),n.stroke(),n.restore()),wt(n,"HDG",228,16,Kt,14),n.strokeStyle=Kt,n.lineWidth=2,n.strokeRect(250,4,58,26),wt(n,Lr(l),279,18,Kt,20),wt(n,"MAG",330,16,Qt,14);let d=t.ap.rw?t.ap.rw.ap:null,g=1e12;if(!d)for(let p of un){let y=Math.hypot(p.n-t.pos[0],p.e-t.pos[1]);y<g&&(g=y,d=p)}let x=Math.hypot(d.n-t.pos[0],d.e-t.pos[1]),m=Math.atan2(d.e-t.pos[1],d.n-t.pos[0])*Ee;wt(n,d.id,500,14,Kt,17,"right"),wt(n,Lr(m)+"\xB0  "+(x/1852).toFixed(1)+" NM",500,36,Kt,16,"right"),wt(n,e+" NM",12,498,Ke,15,"left")}function vd(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);for(let c=0;c<4;c++){let h=68+c*98,u=86,f=40,d=t.n1[c],g=Math.PI*.75,x=g+Math.PI*1.35;e.lineWidth=3,e.strokeStyle=Kt,e.beginPath(),e.arc(h,u,f,g,g+(x-g)*.96),e.stroke(),e.strokeStyle=Fn,e.beginPath(),e.arc(h,u,f,g+(x-g)*.96,x+.12),e.stroke();let m=g+(x-g)*Tn(d/104,0,1.03);e.fillStyle="rgba(120,130,140,0.35)",e.beginPath(),e.moveTo(h,u),e.arc(h,u,f-2,g,m),e.fill(),e.strokeStyle=t.engOn[c]?Kt:Ie,e.lineWidth=3,e.beginPath(),e.moveTo(h,u),e.lineTo(h+Math.cos(m)*f,u+Math.sin(m)*f),e.stroke();let p=g+(x-g)*Tn((22+78*t.thr)/104,0,1);e.strokeStyle=Ke,e.lineWidth=2,e.beginPath(),e.moveTo(h+Math.cos(p)*(f+2),u+Math.sin(p)*(f+2)),e.lineTo(h+Math.cos(p)*(f+9),u+Math.sin(p)*(f+9)),e.stroke(),e.strokeStyle=Kt,e.lineWidth=1.5,e.strokeRect(h-4,u-34,50,24),wt(e,d.toFixed(1),h+43,u-21,t.engOn[c]?Qt:Ie,17,"right"),t.rev>.05&&wt(e,"REV",h,u+22,t.rev>.9?Qt:Ie,16),wt(e,Math.round(Math.abs(t.thrust[c])/1e3),h,u+54,Qt,15)}wt(e,"N1 %",256,16,Ke,15),wt(e,"THRUST kN",256,158,Ke,13),e.strokeStyle="#586270",e.lineWidth=1.5,e.beginPath(),e.moveTo(10,172),e.lineTo(502,172),e.moveTo(256,172),e.lineTo(256,372),e.moveTo(10,372),e.lineTo(502,372),e.stroke();let s=(c,h,u,f=Qt,d="")=>{wt(e,c,20,u,Ke,15,"left"),wt(e,h,200,u,f,18,"right"),d&&wt(e,d,206,u,Ke,12,"left")};s("FUEL",(t.fuel/1e3).toFixed(1),194,t.fuel<6e3?Ie:Qt,"t"),s("FF",(t.ff*3.6).toFixed(1),220,Qt,"t/h"),s("GW",(t.mass()/1e3).toFixed(1),246,Qt,"t"),s("TAT",(t.at.T-273.15+t.mach*t.mach*.2*t.at.T).toFixed(0),272,Qt,"\xB0C"),s("G LOAD",(t.nzSm??1).toFixed(2),298,Math.abs((t.nzSm??1)-1)>1?Ie:Qt,"g"),s("AOA",(t.alpha*Ee).toFixed(1),324,t.aProt?Ie:Qt,"\xB0"),s("TRIM",(t.trimI*Ee).toFixed(1),350,Qt,"\xB0");let r=276;wt(e,"FLAPS",r,194,Ke,15,"left"),e.strokeStyle=Kt,e.lineWidth=1.5,e.strokeRect(r+62,186,110,14),e.fillStyle=Math.abs(t.flapPos-t.flapSel)>.02?Un:Qt,e.fillRect(r+62,186,110*t.flapPos/6,14),wt(e,kt.flapDeg[t.flapSel],r+214,194,Qt,18,"right"),wt(e,"SPD BRK",r,222,Ke,15,"left"),e.strokeRect(r+82,214,90,14),e.fillStyle=t.sb>.02?Ie:Qt,e.fillRect(r+82,214,90*t.sb,14),t.gndSpoiler&&wt(e,"GND",r+214,222,Qt,14,"right"),wt(e,"GEAR",r,262,Ke,15,"left");let o=t.gearPos;[[r+128,246],[r+92,276],[r+164,276]].forEach(([c,h])=>{if(o>.99)e.fillStyle=Qt,e.fillRect(c-15,h-11,30,22),wt(e,"DN",c,h,"#000",14);else if(o>.01){e.strokeStyle=Ie,e.lineWidth=2,e.strokeRect(c-15,h-11,30,22);for(let u=-10;u<14;u+=7)e.beginPath(),e.moveTo(c+u,h+10),e.lineTo(c+u+8,h-10),e.stroke()}else e.strokeStyle="#586270",e.lineWidth=1.5,e.strokeRect(c-15,h-11,30,22),wt(e,"UP",c,h,Yh,13)}),wt(e,"BRAKES",r,312,Ke,15,"left"),wt(e,t.park?"PARK":t.ctl.brake>.05?"ON":"OFF",r+214,312,t.park?Ie:Qt,17,"right"),wt(e,"CTL",r,344,Ke,15,"left");let a=(c,h,u)=>{e.strokeStyle="#586270",e.strokeRect(c,334,44,10),e.fillStyle=Qt,e.fillRect(c+22+Tn(h,-1,1)*20-2,332,4,14),wt(e,u,c+22,358,Yh,11)};a(r+42,t.da/(25*tt),"AIL"),a(r+100,-t.de/(25*tt),"ELEV"),a(r+158,t.dr/(30*tt),"RUD");let l=[];t.crashed&&l.push([Fn,"CRASH"]),t.stallWarn&&l.push([Fn,"STALL"]),t.overspeed&&l.push([Fn,"OVERSPEED"]),t.gpwsPull&&l.push([Fn,"TERRAIN  PULL UP"]),t.cfgWarn&&l.push([Fn,"CONFIG "+t.cfgWarn]),t.gearWarn&&l.push([Fn,"GEAR NOT DOWN"]),t.strike&&l.push([Ie,"GROUND CONTACT"]),t.fuel<6e3&&l.push([Ie,"FUEL LO"]),t.engOn[0]||l.push([Ie,"ENG 1-4 FLAME OUT"]),t.law!=="normal"&&l.push([Ie,"F/CTL DIRECT LAW"]),t.park&&t.thr>.3&&l.push([Ie,"PARK BRK ON"]),t.park&&l.push([Kt,"PARK BRK"]),t.sbSel>0&&!t.wow&&l.push([Kt,"SPEEDBRAKE EXT"]),t.ap.app&&l.push([Kt,"APPR ARMED "+t.ap.rw.id]),l.slice(0,6).forEach(([c,h],u)=>wt(e,h,20,392+u*21,c,17,"left"))}function yd(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n),wt(e,"SOLARIS  \u2014  FLIGHT DATA",256,22,Ke,18),[["POSITION",`N ${(t.pos[0]/1852).toFixed(1)}  E ${(t.pos[1]/1852).toFixed(1)} NM`],["ALTITUDE",`${Math.round(t.alt/Ce)} ft   RA ${Math.max(0,Math.round((t.agl-5.1)/Ce))} ft`],["IAS / TAS / GS",`${Math.round(t.ias/se)} / ${Math.round(t.tas/se)} / ${Math.round(t.gs/se)} kt`],["MACH",t.mach.toFixed(3)],["V/S",`${Math.round(t.vs*196.85)} fpm`],["PITCH / BANK",`${(t.theta*Ee).toFixed(1)}\xB0 / ${(t.phi*Ee).toFixed(1)}\xB0`],["WIND",`${Lr(t.wind.dir)}\xB0 / ${Math.round(t.wind.spd/se)} kt`],["OAT",`${(t.at.T-273.15).toFixed(0)} \xB0C`],["VS1G / VREF",`${Math.round(t.vstall/se)} / ${Math.round(t.vstall/se*1.23)} kt`],["VMAX",`${Math.round(t.vmaxKt)} kt`],["RANGE (EST)",`${Math.round(t.fuel/Math.max(t.ff,.2)*t.gs/1852)} NM`],["LAST LANDING",t.touchdown?`${-t.touchdown.fpm} fpm  ${t.touchdown.g.toFixed(2)} g  ${t.touchdown.kt} kt`:"\u2014"]].forEach(([r,o],a)=>{wt(e,r,24,66+a*34,Yh,16,"left"),wt(e,o,490,66+a*34,Qt,18,"right")})}function Md(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#000",e.fillRect(0,0,n,n),e.save(),e.translate(128,128),e.rotate(-t.phi),e.translate(0,t.theta*Ee*3),e.fillStyle="#2b83d6",e.fillRect(-400,-600,800,600),e.fillStyle="#7b4d22",e.fillRect(-400,0,800,600),e.strokeStyle=Kt,e.lineWidth=2;for(let s=-30;s<=30;s+=10)e.beginPath(),e.moveTo(-24,-s*3),e.lineTo(24,-s*3),e.stroke();e.restore(),e.strokeStyle="#ffe94a",e.lineWidth=4,e.beginPath(),e.moveTo(88,128),e.lineTo(112,128),e.moveTo(144,128),e.lineTo(168,128),e.stroke(),e.fillStyle="rgba(0,0,0,.65)",e.fillRect(0,108,58,40),e.fillRect(186,108,70,40),wt(e,Math.round(t.ias/se),52,128,Kt,22,"right"),wt(e,Math.round(t.alt/Ce/10)*10,252,128,Kt,20,"right")}function Sd(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#031006",e.fillRect(0,0,n,n),["  SOLARIS  IDENT","","MODEL        ENGINES","767B         4xH2/ABEP","","UTC  "+new Date().toISOString().slice(11,19),"FOB  "+(t.fuel/1e3).toFixed(1)+" T","GW   "+(t.mass()/1e3).toFixed(1)+" T","","DEST "+(t.ap.rw?t.ap.rw.id:"----")].forEach((o,a)=>wt(e,o,10,22+a*23,a===0?Kt:Qt,15,"left"))}var St=i=>document.getElementById(i),Xe=(i,t,e)=>Math.min(e,Math.max(t,i)),Ne=new ma({antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Ne.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ne.setSize(innerWidth,innerHeight);Ne.toneMapping=jc;Ne.toneMappingExposure=.5;Ne.shadowMap.enabled=!0;Ne.shadowMap.type=Zc;document.body.prepend(Ne.domElement);var we=new ro,ye=new Ue(60,innerWidth/innerHeight,.08,8e5);we.add(ye);var tu=new Fe;we.add(tu);var Ns=new Fe;Ns.matrixAutoUpdate=!1;we.add(Ns);var Us=new Fe;Us.position.set(-29,.5,0);Ns.add(Us);var ze=new mo;ze.scale.setScalar(45e4);we.add(ze);ze.material.uniforms.uSkyK={value:1};ze.material.uniforms.uTint={value:1};ze.material.uniforms.uHaze={value:new bt(0,0,0)};ze.material.fragmentShader.includes("gl_FragColor = vec4( retColor, 1.0 );")||console.warn("sky shader patch failed");ze.material.fragmentShader=ze.material.fragmentShader.replace("void main() {",`uniform float uSkyK; uniform float uTint; uniform vec3 uHaze;
void main() {`).replace("gl_FragColor = vec4( retColor, 1.0 );",`float upS = normalize( vWorldPosition - cameraPosition ).y;
 retColor *= mix( vec3( 1.0 ), vec3( 0.46, 0.68, 1.14 ), pow( clamp( upS, 0.0, 1.0 ), 0.5 ) * uTint );
 gl_FragColor = vec4( retColor * uSkyK, 1.0 );`).replace("#include <colorspace_fragment>",`#include <colorspace_fragment>
 gl_FragColor.rgb = mix( gl_FragColor.rgb, uHaze, exp( -max( upS, 0.0 ) * 13.0 ) * 0.8 * step( 0.001, uHaze.r + uHaze.g + uHaze.b ) );`);var Bn=new Er(16777215,3);Bn.castShadow=!0;Bn.shadow.mapSize.set(2048,2048);Object.assign(Bn.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:10,far:500});Bn.shadow.bias=-4e-4;Bn.shadow.normalBias=.08;we.add(Bn);we.add(Bn.target);var Pd=new Ca(12572927,5591103,.9);we.add(Pd);we.fog=new ga(13229295,2e-5);var Fv=new Sr(Ne),$h=new ro,qa=null,ai=fd(tu,we),jn={ray:1.9,fog:2e-5,col:new bt,night:0},Ov=new bt(.42,.6,.86),wo=[{name:"\u767D\u5929",el:48,az:140,exp:.5,sun:3.2,hemi:.9,fog:[.74,.83,.93],night:0},{name:"\u9EC3\u660F",el:5,az:262,exp:.62,sun:2.2,hemi:.55,fog:[.8,.62,.5],night:.5},{name:"\u591C\u665A",el:-14,az:262,exp:.9,sun:0,hemi:.1,fog:[.02,.03,.06],night:1}],Qa=[{name:"\u6674\u6717\u7121\u98A8",dir:0,spd:0,turb:0,fog:16e-6,clouds:.3},{name:"\u5C11\u96F2\u5FAE\u98A8",dir:320,spd:10,turb:.6,fog:22e-6,clouds:1},{name:"\u5F37\u5074\u98A8\u4E82\u6D41",dir:280,spd:24,turb:2.2,fog:3e-5,clouds:1},{name:"\u4F4E\u80FD\u898B\u5EA6",dir:20,spd:6,turb:.5,fog:3e-4,clouds:1}],us=0,fs=1,Ya=new P;function Nr(){let i=wo[us],t=Qa[fs],e=(90-i.el)*tt,n=-i.az*tt+Math.PI;Ya.set(Math.sin(i.az*tt)*Math.cos(i.el*tt),Math.sin(i.el*tt),-Math.cos(i.az*tt)*Math.cos(i.el*tt));let s=ze.material.uniforms;s.sunPosition.value.copy(Ya),s.turbidity.value=t.fog>1e-4?12:2.2,s.rayleigh.value=i.el<10?2.8:3.2,s.mieCoefficient.value=.004,s.mieDirectionalG.value=.8,Ne.toneMappingExposure=i.exp;let r=i.night===0?.42:i.night<1?.8:1;s.uSkyK.value=r,Bn.intensity=i.sun*(t.fog>1e-4?.45:1),Pd.intensity=i.hemi*(t.fog>1e-4?1.25:1),Bn.color.set(i.el<10?16756848:16774374);let o=t.fog>1e-4;we.fog.color.setRGB(o?i.night===1?.03:.72-.25*i.night:i.fog[0],o?i.night===1?.035:.74-.28*i.night:i.fog[1],o?i.night===1?.05:.77-.3*i.night:i.fog[2]),we.fog.density=t.fog,ze.visible=!o,we.background=o?we.fog.color:null,ai.setEnv({night:i.night,sunDir:Ya,cloudFrac:t.clouds,sunColor:new bt(i.el<10?16763296:16777215),lowvis:o}),jn.ray=s.rayleigh.value,jn.fog=t.fog,jn.col.copy(we.fog.color),jn.night=i.night,jn.lowvis=o,s.uTint.value=i.night===0?1:i.night<1?.45:0,s.uHaze.value.setRGB(0,0,0),$.wind.dir=t.dir,$.wind.spd=t.spd*se,$.wind.turb=t.turb,we.remove(ze),$h.add(ze),ze.visible=!0,qa&&qa.dispose(),qa=Fv.fromScene($h,0,1,5e5),we.environment=qa.texture,$h.remove(ze),we.add(ze),ze.visible=!o,we.environmentIntensity=(i.night===1?.25:.9)*(o?.6:1)/r,St("selTime").value=us,St("selWx").value=fs}var $=new Va,ke=new Wa,eu=cs(512,512),nu=cs(512,512),iu=cs(512,512),Id=cs(512,512),Ld=cs(256,256),Dd=cs(256,256),Di={};for(let[i,t]of Object.entries({PFD:eu,ND:nu,EICAS:iu,MFD:Id,STBY:Ld,CDU:Dd})){let e=new Ei(t);e.flipY=!1,e.colorSpace=Ae,e.anisotropy=8,Di[i]=e}St("instr").append(eu,nu,iu);var yo=20,Ui={gear:[],fans:[],cockpitGlass:[],doorsOpen:null,doorsClosed:null,lights:[]};function Bv(i){let t=St(i);if(!t)return null;let e=atob(t.textContent.trim()),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}async function bd(i,t){let e=new ka,n=Bv("glb-"+i);if(!n){let s=(window.__GLB_DIR??"models/")+i,r=(window.__GLB_PARTS||{})[i],o=r?Array.from({length:r},(f,d)=>`${s}.${d}.bin`):[s+(window.__GLB_EXT||".glb")],a=[],l=0,c=0;for(let f of o){let d=await fetch(f);if(!d.ok)throw new Error(f+" "+d.status);let g=+d.headers.get("content-length")||0,x=d.body.getReader(),m=0;for(;;){let{done:p,value:y}=await x.read();if(p)break;a.push(y),l+=y.length,m+=y.length,t&&g&&t((c+m/g)/o.length)}c++}let h=new Uint8Array(l),u=0;for(let f of a)h.set(f,u),u+=f.length;n=h.buffer}return new Promise((s,r)=>e.parse(n,"",o=>s(o.scene),r))}function kv(){let i=cs(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ei(i)}async function zv(){let i=await bd("exterior",o=>{St("loadbar").style.width=o*80+"%"}),t=await bd("cockpit",o=>{St("loadbar").style.width=80+o*20+"%"});Us.add(i),Us.add(t),i.traverse(o=>{if(!o.isMesh)return;o.castShadow=!0,o.receiveShadow=!0;let a=o.material.name||"";/Glass|Window/.test(a)&&(o.material.transparent=!0,o.material.opacity=Math.min(o.material.opacity,.55),o.material.roughness=.05,o.material.metalness=.9,o.castShadow=!1),/Paint|Nacelle|Wing|Navy/.test(a)&&(o.material.roughness=Math.min(o.material.roughness,.35),o.material.envMapIntensity=1.1)}),t.traverse(o=>{if(!o.isMesh)return;o.receiveShadow=!0,o.castShadow=!1;let a=/M_FD_Screen_(\w+)/.exec(o.material.name||"");a&&Di[a[1]]&&(o.material=new en({map:Di[a[1]],toneMapped:!1}))}),Us.updateMatrixWorld(!0);let e=o=>i.getObjectByName(o);for(let o of["Ext_CockpitWindows"]){let a=e(o);a&&Ui.cockpitGlass.push(a)}let n=(o,a,l)=>{let c=new Fe;return c.position.set(o,a,l),i.add(c),c};md(i,Us,Ui);for(let o of["Eng_H2_R","Eng_H2_L","Eng_ABEP_R","Eng_ABEP_L"]){let a=e(o);if(!a)continue;let l=[];if(a.traverse(f=>{f.isMesh&&/Fan|Spinner|Hub|BladeEdge/.test(f.material.name||"")&&!/Inlet/.test(f.material.name)&&l.push(f)}),!l.length)continue;let c=new $e;l.forEach(f=>c.expandByObject(f));let h=c.getCenter(new P);i.worldToLocal(h);let u=n(h.x,h.y,h.z);l.forEach(f=>u.attach(f)),Ui.fans.push({piv:u,idx:o.includes("ABEP")?o.endsWith("_L")?0:3:o.endsWith("_L")?1:2})}let s=kv(),r=(o,a,l,c,h,u)=>{let f=new As(new ts({map:s,color:c,blending:Ji,depthWrite:!1,transparent:!0,toneMapped:!1}));f.position.set(o,l,-a),f.scale.setScalar(h),i.add(f),Ui.lights.push({s:f,kind:u,size:h})};r(50.25,35.95,2.75,2162512,1.6,"nav"),r(50.25,-35.95,2.75,16719904,1.6,"nav"),r(65.1,0,2.6,16777215,1.3,"nav"),r(50.55,35.95,2.75,16777215,5,"strobe"),r(50.55,-35.95,2.75,16777215,5,"strobe"),r(22,0,3.8,16722458,3,"beacon"),r(44,0,-2.6,16722458,3,"beacon"),r(1.4,0,-3.3,16774880,4.5,"land"),r(24.5,4.2,-1.2,16774880,4,"land"),r(24.5,-4.2,-1.2,16774880,4,"land")}var li=new Set,An=0,vn={yaw:0,pitch:.07,fov:62},rn={az:.35,el:.16,dist:120},En=!0,Os=!1,$a=0,hs=[0,0,0],tl=!1;function su(i,t){let e=i.key.length===1?i.key.toLowerCase():i.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","PageUp","PageDown","Home","End","Tab","Backspace"].includes(i.key)&&i.preventDefault(),t?li.add(e):li.delete(e),!(!t||i.repeat)){if(e==="Escape"){Fd();return}if(!(!Os||En||$.crashed))switch(e){case"g":$.toggleGear();break;case"f":$.flaps(1);break;case"v":$.flaps(-1);break;case"p":$.park=!$.park,$.say($.park?"\u505C\u6A5F\u715E\u8ECA \u958B":"\u505C\u6A5F\u715E\u8ECA \u95DC");break;case"x":$.sbSel=$.sbSel>0?0:1,$.say($.sbSel?"\u6E1B\u901F\u677F \u5C55\u958B":"\u6E1B\u901F\u677F \u6536\u56DE");break;case"z":$.toggleAP();break;case"t":$.toggleATHR();break;case"l":$.toggleAPP();break;case"i":$.law=$.law==="normal"?"direct":"normal",$.manTrim=$.trimI,$.say($.law==="normal"?"\u98DB\u63A7\uFF1A\u6B63\u5E38\u6CD5\u5247 (\u7DDA\u50B3\u98DB\u63A7\u4FDD\u8B77)":"\u98DB\u63A7\uFF1A\u76F4\u63A5\u6CD5\u5247 (\u7121\u4FDD\u8B77\uFF0C, . \u8ABF\u914D\u5E73)");break;case"c":Fs((An+1)%3);break;case"1":Fs(0);break;case"2":Fs(1);break;case"3":Fs(2);break;case"h":Ud(($a+1)%3),Nd[An]=$a,$.say("\u4ECB\u9762\uFF1A"+["\u7C21\u6F54 HUD","\u5B8C\u6574\u5100\u8868","\u96B1\u85CF"][$a],2);break;case"m":ke.setMuted(!ke.muted),$.say(ke.muted?"\u975C\u97F3":"\u8072\u97F3 \u958B");break;case"n":us=(us+1)%wo.length,Nr(),$.say("\u6642\u9593\uFF1A"+wo[us].name);break;case"u":fs=(fs+1)%Qa.length,Nr(),$.say("\u5929\u6C23\uFF1A"+Qa[fs].name);break;case"[":yo=Math.max(5,yo/2);break;case"]":yo=Math.min(160,yo*2);break;case"Home":$.thr=1,$.ap.athr=!1;break;case"End":$.thr=0,$.ap.athr=!1;break;case",":$.manTrim-=.5*tt;break;case".":$.manTrim+=.5*tt;break}}}addEventListener("keydown",i=>su(i,!0));addEventListener("keyup",i=>su(i,!1));addEventListener("blur",()=>li.clear());var Qn=null;Ne.domElement.addEventListener("pointerdown",i=>{if(!Qn){Qn={x:i.clientX,y:i.clientY,id:i.pointerId};try{Ne.domElement.setPointerCapture(i.pointerId)}catch{}}});for(let i of["pointerup","pointercancel"])Ne.domElement.addEventListener(i,t=>{Qn&&t.pointerId===Qn.id&&(Qn=null)});Ne.domElement.addEventListener("pointermove",i=>{if(!Qn||i.pointerId!==Qn.id)return;let t=i.clientX-Qn.x,e=i.clientY-Qn.y;Qn.x=i.clientX,Qn.y=i.clientY,An===0?(vn.yaw=Xe(vn.yaw+t*.004,-2.3,2.3),vn.pitch=Xe(vn.pitch+e*.004,-1.1,1.1)):(rn.az-=t*.006,rn.el=Xe(rn.el+e*.005,-.25,1.45))});Ne.domElement.addEventListener("dblclick",()=>{vn.yaw=0,vn.pitch=.07,vn.fov=62});Ne.domElement.addEventListener("wheel",i=>{i.preventDefault(),An===0||An===2?vn.fov=Xe(vn.fov+Math.sign(i.deltaY)*4,18,95):rn.dist=Xe(rn.dist*(i.deltaY>0?1.12:.89),45,1500)},{passive:!1});var Nd=[1,0,0];function Ud(i){$a=i,document.body.classList.remove("hud0","hud1","hud2"),document.body.classList.add("hud"+i)}function Fs(i){An=i,tl=!1;for(let t of Ui.cockpitGlass)t.visible=i!==0;Ud(Nd[i])}var Ni=!0,On={active:!1,x:0,y:0,brake:!1},ti={brake:0,rev:!1,flapT:0,climbout:!1,landed:!1,retard:!1},wd=[225,205,190,172,160,150];function Hv(i){let t=$,e=ti;if(e.brake=0,e.rev=!1,!Ni)return;e.retard&&(t.thr=Math.max(0,t.thr-.5*i),t.thr<=0&&(e.retard=!1));let n=t.ias/se,s=(t.agl-5.1)/Ce;if(t.park&&t.thr>.15&&(t.park=!1,t.say("\u505C\u6A5F\u715E\u8ECA\u5DF2\u81EA\u52D5\u9B06\u958B")),t.wow){if(t.thr>.4&&(e.landed=!1,e.climbout=!0),t.tdSeen!==t.touchdown&&t.touchdown){t.tdSeen=t.touchdown,e.landed=!0,e.rw=null;let r=1e9;for(let o of _n){let a=as(o,t.pos[0],t.pos[1],t.alt),l=Math.abs(Math.atan2(Math.sin(t.psi-o.crs*tt),Math.cos(t.psi-o.crs*tt)));Math.abs(a.xtk)<45&&a.along>-100&&a.along<o.len&&l<.5&&l<r&&(r=l,e.rw=o)}}e.landed&&t.thr<.05&&t.gs>1.5&&(e.brake=t.wowN?.75:.25,e.rev=t.gs>30),e.landed&&t.gs<1&&t.thr<.05&&!t.park&&(t.park=!0,e.landed=!1,t.say("\u5DF2\u505C\u59A5 \u2014 \u505C\u6A5F\u715E\u8ECA \u958B",5)),!e.landed&&t.gs<5&&t.flapSel!==3&&t.thr<.3&&(t.flapSel=3)}else if(e.climbout&&(n>232||s>3500)&&(e.climbout=!1),t.gearSel&&s>150&&t.vs>2.5&&t.airT>3&&(t.gearSel=!1,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u6536\u8D77")),!t.gearSel&&s<1900&&t.vs<-1&&n<215&&(t.gearSel=!0,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u653E\u4E0B")),!t.ap.on&&t.ap.athr&&s<30&&t.vs<0&&t.airT>20&&(t.ap.athr=!1,e.retard=!0,t.say("\u81EA\u52D5\u6536\u6CB9\u9580 \u2014 \u8F15\u62C9\u6A5F\u982D\u5E73\u98C4",4)),e.flapT+=i,e.flapT>2.5){let r=t.flapSel,o=r;r>0&&n>wd[r-1]+10?o=r-1:!e.climbout&&r<6&&n<wd[r]&&(r<3||t.gearSel&&s<3500)&&(o=r+1),o!==r&&(t.flapSel=o,e.flapT=0,t.say("\u895F\u7FFC \u81EA\u52D5 "+kt.flapDeg[o]+"\xB0",2.5))}}function Vv(i){let t=$.ctl,e=(...f)=>f.some(d=>li.has(d)),n=(e("ArrowDown")?1:0)-(e("ArrowUp")?1:0),s=(e("ArrowRight")?1:0)-(e("ArrowLeft")?1:0),r=(e("e","d")?1:0)-(e("q","a")?1:0),o=Math.max(e(" ","b")||On.brake?1:0,ti.brake),a=e("r")||ti.rev,l=(e("PageUp","=","+","w")?1:0)-(e("PageDown","-","_","s")?1:0),c=navigator.getGamepads?[...navigator.getGamepads()].find(f=>f&&f.connected&&f.axes.length>=2):null,h=!1;if(c){let f=m=>Math.abs(m)<.08?0:m,d=f(c.axes[0]),g=f(c.axes[1]),x=c.axes.length>2?f(c.axes[2]):0;(d||g||x)&&(h=!0,s=d,n=g,r=x),c.buttons[7]&&c.buttons[7].value>.05&&(l=c.buttons[7].value),c.buttons[6]&&c.buttons[6].value>.05&&(l=-c.buttons[6].value),c.buttons[0]&&c.buttons[0].pressed&&(o=1)}if(On.active&&(h=!0,s=On.x,n=On.y),Ni&&$.wow&&r===0&&(r=Xe(s*1.2,-1,1)),Ni&&ti.landed&&$.wow&&r===0&&ti.rw){let f=ti.rw,d=Math.atan2(Math.sin($.psi-f.crs*tt),Math.cos($.psi-f.crs*tt));r=Xe(-.03*as(f,$.pos[0],$.pos[1],$.alt).xtk-6*d,-1,1)}let u=(f,d)=>h?d:f+Xe(d-f,-(d===0?3.2:2)*i,(d===0?3.2:2)*i);t.pitch=u(t.pitch,n),t.roll=u(t.roll,s),t.yaw=u(t.yaw,r),t.brake+=Xe(o-t.brake,-4*i,2.5*i),t.reverse=a,l&&(ti.retard=!1,$.thr=Xe($.thr+l*.35*i,0,1),$.ap.athr&&($.ap.athr=!1,$.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))),$.ap.on&&(Math.abs(n)>.5||Math.abs(s)>.5)&&$.toggleAP()}var Gv=[2500,1e3,500,400,300,200,100,50,40,30,20,10],Wv={2500:"twenty five hundred",1e3:"one thousand",500:"five hundred",400:"four hundred",300:"three hundred",200:"two hundred",100:"one hundred",50:"fifty",40:"forty",30:"thirty",20:"twenty",10:"ten"},Qh=0,Ka=!1,Mo=!1,Za=!1;function Xv(i){let t=$,e=t.ias/se,n=(t.agl-5.1)/Ce,s=t.vs*196.85;t.stallWarn=!t.wow&&t.airT>2&&(t.alpha>t.aStall-.6*tt||t.stall>.25),t.overspeed=e>t.vmaxKt+4,t.gearWarn=!t.wow&&t.gearPos<.99&&n<750&&t.thr<.35&&t.flapSel>=4,t.cfgWarn=t.wow&&t.thr>.75&&t.gs<40*se?t.flapSel<1||t.flapSel>4?"FLAPS":t.park?"PARK BRK":t.sbSel?"SPD BRK":"":"";let r=-s;if(t.gpwsPull=!t.wow&&t.airT>5&&n<2400&&(r>1700+n*2.2&&n>30||n<700&&t.gearPos<.5&&r>600&&t.flapSel<4&&n>60&&qv()),t.gpwsPull?ke.say("pull up","pull",1.6):!t.wow&&n<2400&&r>1100+n*1.6&&n>20&&ke.say("sink rate","sink",2.5),t.stallWarn&&ke.say("stall, stall","stall",1.8),!t.wow&&Math.abs(t.phi)>40*tt&&n<2e3&&ke.say("bank angle, bank angle","bank",3),t.gearWarn&&ke.say("too low, gear","gear",3),!t.wow&&s<-100){for(let o of Gv)if(Qh>o&&n<=o){ke.say(Wv[o],"ra"+o,5);break}}if(!t.wow&&n<22&&n>3&&t.thr>.06&&s<-50&&t.airT>20&&ke.say("retard","retard",1.5),Qh=n,t.wow&&t.thr>.7){let o=Math.max(135,t.vstall/se*1.13+12);!Ka&&e>o-10&&(ke.say("V one","v1",30),Ka=!0),!Mo&&e>o&&(ke.say("rotate","rot",30),Mo=!0,t.say("ROTATE \u2014 \u8F15\u62C9\u6A5F\u982D\u81F3\u7D04 12\xB0",5))}if(!t.wow&&!Za&&t.airT>1.5&&s>300&&Mo&&(ke.say("positive climb","pos",30),Za=!0,t.say("\u6B63\u722C\u5347 \u2014 \u6309 G \u6536\u8D77\u843D\u67B6",5)),t.wow&&t.gs<20&&(Ka=Mo=Za=!1),t.apDisc&&(t.apDisc=!1,t.apDiscT=1.5),t.apDiscT>0&&(t.apDiscT-=i),t.tdEvent){t.tdEvent=!1;let o=t.touchdown;ke.thump(Math.min(2.5,o.fpm/250+.4));let a=o.fpm<120?"\u5B8C\u7F8E (butter)":o.fpm<250?"\u826F\u597D":o.fpm<450?"\u504F\u91CD":o.fpm<700?"\u91CD\u843D\u5730":"\u975E\u5E38\u7C97\u66B4";t.say(`\u8457\u9678\uFF1A${o.fpm} fpm \u30FB ${o.g.toFixed(2)} g \u30FB ${o.kt} kt \u2014 ${a}`,9),jv(o)}}function qv(){return!0}var Dy=new P,Td=new P,Ed=new P,Ad=new P;var Kh=0,So=0,Ja=0;function Yv(i){let t=$,e=t.R;Td.set(-e[3],e[6],e[0]),Ed.set(-e[5],e[8],e[2]),Ad.set(-e[4],e[7],e[1]),Ns.matrix.makeBasis(Td,Ed,Ad),Ns.matrixWorldNeedsUpdate=!0,Ns.updateMatrixWorld(!0),tu.position.set(-t.pos[1],t.pos[2],t.pos[0]),gd(Ui,t,i);for(let o of Ui.fans)o.piv.rotation.x-=(t.n1[o.idx]/100*38+Math.min(4,t.tas*.02))*i;let n=wo[us];for(let o of Ui.lights){let a=1;o.kind==="strobe"?a=Ja%1.2<.06||(Ja+.14)%1.2<.06?1:0:o.kind==="beacon"?a=Ja%1.3<.14?1:0:o.kind==="land"&&(a=t.gearPos>.9?1:0),o.s.visible=a>0,o.s.material.opacity=o.kind==="nav"?.55+.45*n.night:1,o.s.scale.setScalar(o.size*(.6+.6*n.night))}Bn.position.copy(Ya).multiplyScalar(250),Bn.target.position.set(0,0,0),ze.position.set(0,0,0),Kh=(t.wow?Math.min(1,t.gs/80)*(.25+t.rough):0)+t.stall*.8+(t.stallWarn?.25:0)+Math.min(1,Math.hypot(...t.gust)/6)*.3+(t.sb>.1&&!t.wow?.12:0);let s=(Math.random()-.5)*Kh*.012,r=(Math.random()-.5)*Kh*.016;if(An===0)Ns.add(ye),ye.position.set(-31.55+s,1.8+r-Xe(((t.nzSm??1)-1)*.02,-.03,.03),.55),ye.rotation.order="YXZ",ye.rotation.set(-vn.pitch,Math.PI/2-vn.yaw,0),ye.fov=vn.fov,ye.near=.06;else if(An===1){we.add(ye),So+=Math.atan2(Math.sin(t.psi-So),Math.cos(t.psi-So))*Math.min(1,i*2.5);let o=So+Math.PI+rn.az,a=Math.cos(rn.el),l=rn.dist,c=Math.sin(rn.el)*l,h=-t.agl+2.5;c<h&&(c=h),ye.position.set(Math.sin(o)*a*l,c,-Math.cos(o)*a*l),ye.up.set(0,1,0),ye.lookAt(0,0,0),ye.fov=50,ye.near=1}else{we.add(ye);let o=hs[0]-t.pos[0],a=hs[1]-t.pos[1];if(!tl||Math.hypot(o,a)>3500){let l=Math.max(t.gs,30)*9;hs[0]=t.pos[0]+Math.cos(t.track)*l-Math.sin(t.track)*140,hs[1]=t.pos[1]+Math.sin(t.track)*l+Math.cos(t.track)*140,hs[2]=Math.max(t.elev+12,t.alt-60-Math.random()*200*(t.agl>400?1:0)),tl=!0}ye.position.set(hs[1]-t.pos[1],hs[2]-t.alt,-(hs[0]-t.pos[0])),ye.up.set(0,1,0),ye.lookAt(0,0,0),ye.fov=Xe(vn.fov*.5*500/Math.max(120,ye.position.length()),3,60),ye.near=1}ye.updateProjectionMatrix(),ai.updatePapi(t.pos[0],t.pos[1],t.alt)}var Dr=0;function $v(){Dr++;let i=An===0;Dr%2===0&&(xd(eu,$),Di.PFD.needsUpdate=i),Dr%4===1&&(_d(nu,$,yo),Di.ND.needsUpdate=i),Dr%4===3&&(vd(iu,$),Di.EICAS.needsUpdate=i),i&&Dr%20===5&&(yd(Id,$),Di.MFD.needsUpdate=!0,Md(Ld,$),Di.STBY.needsUpdate=!0),i&&Dr%120===7&&(Sd(Dd,$),Di.CDU.needsUpdate=!0);let t=$.ap;St("vSpd").textContent=t.spd,St("vHdg").textContent=String(t.hdg%360||360).padStart(3,"0"),St("vAlt").textContent=t.alt,St("vVs").textContent=t.vs,St("bAP").classList.toggle("on",t.on),St("bAT").classList.toggle("on",t.athr),St("bAPP").classList.toggle("on",t.app),St("bAPP").textContent=t.app?t.lat==="LOC"?t.ver==="GS"?"LOC+G/S":"LOC":"APP \u9810\u4F4D":"APP",St("thrFill").style.height=$.thr*100+"%",St("thrKnob").style.bottom=`calc(${$.thr} * (100% - 28px))`;let e=St("msg");$.msgT>0?(e.textContent=$.msg,e.style.opacity=1):e.style.opacity=0,St("mSpd").textContent=Math.round($.ias/se),St("mAlt").textContent=Math.round($.alt/Ce/10)*10,St("mHdg").textContent=String(Math.round(($.psi*Ee%360+360)%360)||360).padStart(3,"0"),St("stat").textContent=`\u6CB9\u9580 ${Math.round($.thr*100)}%  \xB7  \u895F\u7FFC ${kt.flapDeg[$.flapSel]}\xB0  \xB7  \u8D77\u843D\u67B6 ${$.gearSel?"\u653E\u4E0B":"\u6536\u8D77"}${$.park?"  \xB7  \u505C\u6A5F\u715E\u8ECA":""}${$.sbSel?"  \xB7  \u6E1B\u901F\u677F":""}  \xB7  ${["\u5EA7\u8259","\u5916\u90E8","\u5854\u53F0"][An]}\u8996\u89D2`}function Fd(){!Os||St("result").style.display==="flex"||(En=!En,St("menu").style.display=En?"flex":"none",St("menuTitle").textContent="\u5DF2\u66AB\u505C",St("resume").style.display=$.crashed?"none":"",En||ke.start())}var Kv=130,Zv=[[-9e3,-4e3,900],[-4e3,-6500,700],[1500,-6e3,600],[5500,-2500,800],[3500,3500,1e3],[-3e3,6500,850],[-8e3,5250,700]],ru={gates:"\u822A\u9EDE\u7A7F\u8D8A",stable:"\u7A69\u5B9A\u9032\u5834",landing:"\u5E73\u7A69\u7740\u9678"},gt=null,ou="runway",ja=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Jv(i){if(gt={type:i,t:0,done:!1},i==="gates"){let t=$.pos[0],e=$.pos[1];gt.gates=Zv.map(([n,s,r])=>{let o={n,e:s,alt:Math.max(r,Zn(n,s)+450),psi:Math.atan2(s-e,n-t)};return t=n,e=s,o}),gt.i=0,gt.hits=0,gt.dev=[],gt.prevS=null,ai.gates.set(gt.gates),ai.gates.activate(0)}else ai.gates.set([]),gt.loc=0,gt.gs=0,gt.n=0,gt.sampT=0,gt.td=null,gt.tdT=0;St("mis").style.display="block",St("misT").textContent="\u4EFB\u52D9 \xB7 "+ru[i]}function el(){gt=null,ai.gates.set([]),St("mis").style.display="none"}function jv(i){if(!gt||gt.type==="gates"||gt.td)return;let t=as(_n[0],$.pos[0],$.pos[1],$.alt);gt.td={fpm:i.fpm,g:i.g,kt:i.kt,xtk:t.xtk,past:t.along-300,onRwy:os($.pos[0],$.pos[1])==="rwy"}}function Qv(i){if(!gt||gt.done)return;let t=$;if(gt.t+=i,gt.type==="gates"){let r=gt.gates[gt.i],o=t.pos[0]-r.n,a=t.pos[1]-r.e,l=t.alt-r.alt,c=o*Math.cos(r.psi)+a*Math.sin(r.psi);if(gt.prevS!==null&&gt.prevS<0&&c>=0){let x=Math.sqrt(Math.max(0,o*o+a*a-c*c)+l*l);if(x<Kv?(gt.hits++,gt.dev.push(x),t.say(`\u2714 \u822A\u9EDE ${gt.i+1} \u2014 \u504F\u96E2\u74B0\u5FC3 ${Math.round(x)} m`,3)):t.say(`\u2718 \u932F\u904E\u822A\u9EDE ${gt.i+1}\uFF08\u504F\u96E2 ${Math.round(x)} m\uFF09`,3),gt.i++,gt.prevS=null,gt.i>=gt.gates.length){ai.gates.activate(-1),Rd();return}ai.gates.activate(gt.i)}else gt.prevS=c;let h=gt.gates[gt.i],u=Math.atan2(h.e-t.pos[1],h.n-t.pos[0]),f=Math.atan2(Math.sin(u-t.psi),Math.cos(u-t.psi))*Ee,d=Math.hypot(h.n-t.pos[0],h.e-t.pos[1]),g=(h.alt-t.alt)/Ce;St("misG").textContent=`\u822A\u9EDE ${gt.i+1} / ${gt.gates.length} \xB7 ${(d/1e3).toFixed(1)} km`,St("misP").textContent=`${Math.abs(f)<3?"\u6B63\u524D\u65B9":(f>0?"\u5411\u53F3 ":"\u5411\u5DE6 ")+Math.round(Math.abs(f))+"\xB0"} \xB7 ${Math.abs(g)<80?"\u9AD8\u5EA6\u6B63\u78BA":(g>0?"\u722C\u5347 ":"\u4E0B\u964D ")+Math.round(Math.abs(g)/10)*10+" ft"} \xB7 ${ja(gt.t)}`;return}let e=as(_n[0],t.pos[0],t.pos[1],t.alt),n=(t.agl-5.1)/Ce,s=t.alt-_n[0].elev-Math.tan(3*tt)*e.dAim;gt.td?(gt.tdT+=i,St("misG").textContent="\u5DF2\u7740\u9678 \u2014 \u6E1B\u901F\u4E2D",St("misP").textContent=ja(gt.t),(t.gs<25||gt.tdT>14)&&Rd()):(gt.sampT+=i,gt.type==="stable"&&gt.sampT>.25&&n>200&&e.dAim>0&&e.dAim<16500&&!t.wow&&(gt.sampT=0,gt.loc+=Math.abs(e.xtk),gt.gs+=Math.abs(s),gt.n++),St("misG").textContent=gt.type==="stable"?`\u822A\u9053 ${e.xtk>0?"\u504F\u53F3":"\u504F\u5DE6"} ${Math.round(Math.abs(e.xtk))} m \xB7 \u4E0B\u6ED1\u9053 ${s>0?"\u504F\u9AD8":"\u504F\u4F4E"} ${Math.round(Math.abs(s))} m`:`\u96E2\u5730 ${Math.max(0,Math.round(n/10)*10)} ft \xB7 \u4E0B\u964D\u7387 ${Math.round(-t.vs*196.85/50)*50} fpm`,St("misP").textContent=`\u8DDD\u8DD1\u9053 ${(Math.max(0,-e.along)/1852).toFixed(1)} NM \xB7 ${Math.round(t.ias/se)} kt \xB7 ${ja(gt.t)}`,e.along>_n[0].len+400&&!t.wow&&(t.say("\u5DF2\u98DB\u8D8A\u8DD1\u9053 \u2014 \u4EFB\u52D9\u7D50\u675F\uFF0C\u53EF\u5F9E\u9078\u55AE\u91CD\u8A66",6),el()))}function Rd(){gt.done=!0;let i=[],t=1,e="";if(i.push(["\u7528\u6642",ja(gt.t)]),gt.type==="gates"){let n=gt.dev.length?gt.dev.reduce((r,o)=>r+o,0)/gt.dev.length:0,s=gt.gates.length;i.push(["\u7A7F\u904E\u822A\u9EDE",`${gt.hits} / ${s}`],["\u822A\u7DDA\u504F\u5DEE\uFF08\u5E73\u5747\u504F\u96E2\u74B0\u5FC3\uFF09",gt.hits?`${Math.round(n)} m`:"\u2014"],["\u6700\u5927\u504F\u5DEE",gt.hits?`${Math.round(Math.max(...gt.dev))} m`:"\u2014"]),t=gt.hits===s&&n<45?3:gt.hits>=s-1&&n<85?2:gt.hits>=3?1:0,e=t===3?"\u7CBE\u6E96\u7A7F\u8D8A\uFF0C\u822A\u7DDA\u6F02\u4EAE":t===2?"\u4E0D\u932F\uFF0C\u518D\u8CBC\u8FD1\u74B0\u5FC3\u4E00\u9EDE":t===1?"\u5B8C\u6210\uFF0C\u4F46\u932F\u904E\u4E86\u4E00\u4E9B\u822A\u9EDE":"\u5927\u90E8\u5206\u822A\u9EDE\u90FD\u932F\u904E\u4E86"}else{let n=gt.td;if(gt.type==="stable"){let s=gt.n?gt.loc/gt.n:0,r=gt.n?gt.gs/gt.n:0;i.push(["\u822A\u7DDA\u504F\u5DEE\uFF08\u822A\u9053\u5E73\u5747\uFF09",`${Math.round(s)} m`],["\u4E0B\u6ED1\u9053\u5E73\u5747\u504F\u5DEE",`${Math.round(r)} m`]),t=s<25&&r<15&&n.fpm<300?3:s<60&&r<35&&n.fpm<500?2:1}else t=n.fpm<200&&Math.abs(n.xtk)<8?3:n.fpm<350&&Math.abs(n.xtk)<15?2:1;i.push(["\u7740\u9678\u4E0B\u964D\u7387",`${n.fpm} fpm`],["\u7740\u9678 G \u503C",n.g.toFixed(2)+" g"],["\u4E2D\u5FC3\u7DDA\u504F\u5DEE",`${Math.abs(n.xtk).toFixed(1)} m ${n.xtk>0?"\u504F\u53F3":"\u504F\u5DE6"}`],["\u843D\u9EDE",`\u7784\u6E96\u9EDE${n.past>=0?"\u5F8C":"\u524D"} ${Math.round(Math.abs(n.past))} m`]),n.onRwy||(t=0),e=n.onRwy?t===3?"\u5E73\u7A69\u53C8\u7CBE\u6E96\u7684\u843D\u5730":t===2?"\u5B89\u5168\u843D\u5730\uFF0C\u9084\u53EF\u4EE5\u66F4\u8F15":"\u843D\u5730\u504F\u91CD\u6216\u504F\u96E2\u4E2D\u5FC3\u7DDA":"\u6C92\u6709\u843D\u5728\u8DD1\u9053\u4E0A"}Od(ru[gt.type],t,e,i)}function Od(i,t,e,n){En=!0,St("resTitle").textContent=i+(t?" \xB7 \u5B8C\u6210":" \xB7 \u672A\u9054\u6A19"),St("resStars").textContent="\u2605".repeat(t)+"\u2606".repeat(3-t),St("resGrade").textContent=e;let s=St("resRows");s.textContent="";for(let[r,o]of n){let a=document.createElement("span"),l=document.createElement("span");a.textContent=r,l.textContent=o,s.append(a,l)}St("result").style.display="flex"}var ty={runway:()=>$.reset("runway"),approach:()=>$.reset("approach"),cruise:()=>{$.reset("cruise"),$.ap.vs=2500},aurora:()=>{us=2,fs===3&&(fs=1),$.reset("cruise",{pos:[-66e3,-8e3],hdg:0}),$.ap.vs=2500},gates:()=>{$.reset("approach",{pos:[-14500,-3600],alt:1100,kt:240,flap:0,hdg:5,manual:!0}),$.ap.spd=240,$.ap.alt=4e3},stable:()=>{$.reset("approach",{dist:18520,alt:3e3*Ce,kt:180,flap:2,side:350,manual:!0}),$.ap.spd=150},landing:()=>{$.reset("approach",{dist:7400,alt:_n[0].elev+Math.tan(3*tt)*7700,kt:152,flap:5,gear:!0,manual:!0}),$.ap.spd=145}};function nl(i){ou=i,el(),ty[i](),Nr(),Os=!0,En=!1,Ka=Mo=Za=!1,Qh=0,So=$.psi,tl=!1;for(let r of["menu","crash","result"])St(r).style.display="none";St("ui").style.display="block",ke.start(),Fs(i==="runway"?0:An),Ni=St("chkEasy").checked,ti.landed=!1,ti.retard=!1,ti.climbout=i==="runway",ti.flapT=0,document.body.classList.toggle("easy",Ni);let t=bo?"\u628A\u53F3\u5074\u6CB9\u9580\u63A8\u5230\u9802":"\u6309\u4F4F W \u63A8\u6EFF\u6CB9\u9580",e=bo?"\u6416\u687F\u5F80\u4E0B\u62C9":"\u6309 \u2193",n=bo?"\u6416\u687F":"\u65B9\u5411\u9375",s={runway:Ni?`${t}\uFF0C\u807D\u5230 Rotate \u5F8C${e}\u62AC\u982D\u3002\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u6703\u81EA\u52D5\u64CD\u4F5C\u3002`:"\u6309 P \u9B06\u958B\u505C\u6A5F\u715E\u8ECA\uFF0CW \u63A8\u6CB9\u9580\u8D77\u98DB\u3002Esc \u53EF\u66AB\u505C\u67E5\u770B\u6309\u9375\u3002",approach:Ni?"\u81EA\u52D5\u99D5\u99DB\u98DB\u884C\u4E2D\u3002\u5DF2\u9810\u4F4D ILS\uFF0C\u6703\u81EA\u52D5\u5C0D\u6E96\u8DD1\u9053\u3001\u653E\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u4E26\u81EA\u52D5\u843D\u5730\uFF1B\u60F3\u81EA\u5DF1\u98DB\u96A8\u6642\u63A8\u687F\u63A5\u624B\u3002":"\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u6309 L \u9810\u4F4D ILS \u9032\u5834\uFF0CF \u653E\u895F\u7FFC\uFF0CG \u653E\u8D77\u843D\u67B6\u3002",cruise:"\u5DE1\u822A\u4E2D\uFF0C\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u5B8C\u6574\u5100\u8868\uFF08H\uFF09\u4E0A\u65B9\u9762\u677F\u53EF\u6539\u822A\u5411/\u9AD8\u5EA6/\u901F\u5EA6\u3002",aurora:"\u591C\u9593\u5411\u5317\u5DE1\u822A\uFF0C\u6975\u5149\u5C31\u5728\u524D\u65B9\u3002\u62D6\u66F3\u756B\u9762\u53EF\u74B0\u9867\u56DB\u5468\uFF0CH \u53EF\u96B1\u85CF\u4ECB\u9762\u3002",gates:`\u7528${n}\u64CD\u7E31\uFF0C\u4F9D\u5E8F\u7A7F\u904E 7 \u500B\u5149\u74B0\uFF08\u7DA0\u8272\u662F\u4E0B\u4E00\u500B\uFF09\u3002\u901F\u5EA6\u7531\u81EA\u52D5\u6CB9\u9580\u4FDD\u6301 240 kt\u3002`,stable:`\u624B\u52D5\u9032\u5834\uFF1A\u7528${n}\u5C0D\u6E96\u8DD1\u9053\uFF0C\u6CBF\u4E0B\u6ED1\u9053\u4E0B\u964D\u4E26\u843D\u5730\u3002\u901F\u5EA6\u7531\u81EA\u52D5\u6CB9\u9580\u4FDD\u6301\u3002`,landing:`\u8DD1\u9053\u5C31\u5728\u524D\u65B9\uFF1A\u4FDD\u6301\u4E0B\u964D\uFF0C\u7D04 30 ft ${bo?"\u8F15\u62C9\u6416\u687F":"\u8F15\u6309 \u2193"}\u5E73\u98C4\uFF0C\u8F15\u8F15\u843D\u5728\u4E2D\u5FC3\u7DDA\u4E0A\u3002`};$.say(s[i],12),$.ap.autoland=Ni&&i==="approach",i==="approach"&&Ni&&($.toggleAPP(),$.ap.spd=150),ru[i]&&(Jv(i),$.tuneILS(),An!==0&&(rn.az=0,rn.el=.1,rn.dist=95))}var bo=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||/[?&]touch/.test(location.search);bo&&(document.body.classList.add("touch"),Ne.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Ne.shadowMap.enabled=!1,Bn.castShadow=!1);{let i=St("stick"),t=St("knob"),e=h=>{let u=i.getBoundingClientRect(),f=u.width/2,d=(h.clientX-u.left-f)/(f*.72),g=(h.clientY-u.top-f)/(f*.72),x=Math.hypot(d,g);x>1&&(d/=x,g/=x);let m=p=>Math.sign(p)*Math.pow(Math.abs(p),1.5);On.x=m(d),On.y=m(g),On.active=!0,t.style.transform=`translate(${d*f*.72}px, ${g*f*.72}px)`},n=null,s=h=>{h&&h.pointerId!==n||(n=null,On.active=!1,On.x=On.y=0,t.style.transform="")};i.addEventListener("pointerdown",h=>{if(n===null){n=h.pointerId;try{i.setPointerCapture(h.pointerId)}catch{}e(h),h.preventDefault()}}),i.addEventListener("pointermove",h=>{h.pointerId===n&&e(h)});for(let h of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(h,s);let r=St("thr"),o=null,a=h=>{let u=r.getBoundingClientRect();$.thr=Xe(1-(h.clientY-u.top-14)/(u.height-28),0,1),$.ap.athr&&($.ap.athr=!1,$.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))};r.addEventListener("pointerdown",h=>{if(o===null){o=h.pointerId;try{r.setPointerCapture(h.pointerId)}catch{}a(h),h.preventDefault()}}),r.addEventListener("pointermove",h=>{h.pointerId===o&&a(h)});for(let h of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(h,u=>{u.pointerId===o&&(o=null)});let l=(h,u,f)=>{let d=St(h),g=null;d.addEventListener("pointerdown",m=>{if(g===null){g=m.pointerId;try{d.setPointerCapture(m.pointerId)}catch{}u(),d.classList.add("on"),m.preventDefault()}});let x=m=>{m.pointerId===g&&(g=null,f(),d.classList.remove("on"))};for(let m of["pointerup","pointercancel","lostpointercapture"])d.addEventListener(m,x)};l("tBrake",()=>{On.brake=!0},()=>{On.brake=!1}),l("tRev",()=>li.add("r"),()=>li.delete("r"));let c=(h,u)=>il(St(h),()=>{su({key:u,preventDefault(){},repeat:!1},!0),li.delete(u)});c("tView","c"),c("tHud","h"),c("tMenu","Escape"),c("tGear","g"),c("tFlapD","f"),c("tFlapU","v"),c("tSb","x")}function il(i,t){i.addEventListener("pointerdown",e=>{e.button>0||(e.preventDefault(),t(e),i.classList.add("hit"),setTimeout(()=>i.classList.remove("hit"),140))}),i.addEventListener("click",e=>{e.detail===0&&t(e),i.blur()}),i.addEventListener("contextmenu",e=>e.preventDefault())}for(let i of document.querySelectorAll("[data-start]"))i.addEventListener("click",()=>nl(i.dataset.start));St("resume").addEventListener("click",Fd);var Bd=()=>{for(let i of["crash","result"])St(i).style.display="none";el(),En=!0,St("menu").style.display="flex",St("menuTitle").textContent="SOLARIS \u98DB\u884C\u6A21\u64EC\u5668",St("resume").style.display="none"};St("resRetry").addEventListener("click",()=>nl(ou));St("resGo").addEventListener("click",()=>{St("result").style.display="none",el(),En=!1});St("resMenu").addEventListener("click",Bd);St("crashRetry").addEventListener("click",()=>nl(ou));St("crashMenu").addEventListener("click",Bd);St("selTime").addEventListener("change",i=>{us=+i.target.value,Nr()});St("selWx").addEventListener("change",i=>{fs=+i.target.value,Nr()});wo.forEach((i,t)=>St("selTime").add(new Option(i.name,t)));Qa.forEach((i,t)=>St("selWx").add(new Option(i.name,t)));var sl=(i,t)=>{for(let e of document.querySelectorAll(`[data-adj="${i}"]`)){let n=0,s=0,r=()=>{clearTimeout(n),n=0},o=()=>{s++,t(+e.dataset.d*(s>25?5:1)),n=setTimeout(o,s>8?45:90)};e.addEventListener("pointerdown",a=>{a.preventDefault(),r(),s=0,t(+e.dataset.d*(a.shiftKey?5:1)),n=setTimeout(o,420)});for(let a of["pointerup","pointerleave","pointercancel"])e.addEventListener(a,r);e.addEventListener("contextmenu",a=>a.preventDefault())}};sl("spd",i=>$.ap.spd=Xe($.ap.spd+i*5,110,340));sl("hdg",i=>$.ap.hdg=(($.ap.hdg+i)%360+360)%360);sl("alt",i=>$.ap.alt=Xe($.ap.alt+i*($.ap.alt>=1e4&&(i>0||$.ap.alt>1e4)?1e3:500),0,66e3));sl("vs",i=>$.ap.vs=Xe($.ap.vs+i*100,100,4e3));il(St("bAP"),()=>$.toggleAP());il(St("bAT"),()=>$.toggleATHR());il(St("bAPP"),()=>$.toggleAPP());addEventListener("resize",()=>{Ne.setSize(innerWidth,innerHeight),ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix()});var Zh=1/120,Jh=0,Cd=performance.now(),jh=0;function kd(i){for(Ja+=i,Hv(i),Vv(i),Jh+=i;Jh>=Zh&&($.step(Zh),Jh-=Zh,!$.crashed););jh+=i,jh>2&&(jh=0,$.tuneILS()),Xv(i),Qv(i),$.crashed&&(ke.thump(3),St("crashWhy").textContent=$.crashed,St("crash").style.display="flex",window.speechSynthesis&&speechSynthesis.cancel())}function zd(i){requestAnimationFrame(zd);let t=Math.min(.1,(i-Cd)/1e3);Cd=i,Os&&!En&&!$.crashed&&!window.__freeze&&kd(t),$.update0();{let e=Xe(($.alt-8e3)/1e4,0,1);if(ze.material.uniforms.rayleigh.value=jn.ray*(1-.78*e),we.fog.density=jn.fog*(.22+.78*Math.exp(-$.alt/5200)),!jn.lowvis){let n=Xe($.alt/9e3,0,1)*(1-jn.night);we.fog.color.copy(jn.col).lerp(Ov,.55*n),ze.material.uniforms.uHaze.value.copy(we.fog.color).multiplyScalar(jn.night===1?0:1)}ai.update(En?0:t,$.alt,ye)}Yv(t),Os&&$v(),ke.update($,An===0,t,En||!Os),Ne.render(we,ye)}(async function(){try{await zv(),Nr(),Fs(1),rn.az=2.5,rn.el=.12,rn.dist=105,St("loading").style.display="none",St("menu").style.display="flex"}catch(t){St("loadtxt").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+t.message,console.error(t)}requestAnimationFrame(zd)})();var ey=(i,t,e=1/30)=>{let n=0;for(;n<i&&Os&&!En&&!$.crashed;n+=e)t&&t($,li,n),kd(e);return li.clear(),n};window.__sim=$;window.__dbg={fastRun:ey,keys:li,RUNWAYS:_n,W:ai,mission:()=>gt,showResult:(...i)=>Od(...i),snd:ke,scene:we,camera:ye,parts:Ui,model:Us,look:vn,orbit:rn,setView:Fs,startFlight:nl,renderer:Ne};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
