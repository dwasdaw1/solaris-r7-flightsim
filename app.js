(()=>{var Id=0,iu=1,Ld=2;var wf=1,Xc=2,mi=3,Jn=0,Je=1,Ve=2,Yi=0,nr=1,Ki=2,su=3,ru=4,Dd=5,vs=100,Nd=101,Ud=102,Fd=103,Od=104,Bd=200,kd=201,zd=202,Hd=203,Dl=204,Nl=205,Vd=206,Gd=207,Wd=208,Xd=209,qd=210,Yd=211,$d=212,Kd=213,Zd=214,Ul=0,Fl=1,Ol=2,or=3,Bl=4,kl=5,zl=6,Hl=7,qc=0,Jd=1,jd=2,$i=0,Qd=1,tp=2,ep=3,Yc=4,np=5,ip=6,sp=7,ou="attached",rp="detached",Ef=300,ar=301,lr=302,Vl=303,Gl=304,Ia=306,jn=1e3,xi=1001,Jr=1002,je=1003,$c=1004;var tr=1005;var qe=1006,Yr=1007;var An=1008;var yi=1009,Tf=1010,Af=1011,jr=1012,Kc=1013,Ms=1014,Hn=1015,ao=1016,Zc=1017,Jc=1018,cr=1020,Rf=35902,Cf=1021,Pf=1022,dn=1023,If=1024,Lf=1025,ir=1026,hr=1027,lo=1028,jc=1029,Df=1030,Qc=1031;var th=1033,jo=33776,Qo=33777,ta=33778,ea=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,$l=36196,Kl=37492,Zl=37496,Jl=37808,jl=37809,Ql=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,na=36492,uc=36494,fc=36495,Nf=36283,dc=36284,pc=36285,mc=36286;var ur=2300,fr=2301,tl=2302,au=2400,lu=2401,cu=2402,op=2500;var Uf=0,La=1,co=2,ap=3200,lp=3201;var eh=0,cp=1,Wi="",Ae="srgb",tn="srgb-linear",Da="linear",de="srgb";var Us=7680;var hu=519,hp=512,up=513,fp=514,Ff=515,dp=516,pp=517,mp=518,gp=519,gc=35044;var uu="300 es",_i=2e3,ia=2001,Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,$r=Math.PI/180,dr=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function nh(i,t){return(i%t+t)%t}function xp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _p(i,t,e){return i!==t?(e-i)/(t-i):0}function Kr(i,t,e){return(1-e)*i+e*t}function vp(i,t,e,n){return Kr(i,t,1-Math.exp(-e*n))}function yp(i,t=1){return t-Math.abs(nh(i,t*2)-t)}function Mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wp(i,t){return i+Math.random()*(t-i)}function Ep(i){return i*(.5-Math.random())}function Tp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(i){return i*$r}function Rp(i){return i*dr}function Cp(i){return(i&i-1)===0&&i!==0}function Pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Of={DEG2RAD:$r,RAD2DEG:dr,generateUUID:Vn,clamp:Ze,euclideanModulo:nh,mapLinear:xp,inverseLerp:_p,lerp:Kr,damp:vp,pingpong:yp,smoothstep:Mp,smootherstep:Sp,randInt:bp,randFloat:wp,randFloatSpread:Ep,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Lp,normalize:fe,denormalize:zn},Ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],y=s[1],v=s[4],_=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*x+a*y+l*C,r[3]=o*m+a*v+l*E,r[6]=o*d+a*_+l*T,r[1]=c*x+h*y+u*C,r[4]=c*m+h*v+u*E,r[7]=c*d+h*_+u*T,r[2]=f*x+p*y+g*C,r[5]=f*m+p*v+g*E,r[8]=f*d+p*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},el=new Yt;function Bf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){let i=Qr("canvas");return i.style.display="block",i}var du={};function Xr(i){i in du||(du[i]=!0,console.warn(i))}function Np(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Up(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wi?Da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pu=[.64,.33,.3,.6,.15,.06],mu=[.2126,.7152,.0722],gu=[.3127,.329],xu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[tn]:{primaries:pu,whitePoint:gu,transfer:Da,toXYZ:xu,fromXYZ:_u,luminanceCoefficients:mu,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:pu,whitePoint:gu,transfer:de,toXYZ:xu,fromXYZ:_u,luminanceCoefficients:mu,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var Fs,xc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=Qr("canvas")),Fs.width=t.width,Fs.height=t.height;let n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,sa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bp=0,Ge=class i extends Zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=qe,o=An,a=dn,l=yi,c=i.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vn(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Ef;Ge.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,C=(d+1)/2,E=(h+f)/4,T=(u+x)/4,R=(g+m)/4;return v>_&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=R/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mi=class extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ra=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*x,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let C=Math.sqrt(v),E=Math.atan2(C,d*y);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let _=a*y;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new P,vu=new on,pn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),bo.subVectors(this.max,Nr),Os.subVectors(t.a,Nr),Bs.subVectors(t.b,Nr),ks.subVectors(t.c,Nr),Bi.subVectors(Bs,Os),ki.subVectors(ks,Bs),fs.subVectors(Os,ks);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-fs.z,fs.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,fs.z,0,-fs.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-fs.y,fs.x,0];return!sl(e,Os,Bs,ks,bo)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,Os,Bs,ks,bo))?!1:(wo.crossVectors(Bi,ki),e=[wo.x,wo.y,wo.z],sl(e,Os,Bs,ks,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,So=new pn,Os=new P,Bs=new P,ks=new P,Bi=new P,ki=new P,fs=new P,Nr=new P,bo=new P,wo=new P,ds=new P;function sl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kp=new pn,Ur=new P,rl=new P,vn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(rl)),this.expandByPoint(Ur.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new P,ol=new P,Eo=new P,zi=new P,al=new P,To=new P,ll=new P,pr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=zi.dot(this.direction),l=-zi.dot(Eo),c=zi.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(Eo,f),p}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){al.subVectors(e,t),To.subVectors(n,t),ll.crossVectors(al,To);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let l=a*this.direction.dot(To.crossVectors(zi,To));if(l<0)return null;let c=a*this.direction.dot(al.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Hp)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Hi.crossVectors(n,xn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Hi.crossVectors(n,xn)),Hi.normalize(),Ao.crossVectors(xn,Hi),s[0]=Hi.x,s[4]=Ao.x,s[8]=xn.x,s[1]=Hi.y,s[5]=Ao.y,s[9]=xn.y,s[2]=Hi.z,s[6]=Ao.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],y=n[3],v=n[7],_=n[11],C=n[15],E=s[0],T=s[4],R=s[8],b=s[12],M=s[1],I=s[5],B=s[9],O=s[13],H=s[2],$=s[6],W=s[10],it=s[14],F=s[3],Z=s[7],Q=s[11],yt=s[15];return r[0]=o*E+a*M+l*H+c*F,r[4]=o*T+a*I+l*$+c*Z,r[8]=o*R+a*B+l*W+c*Q,r[12]=o*b+a*O+l*it+c*yt,r[1]=h*E+u*M+f*H+p*F,r[5]=h*T+u*I+f*$+p*Z,r[9]=h*R+u*B+f*W+p*Q,r[13]=h*b+u*O+f*it+p*yt,r[2]=g*E+x*M+m*H+d*F,r[6]=g*T+x*I+m*$+d*Z,r[10]=g*R+x*B+m*W+d*Q,r[14]=g*b+x*O+m*it+d*yt,r[3]=y*E+v*M+_*H+C*F,r[7]=y*T+v*I+_*$+C*Z,r[11]=y*R+v*B+_*W+C*Q,r[15]=y*b+v*O+_*it+C*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],y=u*m*c-x*f*c+x*l*p-a*m*p-u*l*d+a*f*d,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,_=h*x*c-g*u*c+g*a*p-o*x*p-h*a*d+o*u*d,C=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,E=e*y+n*v+s*_+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=y*T,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*T,t[4]=v*T,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=_*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,y=l*c,v=l*h,_=l*u,C=n.x,E=n.y,T=n.z;return s[0]=(1-(x+d))*C,s[1]=(p+_)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(m-y)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let c=1/r,h=1/o,u=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_i){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===_i)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ia)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_i){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h,g,x;if(a===_i)g=(o+r)*u,x=-2*u;else if(a===ia)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new P,Bn=new Ut,zp=new P(0,0,0),Hp=new P(1,1,1),Hi=new P,Ao=new P,xn=new P,yu=new Ut,Mu=new on,Gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vp=0,Su=new P,Hs=new on,ui=new Ut,Ro=new P,Fr=new P,Gp=new P,Wp=new on,bu=new P(1,0,0),wu=new P(0,1,0),Eu=new P(0,0,1),Tu={type:"added"},Xp={type:"removed"},Vs={type:"childadded",child:null},cl={type:"childremoved",child:null},Ee=class i extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Gn,n=new on,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Yt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Fr,Ro,this.up):ui.lookAt(Ro,Fr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(ui),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new P,fi=new P,hl=new P,di=new P,Gs=new P,Ws=new P,Au=new P,ul=new P,fl=new P,dl=new P,pl=new ne,ml=new ne,gl=new ne,Xi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),fi.subVectors(n,e),hl.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(fi),l=kn.dot(hl),c=fi.dot(fi),h=fi.dot(hl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,n),gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),fi.subVectors(t,e),kn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Ws.subVectors(r,n),ul.subVectors(t,n);let l=Gs.dot(ul),c=Ws.dot(ul);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);let h=Gs.dot(fl),u=Ws.dot(fl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);dl.subVectors(t,r);let p=Gs.dot(dl),g=Ws.dot(dl);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ws,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Au.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Au,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=nh(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xl(o,r,t+1/3),this.g=xl(o,r,t),this.b=xl(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ee.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Ze(Ke.r*255,0,255))*65536+Math.round(Ze(Ke.g*255,0,255))*256+Math.round(Ze(Ke.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ae){ee.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Co);let n=Kr(Vi.h,Co.h,e),s=Kr(Vi.s,Co.s,e),r=Kr(Vi.l,Co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new vt;vt.NAMES=kf;var qp=0,an=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Vn(),this.name="",this.blending=nr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends an{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new P,Po=new Ot,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var aa=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var la=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=0,Tn=new Ut,_l=new Ee,Xs=new P,_n=new pn,Or=new pn,He=new P,me=class i extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bf(t)?la:aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(_n.min,Or.min),_n.expandByPoint(He),He.addVectors(_n.max,Or.max),_n.expandByPoint(He)):(_n.expandByPoint(Or.min),_n.expandByPoint(Or.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),He.add(Xs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,f=new Ot,p=new Ot,g=new Ot,x=new P,m=new P;function d(R,b,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(x),a[b].add(x),a[M].add(x),l[R].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,b=y.length;R<b;++R){let M=y[R],I=M.start,B=M.count;for(let O=I,H=I+B;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new P,_=new P,C=new P,E=new P;function T(R){C.fromBufferAttribute(s,R),E.copy(C);let b=a[R];v.copy(b),v.sub(C.multiplyScalar(C.dot(b))).normalize(),_.crossVectors(E,b);let I=_.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,b=y.length;R<b;++R){let M=y[R],I=M.start,B=M.count;for(let O=I,H=I+B;O<H;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ru=new Ut,ps=new pr,Io=new vn,Cu=new P,Lo=new P,Do=new P,No=new P,vl=new P,Uo=new P,Pu=new P,Fo=new P,oe=class extends Ee{constructor(t=new me,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(vl.fromBufferAttribute(u,t),o?Uo.addScaledVector(vl,h):Uo.addScaledVector(vl.sub(e),h))}e.add(Uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(Io.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Io,Cu)===null||ps.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=v;_<C;_+=3){let E=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);s=Oo(this,d,t,n,c,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Oo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=v;_<C;_+=3){let E=_,T=_+1,R=_+2;s=Oo(this,d,t,n,c,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let y=m,v=m+1,_=m+2;s=Oo(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $p(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Jn,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:i}}function Oo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Lo),i.getVertexPosition(l,Do),i.getVertexPosition(c,No);let h=$p(i,t,e,n,Lo,Do,No,Pu);if(h){let u=new P;Xi.getBarycoord(Pu,Lo,Do,No,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,u,new Ot)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,u,new Ot)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};Xi.getNormal(Lo,Do,No,f.normal),h.face=f,h.barycoord=u}return h}var yn=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(x,m,d,y,v,_,C,E,T,R,b){let M=_/T,I=C/R,B=_/2,O=C/2,H=E/2,$=T+1,W=R+1,it=0,F=0,Z=new P;for(let Q=0;Q<W;Q++){let yt=Q*I-O;for(let Et=0;Et<$;Et++){let Jt=Et*M-B;Z[x]=Jt*y,Z[m]=yt*v,Z[d]=H,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[d]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Et/T),u.push(1-Q/R),it+=1}}for(let Q=0;Q<R;Q++)for(let yt=0;yt<T;yt++){let Et=f+yt+$*Q,Jt=f+yt+$*(Q+1),K=f+(yt+1)+$*(Q+1),ot=f+(yt+1)+$*Q;l.push(Et,Jt,ot),l.push(Jt,K,ot),F+=6}a.addGroup(p,F,b),p+=F,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=mr(i[e]);for(let s in n)t[s]=n[s]}return t}function Kp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Sr={clone:mr,merge:rn},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends an{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ca=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new P,Iu=new Ot,Lu=new Ot,Ue=class extends ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Lu),e.subVectors(Lu,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Ys=1,yc=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(qs,Ys,t,e);s.layers=this.layers,this.add(s);let r=new Ue(qs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new Ue(qs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new Ue(qs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new Ue(qs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new Ue(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ha=class extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mc=class extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Yi});r.uniforms.tEquirect.value=e;let o=new oe(s,r),a=e.minFilter;return e.minFilter===An&&(e.minFilter=qe),new yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},yl=new P,jp=new P,Qp=new Yt,gi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yl.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new vn,Bo=new P,to=class{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+o,f+h,m+g,_+y).normalize(),n[3].setComponents(l-o,f-h,m-g,_-y).normalize(),n[4].setComponents(l-a,f-u,m-x,_-v).normalize(),e===_i)n[5].setComponents(l+a,f+u,m+x,_+v).normalize();else if(e===ia)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ji=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let v=0;v<c;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){let v=y+c*d,_=y+c*(d+1),C=y+1+c*(d+1),E=y+1+c*d;p.push(v,_,E),p.push(_,C,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,bg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Lg=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:fm,bsdfs:dm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:vm,color_fragment:ym,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:bm,common:wm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Ym,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:km,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:$m,lights_toon_pars_fragment:Km,lights_phong_fragment:Zm,lights_phong_pars_fragment:Jm,lights_physical_fragment:jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:f0,morphinstance_vertex:d0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:x0,normal_fragment_begin:_0,normal_fragment_maps:v0,normal_pars_fragment:y0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:L0,dithering_pars_fragment:D0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:O0,shadowmap_vertex:B0,shadowmask_pars_fragment:k0,skinbase_vertex:z0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:$0,transmission_pars_fragment:K0,uv_pars_fragment:Z0,uv_pars_vertex:J0,uv_vertex:j0,worldpos_vertex:Q0,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:fg,linedashed_frag:dg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:Sg,meshphong_frag:bg,meshphysical_vert:wg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Ig,sprite_vert:Lg,sprite_frag:Dg},ht={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:rn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:rn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:rn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:rn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:rn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:rn([ht.points,ht.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:rn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:rn([ht.common,ht.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:rn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:rn([ht.sprite,ht.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:rn([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:rn([ht.lights,ht.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ko={r:0,b:0,g:0},gs=new Gn,Ng=new Ut;function Ug(i,t,e,n,s,r,o){let a=new vt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?d(a,l):_&&_.isColor&&(d(_,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Ia)?(h===void 0&&(h=new oe(new yn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:mr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(v.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(gs)),h.material.toneMapped=ee.getTransfer(_.colorSpace)!==de,(u!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new oe(new Ji(2,2),new Qe({name:"BackgroundMaterial",uniforms:mr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(ko,zf(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:x,addToRenderList:m}}function Fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,I,B,O,H){let $=!1,W=u(O,B,I);r!==W&&(r=W,c(r.object)),$=p(M,O,B,H),$&&g(M,O,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(M,I,B,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,B){let O=B.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let $=H[I.id];$===void 0&&($={},H[I.id]=$);let W=$[O];return W===void 0&&(W=f(l()),$[O]=W),W}function f(M){let I=[],B=[],O=[];for(let H=0;H<e;H++)I[H]=0,B[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,I,B,O){let H=r.attributes,$=I.attributes,W=0,it=B.getAttributes();for(let F in it)if(it[F].location>=0){let Q=H[F],yt=$[F];if(yt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),Q===void 0||Q.attribute!==yt||yt&&Q.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(M,I,B,O){let H={},$=I.attributes,W=0,it=B.getAttributes();for(let F in it)if(it[F].location>=0){let Q=$[F];Q===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));let yt={};yt.attribute=Q,Q&&Q.data&&(yt.data=Q.data),H[F]=yt,W++}r.attributes=H,r.attributesNum=W,r.index=O}function x(){let M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){let B=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;B[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),H[M]!==I&&(i.vertexAttribDivisor(M,I),H[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let B=0,O=I.length;B<O;B++)I[B]!==M[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function v(M,I,B,O,H,$,W){W===!0?i.vertexAttribIPointer(M,I,B,H,$):i.vertexAttribPointer(M,I,B,O,H,$)}function _(M,I,B,O){x();let H=O.attributes,$=B.getAttributes(),W=I.defaultAttributeValues;for(let it in $){let F=$[it];if(F.location>=0){let Z=H[it];if(Z===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let Q=Z.normalized,yt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;let Jt=Et.buffer,K=Et.type,ot=Et.bytesPerElement,St=K===i.INT||K===i.UNSIGNED_INT||Z.gpuType===Kc;if(Z.isInterleavedBufferAttribute){let ft=Z.data,Y=ft.stride,ct=Z.offset;if(ft.isInstancedInterleavedBuffer){for(let Ct=0;Ct<F.locationSize;Ct++)d(F.location+Ct,ft.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ct=0;Ct<F.locationSize;Ct++)m(F.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ct=0;Ct<F.locationSize;Ct++)v(F.location+Ct,yt/F.locationSize,K,Q,Y*ot,(ct+yt/F.locationSize*Ct)*ot,St)}else{if(Z.isInstancedBufferAttribute){for(let ft=0;ft<F.locationSize;ft++)d(F.location+ft,Z.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ft=0;ft<F.locationSize;ft++)m(F.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let ft=0;ft<F.locationSize;ft++)v(F.location+ft,yt/F.locationSize,K,Q,yt*ot,yt/F.locationSize*ft*ot,St)}}else if(W!==void 0){let Q=W[it];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(F.location,Q);break;case 3:i.vertexAttrib3fv(F.location,Q);break;case 4:i.vertexAttrib4fv(F.location,Q);break;default:i.vertexAttrib1fv(F.location,Q)}}}}y()}function C(){R();for(let M in n){let I=n[M];for(let B in I){let O=I[B];for(let H in O)h(O[H].object),delete O[H];delete I[B]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let B in I){let O=I[B];for(let H in O)h(O[H].object),delete O[H];delete I[B]}delete n[M.id]}function T(M){for(let I in n){let B=n[I];if(B[M.id]===void 0)continue;let O=B[M.id];for(let H in O)h(O[H].object),delete O[H];delete B[M.id]}}function R(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Og(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==yi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:E}}function kg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,_=d.clippingState||null;l.value=_,_=h(g,f,v,p);for(let C=0;C!==v;++C)_[C]=e[C];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function zg(i){let t=new WeakMap;function e(o,a){return a===Vl?o.mapping=ar:a===Gl&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vl||a===Gl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Mc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var gr=class extends ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},er=4,Du=[.125,.215,.35,.446,.526,.582],ys=20,Ml=new gr,Nu=new vt,Sl=null,bl=0,wl=0,El=!1,_s=(1+Math.sqrt(5))/2,$s=1/_s,Uu=[new P(-_s,$s,0),new P(_s,$s,0),new P(-$s,0,_s),new P($s,0,_s),new P(0,_s,-$s),new P(0,_s,$s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,bl,wl),this._renderer.xr.enabled=El,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ao,format:dn,colorSpace:tn,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Vg(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,s){let a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Nu),h.toneMapping=$i,h.autoClear=!1;let p=new We({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new oe(new yn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Nu),x=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;zo(s,y*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ar||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uu[(s-r-1)%Uu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ys-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let d=[],y=0;for(let T=0;T<ys;++T){let R=T/x,b=Math.exp(-R*R/2);d.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],C=3*_*(s>v-er?s-v+er:0),E=4*(this._cubeSize-_);zo(e,C,E,3*_,2*_),l.setRenderTarget(e),l.render(u,Ml)}};function Hg(i){let t=[],e=[],n=[],s=i,r=i-er+1+Du.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-er?l=Du[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,R=E>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(b,x*g*E),v.set(f,m*g*E);let M=[E,E,E,E,E,E];_.set(M,d*g*E)}let C=new me;C.setAttribute("position",new pe(y,x)),C.setAttribute("uv",new pe(v,m)),C.setAttribute("faceIndex",new pe(_,d)),t.push(C),s>er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(i,t,e){let n=new Mi(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vg(i,t,e){let n=new Float32Array(ys),s=new P(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ou(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Bu(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function Gg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vl||l===Gl,h=l===ar||l===lr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new xr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let v=0,_=y.length;v<_;v+=3){let C=y[v+0],E=y[v+1],T=y[v+2];f.push(C,E,E,T,T,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let C=v+0,E=v+1,T=v+2;f.push(C,E,E,T,T,C)}}else return;let m=new(Bf(f)?la:aa)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*x[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){let n=new WeakMap,s=new ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*C*4*u),T=new ra(E,_,C,u);T.type=Hn,T.needsUpdate=!0;let R=v*4;for(let M=0;M<u;M++){let I=m[M],B=d[M],O=y[M],H=_*C*4*M;for(let $=0;$<I.count;$++){let W=$*R;p===!0&&(s.fromBufferAttribute(I,$),E[H+W+0]=s.x,E[H+W+1]=s.y,E[H+W+2]=s.z,E[H+W+3]=0),g===!0&&(s.fromBufferAttribute(B,$),E[H+W+4]=s.x,E[H+W+5]=s.y,E[H+W+6]=s.z,E[H+W+7]=0),x===!0&&(s.fromBufferAttribute(O,$),E[H+W+8]=s.x,E[H+W+9]=s.y,E[H+W+10]=s.z,E[H+W+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Ot(_,C)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Kg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ua=class extends Ge{constructor(t,e,n,s,r,o,a,l,c,h=ir){if(h!==ir&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=Ms),n===void 0&&h===hr&&(n=cr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vf=new Ge,ku=new ua(1,1),Gf=new ra,Wf=new vc,Xf=new ha,zu=[],Hu=[],Vu=new Float32Array(16),Gu=new Float32Array(9),Wu=new Float32Array(4);function br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=Hu[t];e===void 0&&(e=new Int32Array(t),Hu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Wu.set(n),i.uniformMatrix2fv(this.addr,!1,Wu),Oe(e,n)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Gu.set(n),i.uniformMatrix3fv(this.addr,!1,Gu),Oe(e,n)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),Oe(e,n)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ku.compareFunction=Ff,r=ku):r=Vf,e.setTexture2D(t||r,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wf,s)}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xf,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gf,s)}function mx(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return jg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,t){i.uniform1fv(this.addr,t)}function xx(i,t){let e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function _x(i,t){let e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function vx(i,t){let e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function yx(i,t){let e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){let e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sx(i,t){let e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function Ex(i,t){i.uniform3iv(this.addr,t)}function Tx(i,t){i.uniform4iv(this.addr,t)}function Ax(i,t){i.uniform1uiv(this.addr,t)}function Rx(i,t){i.uniform2uiv(this.addr,t)}function Cx(i,t){i.uniform3uiv(this.addr,t)}function Px(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vf,r[o])}function Lx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wf,r[o])}function Dx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xf,r[o])}function Nx(i,t,e){let n=this.cache,s=t.length,r=Na(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gf,r[o])}function Ux(i){switch(i){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}var Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}},bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}},wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function Xu(i,t){i.seq.push(t),i.map[t.id]=t}function Fx(i,t,e){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xu(e,c===void 0?new Sc(a,i,t):new bc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wc(a),Xu(e,u)),e=u}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ox=37297,Bx=0;function kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Yu=new Yt;function zx(i){ee._getMatrix(Yu,ee.workingColorSpace,i);let t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Da:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $u(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kx(i.getShaderSource(t),o)}else return s}function Hx(i,t){let e=zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vx(i,t){let e;switch(t){case Qd:e="Linear";break;case tp:e="Reinhard";break;case ep:e="Cineon";break;case Yc:e="ACESFilmic";break;case ip:e="AgX";break;case sp:e="Neutral";break;case np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ho=new P;function Gx(){ee.getLuminanceCoefficients(Ho);let i=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Xx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qr(i){return i!==""}function Ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(Yx,Kx)}var $x=new Map;function Kx(i,t){let e=Kt[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(Zx,Jx)}function Jx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function jx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Qx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case lr:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===lr&&(t="ENVMAP_MODE_REFRACTION"),t}function e_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jd:t="ENVMAP_BLENDING_MIX";break;case jd:t="ENVMAP_BLENDING_ADD";break}return t}function n_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function i_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jx(e),c=Qx(e),h=t_(e),u=e_(e),f=n_(e),p=Wx(e),g=Xx(r),x=s.createProgram(),m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),d.length>0&&(d+=`
`)):(m=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),d=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Kt.tonemapping_pars_fragment:"",e.toneMapping!==$i?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Hx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Ec(o),o=Ku(o,e),o=Zu(o,e),a=Ec(a),a=Ku(a,e),a=Zu(a,e),o=Ju(o),a=Ju(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=y+m+o,_=y+d+a,C=qu(s,s.VERTEX_SHADER,v),E=qu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,C),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(E).trim(),$=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,E);else{let it=$u(s,C,"vertex"),F=$u(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+it+`
`+F)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(C),s.deleteShader(E),R=new rr(s,x),b=qx(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ox)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var s_=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ac(t),e.set(t,n)),n}},Ac=class{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}};function r_(i,t,e,n,s,r,o){let a=new oa,l=new Tc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,B,O){let H=B.fog,$=O.geometry,W=b.isMeshStandardMaterial?B.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),F=it&&it.mapping===Ia?it.image.height:null,Z=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,yt=Q!==void 0?Q.length:0,Et=0;$.morphAttributes.position!==void 0&&(Et=1),$.morphAttributes.normal!==void 0&&(Et=2),$.morphAttributes.color!==void 0&&(Et=3);let Jt,K,ot,St;if(Z){let se=Zn[Z];Jt=se.vertexShader,K=se.fragmentShader}else Jt=b.vertexShader,K=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);let ft=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ct=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,$t=!!b.map,Vt=!!b.matcap,ue=!!it,D=!!b.aoMap,ge=!!b.lightMap,Gt=!!b.bumpMap,zt=!!b.normalMap,Pt=!!b.displacementMap,xe=!!b.emissiveMap,Lt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,z=b.clearcoat>0,j=b.dispersion>0,nt=b.iridescence>0,J=b.sheen>0,Tt=b.transmission>0,dt=S&&!!b.anisotropyMap,gt=z&&!!b.clearcoatMap,Qt=z&&!!b.clearcoatNormalMap,st=z&&!!b.clearcoatRoughnessMap,xt=nt&&!!b.iridescenceMap,Dt=nt&&!!b.iridescenceThicknessMap,Nt=J&&!!b.sheenColorMap,_t=J&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,Ht=!!b.specularColorMap,ae=!!b.specularIntensityMap,L=Tt&&!!b.transmissionMap,lt=Tt&&!!b.thicknessMap,X=!!b.gradientMap,k=!!b.alphaMap,et=b.alphaTest>0,at=!!b.alphaHash,bt=!!b.extensions,kt=$i;b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Me={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Jt,fragmentShader:K,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:tn,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Vt,envMap:ue,envMapMode:ue&&it.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:ge,bumpMap:Gt,normalMap:zt,displacementMap:f&&Pt,emissiveMap:xe,normalMapObjectSpace:zt&&b.normalMapType===cp,normalMapTangentSpace:zt&&b.normalMapType===eh,metalnessMap:Lt,roughnessMap:A,anisotropy:S,anisotropyMap:dt,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:st,dispersion:j,iridescence:nt,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:J,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:ae,transmission:Tt,transmissionMap:L,thicknessMap:lt,gradientMap:X,opaque:b.transparent===!1&&b.blending===nr&&b.alphaToCoverage===!1,alphaMap:k,alphaTest:et,alphaHash:at,combine:b.combine,mapUv:$t&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:ge&&x(b.lightMap.channel),bumpMapUv:Gt&&x(b.bumpMap.channel),normalMapUv:zt&&x(b.normalMap.channel),displacementMapUv:Pt&&x(b.displacementMap.channel),emissiveMapUv:xe&&x(b.emissiveMap.channel),metalnessMapUv:Lt&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(b.sheenRoughnessMap.channel),specularMapUv:Zt&&x(b.specularMap.channel),specularColorMapUv:Ht&&x(b.specularColorMap.channel),specularIntensityMapUv:ae&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:k&&x(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(zt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&($t||k),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Y,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function d(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],I;if(M){let B=Zn[M];I=Sr.clone(B.uniforms)}else I=b.uniforms;return I}function C(b,M){let I;for(let B=0,O=h.length;B<O;B++){let H=h[B];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new i_(i,M,b,r),h.push(I)),I}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function o_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(f||Qu),s.length>1&&s.sort(f||Qu)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function l_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new tf,i.set(n,[o])):s>=r.length?(o=new tf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new vt};break;case"SpotLight":e={position:new P,direction:new P,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function h_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var u_=0;function f_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d_(i){let t=new c_,e=h_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ut,o=new Ut;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,y=0,v=0,_=0,C=0,E=0,T=0;c.sort(f_);for(let b=0,M=c.length;b<M;b++){let I=c[b],B=I.color,O=I.intensity,H=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*O,u+=B.g*O,f+=B.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);T++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,F=e.get(I);F.shadowIntensity=it.intensity,F.shadowBias=it.bias,F.shadowNormalBias=it.normalBias,F.shadowRadius=it.radius,F.shadowMapSize=it.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let it=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,it.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[x]=it.matrix,I.castShadow){let F=e.get(I);F.shadowIntensity=it.intensity,F.shadowBias=it.bias,F.shadowNormalBias=it.normalBias,F.shadowRadius=it.radius,F.shadowMapSize=it.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=$,_++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let it=I.shadow,F=e.get(I);F.shadowIntensity=it.intensity,F.shadowBias=it.bias,F.shadowNormalBias=it.normalBias,F.shadowRadius=it.radius,F.shadowMapSize=it.mapSize,F.shadowCameraNear=it.camera.near,F.shadowCameraFar=it.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=C,R.numLightProbes=T,n.version=u_++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let v=c[d];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ef(i){let t=new d_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function p_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ef(i),t.set(s,[a])):r>=o.length?(a=new ef(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Rc=class extends an{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cc=class extends an{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function x_(i,t,e){let n=new to,s=new Ot,r=new Ot,o=new ne,a=new Rc({depthPacking:lp}),l=new Cc,c={},h=e.maxTextureSize,u={[Jn]:Je,[Je]:Jn,[Ve]:Ve},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let d=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Yi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=d!==mi&&this.type===mi,H=d===mi&&this.type!==mi;for(let $=0,W=E.length;$<W;$++){let it=E[$],F=it.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Z=F.getFrameExtents();if(s.multiply(Z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y)),F.map===null||O===!0||H===!0){let yt=this.type!==mi?{minFilter:je,magFilter:je}:{};F.map!==null&&F.map.dispose(),F.map=new Mi(s.x,s.y,yt),F.map.texture.name=it.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let Q=F.getViewportCount();for(let yt=0;yt<Q;yt++){let Et=F.getViewport(yt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),B.viewport(o),F.updateMatrices(it,yt),n=F.getFrustum(),_(T,R,F.camera,it,this.type)}F.isPointLightShadow!==!0&&this.type===mi&&y(F,R),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,I)};function y(E,T){let R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,p,x,null)}function v(E,T,R,b){let M=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=M.uuid,O=T.uuid,H=c[B];H===void 0&&(H={},c[B]=H);let $=H[O];$===void 0&&($=M.clone(),H[O]=$,T.addEventListener("dispose",C)),M=$}if(M.visible=T.visible,M.wireframe=T.wireframe,b===mi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=R}return M}function _(E,T,R,b,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let O=t.update(E),H=E.material;if(Array.isArray(H)){let $=O.groups;for(let W=0,it=$.length;W<it;W++){let F=$[W],Z=H[F.materialIndex];if(Z&&Z.visible){let Q=v(E,Z,b,M);E.onBeforeShadow(i,E,T,R,O,Q,F),i.renderBufferDirect(R,null,O,Q,E,F),E.onAfterShadow(i,E,T,R,O,Q,F)}}}else if(H.visible){let $=v(E,H,b,M);E.onBeforeShadow(i,E,T,R,O,$,null),i.renderBufferDirect(R,null,O,$,E,null),E.onAfterShadow(i,E,T,R,O,$,null)}}let B=E.children;for(let O=0,H=B.length;O<H;O++)_(B[O],T,R,b,M)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let b=c[R],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var __={[Ul]:Fl,[Ol]:zl,[Bl]:Hl,[or]:kl,[Fl]:Ul,[zl]:Ol,[Hl]:Bl,[kl]:or};function v_(i,t){function e(){let L=!1,lt=new ne,X=null,k=new ne(0,0,0,0);return{setMask:function(et){X!==et&&!L&&(i.colorMask(et,et,et,et),X=et)},setLocked:function(et){L=et},setClear:function(et,at,bt,kt,Me){Me===!0&&(et*=kt,at*=kt,bt*=kt),lt.set(et,at,bt,kt),k.equals(lt)===!1&&(i.clearColor(et,at,bt,kt),k.copy(lt))},reset:function(){L=!1,X=null,k.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,X=null,k=null,et=null;return{setReversed:function(at){if(lt!==at){let bt=t.get("EXT_clip_control");lt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT);let kt=et;et=null,this.setClear(kt)}lt=at},getReversed:function(){return lt},setTest:function(at){at?ft(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(at){X!==at&&!L&&(i.depthMask(at),X=at)},setFunc:function(at){if(lt&&(at=__[at]),k!==at){switch(at){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=at}},setLocked:function(at){L=at},setClear:function(at){et!==at&&(lt&&(at=1-at),i.clearDepth(at),et=at)},reset:function(){L=!1,X=null,k=null,et=null,lt=!1}}}function s(){let L=!1,lt=null,X=null,k=null,et=null,at=null,bt=null,kt=null,Me=null;return{setTest:function(se){L||(se?ft(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(se){lt!==se&&!L&&(i.stencilMask(se),lt=se)},setFunc:function(se,nn,hn){(X!==se||k!==nn||et!==hn)&&(i.stencilFunc(se,nn,hn),X=se,k=nn,et=hn)},setOp:function(se,nn,hn){(at!==se||bt!==nn||kt!==hn)&&(i.stencilOp(se,nn,hn),at=se,bt=nn,kt=hn)},setLocked:function(se){L=se},setClear:function(se){Me!==se&&(i.clearStencil(se),Me=se)},reset:function(){L=!1,lt=null,X=null,k=null,et=null,at=null,bt=null,kt=null,Me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,y=null,v=null,_=null,C=null,E=null,T=new vt(0,0,0),R=0,b=!1,M=null,I=null,B=null,O=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=it>=1):F.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=it>=2);let Z=null,Q={},yt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Jt=new ne().fromArray(yt),K=new ne().fromArray(Et);function ot(L,lt,X,k){let et=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<X;bt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(lt+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return at}let St={};St[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(or),Gt(!1),zt(iu),ft(i.CULL_FACE),D(Yi);function ft(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Y(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ct(L,lt){return u[L]!==lt?(i.bindFramebuffer(L,lt),u[L]=lt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ct(L,lt){let X=p,k=!1;if(L){X=f.get(lt),X===void 0&&(X=[],f.set(lt,X));let et=L.textures;if(X.length!==et.length||X[0]!==i.COLOR_ATTACHMENT0){for(let at=0,bt=et.length;at<bt;at++)X[at]=i.COLOR_ATTACHMENT0+at;X.length=et.length,k=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,k=!0);k&&i.drawBuffers(X)}function $t(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Vt={[vs]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};Vt[Fd]=i.MIN,Vt[Od]=i.MAX;let ue={[Bd]:i.ZERO,[kd]:i.ONE,[zd]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Zd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,lt,X,k,et,at,bt,kt,Me,se){if(L===Yi){x===!0&&(Y(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),L!==Dd){if(L!==m||se!==b){if((d!==vs||_!==vs)&&(i.blendEquation(i.FUNC_ADD),d=vs,_=vs),se)switch(L){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,C=null,E=null,T.set(0,0,0),R=0,m=L,b=se}return}et=et||lt,at=at||X,bt=bt||k,(lt!==d||et!==_)&&(i.blendEquationSeparate(Vt[lt],Vt[et]),d=lt,_=et),(X!==y||k!==v||at!==C||bt!==E)&&(i.blendFuncSeparate(ue[X],ue[k],ue[at],ue[bt]),y=X,v=k,C=at,E=bt),(kt.equals(T)===!1||Me!==R)&&(i.blendColor(kt.r,kt.g,kt.b,Me),T.copy(kt),R=Me),m=L,b=!1}function ge(L,lt){L.side===Ve?Y(i.CULL_FACE):ft(i.CULL_FACE);let X=L.side===Je;lt&&(X=!X),Gt(X),L.blending===nr&&L.transparent===!1?D(Yi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let k=L.stencilWrite;a.setTest(k),k&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function zt(L){L!==Id?(ft(i.CULL_FACE),L!==I&&(L===iu?i.cullFace(i.BACK):L===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),I=L}function Pt(L){L!==B&&(W&&i.lineWidth(L),B=L)}function xe(L,lt,X){L?(ft(i.POLYGON_OFFSET_FILL),(O!==lt||H!==X)&&(i.polygonOffset(lt,X),O=lt,H=X)):Y(i.POLYGON_OFFSET_FILL)}function Lt(L){L?ft(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+$-1),Z!==L&&(i.activeTexture(L),Z=L)}function S(L,lt,X){X===void 0&&(Z===null?X=i.TEXTURE0+$-1:X=Z);let k=Q[X];k===void 0&&(k={type:void 0,texture:void 0},Q[X]=k),(k.type!==L||k.texture!==lt)&&(Z!==X&&(i.activeTexture(X),Z=X),i.bindTexture(L,lt||St[L]),k.type=L,k.texture=lt)}function z(){let L=Q[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Jt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Jt.copy(L))}function _t(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Zt(L,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let k=X.get(L);k===void 0&&(k=i.getUniformBlockIndex(lt,L.name),X.set(L,k))}function Ht(L,lt){let k=c.get(lt).get(L);l.get(lt)!==k&&(i.uniformBlockBinding(lt,k,L.__bindingPointIndex),l.set(lt,k))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,Q={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,y=null,v=null,_=null,C=null,E=null,T=new vt(0,0,0),R=0,b=!1,M=null,I=null,B=null,O=null,H=null,Jt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Y,bindFramebuffer:ct,drawBuffers:Ct,useProgram:$t,setBlending:D,setMaterial:ge,setFlipSided:Gt,setCullFace:zt,setLineWidth:Pt,setPolygonOffset:xe,setScissorTest:Lt,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Qt,texStorage3D:st,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:gt,scissor:Nt,viewport:_t,reset:ae}}function nf(i,t,e,n){let s=y_(n);switch(e){case Cf:return i*t;case If:return i*t;case Lf:return i*t*2;case lo:return i*t/s.components*s.byteLength;case jc:return i*t/s.components*s.byteLength;case Df:return i*t*2/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case Pf:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case th:return i*t*4/s.components*s.byteLength;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case $l:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case na:case uc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nf:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function y_(i){switch(i){case yi:case Tf:return{byteLength:1,components:1};case jr:case Af:case ao:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case Ms:case Kc:case Hn:return{byteLength:4,components:1};case Rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Qr("canvas")}function x(A,S,z){let j=1,nt=Lt(A);if((nt.width>z||nt.height>z)&&(j=z/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(j*nt.width),Tt=Math.floor(j*nt.height);u===void 0&&(u=g(J,Tt));let dt=S?g(J,Tt):u;return dt.width=J,dt.height=Tt,dt.getContext("2d").drawImage(A,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Tt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,S,z,j,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),S===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let Tt=nt?Da:ee.getTransfer(j);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Tt===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,S){let z;return A?S===null||S===Ms||S===cr?z=i.DEPTH24_STENCIL8:S===Hn?z=i.DEPTH32F_STENCIL8:S===jr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ms||S===cr?z=i.DEPTH_COMPONENT24:S===Hn?z=i.DEPTH_COMPONENT32F:S===jr&&(z=i.DEPTH_COMPONENT16),z}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==je&&A.minFilter!==qe?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){let S=A.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),M(S)}function R(A){let S=n.get(A);if(S.__webglInit===void 0)return;let z=A.source,j=f.get(z);if(j){let nt=j[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(A),Object.keys(j).length===0&&f.delete(z)}n.remove(A)}function b(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let z=A.source,j=f.get(z);delete j[S.__cacheKey],o.memory.textures--}function M(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let nt=0;nt<S.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=A.textures;for(let j=0,nt=z.length;j<nt;j++){let J=n.get(z[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(A)}let I=0;function B(){I=0}function O(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function H(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){let z=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,A,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function W(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function it(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function F(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ot(z,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let Z={[jn]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},Q={[je]:i.NEAREST,[$c]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},yt={[hp]:i.NEVER,[gp]:i.ALWAYS,[up]:i.LESS,[Ff]:i.LEQUAL,[fp]:i.EQUAL,[mp]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function Et(A,S){if(S.type===Hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===qe||S.magFilter===Yr||S.magFilter===tr||S.magFilter===An||S.minFilter===qe||S.minFilter===Yr||S.minFilter===tr||S.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Q[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==tr&&S.minFilter!==An||S.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let j=S.source,nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));let J=H(S);if(J!==A.__cacheKey){nt[J]===void 0&&(nt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),nt[J].usedTimes++;let Tt=nt[A.__cacheKey];Tt!==void 0&&(nt[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(S)),A.__cacheKey=J,A.__webglTexture=nt[J].texture}return z}function K(A,S,z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Jt(A,S),J=S.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+z);let Tt=n.get(J);if(J.version!==Tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let dt=ee.getPrimaries(ee.workingColorSpace),gt=S.colorSpace===Wi?null:ee.getPrimaries(S.colorSpace),Qt=S.colorSpace===Wi||dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let st=x(S.image,!1,s.maxTextureSize);st=xe(S,st);let xt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),Nt=v(S.internalFormat,xt,Dt,S.colorSpace,S.isVideoTexture);Et(j,S);let _t,Zt=S.mipmaps,Ht=S.isVideoTexture!==!0,ae=Tt.__version===void 0||nt===!0,L=J.dataReady,lt=C(S,st);if(S.isDepthTexture)Nt=_(S.format===hr,S.type),ae&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,xt,Dt,null));else if(S.isDataTexture)if(Zt.length>0){Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,Zt[0].width,Zt[0].height);for(let X=0,k=Zt.length;X<k;X++)_t=Zt[X],Ht?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,X,Nt,_t.width,_t.height,0,xt,Dt,_t.data);S.generateMipmaps=!1}else Ht?(ae&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,st.width,st.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,xt,Dt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,xt,Dt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Nt,Zt[0].width,Zt[0].height,st.depth);for(let X=0,k=Zt.length;X<k;X++)if(_t=Zt[X],S.format!==dn)if(xt!==null)if(Ht){if(L)if(S.layerUpdates.size>0){let et=nf(_t.width,_t.height,S.format,S.type);for(let at of S.layerUpdates){let bt=_t.data.subarray(at*et/_t.data.BYTES_PER_ELEMENT,(at+1)*et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,at,_t.width,_t.height,1,xt,bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,st.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Nt,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,st.depth,xt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Nt,_t.width,_t.height,st.depth,0,xt,Dt,_t.data)}else{Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,Zt[0].width,Zt[0].height);for(let X=0,k=Zt.length;X<k;X++)_t=Zt[X],S.format!==dn?xt!==null?Ht?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,X,Nt,_t.width,_t.height,0,xt,Dt,_t.data)}else if(S.isDataArrayTexture)if(Ht){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Nt,st.width,st.height,st.depth),L)if(S.layerUpdates.size>0){let X=nf(st.width,st.height,S.format,S.type);for(let k of S.layerUpdates){let et=st.data.subarray(k*X/st.data.BYTES_PER_ELEMENT,(k+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,st.width,st.height,1,xt,Dt,et)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(S.isData3DTexture)Ht?(ae&&e.texStorage3D(i.TEXTURE_3D,lt,Nt,st.width,st.height,st.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Dt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,st.width,st.height,st.depth,0,xt,Dt,st.data);else if(S.isFramebufferTexture){if(ae)if(Ht)e.texStorage2D(i.TEXTURE_2D,lt,Nt,st.width,st.height);else{let X=st.width,k=st.height;for(let et=0;et<lt;et++)e.texImage2D(i.TEXTURE_2D,et,Nt,X,k,0,xt,Dt,null),X>>=1,k>>=1}}else if(Zt.length>0){if(Ht&&ae){let X=Lt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Nt,X.width,X.height)}for(let X=0,k=Zt.length;X<k;X++)_t=Zt[X],Ht?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,Dt,_t):e.texImage2D(i.TEXTURE_2D,X,Nt,xt,Dt,_t);S.generateMipmaps=!1}else if(Ht){if(ae){let X=Lt(st);e.texStorage2D(i.TEXTURE_2D,lt,Nt,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,st)}else e.texImage2D(i.TEXTURE_2D,0,Nt,xt,Dt,st);m(S)&&d(j),Tt.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ot(A,S,z){if(S.image.length!==6)return;let j=Jt(A,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let J=n.get(nt);if(nt.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let Tt=ee.getPrimaries(ee.workingColorSpace),dt=S.colorSpace===Wi?null:ee.getPrimaries(S.colorSpace),gt=S.colorSpace===Wi||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let k=0;k<6;k++)!Qt&&!st?xt[k]=x(S.image[k],!0,s.maxCubemapSize):xt[k]=st?S.image[k].image:S.image[k],xt[k]=xe(S,xt[k]);let Dt=xt[0],Nt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Zt=v(S.internalFormat,Nt,_t,S.colorSpace),Ht=S.isVideoTexture!==!0,ae=J.__version===void 0||j===!0,L=nt.dataReady,lt=C(S,Dt);Et(i.TEXTURE_CUBE_MAP,S);let X;if(Qt){Ht&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,Dt.width,Dt.height);for(let k=0;k<6;k++){X=xt[k].mipmaps;for(let et=0;et<X.length;et++){let at=X[et];S.format!==dn?Nt!==null?Ht?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,0,0,at.width,at.height,Nt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,Zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,0,0,at.width,at.height,Nt,_t,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et,Zt,at.width,at.height,0,Nt,_t,at.data)}}}else{if(X=S.mipmaps,Ht&&ae){X.length>0&&lt++;let k=Lt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,k.width,k.height)}for(let k=0;k<6;k++)if(st){Ht?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,xt[k].width,xt[k].height,Nt,_t,xt[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Zt,xt[k].width,xt[k].height,0,Nt,_t,xt[k].data);for(let et=0;et<X.length;et++){let bt=X[et].image[k].image;Ht?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,0,0,bt.width,bt.height,Nt,_t,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,Zt,bt.width,bt.height,0,Nt,_t,bt.data)}}else{Ht?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Nt,_t,xt[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Zt,Nt,_t,xt[k]);for(let et=0;et<X.length;et++){let at=X[et];Ht?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,0,0,Nt,_t,at.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,et+1,Zt,Nt,_t,at.image[k])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function St(A,S,z,j,nt,J){let Tt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),gt=v(z.internalFormat,Tt,dt,z.colorSpace),Qt=n.get(S),st=n.get(z);if(st.__renderTarget=S,!Qt.__hasExternalTextures){let xt=Math.max(1,S.width>>J),Dt=Math.max(1,S.height>>J);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,gt,xt,Dt,S.depth,0,Tt,dt,null):e.texImage2D(nt,J,gt,xt,Dt,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,st.__webglTexture,0,Gt(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,st.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let j=S.depthTexture,nt=j&&j.isDepthTexture?j.type:null,J=_(S.stencilBuffer,nt),Tt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Gt(S);zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,J,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,A)}else{let j=S.textures;for(let nt=0;nt<j.length;nt++){let J=j[nt],Tt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),gt=v(J.internalFormat,Tt,dt,J.colorSpace),Qt=Gt(S);z&&zt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,gt,S.width,S.height):zt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);let nt=j.__webglTexture,J=Gt(S);if(S.depthTexture.format===ir)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(S.depthTexture.format===hr)zt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ct(A){let S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Y(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ft(S.__webglDepthbuffer[j],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ft(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,S,z){let j=n.get(A);S!==void 0&&St(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ct(A)}function $t(A){let S=A.texture,z=n.get(A),j=n.get(S);A.addEventListener("dispose",T);let nt=A.textures,J=A.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let gt=0;gt<S.mipmaps.length;gt++)z.__webglFramebuffer[dt][gt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,gt=nt.length;dt<gt;dt++){let Qt=n.get(nt[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&zt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){let gt=nt[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Qt=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),xt=v(gt.internalFormat,Qt,st,gt.colorSpace,A.isXRRenderTarget===!0),Dt=Gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Et(i.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(z.__webglFramebuffer[dt][gt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else St(z.__webglFramebuffer[dt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,gt=nt.length;dt<gt;dt++){let Qt=nt[dt],st=n.get(Qt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Et(i.TEXTURE_2D,Qt),St(z.__webglFramebuffer,A,Qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),Et(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(z.__webglFramebuffer[gt],A,S,i.COLOR_ATTACHMENT0,dt,gt);else St(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,dt,0);m(S)&&d(dt),e.unbindTexture()}A.depthBuffer&&ct(A)}function Vt(A){let S=A.textures;for(let z=0,j=S.length;z<j;z++){let nt=S[z];if(m(nt)){let J=y(A),Tt=n.get(nt).__webglTexture;e.bindTexture(J,Tt),d(J),e.unbindTexture()}}}let ue=[],D=[];function ge(A){if(A.samples>0){if(zt(A)===!1){let S=A.textures,z=A.width,j=A.height,nt=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(A),dt=S.length>1;if(dt)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);let Qt=n.get(S[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,nt,i.NEAREST),l===!0&&(ue.length=0,D.length=0,ue.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);let Qt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function xe(A,S){let z=A.colorSpace,j=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==tn&&z!==Wi&&(ee.getTransfer(z)===de?(j!==dn||nt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Lt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=F,this.rebindTextures=Ct,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=zt}function S_(i,t){function e(n,s=Wi){let r,o=ee.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return i.BYTE;if(n===Af)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ao)return i.HALF_FLOAT;if(n===Cf)return i.ALPHA;if(n===Pf)return i.RGB;if(n===dn)return i.RGBA;if(n===If)return i.LUMINANCE;if(n===Lf)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===Df)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===th)return i.RGBA_INTEGER;if(n===jo||n===Qo||n===ta||n===ea)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Kl||n===Zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Kl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===uc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nf||n===dc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pc=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Re=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},b_={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Zi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=new Ic,m=e.getContextAttributes(),d=null,y=null,v=[],_=[],C=new Ot,E=null,T=new Ue;T.viewport=new ne;let R=new Ue;R.viewport=new ne;let b=[T,R],M=new Pc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=v[K];return ot===void 0&&(ot=new Zr,v[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=v[K];return ot===void 0&&(ot=new Zr,v[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=v[K];return ot===void 0&&(ot=new Zr,v[K]=ot),ot.getHandSpace()};function O(K){let ot=_.indexOf(K.inputSource);if(ot===-1)return;let St=v[ot];St!==void 0&&(St.update(K.inputSource,K.frame,c||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let K=0;K<v.length;K++){let ot=_[K];ot!==null&&(_[K]=null,v[K].disconnect(ot))}I=null,B=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Mi(p.framebufferWidth,p.framebufferHeight,{format:dn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,St=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?hr:ir,St=m.stencil?cr:Ms);let Y={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Mi(f.textureWidth,f.textureHeight,{format:dn,type:yi,depthTexture:new ua(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(K){for(let ot=0;ot<K.removed.length;ot++){let St=K.removed[ot],ft=_.indexOf(St);ft>=0&&(_[ft]=null,v[ft].disconnect(St))}for(let ot=0;ot<K.added.length;ot++){let St=K.added[ot],ft=_.indexOf(St);if(ft===-1){for(let ct=0;ct<v.length;ct++)if(ct>=_.length){_.push(St),ft=ct;break}else if(_[ct]===null){_[ct]=St,ft=ct;break}if(ft===-1)break}let Y=v[ft];Y&&Y.connect(St)}}let W=new P,it=new P;function F(K,ot,St){W.setFromMatrixPosition(ot.matrixWorld),it.setFromMatrixPosition(St.matrixWorld);let ft=W.distanceTo(it),Y=ot.projectionMatrix.elements,ct=St.projectionMatrix.elements,Ct=Y[14]/(Y[10]-1),$t=Y[14]/(Y[10]+1),Vt=(Y[9]+1)/Y[5],ue=(Y[9]-1)/Y[5],D=(Y[8]-1)/Y[0],ge=(ct[8]+1)/ct[0],Gt=Ct*D,zt=Ct*ge,Pt=ft/(-D+ge),xe=Pt*-D;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xe),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Y[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Lt=Ct+Pt,A=$t+Pt,S=Gt-xe,z=zt+(ft-xe),j=Vt*$t/A*Lt,nt=ue*$t/A*Lt;K.projectionMatrix.makePerspective(S,z,j,nt,Lt,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Z(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,St=K.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(St=x.depthFar)),M.near=R.near=T.near=ot,M.far=R.far=T.far=St,(I!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;let ft=K.parent,Y=M.cameras;Z(M,ft);for(let ct=0;ct<Y.length;ct++)Z(Y[ct],ft);Y.length===2?F(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Q(K,M,ft)};function Q(K,ot,St){St===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=dr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function Et(K,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ft=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let ct=0;ct<St.length;ct++){let Ct=St[ct],$t=null;if(p!==null)$t=p.getViewport(Ct);else{let ue=u.getViewSubImage(f,Ct);$t=ue.viewport,ct===0&&(t.setRenderTargetTextures(y,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(y))}let Vt=b[ct];Vt===void 0&&(Vt=new Ue,Vt.layers.enable(ct),Vt.viewport=new ne,b[ct]=Vt),Vt.matrix.fromArray(Ct.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ct.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set($t.x,$t.y,$t.width,$t.height),ct===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(Vt)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let ct=u.getDepthInformation(St[0]);ct&&ct.isValid&&ct.texture&&x.init(t,ct,s.renderState)}}for(let St=0;St<v.length;St++){let ft=_[St],Y=v[St];ft!==null&&Y!==void 0&&Y.update(ft,ot,c||o)}yt&&yt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let Jt=new Hf;Jt.setAnimationLoop(Et),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}},xs=new Gn,T_=new Ut;function A_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,zf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=t.get(d),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,xs.copy(_),xs.x*=-1,xs.y*=-1,xs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(xs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(y,C);let E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let v=u();y.__bindingPointIndex=v;let _=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){let R=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=R.length;b<M;b++){let I=R[b];if(p(I,E,b,C)===!0){let B=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],H=0;for(let $=0;$<O.length;$++){let W=O[$],it=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,_,C){let E=y.value,T=v+"_"+_;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){let v=y.uniforms,_=0,C=16;for(let T=0,R=v.length;T<R;T++){let b=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,I=b.length;M<I;M++){let B=b[M],O=Array.isArray(B.value)?B.value:[B.value];for(let H=0,$=O.length;H<$;H++){let W=O[H],it=x(W),F=_%C,Z=F%it.boundary,Q=F+Z;_+=Z,Q!==0&&C-Q<it.storage&&(_+=C-Q),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=it.storage}}}let E=_%C;return E>0&&(_+=C-E),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var fa=class{constructor(t={}){let{canvas:e=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=$i,this.toneMappingExposure=1;let _=this,C=!1,E=0,T=0,R=null,b=-1,M=null,I=new ne,B=new ne,O=null,H=new vt(0),$=0,W=e.width,it=e.height,F=1,Z=null,Q=null,yt=new ne(0,0,W,it),Et=new ne(0,0,W,it),Jt=!1,K=new to,ot=!1,St=!1,ft=new Ut,Y=new Ut,ct=new P,Ct=new ne,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function ue(){return R===null?F:1}let D=n;function ge(w,N){return e.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){let N="webgl2";if(D=ge(N,w),D===null)throw ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,zt,Pt,xe,Lt,A,S,z,j,nt,J,Tt,dt,gt,Qt,st,xt,Dt,Nt,_t,Zt,Ht,ae,L;function lt(){Gt=new Wg(D),Gt.init(),Ht=new S_(D,Gt),zt=new Bg(D,Gt,t,Ht),Pt=new v_(D,Gt),zt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),xe=new Yg(D),Lt=new o_,A=new M_(D,Gt,Pt,Lt,zt,Ht,xe),S=new zg(_),z=new Gg(_),j=new tm(D),ae=new Fg(D,j),nt=new Xg(D,j,xe,ae),J=new Kg(D,nt,j,xe),Nt=new $g(D,zt,A),st=new kg(Lt),Tt=new r_(_,S,z,Gt,zt,ae,st),dt=new A_(_,Lt),gt=new l_,Qt=new p_(Gt),Dt=new Ug(_,S,z,Pt,J,p,l),xt=new x_(_,J,zt),L=new R_(D,xe,zt,Pt),_t=new Og(D,Gt,xe),Zt=new qg(D,Gt,xe),xe.programs=Tt.programs,_.capabilities=zt,_.extensions=Gt,_.properties=Lt,_.renderLists=gt,_.shadowMap=xt,_.state=Pt,_.info=xe}lt();let X=new Lc(_,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(W,it,!1))},this.getSize=function(w){return w.set(W,it)},this.setSize=function(w,N,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,it=N,e.width=Math.floor(w*F),e.height=Math.floor(N*F),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*F,it*F).floor()},this.setDrawingBufferSize=function(w,N,G){W=w,it=N,F=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,G,V){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,G,V),Pt.viewport(I.copy(yt).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(Et)},this.setScissor=function(w,N,G,V){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,N,G,V),Pt.scissor(B.copy(Et).multiplyScalar(F).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){Pt.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let U=!1;if(R!==null){let rt=R.texture.format;U=rt===th||rt===Qc||rt===jc}if(U){let rt=R.texture.type,pt=rt===yi||rt===Ms||rt===jr||rt===cr||rt===Zc||rt===Jc,wt=Dt.getClearColor(),At=Dt.getClearAlpha(),Wt=wt.r,qt=wt.g,Rt=wt.b;pt?(g[0]=Wt,g[1]=qt,g[2]=Rt,g[3]=At,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Wt,x[1]=qt,x[2]=Rt,x[3]=At,D.clearBufferiv(D.COLOR,0,x))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",at,!1),gt.dispose(),Qt.dispose(),Lt.dispose(),S.dispose(),z.dispose(),J.dispose(),ae.dispose(),L.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ri),X.removeEventListener("sessionend",Ds),un.stop()};function k(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=xe.autoReset,N=xt.enabled,G=xt.autoUpdate,V=xt.needsUpdate,U=xt.type;lt(),xe.autoReset=w,xt.enabled=N,xt.autoUpdate=G,xt.needsUpdate=V,xt.type=U}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bt(w){let N=w.target;N.removeEventListener("dispose",bt),kt(N)}function kt(w){Me(w),Lt.remove(w)}function Me(w){let N=Lt.get(w).programs;N!==void 0&&(N.forEach(function(G){Tt.releaseProgram(G)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,U,rt){N===null&&(N=$t);let pt=U.isMesh&&U.matrixWorld.determinant()<0,wt=us(w,N,G,V,U);Pt.setMaterial(V,pt);let At=G.index,Wt=1;if(V.wireframe===!0){if(At=nt.getWireframeAttribute(G),At===void 0)return;Wt=2}let qt=G.drawRange,Rt=G.attributes.position,re=qt.start*Wt,_e=(qt.start+qt.count)*Wt;rt!==null&&(re=Math.max(re,rt.start*Wt),_e=Math.min(_e,(rt.start+rt.count)*Wt)),At!==null?(re=Math.max(re,0),_e=Math.min(_e,At.count)):Rt!=null&&(re=Math.max(re,0),_e=Math.min(_e,Rt.count));let Se=_e-re;if(Se<0||Se===1/0)return;ae.setup(U,V,wt,G,At);let fn,ce=_t;if(At!==null&&(fn=j.get(At),ce=Zt,ce.setIndex(fn)),U.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*ue()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(U.isLine){let It=V.linewidth;It===void 0&&(It=1),Pt.setLineWidth(It*ue()),U.isLineSegments?ce.setMode(D.LINES):U.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else U.isPoints?ce.setMode(D.POINTS):U.isSprite&&ce.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ce.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ce.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let It=U._multiDrawStarts,li=U._multiDrawCounts,he=U._multiDrawCount,Fn=At?j.get(At).bytesPerElement:1,Ns=Lt.get(V).currentProgram.getUniforms();for(let gn=0;gn<he;gn++)Ns.setValue(D,"_gl_DrawID",gn),ce.render(It[gn]/Fn,li[gn])}else if(U.isInstancedMesh)ce.renderInstances(re,Se,U.count);else if(G.isInstancedBufferGeometry){let It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,li=Math.min(G.instanceCount,It);ce.renderInstances(re,Se,li)}else ce.render(re,Se)};function se(w,N,G){w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,Le(w,N,G),w.side=Jn,w.needsUpdate=!0,Le(w,N,G),w.side=Ve):Le(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),d=Qt.get(G),d.init(N),v.push(d),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let rt=U.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){let wt=rt[pt];se(wt,G,U),V.add(wt)}else se(rt,G,U),V.add(rt)}),v.pop(),d=null,V},this.compileAsync=function(w,N,G=null){let V=this.compile(w,N,G);return new Promise(U=>{function rt(){if(V.forEach(function(pt){Lt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){U(w);return}setTimeout(rt,10)}Gt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let nn=null;function hn(w){nn&&nn(w)}function ri(){un.stop()}function Ds(){un.start()}let un=new Hf;un.setAnimationLoop(hn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(w){nn=w,X.setAnimationLoop(w),w===null?un.stop():un.start()},X.addEventListener("sessionstart",ri),X.addEventListener("sessionend",Ds),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,R),d=Qt.get(w,v.length),d.init(N),v.push(d),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Y),St=this.localClippingEnabled,ot=st.init(this.clippingPlanes,St),m=gt.get(w,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){let rt=_.xr.getDepthSensingMesh();rt!==null&&Ni(rt,N,-1/0,_.sortObjects)}Ni(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Z,Q),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&Dt.addToRenderList(m,w),this.info.render.frame++,ot===!0&&st.beginShadows();let G=d.state.shadowsArray;xt.render(G,w,N),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){let rt=N.cameras;if(U.length>0)for(let pt=0,wt=rt.length;pt<wt;pt++){let At=rt[pt];oi(V,U,w,At)}Vt&&Dt.render(w);for(let pt=0,wt=rt.length;pt<wt;pt++){let At=rt[pt];cs(m,w,At,At.viewport)}}else U.length>0&&oi(V,U,w,N),Vt&&Dt.render(w),cs(m,w,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,N),ae.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],ot===!0&&st.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ni(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){V&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);let pt=J.update(w),wt=w.material;wt.visible&&m.push(w,pt,wt,G,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let pt=J.update(w),wt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ct.copy(pt.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(Y)),Array.isArray(wt)){let At=pt.groups;for(let Wt=0,qt=At.length;Wt<qt;Wt++){let Rt=At[Wt],re=wt[Rt.materialIndex];re&&re.visible&&m.push(w,pt,re,G,Ct.z,Rt)}}else wt.visible&&m.push(w,pt,wt,G,Ct.z,null)}}let rt=w.children;for(let pt=0,wt=rt.length;pt<wt;pt++)Ni(rt[pt],N,G,V)}function cs(w,N,G,V){let U=w.opaque,rt=w.transmissive,pt=w.transparent;d.setupLightsView(G),ot===!0&&st.setGlobalState(_.clippingPlanes,G),V&&Pt.viewport(I.copy(V)),U.length>0&&$n(U,N,G),rt.length>0&&$n(rt,N,G),pt.length>0&&$n(pt,N,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function oi(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Mi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ao:yi,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let rt=d.state.transmissionRenderTarget[V.id],pt=V.viewport||I;rt.setSize(pt.z,pt.w);let wt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(H),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Vt&&Dt.render(G);let At=_.toneMapping;_.toneMapping=$i;let Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ot===!0&&st.setGlobalState(_.clippingPlanes,V),$n(w,G,V),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Rt=0,re=N.length;Rt<re;Rt++){let _e=N[Rt],Se=_e.object,fn=_e.geometry,ce=_e.material,It=_e.group;if(ce.side===Ve&&Se.layers.test(V.layers)){let li=ce.side;ce.side=Je,ce.needsUpdate=!0,ze(Se,G,V,fn,ce,It),ce.side=li,ce.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}_.setRenderTarget(wt),_.setClearColor(H,$),Wt!==void 0&&(V.viewport=Wt),_.toneMapping=At}function $n(w,N,G){let V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,rt=w.length;U<rt;U++){let pt=w[U],wt=pt.object,At=pt.geometry,Wt=V===null?pt.material:V,qt=pt.group;wt.layers.test(G.layers)&&ze(wt,N,G,At,Wt,qt)}}function ze(w,N,G,V,U,rt){w.onBeforeRender(_,N,G,V,U,rt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,N,G,V,w,rt),U.transparent===!0&&U.side===Ve&&U.forceSinglePass===!1?(U.side=Je,U.needsUpdate=!0,_.renderBufferDirect(G,N,V,U,w,rt),U.side=Jn,U.needsUpdate=!0,_.renderBufferDirect(G,N,V,U,w,rt),U.side=Ve):_.renderBufferDirect(G,N,V,U,w,rt),w.onAfterRender(_,N,G,V,U,rt)}function Le(w,N,G){N.isScene!==!0&&(N=$t);let V=Lt.get(w),U=d.state.lights,rt=d.state.shadowsArray,pt=U.state.version,wt=Tt.getParameters(w,U.state,rt,N,G),At=Tt.getProgramCacheKey(wt),Wt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",bt),Wt=new Map,V.programs=Wt);let qt=Wt.get(At);if(qt!==void 0){if(V.currentProgram===qt&&V.lightsStateVersion===pt)return ai(w,wt),qt}else wt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(wt,_),qt=Tt.acquireProgram(wt,At),Wt.set(At,qt),V.uniforms=wt.uniforms;let Rt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=st.uniform),ai(w,wt),V.needsLights=Ui(w),V.lightsStateVersion=pt,V.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=qt,V.uniformsList=null,qt}function hs(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=rr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ai(w,N){let G=Lt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function us(w,N,G,V,U){N.isScene!==!0&&(N=$t),A.resetTextureUnits();let rt=N.fog,pt=V.isMeshStandardMaterial?N.environment:null,wt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tn,At=(V.isMeshStandardMaterial?z:S).get(V.envMap||pt),Wt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,_e=!!G.morphAttributes.color,Se=$i;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=_.toneMapping);let fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=fn!==void 0?fn.length:0,It=Lt.get(V),li=d.state.lights;if(ot===!0&&(St===!0||w!==M)){let En=w===M&&V.id===b;st.setState(V,w,En)}let he=!1;V.version===It.__version?(It.needsLights&&It.lightsStateVersion!==li.state.version||It.outputColorSpace!==wt||U.isBatchedMesh&&It.batching===!1||!U.isBatchedMesh&&It.batching===!0||U.isBatchedMesh&&It.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&It.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&It.instancing===!1||!U.isInstancedMesh&&It.instancing===!0||U.isSkinnedMesh&&It.skinning===!1||!U.isSkinnedMesh&&It.skinning===!0||U.isInstancedMesh&&It.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&It.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&It.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&It.instancingMorph===!1&&U.morphTexture!==null||It.envMap!==At||V.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==st.numPlanes||It.numIntersection!==st.numIntersection)||It.vertexAlphas!==Wt||It.vertexTangents!==qt||It.morphTargets!==Rt||It.morphNormals!==re||It.morphColors!==_e||It.toneMapping!==Se||It.morphTargetsCount!==ce)&&(he=!0):(he=!0,It.__version=V.version);let Fn=It.currentProgram;he===!0&&(Fn=Le(V,N,U));let Ns=!1,gn=!1,Lr=!1,be=Fn.getUniforms(),Kn=It.uniforms;if(Pt.useProgram(Fn.program)&&(Ns=!0,gn=!0,Lr=!0),V.id!==b&&(b=V.id,gn=!0),Ns||M!==w){Pt.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),Up(ft),Fp(ft),be.setValue(D,"projectionMatrix",ft)):be.setValue(D,"projectionMatrix",w.projectionMatrix),be.setValue(D,"viewMatrix",w.matrixWorldInverse);let Fi=be.map.cameraPosition;Fi!==void 0&&Fi.setValue(D,ct.setFromMatrixPosition(w.matrixWorld)),zt.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,gn=!0,Lr=!0)}if(U.isSkinnedMesh){be.setOptional(D,U,"bindMatrix"),be.setOptional(D,U,"bindMatrixInverse");let En=U.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),be.setValue(D,"boneTexture",En.boneTexture,A))}U.isBatchedMesh&&(be.setOptional(D,U,"batchingTexture"),be.setValue(D,"batchingTexture",U._matricesTexture,A),be.setOptional(D,U,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",U._indirectTexture,A),be.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",U._colorsTexture,A));let Dr=G.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Nt.update(U,G,Fn),(gn||It.receiveShadow!==U.receiveShadow)&&(It.receiveShadow=U.receiveShadow,be.setValue(D,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Kn.envMap.value=At,Kn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Kn.envMapIntensity.value=N.environmentIntensity),gn&&(be.setValue(D,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&Ir(Kn,Lr),rt&&V.fog===!0&&dt.refreshFogUniforms(Kn,rt),dt.refreshMaterialUniforms(Kn,V,F,it,d.state.transmissionRenderTarget[w.id]),rr.upload(D,hs(It),Kn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rr.upload(D,hs(It),Kn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(D,"center",U.center),be.setValue(D,"modelViewMatrix",U.modelViewMatrix),be.setValue(D,"normalMatrix",U.normalMatrix),be.setValue(D,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let En=V.uniformsGroups;for(let Fi=0,Oi=En.length;Fi<Oi;Fi++){let nu=En[Fi];L.update(nu,Fn),L.bind(nu,Fn)}}return Fn}function Ir(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Ui(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,G){Lt.get(w.texture).__webglTexture=N,Lt.get(w.depthTexture).__webglTexture=G;let V=Lt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let G=Lt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){R=w,E=N,T=G;let V=!0,U=null,rt=!1,pt=!1;if(w){let At=Lt.get(w);if(At.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(At.__hasExternalTextures)A.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Rt=w.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&Lt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(pt=!0);let qt=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?U=qt[N][G]:U=qt[N],rt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?U=qt[G]:U=qt,I.copy(w.viewport),B.copy(w.scissor),O=w.scissorTest}else I.copy(yt).multiplyScalar(F).floor(),B.copy(Et).multiplyScalar(F).floor(),O=Jt;if(Pt.bindFramebuffer(D.FRAMEBUFFER,U)&&V&&Pt.drawBuffers(w,U),Pt.viewport(I),Pt.scissor(B),Pt.setScissorTest(O),rt){let At=Lt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,G)}else if(pt){let At=Lt.get(w.texture),Wt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Wt)}b=-1},this.readRenderTargetPixels=function(w,N,G,V,U,rt,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){Pt.bindFramebuffer(D.FRAMEBUFFER,wt);try{let At=w.texture,Wt=At.format,qt=At.type;if(!zt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-U&&D.readPixels(N,G,V,U,Ht.convert(Wt),Ht.convert(qt),rt)}finally{let At=R!==null?Lt.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,U,rt,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){let At=w.texture,Wt=At.format,qt=At.type;if(!zt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-U){Pt.bindFramebuffer(D.FRAMEBUFFER,wt);let Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(N,G,V,U,Ht.convert(Wt),Ht.convert(qt),0);let re=R!==null?Lt.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,re);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Np(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Rt),D.deleteSync(_e),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-G),U=Math.floor(w.image.width*V),rt=Math.floor(w.image.height*V),pt=N!==null?N.x:0,wt=N!==null?N.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pt,wt,U,rt),Pt.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,U=0){w.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,G=null);let rt,pt,wt,At,Wt,qt,Rt,re,_e,Se=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(rt=G.max.x-G.min.x,pt=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Wt=G.min.y,qt=G.isBox3?G.min.z:0):(rt=Se.width,pt=Se.height,wt=Se.depth||1,At=0,Wt=0,qt=0),V!==null?(Rt=V.x,re=V.y,_e=V.z):(Rt=0,re=0,_e=0);let fn=Ht.convert(N.format),ce=Ht.convert(N.type),It;N.isData3DTexture?(A.setTexture3D(N,0),It=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),It=D.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let li=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ns=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);let Lr=w.isDataArrayTexture||w.isData3DTexture,be=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Kn=Lt.get(w),Dr=Lt.get(N),En=Lt.get(Kn.__renderTarget),Fi=Lt.get(Dr.__renderTarget);Pt.bindFramebuffer(D.READ_FRAMEBUFFER,En.__webglFramebuffer),Pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Oi=0;Oi<wt;Oi++)Lr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(w).__webglTexture,U,qt+Oi),w.isDepthTexture?(be&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(N).__webglTexture,U,_e+Oi),D.blitFramebuffer(At,Wt,rt,pt,Rt,re,rt,pt,D.DEPTH_BUFFER_BIT,D.NEAREST)):be?D.copyTexSubImage3D(It,U,Rt,re,_e+Oi,At,Wt,rt,pt):D.copyTexSubImage2D(It,U,Rt,re,_e+Oi,At,Wt,rt,pt);Pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(It,U,Rt,re,_e,rt,pt,wt,fn,ce,Se.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(It,U,Rt,re,_e,rt,pt,wt,fn,Se.data):D.texSubImage3D(It,U,Rt,re,_e,rt,pt,wt,fn,ce,Se):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Rt,re,rt,pt,fn,ce,Se.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Rt,re,Se.width,Se.height,fn,Se.data):D.texSubImage2D(D.TEXTURE_2D,U,Rt,re,rt,pt,fn,ce,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,li),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ns),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),U===0&&N.generateMipmaps&&D.generateMipmap(It),Pt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,U=0){return w.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,U)},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Pt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}},da=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var eo=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_r=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new P,Ss=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ji=class extends an{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks,Br=new P,Zs=new P,Js=new P,js=new Ot,kr=new Ot,qf=new Ut,Vo=new P,zr=new P,Go=new P,sf=new Ot,Al=new Ot,rf=new Ot,bs=class extends Ee{constructor(t=new ji){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(e,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new Ss(n,3,0,!1)),Ks.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Ks,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wo(Vo.set(-.5,-.5,0),Js,o,Zs,s,r),Wo(zr.set(.5,-.5,0),Js,o,Zs,s,r),Wo(Go.set(.5,.5,0),Js,o,Zs,s,r),sf.set(0,0),Al.set(1,0),rf.set(1,1);let a=t.ray.intersectTriangle(Vo,zr,Go,!1,Br);if(a===null&&(Wo(zr.set(-.5,.5,0),Js,o,Zs,s,r),Al.set(0,1),a=t.ray.intersectTriangle(Vo,Go,zr,!1,Br),a===null))return;let l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:Xi.getInterpolation(Br,Vo,zr,Go,sf,Al,rf,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wo(i,t,e,n,s,r){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(kr.x=r*js.x-s*js.y,kr.y=s*js.x+r*js.y):kr.copy(js),i.copy(t),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(qf)}var of=new P,af=new ne,lf=new ne,C_=new P,cf=new Ut,Xo=new P,Rl=new vn,hf=new Ut,Cl=new pr,pa=class extends oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ou,this.bindMatrix=new Ut,this.bindMatrixInverse=new Ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(s),t.ray.intersectsSphere(Rl)!==!1&&(hf.copy(s).invert(),Cl.copy(t.ray).applyMatrix4(hf),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Cl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;af.fromBufferAttribute(s.attributes.skinIndex,t),lf.fromBufferAttribute(s.attributes.skinWeight,t),of.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=lf.getComponent(r);if(o!==0){let a=af.getComponent(r);cf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(C_.copy(of).applyMatrix4(cf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},no=class extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}},ws=class extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=je,h=je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uf=new Ut,P_=new Ut,ma=class i{constructor(t=[],e=[]){this.uuid=Vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ut)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ut;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:P_;uf.multiplyMatrices(a,e[r]),uf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ws(e,t,t,dn,Hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new no),this.bones.push(o),this.boneInverses.push(new Ut().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},Qn=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new Ut,ff=new Ut,qo=[],df=new pn,I_=new Ut,Hr=new oe,Vr=new vn,ti=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,I_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),df.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Vr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),t.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),ff.multiplyMatrices(n,Qs),Hr.matrixWorld=ff,Hr.raycast(t,qo);for(let o=0,a=qo.length;o<a;o++){let l=qo[o];l.instanceId=r,l.object=this,e.push(l)}qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ws(new Float32Array(s*this.count),s,this.count,lo,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var io=class extends an{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new P,xa=new P,pf=new Ut,Gr=new pr,Yo=new vn,Pl=new P,mf=new P,vr=class extends Ee{constructor(t=new me,e=new io){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;pf.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=h.getX(x),y=h.getX(x+1),v=$o(this,t,Gr,l,d,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=$o(this,t,Gr,l,x,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let d=$o(this,t,Gr,l,x,x+1);d&&e.push(d)}if(this.isLineLoop){let x=$o(this,t,Gr,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,xa,Pl,mf)>n)return;Pl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Pl);if(!(l<t.near||l>t.far))return{distance:l,point:mf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var gf=new P,xf=new P,_a=class extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gf.fromBufferAttribute(e,s),xf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(xf);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},va=class extends vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Wn=class extends an{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_f=new Ut,Dc=new pr,Ko=new vn,Zo=new P,ei=class extends Ee{constructor(t=new me,e=new Wn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,t.ray.intersectsSphere(Ko)===!1)return;_f.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);Zo.fromBufferAttribute(u,m),vf(Zo,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Zo.fromBufferAttribute(u,g),vf(Zo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vf(i,t,e,n,s,r,o){let a=Dc.distanceSqToPoint(i);if(a<e){let l=new P;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Si=class extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rn=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(p,2));function y(){let _=new P,C=new P,E=0,T=(e-t)/n;for(let R=0;R<=r;R++){let b=[],M=R/r,I=M*(e-t)+t;for(let B=0;B<=s;B++){let O=B/s,H=O*l+a,$=Math.sin(H),W=Math.cos(H);C.x=I*$,C.y=-M*n+m,C.z=I*W,u.push(C.x,C.y,C.z),_.set($,T,W).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-M),b.push(g++)}x.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){let M=x[b][R],I=x[b+1][R],B=x[b+1][R+1],O=x[b][R+1];(t>0||b!==0)&&(h.push(M,I,O),E+=3),(e>0||b!==r-1)&&(h.push(I,B,O),E+=3)}c.addGroup(d,E,0),d+=E}function v(_){let C=g,E=new Ot,T=new P,R=0,b=_===!0?t:e,M=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let H=B/s*l+a,$=Math.cos(H),W=Math.sin(H);T.x=b*W,T.y=m*M,T.z=b*$,u.push(T.x,T.y,T.z),f.push(0,M,0),E.x=$*.5+.5,E.y=W*.5*M+.5,p.push(E.x,E.y),g++}for(let B=0;B<s;B++){let O=C+B,H=I+B;_===!0?h.push(H,H+1,O):h.push(H+1,H,O),R+=3}c.addGroup(d,R,_===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends Rn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ya=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let y=[],v=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-v),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let v=h[d][y+1],_=h[d][y],C=h[d+1][y],E=h[d+1][y+1];(d!==0||o>0)&&p.push(v,_,E),(d!==n-1||l<Math.PI)&&p.push(_,C,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ma=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(x,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Pe=class extends an{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ln=class extends Pe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Sa=class extends an{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function L_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function D_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function yf(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Yf(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lu:r=t,a=2*e-n;break;case cu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:o=t,l=2*n-e;break;case cu:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+y*o[c+C]+v*o[l+C]+_*o[u+C];return r}},Uc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Fc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jo(e,this.TimeBufferType),this.values=Jo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jo(t.times,Array),values:Jo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case fr:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&L_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=fr;var ts=class extends Cn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ur;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Cn{};ba.prototype.ValueTypeName="color";var bi=class extends Cn{};bi.prototype.ValueTypeName="number";var Oc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},wi=class extends Cn{InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}};wi.prototype.ValueTypeName="quaternion";wi.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Cn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ur;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Cn{};Ei.prototype.ValueTypeName="vector";var wa=class{constructor(t="",e=-1,n=[],s=op){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(U_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=D_(l);l=yf(l,1,h),c=yf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bi(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,x){if(p.length!==0){let m=[],d=[];Yf(p,m,d,g),m.length!==0&&x.push(new u(f,m,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];m.push(v.time),d.push(v.morphTarget===x?1:0)}s.push(new bi(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{let p=".bones["+e[u].name+"]";n(Ei,p+".position",f,"pos",s),n(wi,p+".quaternion",f,"rot",s),n(Ei,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function N_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return ba;case"quaternion":return wi;case"bool":case"boolean":return ts;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function U_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=N_(i.type);if(i.times===void 0){let e=[],n=[];Yf(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var qi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Bc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},F_=new Bc,Ti=class{constructor(t){this.manager=t!==void 0?t:F_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},kc=class extends Error{constructor(t,e){super(t),this.response=e}},ro=class extends Ti{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=qi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:n,onError:s});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=pi[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){y();function y(){u.read().then(({done:v,value:_})=>{if(v)d.close();else{x+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,T=h.length;E<T;E++){let R=h[E];R.onProgress&&R.onProgress(C)}d.enqueue(_),y()}},v=>{d.error(v)})}}});return new Response(m)}else throw new kc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{qi.add(t,c);let h=pi[t];delete pi[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=pi[t];if(h===void 0)throw this.manager.itemError(t),c;delete pi[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var zc=class extends Ti{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=qi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Qr("img");function l(){h(),qi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Ea=class extends Ti{constructor(t){super(t)}load(t,e,n,s){let r=new Ge,o=new zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},yr=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ta=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Il=new Ut,Mf=new P,Sf=new P,oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hc=class extends oo{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=dr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Aa=class extends yr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bf=new Ut,Wr=new P,Ll=new P,Vc=class extends oo{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wr),Ll.copy(n.position),Ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ll),n.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}},Ra=class extends yr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gc=class extends oo{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ns=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ca=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Pa=class extends Ti{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=qi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return qi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),qi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});qi.add(t,l),r.manager.itemStart(t)}};var sh="\\[\\]\\.:\\/",O_=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",B_="[^"+sh.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",rh),z_=/(WCOD+)?/.source.replace("WCOD",B_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),G_=new RegExp("^"+k_+z_+H_+V_+"$"),W_=["material","materials","bones","map"],Wc=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(O_,"")}static parseTrackName(t){let e=G_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Wc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $v=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function ah(i,t){if(t===Uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===co||t===La){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===co)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var Ua=class extends Ti{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ph(e)}),this.register(function(e){return new mh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new Eh(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new xh(e)}),this.register(function(e){return new _h(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new dh(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new gh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new uh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Rh(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(t);o=ns.resolveURL(c,this.path)}else o=ns.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new ro(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===jf){try{o[te.KHR_BINARY_GLTF]=new Ch(t)}catch(u){s&&s(u);return}r=JSON.parse(o[te.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case te.KHR_MATERIALS_UNLIT:o[u]=new fh;break;case te.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ph(r,this.dracoLoader);break;case te.KHR_TEXTURE_TRANSFORM:o[u]=new Ih;break;case te.KHR_MESH_QUANTIZATION:o[u]=new Lh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function X_(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uh=class{constructor(t){this.parser=t,this.name=te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new vt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ra(h),c.distance=u;break;case"spot":c=new Aa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},fh=class{constructor(){this.name=te.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(t,e,n){let s=[];t.color=new vt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],tn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ae))}return Promise.all(s)}},dh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},ph=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ot(a,a)}return Promise.all(r)}},mh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_h=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}},yh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new vt().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(r)}},Sh=class{constructor(t){this.parser=t,this.name=te.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},bh=class{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wh=class{constructor(t){this.parser=t,this.name=te.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Eh=class{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Th=class{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Ah=class{constructor(t){this.name=te.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Rh=class{constructor(t){this.name=te.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let g of u){let x=new Ut,m=new P,d=new on,y=new P(1,1,1),v=new ti(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,d,y));for(let _ in l)if(_==="_COLOR_0"){let C=l[_];v.instanceColor=new Qn(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Ee.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},jf="glTF",ho=12,$f={JSON:1313821514,BIN:5130562},Ch=class{constructor(t){this.name=te.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ho,r=new DataView(t,ho),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$f.JSON){let c=new Uint8Array(t,ho+o,a);this.content=n.decode(c)}else if(l===$f.BIN){let c=ho+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ph=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=te.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Nh[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Nh[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],p=wr[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(p)},a,c,tn,f)})})}},Ih=class{constructor(){this.name=te.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Lh=class{constructor(){this.name=te.KHR_MESH_QUANTIZATION}},Fa=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,p=f*u,g=t*c,x=g-c,m=-2*p+3*f,d=p-f,y=1-m,v=d-f+u;for(let _=0;_!==a;_++){let C=o[x+_+a],E=o[x+_+l]*h,T=o[g+_+a],R=o[g+_]*h;r[_]=y*C+v*E+m*T+d*R}return r}},q_=new on,Dh=class extends Fa{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return q_.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kf={9728:je,9729:qe,9984:$c,9985:Yr,9986:tr,9987:An},Zf={33071:xi,33648:Jr,10497:jn},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Y_={CUBICSPLINE:void 0,LINEAR:fr,STEP:ur},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function Es(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ai(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function K_(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Z_(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function J_(i){let t,e=i.extensions&&i.extensions[te.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+hh(e.attributes):t=i.indices+":"+hh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+hh(i.targets[n]);return t}function hh(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Uh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Q_=new Ut,Fh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new X_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ea(this.options.manager):this.textureLoader=new Pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Es(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[te.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ns.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=lh[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new pe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lh[s.type],c=wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(p&&p!==u){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=e.cache.get(y);v||(x=new c(a,d*p,s.count*p/h),v=new _r(x,p/h),e.cache.add(y,v)),m=new Ss(v,l,f%p/h,g)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new pe(x,l,g);if(s.sparse!==void 0){let d=lh.SCALAR,y=wr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,C=new y(o[1],v,s.sparse.count*d),E=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new pe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=C.length;T<R;T++){let b=C[T];if(m.setX(b,E[T*l]),l>=2&&m.setY(b,E[T*l+1]),l>=3&&m.setZ(b,E[T*l+2]),l>=4&&m.setW(b,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Kf[f.magFilter]||qe,h.minFilter=Kf[f.minFilter]||An,h.wrapS=Zf[f.wrapS]||jn,h.wrapT=Zf[f.wrapT]||jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==je&&h.minFilter!==qe,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let g=f;e.isImageBitmapLoader===!0&&(g=function(x){let m=new Ge(x);m.needsUpdate=!0,f(m)}),e.load(ns.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ai(u,o),u.userData.mimeType=o.mimeType||j_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[te.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[te.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Wn,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new io,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Pe}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[te.KHR_MATERIALS_UNLIT]){let u=s[te.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ve);let h=r.alphaMode||ch.OPAQUE;if(h===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ch.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ot(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new vt().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&o!==We&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ai(u,r),e.associations.set(u,{materials:t}),r.extensions&&Es(s,u,r),u})}createUniqueName(t){let e=ve.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Jf(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=J_(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[te.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Jf(new me,c,e),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?$_(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=o[p],d,y=c[p];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new pa(x,y):new oe(x,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?d.geometry=ah(d.geometry,La):m.mode===Pn.TRIANGLE_FAN&&(d.geometry=ah(d.geometry,co));else if(m.mode===Pn.LINES)d=new _a(x,y);else if(m.mode===Pn.LINE_STRIP)d=new vr(x,y);else if(m.mode===Pn.LINE_LOOP)d=new va(x,y);else if(m.mode===Pn.POINTS)d=new ei(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Z_(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),Ai(d,r),m.extensions&&Es(s,d,m),e.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&Es(s,u[0],r),u[0];let f=new Re;r.extensions&&Es(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ue(Of.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new gr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ai(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ut;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ma(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],x=u[3],m=u[4],d=[];for(let y=0,v=f.length;y<v;y++){let _=f[y],C=p[y],E=g[y],T=x[y],R=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,C,E,T,R);if(b)for(let M=0;M<b.length;M++)d.push(b[M])}return new wa(r,void 0,d)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Q_)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new no:c.length>1?h=new Re:c.length===1?h=c[0]:h=new Ee,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let u=new Ut;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new Re;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&Es(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof an||f instanceof Ge)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];is[r.path]===is.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(is[r.path]){case is.weights:c=bi;break;case is.rotation:c=wi;break;case is.position:case is.scale:c=Ei;break;default:n.itemSize===1?c=bi:c=Ei;break}let h=s.interpolation!==void 0?Y_[s.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+is[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Uh(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof wi?Dh:Fa;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tv(i,t,e){let n=t.attributes,s=new pn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=Uh(wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=Uh(wr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Jf(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Nh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ee.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ee.workingColorSpace}" not supported.`),Ai(i,t),tv(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?K_(i,t.targets,e):i})}var uo=class i extends oe{constructor(){let t=i.SkyShader,e=new Qe({name:t.name,uniforms:Sr.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Je,depthWrite:!1});super(new yn(1,1,1),e),this.isSky=!0}};uo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
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

		}`};var ni=Math.PI/180,Xn={size:16e4,n:512},cn=[{id:"SOL",name:"SOLARIS INTL",n:0,e:0,elev:12,hdg:0,len:4e3,width:60,ids:["36","18"]},{id:"LUM",name:"LUMEN VALLEY",n:41e3,e:24e3,elev:380,hdg:70,len:3400,width:60,ids:["07","25"]}];function Oa(i,t){let e=i*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177|0,e=e^e>>>16,(e>>>0)/4294967295}function ev(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Oa(e,n),c=Oa(e+1,n),h=Oa(e,n+1),u=Oa(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function Ts(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*ev(i*r,t*r),s*=.5,r*=2.03;return n}var Ba=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Oh(i,t,e){let n=i.hdg*ni,s=t-i.n,r=e-i.e,o=s*Math.cos(n)+r*Math.sin(n),a=-s*Math.sin(n)+r*Math.cos(n);return{along:o,cross:a}}function nv(i,t){let e=Ba(-22e3,3e4,t+.35*i+9e3*(Ts(i/26e3+7.1,t/26e3+3.3,3)-.5)*2),n=Ts(i/9e3+11.7,t/9e3+5.2,5),s=1-Math.abs(2*Ts(i/21e3+2.2,t/21e3+9.4,4)-1),r=Ba(.25,1,e)*Math.pow(s,2.2)*2300,o=-60+e*150+e*(n-.35)*420+r,a=Xn.size/2,l=Math.min(a-Math.abs(i),a-Math.abs(t)),c=Ba(0,14e3,l);return o=o*c-60*(1-c),o}function iv(i,t){let e=nv(i,t);for(let n of cn){let{along:s,cross:r}=Oh(n,i,t),o=Math.max(0,Math.abs(s)-n.len/2-1500),a=Math.max(0,Math.abs(r)-1300),l=Math.hypot(o,a),c=1-Ba(0,6500,l);e=e*(1-c)+n.elev*c}return e}var fo=null;function po(){if(fo)return fo;let{size:i,n:t}=Xn,e=t+1;fo=new Float32Array(e*e);for(let n=0;n<e;n++){let s=-i/2+n/t*i;for(let r=0;r<e;r++){let o=-i/2+r/t*i;fo[n*e+r]=iv(s,o)}}return fo}function sv(i,t){for(let e of cn){let{along:n,cross:s}=Oh(e,i,t);if(Math.abs(n)<e.len/2+1400&&Math.abs(s)<1200)return e}return null}function In(i,t){let e=sv(i,t);if(e)return e.elev;let n=po(),{size:s,n:r}=Xn,o=r+1,a=(t+s/2)/s*r,l=(i+s/2)/s*r;if(a<0||l<0||a>=r||l>=r)return 0;let c=Math.floor(a),h=Math.floor(l),u=a-c,f=l-h,p=n[h*o+c],g=n[h*o+c+1],x=n[(h+1)*o+c],m=n[(h+1)*o+c+1],d=p+(g-p)*u+(x-p)*f+(p-g-x+m)*u*f;return Math.max(0,d)}function Ri(i,t){for(let d of cn){let{along:y,cross:v}=Oh(d,i,t);if(Math.abs(y)<d.len/2+60&&Math.abs(v)<d.width/2)return"rwy";if(Math.abs(y)<d.len/2&&v>d.width/2-1&&v<520){if(Math.abs(v-190)<20||Math.abs(y)<520&&v>190)return"paved";for(let _ of[-d.len/2+40,-d.len/4,0,d.len/4,d.len/2-40])if(Math.abs(y-_)<20&&v<200)return"paved"}}let e=po(),{size:n,n:s}=Xn,r=s+1,o=(t+n/2)/n*s,a=(i+n/2)/n*s;if(o<0||a<0||o>=s||a>=s)return"water";let l=Math.floor(o),c=Math.floor(a),h=o-l,u=a-c,f=e[c*r+l],p=e[c*r+l+1],g=e[(c+1)*r+l],x=e[(c+1)*r+l+1];return f+(p-f)*h+(g-f)*u+(f-p-g+x)*h*u<.2?"water":"grass"}var Mn=[];for(let i of cn)for(let t=0;t<2;t++){let e=(i.hdg+(t?180:0))%360,n=e*ni;Mn.push({ap:i,id:i.id+" "+i.ids[t],ident:i.ids[t],crs:e,thrN:i.n-Math.cos(n)*i.len/2,thrE:i.e-Math.sin(n)*i.len/2,elev:i.elev,len:i.len})}function ss(i,t,e,n){let s=i.crs*ni,r=t-i.thrN,o=e-i.thrE,a=r*Math.cos(s)+o*Math.sin(s),l=-r*Math.sin(s)+o*Math.cos(s),c=i.len+300-a,h=Math.atan2(l,Math.max(1,c))/ni,u=300-a,f=Math.atan2(n-i.elev,Math.max(1,u))/ni;return{along:a,xtk:l,loc:h,gs:f-3,dAim:u,dist:Math.hypot(r,o),valid:u>0&&u<6e4&&Math.abs(h)<35}}function Bh(i,t,e){let n=null,s=1e9;for(let r of Mn){let o=ss(r,i,t,0);if(!o.valid)continue;let a=Math.abs((e-r.crs+540)%360-180),l=o.dist/1e3+a*.8+Math.abs(o.loc)*2;a<100&&l<s&&(s=l,n=r)}return n}var tt=Math.PI/180,Te=180/Math.PI,ie=.514444,Ce=.3048,Ci=9.80665,Bt=(i,t,e)=>Math.min(e,Math.max(t,i)),kh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Ft={S:450,b:71.8,c:7.6,Ixx:25e6,Iyy:46e6,Izz:68e6,oew:178e3,payload:12e3,fuelMax:11e4,Tmax:218e3,eng:[{y:-19.5,z:1.4},{y:-10.5,z:2.75},{y:10.5,z:2.75},{y:19.5,z:1.4}],gear:[{name:"nose",r:[27.5,0,5.2],k:16e5,c:26e4,steer:!0,brake:!1},{name:"left",r:[-2,-5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0},{name:"right",r:[-2,5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0}],body:[{name:"\u6A5F\u9F3B",r:[31,0,1.6],fatal:!0},{name:"\u6A5F\u5C3E",r:[-31,0,-.9],fatal:!1},{name:"\u5DE6\u7FFC\u5C16",r:[-18,-35.9,-2.4],fatal:!0},{name:"\u53F3\u7FFC\u5C16",r:[-18,35.9,-2.4],fatal:!0},{name:"\u5DE6\u5167\u5074\u767C\u52D5\u6A5F",r:[0,-10.5,4.5],fatal:!1},{name:"\u53F3\u5167\u5074\u767C\u52D5\u6A5F",r:[0,10.5,4.5],fatal:!1},{name:"\u5DE6\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,-19.5,2.8],fatal:!1},{name:"\u53F3\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,19.5,2.8],fatal:!1},{name:"\u6A5F\u8179",r:[0,0,2.4],fatal:!0}],CLa:5.5,CD0:.017,k:1/(Math.PI*(71.8*71.8/450)*.8),flapDeg:[0,1,5,15,20,25,30],flapLift:[0,.25,.45,.65,.78,.9,1],flapDrag:[0,.006,.012,.028,.04,.058,.08],flapVmax:[340,265,245,230,225,200,180],vmo:340,mmo:.89,vle:270};function rv(i){let[t,e,n,s]=i;return[1-2*(n*n+s*s),2*(e*n-t*s),2*(e*s+t*n),2*(e*n+t*s),1-2*(e*e+s*s),2*(n*s-t*e),2*(e*s-t*n),2*(n*s+t*e),1-2*(e*e+n*n)]}var zh=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]],Qf=(i,t)=>[i[0]*t[0]+i[3]*t[1]+i[6]*t[2],i[1]*t[0]+i[4]*t[1]+i[7]*t[2],i[2]*t[0]+i[5]*t[1]+i[8]*t[2]],td=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function ed(i,t,e){let n=Math.cos(i/2),s=Math.sin(i/2),r=Math.cos(t/2),o=Math.sin(t/2),a=Math.cos(e/2),l=Math.sin(e/2);return[n*r*a+s*o*l,s*r*a-n*o*l,n*o*a+s*r*l,n*r*l-s*o*a]}function ov(){let i=0,t=0;for(;i===0;)i=Math.random();return t=Math.random(),Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*t)}function Er(i,t){let e=Bt(Math.floor(t),0,i.length-2),n=Bt(t-e,0,1);return i[e]+(i[e+1]-i[e])*n}function nd(i,t,e){let n=Bt((e-8500)/6500,0,1);return Math.pow(i/1.225,.52)*(1-.75*Math.min(t,.95)+.35*t*t)*(1+.55*n*n*(3-2*n))}function Hh(i){let t,e;return i<11e3?(t=288.15-.0065*i,e=101325*Math.pow(t/288.15,5.25588)):(t=216.65,e=22632.1*Math.exp(-(i-11e3)/6341.62)),{T:t,p:e,rho:e/(287.05*t),a:Math.sqrt(1.4*287.05*t)}}function mo(i,t){let e=t*(Math.pow(1+.2*i*i,3.5)-1);return 340.294*Math.sqrt(5*(Math.pow(e/101325+1,2/7)-1))}var ka=class{constructor(){this.wind={dir:0,spd:0,turb:0},this.ctl={pitch:0,roll:0,yaw:0,brake:0,reverse:!1},this.reset("runway")}mass(){return Ft.oew+Ft.payload+this.fuel}reset(t,e={}){let n=cn[0],s=Mn[0];this.t=0,this.crashed=null,this.msg="",this.msgT=0,this.fuel=72e3,this.vsDot=0,this.w=[0,0,0],this.n1=[22,22,22,22],this.engOn=[!0,!0,!0,!0],this.thrust=[0,0,0,0],this.ff=0,this.thr=0,this.rev=0,this.de=0,this.da=0,this.dr=0,this.trimI=0,this.manTrim=0,this.fbw=0,this.law="normal",this.thHold=null,this.phiHold=0,this.sb=0,this.sbSel=0,this.gndSpoiler=!1,this.gust=[0,0,0],this.park=!1,this.steer=0,this.wow=!1,this.wowN=!1,this.airT=0,this.gndT=0,this.touchdown=null,this.strike="",this.gearLoad=[0,0,0],this.ap={autoland:!1,on:!1,athr:!1,hdg:s.crs,alt:5e3,spd:250,vs:1800,app:!1,lat:"HDG",ver:"ALT",rw:null},this.nz=1,this.acc=0,this.iasPrev=0;let r=s.crs*tt;if(t==="runway")this.pos=[s.thrN+Math.cos(r)*90,s.thrE+Math.sin(r)*90,-(n.elev+5.1)],this.vel=[0,0,0],this.q=ed(0,0,r),this.flapSel=3,this.flapPos=3,this.gearSel=!0,this.gearPos=1,this.park=!0,this.ap.alt=5e3,this.ap.spd=250;else{let o=t==="cruise",a=e.dist??(o?15e4:22e3),l=e.alt??(o?35e3*Ce:3e3*Ce+0),c=(e.kt??(o?285:190))*ie;this.flapSel=this.flapPos=e.flap??(o?0:2),this.gearSel=!!e.gear,this.gearPos=e.gear?1:0,this.pos=[s.thrN-Math.cos(r)*a,s.thrE-Math.sin(r)*a,-l],o&&(this.pos[0]=-62e3,this.pos[1]=-38e3,this.fuel=8e4),e.pos&&(this.pos[0]=e.pos[0],this.pos[1]=e.pos[1]),e.side&&(this.pos[0]-=Math.sin(r)*e.side,this.pos[1]+=Math.cos(r)*e.side);let h=Hh(l),u=c/h.a;for(let m=0;m<20;m++){let d=mo(u,h.p);u*=c/d}let f=u*h.a,p=this.trim(f,l),g=e.hdg!==void 0?e.hdg*tt:o?Math.atan2(s.thrE-this.pos[1],s.thrN-3e4-this.pos[0]):r;this.q=ed(0,p.alpha,g),this.vel=[f*Math.cos(g),f*Math.sin(g),0],this.thr=p.thr;let x=22+78*p.thr;this.n1=[x,x,x,x],this.trimI=p.de,this.fbw=1,this.thHold=p.alpha,this.ap.on=!e.manual,this.ap.athr=!0,this.ap.hdg=Math.round((g*Te+360)%360),this.ap.alt=Math.round(l/Ce/100)*100,this.ap.spd=Math.round(c/ie),this.airT=10}this.update0()}trim(t,e){let n=Hh(e),s=t/n.a,r=.5*n.rho*t*t*Ft.S,o=this.mass()*Ci,a=Er(Ft.flapLift,this.flapPos),l=1/Math.sqrt(1-Math.pow(Math.min(s,.85)*.75,2)),c=o/r,h=(c-(.25+.9*a))/(Ft.CLa*l),f=(Ft.CD0+Er(Ft.flapDrag,this.flapPos)+Ft.k*c*c+.02*this.gearPos+(s>.82?8*(s-.82)**2:0))*r,p=nd(n.rho,s,e),g=Bt(f/(4*Ft.Tmax*p),0,1),x=5+95*Math.pow(g,1/2.3),m=Bt((x-22)/78,0,1),d=f*2.07/(r*Ft.c),y=-(.04-.1*a-1.2*h+d)/1.4;return{alpha:h,thr:m,de:y}}update0(){let t=rv(this.q);this.R=t;let[e,n,s,r]=this.q;this.phi=Math.atan2(2*(e*n+s*r),1-2*(n*n+s*s)),this.theta=Math.asin(Bt(2*(e*s-r*n),-1,1)),this.psi=Math.atan2(2*(e*r+n*s),1-2*(s*s+r*r)),this.alt=-this.pos[2],this.elev=In(this.pos[0],this.pos[1]),this.agl=this.alt-this.elev;let o=Hh(this.alt);this.at=o;let a=.55+.45*Math.min(1,Math.max(0,this.agl)/400),l=this.wind.dir*tt;this.windW=[-this.wind.spd*a*Math.cos(l)+this.gust[0],-this.wind.spd*a*Math.sin(l)+this.gust[1],this.gust[2]];let c=[this.vel[0]-this.windW[0],this.vel[1]-this.windW[1],this.vel[2]-this.windW[2]];this.vb=Qf(t,c),this.tas=Math.hypot(c[0],c[1],c[2]),this.mach=this.tas/o.a,this.ias=mo(this.mach,o.p),this.alpha=this.tas>1?Math.atan2(this.vb[2],this.vb[0]):0,this.beta=this.tas>1?Math.asin(Bt(this.vb[1]/this.tas,-1,1)):0,this.vs=-this.vel[2],this.gs=Math.hypot(this.vel[0],this.vel[1]),this.track=this.gs>1?Math.atan2(this.vel[1],this.vel[0]):this.psi;let h=Er(Ft.flapLift,this.flapPos);this.clmax=1.5+1.1*h,this.cl0=.25+.9*h,this.aStall=(this.clmax-this.cl0)/Ft.CLa,this.vstall=Math.sqrt(2*this.mass()*Ci/(1.225*Ft.S*this.clmax*.94)),this.vmaxKt=Math.min(Ft.vmo,Er(Ft.flapVmax,this.flapPos),this.gearPos>.05?Ft.vle:999,mo(Ft.mmo,o.p)/ie)}say(t,e=4){this.msg=t,this.msgT=e}step(t){if(this.crashed)return;this.t+=t,this.msgT>0&&(this.msgT-=t),this.update0();let e=this.ctl,n=this.ap,s=this.R,r=this.at,o=this.mass(),a=Math.max(this.tas,.01),[l,c,h]=this.w,u=.5*r.rho*a*a,f=u*Ft.S,p=Math.sin(this.phi),g=Math.cos(this.phi),x=this.wind.turb*(.5+.5*Math.min(1,this.wind.spd/8+.3));for(let k=0;k<3;k++)this.gust[k]+=-this.gust[k]/2.2*t+x*(k===2?.7:1)*Math.sqrt(2*t/2.2)*ov();this.flapPos+=Bt(this.flapSel-this.flapPos,-.22*t,.22*t),this.gearPos+=Bt((this.gearSel?1:0)-this.gearPos,-t/9,t/9),this.wow&&this.thr<.1&&this.gs>25&&this.gndT>.2&&(this.gndSpoiler=!0),(!this.wow||this.thr>.3||this.gs<12)&&(this.gndSpoiler=!1);let m=this.gndSpoiler?1:this.sbSel*(this.wow?1:.6);this.sb+=Bt(m-this.sb,-1.2*t,1.2*t);let d=null,y=null,v=n.rw?ss(n.rw,this.pos[0],this.pos[1],this.alt):null;if(this.ils=v,n.on&&this.fbw>.9){let k;if(n.app&&n.lat==="HDG"&&v&&v.valid&&Math.abs(v.loc)<2.2&&Math.abs(kh(this.track-n.rw.crs*tt))<80*tt&&(n.lat="LOC",this.say("LOC \u622A\u7372")),n.lat==="LOC"&&v){let kt=Bt(v.dAim/2e4,.35,1),Me=n.rw.crs*tt-Bt(v.xtk*.035/kt,-32,32)*tt;k=Bt(1.6*kh(Me-this.track),-27*tt,27*tt)}else k=Bt(1.3*kh(n.hdg*tt-this.psi),-25*tt,25*tt);y=Bt(1.4*(k-this.phi),-6*tt,6*tt);let et;if(n.app&&n.lat==="LOC"&&n.ver!=="GS"&&n.ver!=="FLARE"&&v&&Math.abs(v.gs)<.12&&(n.ver="GS",this.say("G/S \u622A\u7372")),n.ver==="FLARE"){let kt=this.agl-5.1;et=Bt(-.17*kt-.3,-4.5,-.3),kt<10&&(this.thr=Math.max(0,this.thr-.35*t)),this.wow&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1)}else if(n.ver==="GS"&&v){let kt=this.alt-n.rw.elev-Math.tan(3*tt)*v.dAim;et=Bt(-this.gs*Math.tan(3*tt)-.16*kt,-9,1.5)}else{let kt=Math.abs(n.vs)*Ce/60;if(et=Bt(.13*(n.alt*Ce-this.alt),-kt,kt),et>0&&(!n.athr||this.thr>.9)){let Me=n.athr?Math.min(n.spd*ie,mo(.84,r.p)):1.35*this.vstall;et=Math.max(-1.5,et-.8*Math.max(0,(Me-this.ias)/ie-2))}}let at=this.vs/Math.max(a,30),bt=et/Math.max(a,30);d=Bt((n.ver==="FLARE"?1.5:.9)*(bt-at)-1.3*this.vsDot/Math.max(a,30),-2.2*tt,2.2*tt),n.ver==="GS"&&this.agl<30&&n.autoland?(n.ver="FLARE",n.athr=!1,this.say("\u81EA\u52D5\u843D\u5730\uFF1AFLARE",5)):n.ver==="GS"&&this.agl<30&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1,this.apDisc=!0,this.say("\u81EA\u52D5\u99D5\u99DB\u5DF2\u89E3\u9664 \u2014 \u8ACB\u624B\u52D5\u843D\u5730",6))}let _=(this.ias-this.iasPrev)/t;if(this.iasPrev=this.ias,this.acc+=(_-this.acc)*Math.min(1,t/.7),n.athr)if(this.wow&&this.gndT>1&&this.touchdown)n.athr=!1;else{let k=Math.max(Math.min(n.spd*ie,mo(.84,r.p)),this.wow?0:1.18*this.vstall),et=Bt(.045*(k-this.ias)-.3*this.acc,-.3,.3);this.thr=Bt(this.thr+et*t,0,1)}let C=this.wow||this.law!=="normal"?0:1;this.fbw+=Bt(C-this.fbw,-t/.8,t/1.2);let E=this.fbw,T=Bt(3900/Math.max(u,1),.12,3),R=Math.max(a,40),b=Bt(this.phi,-45*tt,45*tt),M=Ci*Math.sin(b)*Math.tan(b)/R,I=this.flapPos>.2,B;if(d!==null)B=d+M,this.thHold=null;else if(Math.abs(e.pitch)>.03){let k=Math.min(((I?2:2.5)-1)*Ci/R,5*tt),et=Math.min((I?1:2)*Ci/R,4*tt);B=(e.pitch>0?e.pitch*k:e.pitch*et)+M,this.thHold=null}else this.thHold===null&&Math.abs(c-M)<.6*tt&&(this.thHold=this.theta),B=(this.thHold!==null?Bt(1.2*(this.thHold-this.theta),-2*tt,2*tt):0)+M;let O=this.aStall-1.2*tt;this.aProt=this.alpha>O-2.5*tt&&E>.5,this.alpha>O-3*tt&&(B=Math.min(B,1.6*(O-this.alpha)+M)),this.theta>22*tt&&(B=Math.min(B,1*(30*tt-this.theta))),this.theta<-10*tt&&(B=Math.max(B,1*(-15*tt-this.theta))),this.ias>(this.vmaxKt+6)*ie&&(B=Math.max(B,.004*(this.ias-(this.vmaxKt+6)*ie)));let H=B-c;E>.5?this.trimI=Bt(this.trimI+T*4.5*H*t,-14*tt,18*tt):this.law==="normal"&&(this.trimI+=(1.5*tt-this.trimI)*Math.min(1,t/7));let $=Bt(Math.asin(Bt((this.agl+.4)/31,0,1))-1.7*tt,8*tt,.6);this.agl<22&&(B=Math.min(B,2*($-this.theta)));let W=e.pitch*25*tt+(this.law==="normal"?this.trimI:this.manTrim);if(this.law==="normal"&&(this.wow||this.agl<22)&&e.pitch>.03&&this.ias>60*ie){let k=Math.min(e.pitch*3.2*tt,2*($-this.theta));W=Math.min(W,this.trimI+T*9*(k-c)+4*tt*e.pitch)}let it=T*5*H+this.trimI,F=Bt(W*(1-E)+it*E,-20*tt,28*tt),Z;y!==null?(Z=y,this.phiHold=this.phi):Math.abs(e.roll)>.03?(Z=e.roll*15*tt,this.phiHold=this.phi):(this.phiHold=Bt(this.phiHold,-33*tt,33*tt),Z=Bt(2*(this.phiHold-this.phi),-10*tt,10*tt)),Z=Math.min(Z,2.5*(67*tt-this.phi)),Z=Math.max(Z,2.5*(-67*tt-this.phi));let Q=T*6*(Z-l),yt=Bt(e.roll*25*tt*(1-E)+Q*E,-25*tt,25*tt),Et=30*tt*Bt(Math.pow(75/Math.max(this.ias,1),2),.12,1),Jt=Ci*p/R,K=Bt(-3*T*(h-Jt)+.6*this.beta,-8*tt,8*tt),ot=Bt(e.yaw*Et+K*Math.max(E,this.law==="normal"&&this.ias>30?.5:0),-30*tt,30*tt);this.de+=Bt(F-this.de,-40*tt*t,40*tt*t),this.da+=Bt(yt-this.da,-50*tt*t,50*tt*t),this.dr+=Bt(ot-this.dr,-45*tt*t,45*tt*t);let St=68*tt*Bt(1-(this.gs-8)/40,.09,1);this.steer+=Bt(e.yaw*St-this.steer,-60*tt*t,60*tt*t);let ft=r.rho/1.225,Y=this.mach,ct=nd(r.rho,Y,this.alt),Ct=e.reverse&&this.wow&&this.thr<.05;this.rev+=Bt((Ct?1:0)-this.rev,-t/1.5,t/1.5);let $t=0,Vt=0,ue=0,D=0;for(let k=0;k<4;k++){let et=0;this.engOn[k]&&(et=this.rev>.9&&Ct?72:22+78*(this.rev>.05?0:this.thr));let at=.8+3.6*Math.pow(1-this.n1[k]/100,2);this.n1[k]+=Bt((et-this.n1[k])/at,-22,26)*t;let bt=Math.pow(Bt((this.n1[k]-5)/95,0,1),2.3),kt=Ft.Tmax*ct*bt-(this.engOn[k]?0:.02*f*.3);this.rev>.5&&(kt=-.42*kt),this.thrust[k]=kt,$t+=kt,Vt+=Ft.eng[k].z*kt,ue+=-Ft.eng[k].y*kt,this.engOn[k]&&(D+=Math.max(.14*Math.sqrt(ft),93e-7*(1+.45*Y)*Math.abs(Ft.Tmax*ct*bt)))}this.ff=D,this.fuel-=D*t,this.fuel<=0&&(this.fuel=0,this.engOn[0]&&this.say("\u71C3\u6599\u8017\u76E1 \u2014 \u5168\u90E8\u767C\u52D5\u6A5F\u7184\u706B",8),this.engOn=[!1,!1,!1,!1]);let ge=[$t,0,0],Gt=[0,Vt,ue],zt=0;if(this.tas>.5){let k=this.alpha,et=this.beta,at=l*Ft.b/(2*a),bt=c*Ft.c/(2*a),kt=h*Ft.b/(2*a),Me=Er(Ft.flapLift,this.flapPos),se=1/Math.sqrt(1-Math.pow(Math.min(Y,.85)*.75,2)),nn=1-(this.wow?.6:.42)*this.sb,hn=(this.cl0+Ft.CLa*se*k+5*bt-.3*this.de)*nn,ri=this.aStall+2*tt,Ds=(-.9-this.cl0)/Ft.CLa-2*tt,un=1.1*tt,Ni=1/(1+Math.exp(-(k-ri)/un)),cs=1/(1+Math.exp((k-Ds)/un));zt=Math.min(1,Ni+cs);let oi=Math.max(this.agl-1.5,.5)/Ft.b,$n=(16*oi)**2/(1+(16*oi)**2);hn*=1+.08*(1-$n);let ze=(1-zt)*hn+zt*1.05*Math.sin(2*k),Le=Ft.CD0+Er(Ft.flapDrag,this.flapPos)+.021*this.gearPos+(this.wow?.075:.05)*this.sb+Ft.k*$n*ze*ze*(1-zt)+(Y>.82?8*(Y-.82)**2:0)+zt*1.9*Math.sin(k)**2+.6*et*et,hs=-.85*et-.18*this.dr,ai=1-.6*zt,us=-.09*et-.45*at*(1-.5*zt)+(.06+.12*Math.max(ze,0))*kt+.1*this.da*ai-.008*this.dr+zt*.012*Math.sin(this.t*2.3),Ir=.04-.1*Me-.012*this.gearPos-1.2*k-21*bt+1.4*this.de-.22*zt*Math.sign(k)+.06*this.sb*(this.wow?0:1),Ui=.14*et-.28*kt-.03*Math.max(ze,0)*at+.1*this.dr-.008*this.da,w=Math.cos(k),N=Math.sin(k);ge[0]+=f*(-Le*w+ze*N),ge[1]+=f*hs,ge[2]+=f*(-Le*N-ze*w),Gt[0]+=f*Ft.b*us,Gt[1]+=f*Ft.c*Ir,Gt[2]+=f*Ft.b*Ui,this.CL=ze}this.stall=zt;let Pt=zh(s,ge),xe=ge[2],Lt=0,A=this.wow,S=!1,z=!1;this.strike="";let j=(k,et,at,bt)=>{let kt=zh(s,k),Me=this.pos[0]+kt[0],se=this.pos[1]+kt[1],nn=this.pos[2]+kt[2],hn=In(Me,se),ri=nn+hn;if(ri<=0)return 0;let Ds=td(this.w,k),un=zh(s,Ds),Ni=this.vel[0]+un[0],cs=this.vel[1]+un[1],oi=this.vel[2]+un[2],$n=Ri(Me,se);if($n==="water")return this.crash("\u589C\u5165\u6C34\u4E2D"),0;if(bt.fatal)return this.crash(bt.name+"\u89F8\u5730"),0;if(oi>(bt.gear?bt.steer?9.5:6.2:3.2))return this.crash(bt.gear?"\u843D\u5730\u904E\u91CD\uFF0C\u8D77\u843D\u67B6\u6298\u65B7 ("+Math.round(oi*196.85)+" fpm)":bt.name+"\u91CD\u64CA\u5730\u9762"),0;bt.gear||(this.strike=bt.name);let ze=et*ri+at*oi+(ri>.65?4*et*(ri-.65):0);ze=Bt(ze,0,6*o*Ci);let Le=[s[0],s[3]];if(bt.steer){let pt=Math.cos(this.steer),wt=Math.sin(this.steer);Le=[s[0]*pt+s[1]*wt,s[3]*pt+s[4]*wt]}let hs=Math.hypot(Le[0],Le[1])||1;Le=[Le[0]/hs,Le[1]/hs];let ai=[-Le[1],Le[0]],us=Ni*Le[0]+cs*Le[1],Ir=Ni*ai[0]+cs*ai[1],Ui=$n!=="grass",w=Ui?.012:.09;bt.brake&&(w+=(Ui?.52:.3)*Math.max(e.brake,this.park?1:0)),bt.gear||(w=.55);let N=-ze*w*Bt(us/.4,-1,1),G=-ze*(Ui?.75:.5)*Bt(Ir/(.1*Math.max(Math.abs(us),3)),-1,1)*(bt.gear?1:.7),V=[N*Le[0]+G*ai[0],N*Le[1]+G*ai[1],-ze];Pt[0]+=V[0],Pt[1]+=V[1],Pt[2]+=V[2];let U=Qf(s,V),rt=td(k,U);return Gt[0]+=rt[0],Gt[1]+=rt[1],Gt[2]+=rt[2],Lt+=U[2],!Ui&&ze>0&&(this.rough=Math.min(1,Math.abs(us)/30)),ze};if(this.rough=0,this.gearPos>.95)for(let k=0;k<3;k++){let et=Ft.gear[k],at=j(et.r,et.k,et.c,{gear:!0,steer:et.steer,brake:et.brake,name:et.name});this.gearLoad[k]=at,at>0&&(k===0?z=!0:S=!0)}else this.gearLoad=[0,0,0];if(this.agl<45)for(let k of Ft.body){if(this.crashed)break;j(k.r,6e6,12e5,{gear:!1,fatal:k.fatal,name:k.name})}if(this.crashed)return;this.wow=S,this.wowN=z,this.wow?(this.gndT+=t,A||(this.airT>2&&(this.touchdown={fpm:Math.round(-this.vs*196.85),g:this.nz,kt:Math.round(this.ias/ie),t:this.t},this.tdEvent=!0),this.airT=0)):(this.airT+=t,this.airT>1&&(this.gndT=0)),this.nz=-(xe+Lt)/(o*Ci),this.nzSm=(this.nzSm??1)+(this.nz-(this.nzSm??1))*Math.min(1,t/.15);let nt=Pt[0]/o,J=Pt[1]/o,Tt=Pt[2]/o+Ci;this.vsDot+=(-Tt-this.vsDot)*Math.min(1,t/.25),this.vel[0]+=nt*t,this.vel[1]+=J*t,this.vel[2]+=Tt*t,this.pos[0]+=this.vel[0]*t,this.pos[1]+=this.vel[1]*t,this.pos[2]+=this.vel[2]*t;let{Ixx:dt,Iyy:gt,Izz:Qt}=Ft,st=[(Gt[0]-(Qt-gt)*c*h)/dt,(Gt[1]-(dt-Qt)*h*l)/gt,(Gt[2]-(gt-dt)*l*c)/Qt];this.w[0]+=st[0]*t,this.w[1]+=st[1]*t,this.w[2]+=st[2]*t;let[xt,Dt,Nt,_t]=this.q,[Zt,Ht,ae]=this.w,L=.5*t,lt=[xt+L*(-Dt*Zt-Nt*Ht-_t*ae),Dt+L*(xt*Zt+Nt*ae-_t*Ht),Nt+L*(xt*Ht-Dt*ae+_t*Zt),_t+L*(xt*ae+Dt*Ht-Nt*Zt)],X=Math.hypot(lt[0],lt[1],lt[2],lt[3]);this.q=[lt[0]/X,lt[1]/X,lt[2]/X,lt[3]/X],this.wow&&this.park&&this.gs<.05&&this.thr<.2&&(this.vel[0]=0,this.vel[1]=0)}crash(t){this.crashed||(this.crashed=t)}flaps(t){this.flapSel=Bt(this.flapSel+t,0,6),this.say("\u895F\u7FFC "+Ft.flapDeg[this.flapSel]+"\xB0")}toggleGear(){if(this.wow){this.say("\u5730\u9762\u4E0A\u4E0D\u53EF\u6536\u8D77\u843D\u67B6");return}this.gearSel=!this.gearSel,this.say(this.gearSel?"\u8D77\u843D\u67B6 \u653E\u4E0B":"\u8D77\u843D\u67B6 \u6536\u8D77")}toggleAP(){let t=this.ap;if(t.on)t.on=!1,t.lat="HDG",t.ver="ALT",this.apDisc=!0,this.thHold=this.theta,this.phiHold=this.phi,this.say("\u81EA\u52D5\u99D5\u99DB \u89E3\u9664");else{if(this.wow||this.fbw<.9){this.say("\u81EA\u52D5\u99D5\u99DB\u53EA\u80FD\u5728\u7A7A\u4E2D\u63A5\u901A");return}t.on=!0,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Te+360)%360),this.say("\u81EA\u52D5\u99D5\u99DB \u63A5\u901A")}}toggleATHR(){let t=this.ap;t.athr=!t.athr,t.athr&&this.wow&&(t.spd=Math.max(t.spd,160)),this.say(t.athr?"\u81EA\u52D5\u6CB9\u9580 \u63A5\u901A ("+t.spd+" kt)":"\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664")}toggleAPP(){let t=this.ap;if(t.app){t.app=!1,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Te+360)%360),t.alt=Math.round(this.alt/Ce/100)*100,this.say("\u9032\u5834\u6A21\u5F0F \u53D6\u6D88");return}let e=Bh(this.pos[0],this.pos[1],this.psi*Te);if(!e){this.say("\u9644\u8FD1\u6C92\u6709\u53EF\u7528\u7684 ILS \u2014 \u8ACB\u5148\u5C0D\u6E96\u8DD1\u9053\u65B9\u5411");return}t.rw=e,t.app=!0,this.say("ILS \u9032\u5834\u9810\u4F4D\uFF1A"+e.id+"  \u822A\u9053 "+String(Math.round(e.crs)||360).padStart(3,"0")+"\xB0",6)}tuneILS(){if(this.ap.app)return;let t=Bh(this.pos[0],this.pos[1],this.psi*Te);this.ap.rw=t}};function Pi(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var As={night:{value:0},time:{value:0}};function av(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256),s=Pi(11),r=[4,8,16,32,64].map(l=>({p:l,v:Array.from({length:l*l},()=>s())})),o=l=>l*l*(3-2*l);for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0,u=.5;for(let g of r){let x=c/256*g.p,m=l/256*g.p,d=Math.floor(x),y=Math.floor(m),v=o(x-d),_=o(m-y),C=(E,T)=>g.v[T%g.p*g.p+E%g.p];h+=u*(C(d,y)*(1-v)*(1-_)+C(d+1,y)*v*(1-_)+C(d,y+1)*(1-v)*_+C(d+1,y+1)*v*_),u*=.5}let f=Math.min(255,Math.max(0,h/.97*255))|0,p=(l*256+c)*4;n.data[p]=n.data[p+1]=n.data[p+2]=f,n.data[p+3]=255}e.putImageData(n,0,0);let a=new Si(t);return a.wrapS=a.wrapT=jn,a.anisotropy=8,a}function lv(i){let{size:t,n:e}=Xn,n=e+1,s=po(),r=new Float32Array(n*n*3),o=new Float32Array(n*n*3),a=t/e,l=new vt,c=new vt;for(let x=0;x<n;x++)for(let m=0;m<n;m++){let d=x*n+m,y=-t/2+m*a,v=-t/2+x*a,_=s[d];r[d*3]=y,r[d*3+1]=_,r[d*3+2]=-v;let C=s[x*n+Math.min(e,m+1)]-s[x*n+Math.max(0,m-1)],E=s[Math.min(e,x+1)*n+m]-s[Math.max(0,x-1)*n+m],T=Math.hypot(C,E)/(2*a),R=Ts(v/2500,y/2500,3),b=Ts(v/700+31,y/700+17,2);_<3?l.setRGB(.72,.66,.5):_<500?(l.setRGB(.25,.38,.16),c.setRGB(.42,.44,.22),l.lerp(c,R),c.setRGB(.13,.24,.11),l.lerp(c,Math.max(0,b-.45)*1.6)):_<1400?(l.setRGB(.17,.28,.14),c.setRGB(.38,.36,.28),l.lerp(c,Math.min(1,(_-500)/900+R*.3))):(l.setRGB(.4,.38,.35),c.setRGB(.93,.95,.98),l.lerp(c,Math.min(1,Math.max(0,(_-1500)/500+(R-.5))))),T>.22&&_>60&&(c.setRGB(.36,.33,.3),l.lerp(c,Math.min(1,(T-.22)*4))),_<-1&&l.setRGB(.1,.22,.3),o[d*3]=l.r,o[d*3+1]=l.g,o[d*3+2]=l.b}let h=new Uint32Array(e*e*6),u=0;for(let x=0;x<e;x++)for(let m=0;m<e;m++){let d=x*n+m,y=d+1,v=d+n,_=v+1;h[u++]=d,h[u++]=y,h[u++]=v,h[u++]=y,h[u++]=_,h[u++]=v}let f=new me;f.setAttribute("position",new pe(r,3)),f.setAttribute("color",new pe(o,3)),f.setIndex(new pe(h,1)),f.computeVertexNormals();let p=new Pe({vertexColors:!0,roughness:.96,metalness:0});p.onBeforeCompile=x=>{x.uniforms.tNoise={value:i},x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
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
      }`)};let g=new oe(f,p);return g.receiveShadow=!0,g.frustumCulled=!1,g}function cv(){let t=new Uint8Array(262144),e=Pi(5),n=[];for(let r=0;r<22;r++){let o=Math.round((e()-.5)*22),a=Math.round((e()-.5)*22);!o&&!a||n.push({kx:o,ky:a,a:.5/Math.hypot(o,a),ph:e()*6.283})}for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=0,l=0,c=o/256*6.2832,h=r/256*6.2832;for(let m of n){let d=Math.cos(m.kx*c+m.ky*h+m.ph)*m.a;a+=d*m.kx,l+=d*m.ky}let u=.11,f=-a*u,p=-l*u,g=Math.hypot(f,p,1),x=(r*256+o)*4;t[x]=(f/g*.5+.5)*255,t[x+1]=(p/g*.5+.5)*255,t[x+2]=(1/g*.5+.5)*255,t[x+3]=255}let s=new ws(t,256,256,dn);return s.wrapS=s.wrapT=jn,s.generateMipmaps=!0,s.minFilter=An,s.magFilter=qe,s.anisotropy=8,s.needsUpdate=!0,s}function hv(i){let n=document.createElement("canvas");n.width=512,n.height=4096;let s=n.getContext("2d"),r=i.len,o=i.width,a=Pi(i.len);s.setTransform(512/o,0,0,4096/r,0,0),s.fillStyle="#34363a",s.fillRect(0,0,o,r);for(let c=0;c<5e3;c++){let h=40+a()*35|0;s.fillStyle=`rgba(${h},${h},${h+2},0.5)`,s.fillRect(a()*o,a()*r,.5+a()*2.5,2+a()*14)}s.fillStyle="#e9e9e4",s.fillRect(1.2,0,.9,r),s.fillRect(o-2.1,0,.9,r);for(let c=95;c<r-95;c+=60)s.fillRect(o/2-.45,c,.9,30);for(let c=0;c<2;c++){s.save(),c===1&&(s.translate(o,r),s.rotate(Math.PI));let h=u=>r-u;s.fillStyle="#e9e9e4";for(let u=0;u<12;u++){let f=4+(u<6?u:u+.9)*4.05;s.fillRect(f,h(36),1.8,30)}s.font="700 26px Arial",s.textAlign="center",s.textBaseline="alphabetic",s.save(),s.translate(o/2,h(46)),s.scale(.75,1),s.fillText(i.ids[c],0,0),s.restore();for(let[u,f]of[[150,3],[300,2],[450,2],[600,1],[750,1]])for(let p=0;p<f;p++)for(let g of[-1,1])s.fillRect(o/2+g*(9+p*3)-.9,h(u+22.5),1.8,22.5);for(let u of[-1,1])s.fillRect(o/2+u*12-3,h(450),6,50);for(let u=0;u<260;u++){s.fillStyle=`rgba(15,15,16,${.05+a()*.1})`;let f=o/2+(a()-.5)*18;s.fillRect(f,h(250+a()*500+60),.9+a(),40+a()*90)}s.restore()}let l=new Si(n);return l.anisotropy=16,l.colorSpace=Ae,l}function uv(i,t){let e=new Re;e.position.set(i.e,i.elev,-i.n),e.rotation.y=-i.hdg*ni;let n=i.len,s=i.width,r=(y,v,_,C,E,T)=>{let R=new oe(new Ji(y,v).rotateX(-Math.PI/2),T);return R.position.set(_,E,C),R.receiveShadow=!0,e.add(R),R};r(s,n+120,0,0,.25,new Pe({color:3092788,roughness:.9})),r(s,n,0,0,.32,new Pe({map:hv(i),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),r(s+30,n+120,0,0,.12,new Pe({color:5593178,roughness:1}));let o=new Pe({color:4671820,roughness:.95}),a=new We({color:14201372,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});r(40,n,190,0,.2,o),r(.6,n,190,0,.3,a);for(let y of[-n/2+40,-n/4,0,n/4,n/2-40])r(180,40,110,-y,.2,o),r(170,.6,115,-y,.3,a);r(330,1040,355,0,.18,new Pe({color:5264214,roughness:.95}));let l=new Pe({color:12172996,roughness:.7,metalness:.1}),c=new Pe({color:2704220,roughness:.25,metalness:.6}),h=(y,v,_,C,E,T=l)=>{let R=new oe(new yn(y,v,_),T);return R.position.set(C,v/2,E),R.castShadow=!0,R.receiveShadow=!0,e.add(R),R};h(70,24,620,580,0),h(72,14,600,579,0,c).position.y=14;for(let y=-2;y<=2;y++)h(90,10,14,500,y*130);h(16,70,16,640,-520),h(26,9,26,640,-520,c).position.y=72;for(let y=0;y<3;y++)h(120,34,110,620,520+y*140,new Pe({color:9344926,roughness:.6,metalness:.3}));let u=[],f=[],p=(y,v,_,C,E,T)=>{u.push(y,v,_),f.push(C,E,T)};for(let y=-n/2;y<=n/2;y+=60)p(-s/2-1,.6,-y,1,1,.85),p(s/2+1,.6,-y,1,1,.85);for(let y=-n/2+30;y<=n/2;y+=30)p(0,.4,-y,1,1,1);for(let y of[-1,1]){for(let v=-s/2;v<=s/2;v+=3)p(v,.6,y*(n/2+2),0,1,.2),p(v,.6,y*(n/2-1),1,.05,.05);for(let v=30;v<=900;v+=30)for(let _=-4;_<=4;_+=2)p(_,1.5,y*(n/2+60+v),1,1,.9);for(let v=-22;v<=22;v+=2)p(v,1.5,y*(n/2+360),1,1,.9);for(let v=30;v<=900;v+=30)for(let _ of[-1,1])for(let C=0;C<3;C++)p(_*(9+C*1.5),.4,y*(n/2-v),1,1,1)}for(let y=-n/2;y<=n/2;y+=40)p(170,.5,-y,.1,.3,1),p(210,.5,-y,.1,.3,1);for(let y=0;y<26;y++)p(545,26,-300+y*24,1,.8,.5);let g=new me;g.setAttribute("position",new le(u,3)),g.setAttribute("color",new le(f,3));let x=new Wn({size:2.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1}),m=new ei(g,x);m.frustumCulled=!1,e.add(m),t.push(x);let d=[];for(let y=0;y<2;y++){let v=y===0?1:-1,_=new me,C=[],E=[];for(let b=0;b<4;b++)C.push(-v*(s/2+15+b*9),1,v*(n/2-300)),E.push(1,1,1);_.setAttribute("position",new le(C,3)),_.setAttribute("color",new le(E,3));let T=new Wn({size:5,sizeAttenuation:!1,vertexColors:!0,toneMapped:!1,depthWrite:!1,transparent:!0}),R=new ei(_,T);R.frustumCulled=!1,e.add(R),d.push({geo:_,rw:Mn[cn.indexOf(i)*2+y]})}return{grp:e,papi:d}}function fv(i){let t=Pi(99),e=new yn(1,1,1).translate(0,.5,0),n=new Pe({roughness:.7,metalness:.15});n.onBeforeCompile=m=>{m.uniforms.uNight=As.night,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBP; varying vec3 vBN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBP = (instanceMatrix * vec4(position, 1.0)).xyz; vBN = normal;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying vec3 vBP; varying vec3 vBN;
float hb(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 23758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float wLit = 0.0;
        if (abs(vBN.y) < 0.5) {
          float u = abs(vBN.x) > 0.5 ? vBP.z : vBP.x;
          vec2 wc = vec2(u / 3.4, vBP.y / 3.7); vec2 wf = fract(wc); vec2 wi = floor(wc);
          float fw = max(fwidth(wc.x), fwidth(wc.y));
          float vis = clamp(1.0 - fw * 1.8, 0.0, 1.0);
          float win = step(0.18, wf.x) * step(wf.x, 0.82) * step(0.28, wf.y) * step(wf.y, 0.80) * vis;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.10, 0.15, 0.20), win * 0.75);
          wLit = win * step(0.62, hb(wi + floor(vBP.xz / 70.0))) + (1.0 - vis) * 0.2;
        } else diffuseColor.rgb *= 0.6;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.78, 0.45) * wLit * uNight * 1.6;`)};let s=3e3,r=new ti(e,n,s),o=new Ut,a=new vt,l=[[6500,9e3,3800,1],[-9e3,5200,2600,.7],[16e3,3e3,2200,.6],[38e3,30500,2e3,.6],[-3e3,15e3,1800,.5]],c=0,h=0;for(;c<s&&h++<5e4;){let m=l[t()*l.length|0],d=t()*6.283,y=Math.pow(t(),.8)*m[2],v=Math.round((m[0]+Math.cos(d)*y)/70)*70,_=Math.round((m[1]+Math.sin(d)*y)/70)*70;if(Ri(v,_)!=="grass")continue;let C=In(v,_);if(C<1.5||C>700)continue;let E=1-y/m[2],T=18+t()*34,R=18+t()*34,b=7+t()*15+Math.pow(E,3)*t()*190*m[3];o.makeScale(T,b,R),o.setPosition(_,C-1,-v),r.setMatrixAt(c,o);let M=.5+t()*.38;a.setRGB(M,M*(.95+t()*.05),M*(.9+t()*.12)),r.setColorAt(c,a),c++}r.count=c,r.frustumCulled=!1,i.add(r);let u=[],f=Pi(7);for(let m of l)for(let d=0;d<900*m[3];d++){let y=f()*6.283,v=Math.pow(f(),.7)*m[2]*1.15,_=Math.round((m[0]+Math.cos(y)*v)/35)*35,C=Math.round((m[1]+Math.sin(y)*v)/35)*35,E=In(_,C);E>1.5&&Ri(_,C)==="grass"&&u.push(C,E+8,-_)}let p=new me;p.setAttribute("position",new le(u,3));let g=new Wn({size:2,sizeAttenuation:!1,color:16760944,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),x=new ei(p,g);return x.frustumCulled=!1,i.add(x),g}function dv(i){let t=Pi(321),e=new so(.5,1,6,1).translate(0,.5,0),n=new Sa,s=14e3,r=new ti(e,n,s),o=new Ut,a=new vt,l=0,c=0;for(;l<s&&c++<2e5;){let h=cn[t()*cn.length|0],u=h.n+(t()-.5)*22e3,f=h.e+(t()-.5)*22e3;if(Ts(u/900+3.1,f/900+8.7,3)<.5+t()*.08||Ri(u,f)!=="grass")continue;let g=!1;for(let d of cn){let y=d.hdg*ni,v=u-d.n,_=f-d.e,C=v*Math.cos(y)+_*Math.sin(y),E=-v*Math.sin(y)+_*Math.cos(y);Math.abs(C)<d.len/2+1300&&E>-260&&E<760&&(g=!0)}if(g)continue;let x=In(u,f);if(x<3||x>1100)continue;let m=9+t()*9;o.makeScale(m*(.75+t()*.4),m*(1.3+t()*.9),m*(.75+t()*.4)),o.setPosition(f,x-.5,-u),r.setMatrixAt(l,o),a.setRGB(.06+t()*.06,.16+t()*.1,.06+t()*.04),r.setColorAt(l,a),l++}r.count=l,r.frustumCulled=!1,i.add(r)}function pv(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=Pi(77);for(let r=0;r<4;r++){let o=r%2*128+64,a=Math.floor(r/2)*128+128/2,l=Array.from({length:5+r},()=>({x:(n()-.5)*44,y:(n()-.35)*24,s:.6+n()*.6}));for(let c=0;c<150;c++){let h=l[n()*l.length|0],u=n()*6.283,f=Math.pow(n(),.8)*17*h.s,p=h.x+Math.cos(u)*f,g=h.y+Math.sin(u)*f;g>9&&(g=9+(g-9)*.3);let x=Math.min(4+n()*13*h.s,60-Math.max(Math.abs(p),Math.abs(g)));if(x<2)continue;let m=e.createRadialGradient(o+p,a+g,0,o+p,a+g,x),d=.05+n()*.12;m.addColorStop(0,`rgba(255,255,255,${d})`),m.addColorStop(.55,`rgba(255,255,255,${d*.45})`),m.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=m,e.fillRect(o-128/2,a-128/2,128,128)}}let s=new Si(t);return s.flipY=!1,s}function mv(i){let t=Pi(4242),e=400,n=18,s=e*n,r=new Float32Array(s*3),o=new Float32Array(s*3),a=0;for(let u=0;u<e;u++){let f=t(),p=(t()-.5)*158e3,g=(t()-.5)*158e3,x=1500+t()*900,m=500+t()*1100,d=.35+t()*.75;f<.22?(x=850+t()*500,m=220+t()*300,d=.5+t()*.5):f<.4?(x=3600+t()*1900,m=1500+t()*1900,d=.05+t()*.08):f<.47&&(x=1300+t()*500,m=1300+t()*900,d=1.5+t()*1);for(let y=0;y<n;y++){let v=t()*6.283,_=Math.sqrt(t()),C=m*(.45+t()*.45)*(1.05-_*.5)*(d>1.4?.8:1),E=(1-_*_)*t()*m*d;r[a*3]=p+Math.cos(v)*_*m,r[a*3+1]=x+C*.22+E,r[a*3+2]=g+Math.sin(v)*_*m*.75,o[a*3]=C,o[a*3+1]=Math.min(1,E/(m*d*.8+1)),o[a*3+2]=t(),a++}}let l=new Ca;l.setAttribute("position",new le([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),l.setIndex([0,1,2,0,2,3]),l.setAttribute("aOff",new Qn(r,3)),l.setAttribute("aPar",new Qn(o,3)),l.instanceCount=s;let c=new Qe({transparent:!0,depthWrite:!1,fog:!0,uniforms:Sr.merge([ht.fog,{tPuff:{value:null},uSun:{value:new P(0,1,0)},uLight:{value:new vt(1,1,1)},uShade:{value:new vt(.55,.6,.68)},uOpacity:{value:1}}]),vertexShader:`
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
      }`});c.uniforms.tPuff.value=pv();let h=new oe(l,c);return h.frustumCulled=!1,h.renderOrder=5,i.add(h),{mesh:h,mat:c,geo:l,total:s,per:n}}function gv(i,t){let e=(n,s,r)=>{let o=new Qe({transparent:!0,depthWrite:!1,fog:!0,side:Ve,uniforms:Sr.merge([ht.fog,{tNoise:{value:null},uOrg:{value:new P},uCam:{value:new P},uLight:{value:new vt(1,1,1)},uShade:{value:new vt(.6,.65,.72)},uCov:{value:1},uAlt:{value:n},uKind:{value:s},uT:{value:0},uOpacity:{value:1}}]),vertexShader:`
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
        }`});o.uniforms.tNoise.value=t;let a=new oe(new Ji(1,1).rotateX(-Math.PI/2),o);return a.scale.set(13e5,1,13e5),a.position.y=n,a.frustumCulled=!1,a.renderOrder=r,i.add(a),{m:a,mat:o,alt:n}};return[e(11900,0,6),e(2500,1,3)]}function xv(i){let t=new Pe({color:15330543,roughness:.55}),e=new Pe({color:12728878,roughness:.6}),n=new Pe({color:4871520,roughness:.5,metalness:.4}),s=(F,Z,Q,yt,Et)=>{let Jt=new oe(F,Z);return Jt.position.set(Q,yt,-Et),Jt.castShadow=!0,i.add(Jt),Jt},r=F=>{let Z=-1500;for(;Z>-4e4&&Ri(F,Z)!=="water";)Z-=100;return Z},o=[];for(let F=0;F<3;F++)for(let Z=0;Z<7;Z++){let Q=-3600+Z*1050+F*350;o.push([Q,r(Q)-1700-F*900])}let a=new ti(new Rn(2,3.6,112,10).translate(0,56,0),t,o.length),l=new ti(new yn(14,5,5).translate(-2,113,0),t,o.length),c=new ti(new yn(.9,62,3.2).translate(0,31,0),t,o.length*3),h=new Ut,u=new on,f=new P,p=new P(1,1,1),g=new P(1,0,0);o.forEach(([F,Z],Q)=>{h.makeTranslation(Z,0,-F),a.setMatrixAt(Q,h),l.setMatrixAt(Q,h)});for(let F of[a,l,c])F.frustumCulled=!1,F.castShadow=!0,i.add(F);let x=o.map((F,Z)=>Z*1.7),m=-5200,d=r(m)+160,y=In(m,d);s(new Rn(4.2,6.5,44,16).translate(0,22,0),t,d,y,m),s(new Rn(5,5.6,9,16).translate(0,22,0),e,d,y,m),s(new Rn(3,3.6,6,12).translate(0,47,0),n,d,y,m);let v=new We({color:16773824,transparent:!0,opacity:0,depthWrite:!1,blending:Ki,side:Ve,toneMapped:!1,fog:!1}),_=s(new so(190,4200,12,1,!0).rotateZ(Math.PI/2).translate(2100,0,0),v,d,y+47,m);_.castShadow=!1;let C=new bs(new ji({color:16773824,transparent:!0,opacity:0,depthWrite:!1,blending:Ki,toneMapped:!1,fog:!1,sizeAttenuation:!1}));C.scale.setScalar(.012),C.position.set(d,y+47,-m),i.add(C);let E=5937.5,T=23750,R=In(E,T);s(new Rn(46,50,44,24).translate(0,16,0),t,T,R,E),s(new ya(46,24,12,0,Math.PI*2,0,Math.PI/2).translate(0,38,0),t,T,R,E),s(new yn(8,30,40).translate(0,62,14),n,T,R,E);let b=4500,M=6e3,I=In(b,M);s(new Rn(5,15,330,12).translate(0,165,0),t,M,I,b),s(new Rn(24,15,22,20).translate(0,300,0),n,M,I,b),s(new Rn(.8,2.5,110,6).translate(0,385,0),e,M,I,b);let B=[];for(let[F,Z]of o)B.push(Z,118,-F);B.push(M,I+442,-b,M,I+315,-b,T,R+86,-E);let O=new me;O.setAttribute("position",new le(B,3));let H=new Wn({size:3,sizeAttenuation:!1,color:16724e3,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),$=new ei(O,H);$.frustumCulled=!1,i.add($);let W=0,it=0;return{setNight(F){it=F,v.opacity=F>.4?.1*F:0,C.material.opacity=F>.2?1:0},update(F){W+=F;for(let Z=0;Z<o.length;Z++)for(let Q=0;Q<3;Q++)u.setFromAxisAngle(g,x[Z]+W*1.25+Q*2.0944),f.set(o[Z][1]-9.5,113,-o[Z][0]),h.compose(f,u,p),c.setMatrixAt(Z*3+Q,h);c.instanceMatrix.needsUpdate=!0,_.rotation.y=W*.7,H.opacity=it>.3?W%1.6<.8?1:.15:0}}}function _v(i){let t=new Re;i.add(t);let e=new Ma(130,7,10,64),n=[],s=new bs(new ji({color:7208858,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1,sizeAttenuation:!1,opacity:.9}));s.scale.setScalar(.014),s.visible=!1,s.renderOrder=20,t.add(s);let r=-1,o=0;return{set(a){for(let l of n)t.remove(l.m),l.m.material.dispose();n.length=0,r=-1,s.visible=!1;for(let l of a){let c=new We({color:10475775,transparent:!0,opacity:.35,toneMapped:!1,fog:!1,depthWrite:!1}),h=new oe(e,c);h.position.set(l.e,l.alt,-l.n),h.rotation.y=-l.psi,h.frustumCulled=!1,t.add(h),n.push({m:h,mat:c})}},activate(a){r=a,n.forEach((l,c)=>{l.m.visible=c>=a,l.mat.color.set(c===a?5635976:10475775),l.mat.opacity=c===a?.95:.3}),s.visible=a>=0&&a<n.length,s.visible&&s.position.copy(n[a].m.position)},update(a){o+=a,r>=0&&r<n.length&&(n[r].mat.opacity=.75+.25*Math.sin(o*5))}}}function vv(){let i=Xn.n+1,t=po(),e=new Uint8Array(i*i);for(let s=0;s<e.length;s++)e[s]=Math.min(255,Math.max(0,t[s]+60));let n=new ws(e,i,i,lo);return n.unpackAlignment=1,n.magFilter=n.minFilter=qe,n.needsUpdate=!0,n}function yv(i){let t=Pi(2024),e=3200,n=new Float32Array(e*3),s=new Float32Array(e*3);for(let l=0;l<e;l++){let c=t()*1.2-.2,h=t()*6.283,u=Math.sqrt(Math.max(0,1-c*c)),f=4e5;n[l*3]=Math.cos(h)*u*f,n[l*3+1]=c*f,n[l*3+2]=Math.sin(h)*u*f;let p=Math.pow(t(),2.6)*.9+.12,g=t();s[l*3]=p*(.85+.15*g),s[l*3+1]=p*.92,s[l*3+2]=p*(1-.2*g)}let r=new me;r.setAttribute("position",new pe(n,3)),r.setAttribute("color",new pe(s,3));let o=new Wn({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}),a=new ei(r,o);return a.frustumCulled=!1,a.renderOrder=-5,i.add(a),o}function Mv(i){let t=new Re;i.add(t);let e=[],n=[{R:23e4,a0:-1.25,a1:.9,h0:85e3,h1:235e3,ph:0},{R:285e3,a0:-.7,a1:1.3,h0:9e4,h1:26e4,ph:3.7},{R:345e3,a0:-1.45,a1:.35,h0:95e3,h1:3e5,ph:7.9}];for(let s of n){let a=[],l=[],c=[];for(let p=0;p<=20;p++)for(let g=0;g<=220;g++){let x=g/220,m=p/20;a.push(x,m,0),l.push(x,m)}for(let p=0;p<20;p++)for(let g=0;g<220;g++){let x=p*221+g;c.push(x,x+1,x+220+1,x+1,x+220+2,x+220+1)}let h=new me;h.setAttribute("position",new le(a,3)),h.setAttribute("uv",new le(l,2)),h.setIndex(c);let u=new Qe({transparent:!0,depthWrite:!1,side:Ve,blending:Ki,uniforms:{uT:As.time,uK:{value:0},uP:{value:new ne(s.R,s.a0,s.a1,s.ph)},uH:{value:new Ot(s.h0,s.h1)}},vertexShader:`
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
        }`}),f=new oe(h,u);f.frustumCulled=!1,f.renderOrder=-4,t.add(f),e.push(u)}return t.visible=!1,{grp:t,mats:e}}function id(i,t){let e=av(),n=lv(e);i.add(n);let s=cv();s.repeat.set(7600,7600);let r=new Pe({color:667986,roughness:.2,metalness:0,normalMap:s,normalScale:new Ot(.28,.28),envMapIntensity:.8}),o=vv();r.onBeforeCompile=v=>{v.uniforms.tH={value:o},v.uniforms.tNoise={value:e},v.uniforms.uNight=As.night,v.uniforms.uTime=As.time,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSeaP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSeaP = position;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tH; uniform sampler2D tNoise; uniform float uNight; uniform float uTime; varying vec3 vSeaP;`).replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec2 q = vec2(vSeaP.x, -vSeaP.z), huv = q / ${Xn.size.toFixed(1)} + 0.5; float depth = 60.0;
        if (huv.x > 0.0 && huv.x < 1.0 && huv.y > 0.0 && huv.y < 1.0) depth = 60.0 - texture2D(tH, huv * (${Xn.n}.0 / ${Xn.n+1}.0) + 0.5 / ${Xn.n+1}.0).r * 255.0;
        float n = texture2D(tNoise, q / 9000.0).r, n2 = texture2D(tNoise, q / 330.0).r, dayK = 1.0 - 0.9 * uNight;
        diffuseColor.rgb *= 0.80 + 0.40 * n;
        float sh_ = 1.0 - smoothstep(0.0, 44.0, depth + (n - 0.5) * 12.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.04, 0.36, 0.42) * dayK, sh_ * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.26, 0.60, 0.58) * dayK, smoothstep(0.72, 1.0, sh_) * 0.65);
        float foam = smoothstep(3.2, 0.6, depth) * smoothstep(0.38, 0.62, n2 + 0.12 * sin(uTime * 0.8 + q.x * 0.02));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92) * dayK, foam * 0.8);
      }`)};let a=new oe(new Ji(15e5,15e5).rotateX(-Math.PI/2),r);a.receiveShadow=!0,i.add(a);let l=gv(i,e),c=xv(i),h=_v(i),u=new P,f=[],p=[];for(let v of cn){let _=uv(v,f);i.add(_.grp),p.push(..._.papi)}let g=fv(i);dv(i);let x=mv(i),m=yv(t),d=Mv(t),y=0;return{terrain:n,sea:a,clouds:x,setEnv({night:v,sunDir:_,cloudFrac:C,sunColor:E,lowvis:T}){As.night.value=v;for(let b of f)b.size=2.2+2.6*v,b.opacity=.75+.25*v;g.opacity=v*.9,x.geo.instanceCount=Math.round(x.total*C/x.per)*x.per;let R=x.mat.uniforms;R.uSun.value.copy(_),R.uLight.value.copy(E).multiplyScalar(T?1.3:2.5).lerp(new vt(.1,.12,.17),v),R.uShade.value.setRGB(.66,.7,.78).multiplyScalar(T?1.1:1.45).lerp(new vt(.035,.045,.07),v),v>.2&&v<.9&&(R.uLight.value.setRGB(2,1.3,.9),R.uShade.value.setRGB(.5,.48,.62)),y=T?0:Math.max(0,v-.4)/.6,m.opacity=y,d.grp.visible=v>.9&&!T;for(let b of d.mats)b.uniforms.uK.value=v>.9?1:0;r.color.set(v>.9?265494:667986);for(let b of l){let M=b.mat.uniforms;M.uLight.value.copy(R.uLight.value),M.uShade.value.copy(R.uShade.value),M.uCov.value=C,M.uOpacity.value=T?0:1-.55*v}c.setNight(v)},gates:h,update(v,_,C){As.time.value+=v,C.getWorldPosition(u).sub(i.position);for(let E of l){E.m.position.x=u.x,E.m.position.z=u.z;let T=E.mat.uniforms;T.uOrg.value.copy(i.position),T.uCam.value.copy(u),T.uT.value=As.time.value}l[0].m.renderOrder=u.y>l[0].alt?6:2,c.update(v),h.update(v),s.offset.x+=v*.012,s.offset.y+=v*.007,m.opacity=Math.min(1,y+Math.max(0,(_-13e3)/9e3)*.5)},updatePapi(v,_,C){for(let E of p){let T=E.rw,R=T.crs*ni,b=v-T.thrN,M=_-T.thrE,I=b*Math.cos(R)+M*Math.sin(R),B=Math.atan2(C-T.elev,Math.max(1,300-I))/ni,O=E.geo.attributes.color,H=[3.5,3.17,2.83,2.5];for(let $=0;$<4;$++){let W=B>H[$];O.setXYZ($,1,W?1:.05,W?1:.05)}O.needsUpdate=!0}}}}var za=class{constructor(){this.ctx=null,this.muted=!1,this.beepT=0,this.lastSay={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t,n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=Math.random()*2-1;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination);let o=(l,c,h)=>{let u=e.createBufferSource();u.buffer=s,u.loop=!0;let f=e.createBiquadFilter();f.type=l,f.frequency.value=c,f.Q.value=h;let p=e.createGain();return p.gain.value=0,u.connect(f),f.connect(p),p.connect(this.master),u.start(),{fl:f,g:p}},a=(l,c)=>{let h=e.createOscillator();h.type=l,h.frequency.value=c;let u=e.createGain();return u.gain.value=0,h.connect(u),u.connect(this.master),h.start(),{o:h,g:u}};this.roar=o("lowpass",300,.7),this.hiss=o("bandpass",2600,.8),this.wind=o("bandpass",800,.5),this.rumble=o("lowpass",70,1),this.fan=a("sawtooth",60),this.fan2=a("sawtooth",61.5),this.whine=a("triangle",800),this.warn=a("square",900)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7),t&&window.speechSynthesis&&speechSynthesis.cancel()}say(t,e=t,n=3){if(this.muted||!window.speechSynthesis)return;let s=performance.now()/1e3;if(this.lastSay[e]&&s-this.lastSay[e]<n)return;this.lastSay[e]=s;let r=new SpeechSynthesisUtterance(t);r.lang="en-US",r.rate=1.15,r.pitch=.9,r.volume=.9,speechSynthesis.pending&&speechSynthesis.cancel(),speechSynthesis.speak(r)}thump(t=1){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="sine",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(30,n+.35),r.gain.setValueAtTime(Math.min(1,.5*t),n),r.gain.exponentialRampToValueAtTime(.001,n+.5),s.connect(r),r.connect(this.master),s.start(n),s.stop(n+.55);let o=e.createOscillator(),a=e.createGain();o.type="sawtooth",o.frequency.setValueAtTime(1900,n),o.frequency.exponentialRampToValueAtTime(700,n+.25),a.gain.setValueAtTime(.08*t,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),o.connect(a),a.connect(this.master),o.start(n),o.stop(n+.32)}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=(p,g)=>p.setTargetAtTime(g,r,.08);if(s||t.crashed){for(let p of[this.roar,this.hiss,this.wind,this.rumble,this.fan,this.fan2,this.whine,this.warn])o(p.g.gain,0);return}let a=(t.n1[0]+t.n1[1]+t.n1[2]+t.n1[3])/400,l=e?.45:1,c=Math.pow(a,2.2);o(this.roar.g.gain,l*(.05+.75*c)),o(this.roar.fl.frequency,(e?160:260)+900*a),o(this.hiss.g.gain,l*.1*c*(e?.4:1)),o(this.fan.g.gain,l*(.03+.05*a)),o(this.fan.o.frequency,34+105*a),o(this.fan2.g.gain,l*(.03+.05*a)),o(this.fan2.o.frequency,34.6+106.5*a),o(this.whine.g.gain,l*.018*(.3+a)),o(this.whine.o.frequency,420+2400*a);let h=t.ias/(130*ie);o(this.wind.g.gain,Math.min(.5,(e?.16:.1)*h*h+.12*t.sb*h*h+.05*t.gearPos*h*h)),o(this.wind.fl.frequency,500+500*Math.min(2,h)),o(this.rumble.g.gain,t.wow?Math.min(.9,t.gs/70)*(e?.9:.5)*(1+t.rough):0),this.beepT+=n;let u=0,f=900;t.stallWarn?(u=this.beepT%.12<.06?1:0,f=420):t.overspeed?(u=this.beepT%.18<.09?1:0,f=1400):t.cfgWarn||t.gearWarn?(u=this.beepT%1<.5?1:0,f=760):t.apDiscT>0&&(u=this.beepT%.3<.15?1:0,f=1100),o(this.warn.o.frequency,f),this.warn.g.gain.setTargetAtTime(u*.07,r,.005)}};function go(i,t,e){let n=i.getObjectByName(e);if(!n)return[];let s=[],r=new Ut().copy(t.matrixWorld).invert();n.updateMatrixWorld(!0);let o=[];n.traverse(a=>{a.isMesh&&o.push(a)});for(let a of o){let l=(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(new Ut().multiplyMatrices(r,a.matrixWorld)),c=new oe(l,a.material);c.castShadow=a.castShadow,c.receiveShadow=a.receiveShadow,c.name=e+"_baked",i.add(c),a.visible=!1,s.push(c)}return s}function Sv(i){let t=Object.keys(i.attributes),e=t.map(l=>i.attributes[l]),n=e.reduce((l,c)=>l+c.itemSize,0),s=e[0].count,r=new Float32Array(s*n),o=0,a=e.map(l=>{let c=o;return o+=l.itemSize,c});return e.forEach((l,c)=>{for(let h=0;h<s;h++)for(let u=0;u<l.itemSize;u++)r[h*n+a[c]+u]=l.array[h*l.itemSize+u]}),{names:t,attrs:e,stride:n,offs:a,pOff:a[t.indexOf("position")],data:r}}function sd(i,t){let e=new me;return i.names.forEach((n,s)=>{let r=i.attrs[s],o=new Float32Array(t.length*r.itemSize);for(let a=0;a<t.length;a++)for(let l=0;l<r.itemSize;l++)o[a*r.itemSize+l]=t[a][i.offs[s]+l];e.setAttribute(n,new pe(o,r.itemSize))}),e}function bv(i,t,e){let n=[],s=[],r=i.pOff,o=i.stride,a=c=>e.n[0]*c[r]+e.n[1]*c[r+1]+e.n[2]*c[r+2]-e.d,l=(c,h,u)=>{let f=new Float32Array(o);for(let p=0;p<o;p++)f[p]=c[p]+(h[p]-c[p])*u;return f};for(let c=0;c<t.length;c+=3){let h=[t[c],t[c+1],t[c+2]],u=h.map(a);if(u[0]>=0&&u[1]>=0&&u[2]>=0){n.push(...h);continue}if(u[0]<0&&u[1]<0&&u[2]<0){s.push(...h);continue}let f=[],p=[];for(let g=0;g<3;g++){let x=h[g],m=h[(g+1)%3],d=u[g],y=u[(g+1)%3];if((d>=0?f:p).push(x),d>=0!=y>=0){let v=l(x,m,d/(d-y));f.push(v),p.push(v)}}for(let g=1;g<f.length-1;g++)n.push(f[0],f[g],f[g+1]);for(let g=1;g<p.length-1;g++)s.push(p[0],p[g],p[g+1])}return[n,s]}function wv(i){let t=[];for(let e=0;e<i.data.length;e+=i.stride)t.push(i.data.subarray(e,e+i.stride));return t}function Tr(i,t,e,{keep:n=!1,filter:s=null}={}){let r=[];for(let o of t){let a=Sv(o.geometry),l=wv(a),c=[];for(let u of e){let[f,p]=bv(a,l,u);if(l=f,c.push(...p),!l.length)break}if(s&&l.length){let u=[],f=a.offs[a.names.indexOf("normal")];for(let p=0;p<l.length;p+=3)s(l[p],f)?u.push(l[p],l[p+1],l[p+2]):n||c.push(l[p],l[p+1],l[p+2]);l=u}if(!l.length)continue;n||(o.geometry.dispose(),o.geometry=sd(a,c));let h=new oe(sd(a,l),o.material);h.castShadow=!0,h.receiveShadow=!0,i.add(h),r.push(h)}return r}function Ha(i,t,e,n,s=0){let r=[],o=new P,a=new P,l=0;for(let d of t){let y=d.geometry.attributes.position;for(let v=0;v<y.count;v++){o.fromBufferAttribute(y,v),a.add(o),l++;let _=e.n[0]*o.x+e.n[1]*o.y+e.n[2]*o.z-e.d;Math.abs(_)<.12&&r.push(o.clone())}}a.divideScalar(l),r.sort((d,y)=>d[n]-y[n]);let c=Math.max(1,Math.floor(r.length*.2)),h=d=>d.reduce((y,v)=>y.add(v),new P).divideScalar(d.length),u=h(r.slice(0,c)),p=h(r.slice(-c)).clone().sub(u).normalize(),g=new Re;g.position.copy(u),g.position.y-=s,g.quaternion.setFromUnitVectors(new P(1,0,0),p),i.add(g),g.updateMatrixWorld(!0);for(let d of t)g.attach(d);let x=a.clone().sub(g.position),m=x.clone().applyAxisAngle(p,.1);return{piv:g,q0:g.quaternion.clone(),down:m.y<x.y?1:-1,right:m.z<x.z?1:-1,ang:0}}var Ev=new on,Tv=new P(1,0,0);function rd(i,t){Math.abs(t-i.ang)<1e-4||(i.ang=t,i.piv.quaternion.copy(i.q0).multiply(Ev.setFromAxisAngle(Tv,t)))}function Av(i){let t=new ln({color:662098,metalness:.55,roughness:.22,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6,side:Ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return t.name=i.name,t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSolP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSolP = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(0.45, roughnessFactor, mod_);`)},t}function od(i,t,e){t.updateMatrixWorld(!0);let n=e.surf={},s=Av({name:"M_Ext_SolarCell"}),r=["Ext_Wing","Ext_Solar_Wing","Ext_Solar_Busbars","Ext_WingSeams"].flatMap(E=>go(i,t,E)),o=["Ext_HorizontalTail","Ext_Solar_HTail","Ext_TailSeams"].flatMap(E=>go(i,t,E)),a=go(i,t,"Ext_VerticalTail"),l=o.filter(E=>E.name.startsWith("Ext_TailSeams"));for(let E of[...r,...o,...a])/SolarCell/.test(E.material.name||"")?E.material=s:(E.material=E.material.clone(),E.material.side=Ve);let c=r.filter(E=>/Ext_Wing_baked|Ext_Solar_Wing/.test(E.name)),h=E=>{let T=(it,F)=>E>0?[{n:[0,0,-1],d:it},{n:[0,0,1],d:-F}]:[{n:[0,0,1],d:it},{n:[0,0,-1],d:-F}],R=(it,F,Z,Q=1)=>({n:[Q,0,Q*(E>0?Z:-Z)],d:Q*(it-Z*F)}),b=E>0?"R":"L",M=R(32.2,3.4,.4757),I=R(42.3,24.5,.465),B=R(32.1,6,.503),O=(it,F,Z,Q,yt)=>{let Et=Tr(i,r,[...T(F,Z),Q]);Et.length&&(n[it+b]=Ha(i,Et,Q,"z",yt))};O("flapIn",3.45,10,M,.45),O("flapOut",10,24,M,.4),O("ail",24.5,31.6,I,0);let H=R(32.2,3.4,.4757,-1);for(let[it,F,Z]of[[0,6.1,10],[1,10,13.7],[2,13.7,18.1],[3,18.1,22.5]]){let Q=Tr(i,c,[...T(F+.04,Z-.04),B,H],{keep:!0,filter:(yt,Et)=>yt[Et+1]>.3});for(let yt of Q)yt.geometry.translate(0,.035,0);Q.length&&(n["spl"+it+b]=Ha(i,Q,B,"z",0))}let $=R(60,2.2,.4545),W=Tr(i,o,[...T(2.2,12.08),$]);W.length&&(n["elev"+b]=Ha(i,W,$,"z",0))};h(1),h(-1);let u={n:[1,-.576,0],d:59.1-.576*3.3},f=Tr(i,[...a,...l],[{n:[0,1,0],d:3.3},{n:[0,-1,0],d:-13.2},u]);f.length&&(n.rud=Ha(i,f,u,"y",0));let p=(E,T,R)=>{let b=new Re;return b.position.set(E,T,R),i.add(b),b.updateMatrixWorld(!0),b},g=p(1.5,-2.2,0),x=p(31,-1.7,-5.5),m=p(31,-1.7,5.5),d=(E,T)=>{for(let R of go(i,t,E))T.attach(R)};d("Ext_MainGear_R",x),d("Ext_MainGear_L",m),d("Ext_NoseGear",g);let y=(E,T)=>{let R={nose:[]};for(let b of go(i,t,E)){let M=Tr(i,[b],[{n:[-1,0,0],d:-12}]),I=Tr(i,[b],[{n:[0,0,-1],d:0}]);for(let B of M)T?T.attach(B):R.nose.push(B);for(let B of I)x.attach(B);m.attach(b)}return R};y("Ext_GearDetail",g),e.noseDoors=y("Ext_GearDoors_Open",null).nose,e.gear=[{p:g,ax:"z",ang:-110*tt},{p:x,ax:"x",ang:-90*tt},{p:m,ax:"x",ang:90*tt}],e.doorsClosed=[];let v=i.getObjectByName("Ext_GearDoors_Closed");v&&v.traverse(E=>{E.isMesh&&e.doorsClosed.push({o:E,mat:E.material})}),e.bayMat=new We({color:263430});let _=e.bay={inv:{value:new Ut},open:{value:new ne}};e.model=t;let C=new Set;i.traverse(E=>{if(!E.isMesh||C.has(E.material))return;let T=E.material,R=T.name||"";if(!T.isMeshStandardMaterial||T.transparent||/Gear|Tire|Hub|Reveal|Glass|Window|SolarCell|Fan|Spinner/.test(R))return;C.add(T);let b=T.onBeforeCompile;T.onBeforeCompile=(M,I)=>{b&&b(M,I),M.uniforms.uBayInv=_.inv,M.uniforms.uBay=_.open,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uBayInv; varying vec3 vBayP; varying float vBayN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBayP = (uBayInv * modelMatrix * vec4(transformed, 1.0)).xyz; vBayN = (mat3(uBayInv) * mat3(modelMatrix) * objectNormal).y;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec4 uBay; varying vec3 vBayP; varying float vBayN;
        float bayBox(vec2 p, vec2 a, vec2 b) { vec2 s = step(a, p) * step(p, b); return s.x * s.y; }`).replace("#include <opaque_fragment>",`
        if (vBayN < 0.35 && vBayP.y < -0.25) {
          vec2 bp = vec2(vBayP.x, abs(vBayP.z));
          float bm = uBay.x * bayBox(bp, vec2(28.4, 0.75), vec2(33.6, 3.42)) + uBay.y * bayBox(bp, vec2(30.42, 3.4), vec2(31.58, 6.32))
                   + uBay.z * bayBox(bp, vec2(0.3, -1.0), vec2(2.8, 0.60)) + uBay.w * bayBox(bp, vec2(-2.7, -1.0), vec2(0.3, 0.60));
          outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.009), min(1.0, bm));
        }
        #include <opaque_fragment>`)},T.customProgramCacheKey=()=>"bay"+(b?"p":"")+R,T.needsUpdate=!0})}var ii={da:0,de:0,dr:0};function ad(i,t,e){let n=i.surf;if(!n)return;let s=t.gearPos;for(let u of i.gear)u.p.rotation[u.ax]=u.ang*(1-s)*(1-s)*(3-2*(1-s)),u.p.visible=s>.004;for(let u of i.noseDoors)u.visible=s>.02;let r=s>.02&&s<.985;i.bay.inv.value.copy(i.model.matrixWorld).invert(),i.bay.open.value.set(r?1:0,s>.02?1:0,s>.02?1:0,r?1:0);for(let u of i.doorsClosed)u.o.visible=!0,u.o.material=r?i.bayMat:u.mat;let o=Math.min(1,e*14);ii.da+=(t.da-ii.da)*o,ii.de+=(t.de-ii.de)*o,ii.dr+=(t.dr-ii.dr)*o;let a=Math.min(5,Math.floor(t.flapPos)),l=t.flapPos-a,c=(Ft.flapDeg[a]+(Ft.flapDeg[Math.min(6,a+1)]-Ft.flapDeg[a])*l)*tt*1.15,h=(u,f)=>{let p=n[u];p&&rd(p,p.down*f)};for(let u of["R","L"]){let f=u==="R"?1:-1;h("flapIn"+u,c),h("flapOut"+u,c*.95),h("ail"+u,-f*ii.da*.9+(c>.2?.08:0)),h("elev"+u,-ii.de);let p=Math.max(0,f*ii.da)*.9*(t.wow?0:1);for(let g=0;g<4;g++)h("spl"+g+u,-(t.sb*(t.wow?.85:.6)+p*(g>0?1:0)))}n.rud&&rd(n.rud,n.rud.right*ii.dr*.9)}var jt="#39e06b",Ln="#ff5cf4",Ye="#3fd8ff",Ie="#ffb224",Dn="#ff3b30",Xt="#f2f4f7",Vh="#8b949e",Rv=(i,t=!0)=>`${t?"600 ":""}${i}px "Consolas","DejaVu Sans Mono","Menlo",monospace`,Sn=(i,t,e)=>Math.min(e,Math.max(t,i)),Ar=i=>String(Math.round((i%360+360)%360)||360).padStart(3,"0");function rs(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Mt(i,t,e,n,s=Xt,r=18,o="center"){i.font=Rv(r),i.fillStyle=s,i.textAlign=o,i.textBaseline="middle",i.fillText(t,e,n)}function ld(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);let s=t.ias/ie,r=t.alt/Ce,o=t.vs*196.85,a=(t.psi*Te%360+360)%360,l=t.ap,c=236,h=262,u=124,f=132,p=5.2;e.save(),e.beginPath(),e.roundRect(c-u,h-f,u*2,f*2,26),e.clip(),e.translate(c,h),e.rotate(-t.phi),e.translate(0,t.theta*Te*p),e.fillStyle="#2b83d6",e.fillRect(-600,-900,1200,900),e.fillStyle="#7b4d22",e.fillRect(-600,0,1200,900),e.strokeStyle=Xt,e.lineWidth=2,e.beginPath(),e.moveTo(-600,0),e.lineTo(600,0),e.stroke();for(let Y=-90;Y<=90;Y+=2.5){if(Y===0)continue;let ct=-Y*p,Ct=Y%10===0?44:Y%5===0?22:10;e.beginPath(),e.moveTo(-Ct,ct),e.lineTo(Ct,ct),e.stroke(),Y%10===0&&(Mt(e,Math.abs(Y),-Ct-16,ct,Xt,15),Mt(e,Math.abs(Y),Ct+16,ct,Xt,15))}e.restore(),e.save(),e.translate(c,h),e.strokeStyle=Xt,e.lineWidth=2;for(let Y of[-60,-45,-30,-20,-10,10,20,30,45,60]){let ct=(Y-90)*tt,Ct=f-4,$t=Ct-(Math.abs(Y)===30||Math.abs(Y)===60?14:8);e.beginPath(),e.moveTo(Math.cos(ct)*Ct,Math.sin(ct)*Ct),e.lineTo(Math.cos(ct)*$t,Math.sin(ct)*$t),e.stroke()}e.fillStyle=Xt,e.beginPath(),e.moveTo(0,-f+4),e.lineTo(-8,-f-8),e.lineTo(8,-f-8),e.fill(),e.rotate(-t.phi);let g=Math.abs(t.phi)>35*tt;e.fillStyle=g?Ie:Xt,e.beginPath(),e.moveTo(0,-f+6),e.lineTo(-9,-f+22),e.lineTo(9,-f+22),e.closePath(),e.fill();let x=Sn(-t.beta*Te*3,-18,18);e.fillRect(-11+x,-f+25,22,5),e.restore(),e.fillStyle="#111",e.strokeStyle="#ffe94a",e.lineWidth=3;for(let Y of[-1,1])e.beginPath(),e.rect(c+Y*34-(Y<0?46:0),h-4,46,8),e.fill(),e.stroke(),e.beginPath(),e.rect(c+Y*34-(Y<0?0:8),h-4,8,20),e.fill(),e.stroke();if(e.beginPath(),e.rect(c-4,h-4,8,8),e.fill(),e.stroke(),t.tas>30&&!t.wow){let Y=Math.atan2(t.vs,Math.max(t.gs,1))*Te,Ct=Sn((t.track-t.psi)*Te,-20,20)*p,$t=-(Y-t.theta*Te)*p,Vt=Math.cos(-t.phi),ue=Math.sin(-t.phi),D=c+Ct*Vt-$t*ue,ge=h+Ct*ue+$t*Vt;Math.abs(D-c)<u-10&&Math.abs(ge-h)<f-10&&(e.strokeStyle=jt,e.lineWidth=2,e.beginPath(),e.arc(D,ge,7,0,7),e.moveTo(D-7,ge),e.lineTo(D-20,ge),e.moveTo(D+7,ge),e.lineTo(D+20,ge),e.moveTo(D,ge-7),e.lineTo(D,ge-15),e.stroke())}let m=(t.agl-5.1)/Ce;m<2500&&Mt(e,Math.max(0,m<50?Math.round(m):Math.round(m/10)*10),c,h+f-16,m<400?Ie:jt,22),t.stallWarn?(e.fillStyle=Dn,e.fillRect(c-48,h-80,96,28),Mt(e,"STALL",c,h-66,"#fff",20)):t.gpwsPull&&(e.fillStyle=Dn,e.fillRect(c-56,h-80,112,28),Mt(e,"PULL UP",c,h-66,"#fff",20));let d=t.ils;if(d&&d.valid&&l.rw){e.strokeStyle=Xt,e.lineWidth=1.5;for(let $t of[-2,-1,1,2])e.beginPath(),e.arc(c+$t*38,h+f+14,4,0,7),e.stroke(),e.beginPath(),e.arc(c+u+14,h+$t*38,4,0,7),e.stroke();e.beginPath(),e.moveTo(c,h+f+5),e.lineTo(c,h+f+23),e.moveTo(c+u+5,h),e.lineTo(c+u+23,h),e.stroke();let Y=Sn(-d.loc/.8,-2.4,2.4)*38,ct=Sn(d.gs/.35,-2.4,2.4)*38,Ct=($t,Vt,ue)=>{e.beginPath(),e.moveTo($t-9,Vt),e.lineTo($t,Vt-6),e.lineTo($t+9,Vt),e.lineTo($t,Vt+6),e.closePath(),e.strokeStyle=Ln,e.lineWidth=2,e.stroke(),ue&&(e.fillStyle=Ln,e.fill())};Ct(c+Y,h+f+14,Math.abs(d.loc)<1.9),e.save(),e.translate(c+u+14,h+ct),e.rotate(Math.PI/2),Ct(0,0,Math.abs(d.gs)<.8),e.restore(),Mt(e,`ILS ${l.rw.id}`,46,426,Ln,14,"left"),Mt(e,`${Ar(l.rw.crs)}\xB0  ${(d.dAim/1852).toFixed(1)} NM`,46,444,Ln,14,"left")}let y=34,v=62,_=h-130,C=260,E=2.4;e.fillStyle="#39414c",e.fillRect(y,_,v,C),e.save(),e.beginPath(),e.rect(y-4,_,v+26,C),e.clip(),e.strokeStyle=Xt,e.lineWidth=2;let T=Math.floor((s-60)/10)*10;for(let Y=Math.max(30,T);Y<s+60;Y+=10){let ct=h-(Y-s)*E;e.beginPath(),e.moveTo(y+v-12,ct),e.lineTo(y+v,ct),e.stroke(),Y%20===0&&Mt(e,Y,y+v-16,ct,Xt,17,"right")}let R=t.vstall/ie*Math.sqrt(Math.max(.5,t.nzSm||1)),b=t.vmaxKt,M=h-(R-s)*E,I=h-(R*1.13-s)*E,B=h-(b-s)*E;if(!t.wow){e.fillStyle=Ie,e.fillRect(y+v,I,5,M-I),e.fillStyle=Dn;for(let Y=M;Y<_+C+8;Y+=8)e.fillRect(y+v,Y,8,5)}e.fillStyle=Dn;for(let Y=B;Y>_-8;Y-=8)e.fillRect(y+v,Y-5,8,5);if(l.athr||l.on){let Y=Sn(h-(l.spd-s)*E,_+2,_+C-2);e.fillStyle=Ln,e.beginPath(),e.moveTo(y+v,Y),e.lineTo(y+v+12,Y-8),e.lineTo(y+v+12,Y+8),e.fill()}let O=Sn(t.acc/ie*10,-50,50);Math.abs(O)>2&&(e.strokeStyle=jt,e.lineWidth=3,e.beginPath(),e.moveTo(y+v+16,h),e.lineTo(y+v+16,h-O*E),e.stroke(),e.beginPath(),e.moveTo(y+v+11,h-O*E+Math.sign(O)*7),e.lineTo(y+v+16,h-O*E),e.lineTo(y+v+21,h-O*E+Math.sign(O)*7),e.stroke()),e.restore(),e.fillStyle="#000",e.strokeStyle=Xt,e.lineWidth=2,e.beginPath(),e.rect(y-6,h-18,v-4,36),e.fill(),e.stroke(),Mt(e,Math.round(s<30?0:s),y+v-16,h,s>b?Dn:!t.wow&&s<R*1.05?Ie:Xt,24,"right"),Mt(e,l.athr||l.on?l.spd:"---",y+v/2,_-14,Ln,18),t.mach>.4?Mt(e,"M "+t.mach.toFixed(3).slice(1),y+v/2,_+C+14,jt,16):Mt(e,"GS "+Math.round(t.gs/ie),y+v/2,_+C+14,jt,16);let H=392,$=72,W=.2;e.fillStyle="#39414c",e.fillRect(H,_,$,C),e.save(),e.beginPath(),e.rect(H-14,_,$+18,C),e.clip(),e.strokeStyle=Xt,e.lineWidth=2;let it=Math.floor((r-700)/100)*100;for(let Y=it;Y<r+700;Y+=100){let ct=h-(Y-r)*W;e.beginPath(),e.moveTo(H,ct),e.lineTo(H+10,ct),e.stroke(),Y%200===0&&Mt(e,Y,H+$-4,ct,Xt,15,"right")}let F=h-(t.elev/Ce+17-r)*W;e.fillStyle="#a0652a",F<_+C&&e.fillRect(H,F,$,_+C-F);{let Y=Sn(h-(l.alt-r)*W,_+2,_+C-2);e.strokeStyle=Ln,e.lineWidth=3,e.beginPath(),e.moveTo(H-10,Y-12),e.lineTo(H-10,Y+12),e.lineTo(H+2,Y+12),e.lineTo(H-6,Y),e.lineTo(H+2,Y-12),e.closePath(),e.stroke()}e.restore(),e.fillStyle="#000",e.strokeStyle=Xt,e.lineWidth=2,e.beginPath(),e.rect(H+4,h-18,$+6,36),e.fill(),e.stroke();let Z=Math.round(r/20)*20;Mt(e,Z,H+$+6,h,Xt,22,"right"),Mt(e,l.alt,H+$/2+4,_-14,Ln,18),Mt(e,"STD",H+$/2+4,_+C+14,jt,16);let Q=480;e.fillStyle="#39414c",e.beginPath(),e.moveTo(Q,_+30),e.lineTo(Q+14,_+30),e.lineTo(Q+28,_+70),e.lineTo(Q+28,_+C-70),e.lineTo(Q+14,_+C-30),e.lineTo(Q,_+C-30),e.fill();let yt=Y=>{let ct=Math.abs(Y),Ct=ct<1e3?ct/1e3*44:ct<2e3?44+(ct-1e3)/1e3*26:70+Sn((ct-2e3)/4e3,0,1)*26;return h-Math.sign(Y)*Ct};e.strokeStyle=Xt,e.lineWidth=1.5;for(let Y of[-6e3,-2e3,-1e3,-500,500,1e3,2e3,6e3]){let ct=yt(Y);e.beginPath(),e.moveTo(Q+2,ct),e.lineTo(Q+9,ct),e.stroke()}e.strokeStyle=Xt,e.lineWidth=3,e.beginPath(),e.moveTo(Q+30,h),e.lineTo(Q+4,yt(o)),e.stroke(),Math.abs(o)>150&&Mt(e,Math.round(Math.abs(o)/50)*50,Q+30,o>0?_+14:_+C-14,o<-2500?Ie:Xt,15,"right");let Et=468,Jt=3.4;e.fillStyle="#39414c",e.fillRect(c-124,Et-14,248,44),e.save(),e.beginPath(),e.rect(c-124,Et-16,248,48),e.clip(),e.strokeStyle=Xt,e.lineWidth=2;for(let Y=Math.floor(a-40);Y<=a+40;Y++){if(Y%5!==0)continue;let ct=c+(Y-a)*Jt;e.beginPath(),e.moveTo(ct,Et-14),e.lineTo(ct,Et-(Y%10===0?2:7)),e.stroke(),Y%10===0&&Mt(e,String(Math.round((Y%360+360)%360/10)||36).padStart(2,"0"),ct,Et+12,Xt,16)}let K=(l.hdg-a+540)%360-180;{let Y=Sn(c+K*Jt,c-120,c+120);e.strokeStyle=Ln,e.lineWidth=3,e.strokeRect(Y-8,Et-16,16,9)}let ot=Sn((t.track-t.psi)*Te,-30,30);e.strokeStyle=jt,e.lineWidth=2,e.beginPath();let St=c+ot*Jt;e.moveTo(St,Et-12),e.lineTo(St-6,Et-4),e.lineTo(St,Et+2),e.lineTo(St+6,Et-4),e.closePath(),e.stroke(),e.restore(),e.fillStyle="#ffe94a",e.fillRect(c-1.5,Et-22,3,14),Mt(e,Ar(a)+"\xB0",c+150,Et+6,jt,18),e.strokeStyle="#586270",e.lineWidth=1.5;for(let Y of[128,256,384])e.beginPath(),e.moveTo(Y,6),e.lineTo(Y,62),e.stroke();let ft=l.athr?"SPEED":t.rev>.5?"REV":t.thr>.97?"TOGA":"MAN THR";Mt(e,ft,64,22,l.athr?jt:Xt,19),Mt(e,l.on?l.lat==="LOC"?"LOC":"HDG":"",192,22,jt,19),Mt(e,l.on?l.ver==="FLARE"?"FLARE":l.ver==="GS"?"G/S":Math.abs(l.alt*Ce-t.alt)<60?"ALT":l.alt*Ce>t.alt?"CLB":"DES":"",320,22,jt,19),l.app&&l.lat!=="LOC"&&Mt(e,"LOC",192,46,Ye,16),l.app&&l.ver==="ALT"&&Mt(e,"G/S",320,46,Ye,16),Mt(e,l.on?"AP1":"",448,18,Xt,18),Mt(e,l.athr?"A/THR":"",448,38,Xt,15),Mt(e,t.law==="normal"?t.fbw>.5?"NORMAL LAW":"GROUND LAW":"DIRECT LAW",448,56,t.law==="normal"?jt:Ie,12),t.aProt&&!t.wow&&Mt(e,"\u03B1 PROT",64,46,Ie,16)}function cd(i,t,e){let n=i.getContext("2d"),s=512;n.fillStyle="#05070a",n.fillRect(0,0,s,s);let r=256,o=420,a=330,l=t.psi*Te,c=a/(e*1852);n.save(),n.translate(r,o),n.strokeStyle="#5b6470",n.lineWidth=1.5,n.setLineDash([6,8]);for(let d of[.25,.5,.75])n.beginPath(),n.arc(0,0,a*d,-Math.PI*.95,-Math.PI*.05),n.stroke();n.setLineDash([]),Mt(n,e/2,-a*.5*.72,-a*.5*.72+4,Ye,14),n.save(),n.rotate(-t.psi),n.strokeStyle=Xt,n.lineWidth=2,n.beginPath(),n.arc(0,0,a,0,7),n.stroke();for(let d=0;d<360;d+=5)n.save(),n.rotate(d*tt),n.beginPath(),n.moveTo(0,-a),n.lineTo(0,-a+(d%10===0?14:7)),n.stroke(),d%30===0&&Mt(n,d/10||36,0,-a+28,Xt,17),n.restore();n.save(),n.rotate(t.ap.hdg*tt),n.strokeStyle=Ln,n.lineWidth=3,n.strokeRect(-9,-a-9,18,9),t.ap.on&&t.ap.lat==="HDG"&&(n.setLineDash([8,8]),n.lineWidth=1.5,n.beginPath(),n.moveTo(0,0),n.lineTo(0,-a),n.stroke()),n.restore();let h=(d,y)=>[(y-t.pos[1])*c,-(d-t.pos[0])*c];for(let d of cn){let y=d.hdg*tt,v=Math.cos(y)*d.len/2,_=Math.sin(y)*d.len/2,C=h(d.n-v,d.e-_),E=h(d.n+v,d.e+_),T=h(d.n,d.e);n.strokeStyle="#7e8794",n.lineWidth=1.2,n.setLineDash([10,8]);let R=15*1852*c;n.beginPath(),n.moveTo(C[0]-Math.sin(y)*R,C[1]+Math.cos(y)*R),n.lineTo(C[0],C[1]),n.moveTo(E[0],E[1]),n.lineTo(E[0]+Math.sin(y)*R,E[1]-Math.cos(y)*R),n.stroke(),n.setLineDash([]),n.strokeStyle=Xt,n.lineWidth=Math.max(3,60*c),n.beginPath(),n.moveTo(C[0],C[1]),n.lineTo(E[0],E[1]),n.stroke(),n.strokeStyle=Ye,n.lineWidth=2,n.beginPath(),n.arc(T[0],T[1],9,0,7),n.stroke(),n.save(),n.translate(T[0]+14,T[1]-14),n.rotate(t.psi),Mt(n,d.id,0,0,Ye,15,"left"),n.restore()}if(t.ap.rw&&t.ap.app){let d=t.ap.rw,y=h(d.thrN,d.thrE);n.strokeStyle=Ln,n.lineWidth=2,n.beginPath(),n.arc(y[0],y[1],6,0,7),n.stroke()}n.restore(),n.save(),n.rotate(t.track-t.psi),n.strokeStyle=jt,n.lineWidth=2,n.beginPath(),n.moveTo(0,-30),n.lineTo(0,-a),n.stroke(),n.restore(),n.strokeStyle="#ffe94a",n.lineWidth=3,n.beginPath(),n.moveTo(0,-16),n.lineTo(0,18),n.moveTo(-18,0),n.lineTo(18,0),n.moveTo(-8,14),n.lineTo(8,14),n.stroke(),n.fillStyle="#ffe94a",n.beginPath(),n.moveTo(0,-a+1),n.lineTo(-7,-a-11),n.lineTo(7,-a-11),n.fill(),n.restore(),n.fillStyle="#05070a",n.fillRect(0,0,s,54),Mt(n,"GS "+Math.round(t.gs/ie),12,16,jt,17,"left"),Mt(n,"TAS "+Math.round(t.tas/ie),108,16,jt,17,"left");let u=t.wind.dir,f=Math.hypot(t.windW[0],t.windW[1])/ie;Mt(n,Ar(u)+"\xB0 / "+Math.round(f),12,38,jt,16,"left"),f>1&&(n.save(),n.translate(128,38),n.rotate((u+180)*tt-t.psi),n.strokeStyle=jt,n.lineWidth=2,n.beginPath(),n.moveTo(0,10),n.lineTo(0,-10),n.lineTo(-5,-3),n.moveTo(0,-10),n.lineTo(5,-3),n.stroke(),n.restore()),Mt(n,"HDG",228,16,Xt,14),n.strokeStyle=Xt,n.lineWidth=2,n.strokeRect(250,4,58,26),Mt(n,Ar(l),279,18,Xt,20),Mt(n,"MAG",330,16,jt,14);let p=t.ap.rw?t.ap.rw.ap:null,g=1e12;if(!p)for(let d of cn){let y=Math.hypot(d.n-t.pos[0],d.e-t.pos[1]);y<g&&(g=y,p=d)}let x=Math.hypot(p.n-t.pos[0],p.e-t.pos[1]),m=Math.atan2(p.e-t.pos[1],p.n-t.pos[0])*Te;Mt(n,p.id,500,14,Xt,17,"right"),Mt(n,Ar(m)+"\xB0  "+(x/1852).toFixed(1)+" NM",500,36,Xt,16,"right"),Mt(n,e+" NM",12,498,Ye,15,"left")}function hd(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);for(let c=0;c<4;c++){let h=68+c*98,u=86,f=40,p=t.n1[c],g=Math.PI*.75,x=g+Math.PI*1.35;e.lineWidth=3,e.strokeStyle=Xt,e.beginPath(),e.arc(h,u,f,g,g+(x-g)*.96),e.stroke(),e.strokeStyle=Dn,e.beginPath(),e.arc(h,u,f,g+(x-g)*.96,x+.12),e.stroke();let m=g+(x-g)*Sn(p/104,0,1.03);e.fillStyle="rgba(120,130,140,0.35)",e.beginPath(),e.moveTo(h,u),e.arc(h,u,f-2,g,m),e.fill(),e.strokeStyle=t.engOn[c]?Xt:Ie,e.lineWidth=3,e.beginPath(),e.moveTo(h,u),e.lineTo(h+Math.cos(m)*f,u+Math.sin(m)*f),e.stroke();let d=g+(x-g)*Sn((22+78*t.thr)/104,0,1);e.strokeStyle=Ye,e.lineWidth=2,e.beginPath(),e.moveTo(h+Math.cos(d)*(f+2),u+Math.sin(d)*(f+2)),e.lineTo(h+Math.cos(d)*(f+9),u+Math.sin(d)*(f+9)),e.stroke(),e.strokeStyle=Xt,e.lineWidth=1.5,e.strokeRect(h-4,u-34,50,24),Mt(e,p.toFixed(1),h+43,u-21,t.engOn[c]?jt:Ie,17,"right"),t.rev>.05&&Mt(e,"REV",h,u+22,t.rev>.9?jt:Ie,16),Mt(e,Math.round(Math.abs(t.thrust[c])/1e3),h,u+54,jt,15)}Mt(e,"N1 %",256,16,Ye,15),Mt(e,"THRUST kN",256,158,Ye,13),e.strokeStyle="#586270",e.lineWidth=1.5,e.beginPath(),e.moveTo(10,172),e.lineTo(502,172),e.moveTo(256,172),e.lineTo(256,372),e.moveTo(10,372),e.lineTo(502,372),e.stroke();let s=(c,h,u,f=jt,p="")=>{Mt(e,c,20,u,Ye,15,"left"),Mt(e,h,200,u,f,18,"right"),p&&Mt(e,p,206,u,Ye,12,"left")};s("FUEL",(t.fuel/1e3).toFixed(1),194,t.fuel<6e3?Ie:jt,"t"),s("FF",(t.ff*3.6).toFixed(1),220,jt,"t/h"),s("GW",(t.mass()/1e3).toFixed(1),246,jt,"t"),s("TAT",(t.at.T-273.15+t.mach*t.mach*.2*t.at.T).toFixed(0),272,jt,"\xB0C"),s("G LOAD",(t.nzSm??1).toFixed(2),298,Math.abs((t.nzSm??1)-1)>1?Ie:jt,"g"),s("AOA",(t.alpha*Te).toFixed(1),324,t.aProt?Ie:jt,"\xB0"),s("TRIM",(t.trimI*Te).toFixed(1),350,jt,"\xB0");let r=276;Mt(e,"FLAPS",r,194,Ye,15,"left"),e.strokeStyle=Xt,e.lineWidth=1.5,e.strokeRect(r+62,186,110,14),e.fillStyle=Math.abs(t.flapPos-t.flapSel)>.02?Ln:jt,e.fillRect(r+62,186,110*t.flapPos/6,14),Mt(e,Ft.flapDeg[t.flapSel],r+214,194,jt,18,"right"),Mt(e,"SPD BRK",r,222,Ye,15,"left"),e.strokeRect(r+82,214,90,14),e.fillStyle=t.sb>.02?Ie:jt,e.fillRect(r+82,214,90*t.sb,14),t.gndSpoiler&&Mt(e,"GND",r+214,222,jt,14,"right"),Mt(e,"GEAR",r,262,Ye,15,"left");let o=t.gearPos;[[r+128,246],[r+92,276],[r+164,276]].forEach(([c,h])=>{if(o>.99)e.fillStyle=jt,e.fillRect(c-15,h-11,30,22),Mt(e,"DN",c,h,"#000",14);else if(o>.01){e.strokeStyle=Ie,e.lineWidth=2,e.strokeRect(c-15,h-11,30,22);for(let u=-10;u<14;u+=7)e.beginPath(),e.moveTo(c+u,h+10),e.lineTo(c+u+8,h-10),e.stroke()}else e.strokeStyle="#586270",e.lineWidth=1.5,e.strokeRect(c-15,h-11,30,22),Mt(e,"UP",c,h,Vh,13)}),Mt(e,"BRAKES",r,312,Ye,15,"left"),Mt(e,t.park?"PARK":t.ctl.brake>.05?"ON":"OFF",r+214,312,t.park?Ie:jt,17,"right"),Mt(e,"CTL",r,344,Ye,15,"left");let a=(c,h,u)=>{e.strokeStyle="#586270",e.strokeRect(c,334,44,10),e.fillStyle=jt,e.fillRect(c+22+Sn(h,-1,1)*20-2,332,4,14),Mt(e,u,c+22,358,Vh,11)};a(r+42,t.da/(25*tt),"AIL"),a(r+100,-t.de/(25*tt),"ELEV"),a(r+158,t.dr/(30*tt),"RUD");let l=[];t.crashed&&l.push([Dn,"CRASH"]),t.stallWarn&&l.push([Dn,"STALL"]),t.overspeed&&l.push([Dn,"OVERSPEED"]),t.gpwsPull&&l.push([Dn,"TERRAIN  PULL UP"]),t.cfgWarn&&l.push([Dn,"CONFIG "+t.cfgWarn]),t.gearWarn&&l.push([Dn,"GEAR NOT DOWN"]),t.strike&&l.push([Ie,"GROUND CONTACT"]),t.fuel<6e3&&l.push([Ie,"FUEL LO"]),t.engOn[0]||l.push([Ie,"ENG 1-4 FLAME OUT"]),t.law!=="normal"&&l.push([Ie,"F/CTL DIRECT LAW"]),t.park&&t.thr>.3&&l.push([Ie,"PARK BRK ON"]),t.park&&l.push([Xt,"PARK BRK"]),t.sbSel>0&&!t.wow&&l.push([Xt,"SPEEDBRAKE EXT"]),t.ap.app&&l.push([Xt,"APPR ARMED "+t.ap.rw.id]),l.slice(0,6).forEach(([c,h],u)=>Mt(e,h,20,392+u*21,c,17,"left"))}function ud(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n),Mt(e,"SOLARIS R7  \u2014  FLIGHT DATA",256,22,Ye,18),[["POSITION",`N ${(t.pos[0]/1852).toFixed(1)}  E ${(t.pos[1]/1852).toFixed(1)} NM`],["ALTITUDE",`${Math.round(t.alt/Ce)} ft   RA ${Math.max(0,Math.round((t.agl-5.1)/Ce))} ft`],["IAS / TAS / GS",`${Math.round(t.ias/ie)} / ${Math.round(t.tas/ie)} / ${Math.round(t.gs/ie)} kt`],["MACH",t.mach.toFixed(3)],["V/S",`${Math.round(t.vs*196.85)} fpm`],["PITCH / BANK",`${(t.theta*Te).toFixed(1)}\xB0 / ${(t.phi*Te).toFixed(1)}\xB0`],["WIND",`${Ar(t.wind.dir)}\xB0 / ${Math.round(t.wind.spd/ie)} kt`],["OAT",`${(t.at.T-273.15).toFixed(0)} \xB0C`],["VS1G / VREF",`${Math.round(t.vstall/ie)} / ${Math.round(t.vstall/ie*1.23)} kt`],["VMAX",`${Math.round(t.vmaxKt)} kt`],["RANGE (EST)",`${Math.round(t.fuel/Math.max(t.ff,.2)*t.gs/1852)} NM`],["LAST LANDING",t.touchdown?`${-t.touchdown.fpm} fpm  ${t.touchdown.g.toFixed(2)} g  ${t.touchdown.kt} kt`:"\u2014"]].forEach(([r,o],a)=>{Mt(e,r,24,66+a*34,Vh,16,"left"),Mt(e,o,490,66+a*34,jt,18,"right")})}function fd(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#000",e.fillRect(0,0,n,n),e.save(),e.translate(128,128),e.rotate(-t.phi),e.translate(0,t.theta*Te*3),e.fillStyle="#2b83d6",e.fillRect(-400,-600,800,600),e.fillStyle="#7b4d22",e.fillRect(-400,0,800,600),e.strokeStyle=Xt,e.lineWidth=2;for(let s=-30;s<=30;s+=10)e.beginPath(),e.moveTo(-24,-s*3),e.lineTo(24,-s*3),e.stroke();e.restore(),e.strokeStyle="#ffe94a",e.lineWidth=4,e.beginPath(),e.moveTo(88,128),e.lineTo(112,128),e.moveTo(144,128),e.lineTo(168,128),e.stroke(),e.fillStyle="rgba(0,0,0,.65)",e.fillRect(0,108,58,40),e.fillRect(186,108,70,40),Mt(e,Math.round(t.ias/ie),52,128,Xt,22,"right"),Mt(e,Math.round(t.alt/Ce/10)*10,252,128,Xt,20,"right")}function dd(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#031006",e.fillRect(0,0,n,n),["  SOLARIS R7  IDENT","","MODEL        ENGINES","767B-R7      4xH2/ABEP","","UTC  "+new Date().toISOString().slice(11,19),"FOB  "+(t.fuel/1e3).toFixed(1)+" T","GW   "+(t.mass()/1e3).toFixed(1)+" T","","DEST "+(t.ap.rw?t.ap.rw.id:"----")].forEach((o,a)=>Mt(e,o,10,22+a*23,a===0?Xt:jt,15,"left"))}var mt=i=>document.getElementById(i),Xe=(i,t,e)=>Math.min(e,Math.max(t,i)),Ne=new fa({antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Ne.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ne.setSize(innerWidth,innerHeight);Ne.toneMapping=Yc;Ne.toneMappingExposure=.5;Ne.shadowMap.enabled=!0;Ne.shadowMap.type=Xc;document.body.prepend(Ne.domElement);var we=new eo,ye=new Ue(60,innerWidth/innerHeight,.08,8e5);we.add(ye);var Kh=new Re;we.add(Kh);var Cs=new Re;Cs.matrixAutoUpdate=!1;we.add(Cs);var Ps=new Re;Ps.position.set(-29,.5,0);Cs.add(Ps);var ke=new uo;ke.scale.setScalar(45e4);we.add(ke);ke.material.uniforms.uSkyK={value:1};ke.material.uniforms.uTint={value:1};ke.material.uniforms.uHaze={value:new vt(0,0,0)};ke.material.fragmentShader.includes("gl_FragColor = vec4( retColor, 1.0 );")||console.warn("sky shader patch failed");ke.material.fragmentShader=ke.material.fragmentShader.replace("void main() {",`uniform float uSkyK; uniform float uTint; uniform vec3 uHaze;
void main() {`).replace("gl_FragColor = vec4( retColor, 1.0 );",`float upS = normalize( vWorldPosition - cameraPosition ).y;
 retColor *= mix( vec3( 1.0 ), vec3( 0.46, 0.68, 1.14 ), pow( clamp( upS, 0.0, 1.0 ), 0.5 ) * uTint );
 gl_FragColor = vec4( retColor * uSkyK, 1.0 );`).replace("#include <colorspace_fragment>",`#include <colorspace_fragment>
 gl_FragColor.rgb = mix( gl_FragColor.rgb, uHaze, exp( -max( upS, 0.0 ) * 13.0 ) * 0.8 * step( 0.001, uHaze.r + uHaze.g + uHaze.b ) );`);var Un=new Mr(16777215,3);Un.castShadow=!0;Un.shadow.mapSize.set(2048,2048);Object.assign(Un.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:10,far:500});Un.shadow.bias=-4e-4;Un.shadow.normalBias=.08;we.add(Un);we.add(Un.target);var Md=new Ta(12572927,5591103,.9);we.add(Md);we.fog=new da(13229295,2e-5);var Cv=new xr(Ne),Gh=new eo,Va=null,si=id(Kh,we),qn={ray:1.9,fog:2e-5,col:new vt,night:0},Pv=new vt(.42,.6,.86),Mo=[{name:"\u767D\u5929",el:48,az:140,exp:.5,sun:3.2,hemi:.9,fog:[.74,.83,.93],night:0},{name:"\u9EC3\u660F",el:5,az:262,exp:.62,sun:2.2,hemi:.55,fog:[.8,.62,.5],night:.5},{name:"\u591C\u665A",el:-14,az:262,exp:.9,sun:0,hemi:.1,fog:[.02,.03,.06],night:1}],Ka=[{name:"\u6674\u6717\u7121\u98A8",dir:0,spd:0,turb:0,fog:16e-6,clouds:.3},{name:"\u5C11\u96F2\u5FAE\u98A8",dir:320,spd:10,turb:.6,fog:22e-6,clouds:1},{name:"\u5F37\u5074\u98A8\u4E82\u6D41",dir:280,spd:24,turb:2.2,fog:3e-5,clouds:1},{name:"\u4F4E\u80FD\u898B\u5EA6",dir:20,spd:6,turb:.5,fog:3e-4,clouds:1}],as=0,ls=1,Ga=new P;function Pr(){let i=Mo[as],t=Ka[ls],e=(90-i.el)*tt,n=-i.az*tt+Math.PI;Ga.set(Math.sin(i.az*tt)*Math.cos(i.el*tt),Math.sin(i.el*tt),-Math.cos(i.az*tt)*Math.cos(i.el*tt));let s=ke.material.uniforms;s.sunPosition.value.copy(Ga),s.turbidity.value=t.fog>1e-4?12:2.2,s.rayleigh.value=i.el<10?2.8:3.2,s.mieCoefficient.value=.004,s.mieDirectionalG.value=.8,Ne.toneMappingExposure=i.exp;let r=i.night===0?.42:i.night<1?.8:1;s.uSkyK.value=r,Un.intensity=i.sun*(t.fog>1e-4?.45:1),Md.intensity=i.hemi*(t.fog>1e-4?1.25:1),Un.color.set(i.el<10?16756848:16774374);let o=t.fog>1e-4;we.fog.color.setRGB(o?i.night===1?.03:.72-.25*i.night:i.fog[0],o?i.night===1?.035:.74-.28*i.night:i.fog[1],o?i.night===1?.05:.77-.3*i.night:i.fog[2]),we.fog.density=t.fog,ke.visible=!o,we.background=o?we.fog.color:null,si.setEnv({night:i.night,sunDir:Ga,cloudFrac:t.clouds,sunColor:new vt(i.el<10?16763296:16777215),lowvis:o}),qn.ray=s.rayleigh.value,qn.fog=t.fog,qn.col.copy(we.fog.color),qn.night=i.night,qn.lowvis=o,s.uTint.value=i.night===0?1:i.night<1?.45:0,s.uHaze.value.setRGB(0,0,0),q.wind.dir=t.dir,q.wind.spd=t.spd*ie,q.wind.turb=t.turb,we.remove(ke),Gh.add(ke),ke.visible=!0,Va&&Va.dispose(),Va=Cv.fromScene(Gh,0,1,5e5),we.environment=Va.texture,Gh.remove(ke),we.add(ke),ke.visible=!o,we.environmentIntensity=(i.night===1?.25:.9)*(o?.6:1)/r,mt("selTime").value=as,mt("selWx").value=ls}var q=new ka,Be=new za,Zh=rs(512,512),Jh=rs(512,512),jh=rs(512,512),Sd=rs(512,512),bd=rs(256,256),wd=rs(256,256),Ii={};for(let[i,t]of Object.entries({PFD:Zh,ND:Jh,EICAS:jh,MFD:Sd,STBY:bd,CDU:wd})){let e=new Si(t);e.flipY=!1,e.colorSpace=Ae,e.anisotropy=8,Ii[i]=e}mt("instr").append(Zh,Jh,jh);var xo=20,Di={gear:[],fans:[],cockpitGlass:[],doorsOpen:null,doorsClosed:null,lights:[]};function Iv(i){let t=mt(i);if(!t)return null;let e=atob(t.textContent.trim()),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}async function pd(i,t){let e=new Ua,n=Iv("glb-"+i);if(!n){let s=(window.__GLB_DIR??"models/")+i,r=(window.__GLB_PARTS||{})[i],o=r?Array.from({length:r},(f,p)=>`${s}.${p}.bin`):[s+(window.__GLB_EXT||".glb")],a=[],l=0,c=0;for(let f of o){let p=await fetch(f);if(!p.ok)throw new Error(f+" "+p.status);let g=+p.headers.get("content-length")||0,x=p.body.getReader(),m=0;for(;;){let{done:d,value:y}=await x.read();if(d)break;a.push(y),l+=y.length,m+=y.length,t&&g&&t((c+m/g)/o.length)}c++}let h=new Uint8Array(l),u=0;for(let f of a)h.set(f,u),u+=f.length;n=h.buffer}return new Promise((s,r)=>e.parse(n,"",o=>s(o.scene),r))}function Lv(){let i=rs(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Si(i)}async function Dv(){let i=await pd("exterior",o=>{mt("loadbar").style.width=o*80+"%"}),t=await pd("cockpit",o=>{mt("loadbar").style.width=80+o*20+"%"});Ps.add(i),Ps.add(t),i.traverse(o=>{if(!o.isMesh)return;o.castShadow=!0,o.receiveShadow=!0;let a=o.material.name||"";/Glass|Window/.test(a)&&(o.material.transparent=!0,o.material.opacity=Math.min(o.material.opacity,.55),o.material.roughness=.05,o.material.metalness=.9,o.castShadow=!1),/Paint|Nacelle|Wing|Navy/.test(a)&&(o.material.roughness=Math.min(o.material.roughness,.35),o.material.envMapIntensity=1.1)}),t.traverse(o=>{if(!o.isMesh)return;o.receiveShadow=!0,o.castShadow=!1;let a=/M_FD_Screen_(\w+)/.exec(o.material.name||"");a&&Ii[a[1]]&&(o.material=new We({map:Ii[a[1]],toneMapped:!1}))}),Ps.updateMatrixWorld(!0);let e=o=>i.getObjectByName(o);for(let o of["Ext_CockpitWindows"]){let a=e(o);a&&Di.cockpitGlass.push(a)}let n=(o,a,l)=>{let c=new Re;return c.position.set(o,a,l),i.add(c),c};od(i,Ps,Di);for(let o of["Eng_H2_R","Eng_H2_L","Eng_ABEP_R","Eng_ABEP_L"]){let a=e(o);if(!a)continue;let l=[];if(a.traverse(f=>{f.isMesh&&/Fan|Spinner|Hub|BladeEdge/.test(f.material.name||"")&&!/Inlet/.test(f.material.name)&&l.push(f)}),!l.length)continue;let c=new pn;l.forEach(f=>c.expandByObject(f));let h=c.getCenter(new P);i.worldToLocal(h);let u=n(h.x,h.y,h.z);l.forEach(f=>u.attach(f)),Di.fans.push({piv:u,idx:o.includes("ABEP")?o.endsWith("_L")?0:3:o.endsWith("_L")?1:2})}let s=Lv(),r=(o,a,l,c,h,u)=>{let f=new bs(new ji({map:s,color:c,blending:Ki,depthWrite:!1,transparent:!0,toneMapped:!1}));f.position.set(o,l,-a),f.scale.setScalar(h),i.add(f),Di.lights.push({s:f,kind:u,size:h})};r(50.25,35.95,2.75,2162512,1.6,"nav"),r(50.25,-35.95,2.75,16719904,1.6,"nav"),r(65.1,0,2.6,16777215,1.3,"nav"),r(50.55,35.95,2.75,16777215,5,"strobe"),r(50.55,-35.95,2.75,16777215,5,"strobe"),r(22,0,3.8,16722458,3,"beacon"),r(44,0,-2.6,16722458,3,"beacon"),r(1.4,0,-3.3,16774880,4.5,"land"),r(24.5,4.2,-1.2,16774880,4,"land"),r(24.5,-4.2,-1.2,16774880,4,"land")}var Ls=new Set,wn=0,mn={yaw:0,pitch:.07,fov:62},en={az:.35,el:.16,dist:120},Nn=!0,Cr=!1,Wa=0,os=[0,0,0],Za=!1;function Qh(i,t){let e=i.key.length===1?i.key.toLowerCase():i.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","PageUp","PageDown","Home","End","Tab","Backspace"].includes(i.key)&&i.preventDefault(),t?Ls.add(e):Ls.delete(e),!(!t||i.repeat)){if(e==="Escape"){Ad();return}if(!(!Cr||Nn||q.crashed))switch(e){case"g":q.toggleGear();break;case"f":q.flaps(1);break;case"v":q.flaps(-1);break;case"p":q.park=!q.park,q.say(q.park?"\u505C\u6A5F\u715E\u8ECA \u958B":"\u505C\u6A5F\u715E\u8ECA \u95DC");break;case"x":q.sbSel=q.sbSel>0?0:1,q.say(q.sbSel?"\u6E1B\u901F\u677F \u5C55\u958B":"\u6E1B\u901F\u677F \u6536\u56DE");break;case"z":q.toggleAP();break;case"t":q.toggleATHR();break;case"l":q.toggleAPP();break;case"i":q.law=q.law==="normal"?"direct":"normal",q.manTrim=q.trimI,q.say(q.law==="normal"?"\u98DB\u63A7\uFF1A\u6B63\u5E38\u6CD5\u5247 (\u7DDA\u50B3\u98DB\u63A7\u4FDD\u8B77)":"\u98DB\u63A7\uFF1A\u76F4\u63A5\u6CD5\u5247 (\u7121\u4FDD\u8B77\uFF0C, . \u8ABF\u914D\u5E73)");break;case"c":Is((wn+1)%3);break;case"1":Is(0);break;case"2":Is(1);break;case"3":Is(2);break;case"h":Td((Wa+1)%3),Ed[wn]=Wa,q.say("\u4ECB\u9762\uFF1A"+["\u7C21\u6F54 HUD","\u5B8C\u6574\u5100\u8868","\u96B1\u85CF"][Wa],2);break;case"m":Be.setMuted(!Be.muted),q.say(Be.muted?"\u975C\u97F3":"\u8072\u97F3 \u958B");break;case"n":as=(as+1)%Mo.length,Pr(),q.say("\u6642\u9593\uFF1A"+Mo[as].name);break;case"u":ls=(ls+1)%Ka.length,Pr(),q.say("\u5929\u6C23\uFF1A"+Ka[ls].name);break;case"[":xo=Math.max(5,xo/2);break;case"]":xo=Math.min(160,xo*2);break;case"Home":q.thr=1,q.ap.athr=!1;break;case"End":q.thr=0,q.ap.athr=!1;break;case",":q.manTrim-=.5*tt;break;case".":q.manTrim+=.5*tt;break}}}addEventListener("keydown",i=>Qh(i,!0));addEventListener("keyup",i=>Qh(i,!1));addEventListener("blur",()=>Ls.clear());var Rs=null;Ne.domElement.addEventListener("pointerdown",i=>{Rs={x:i.clientX,y:i.clientY},Ne.domElement.setPointerCapture(i.pointerId)});Ne.domElement.addEventListener("pointerup",()=>{Rs=null});Ne.domElement.addEventListener("pointermove",i=>{if(!Rs)return;let t=i.clientX-Rs.x,e=i.clientY-Rs.y;Rs.x=i.clientX,Rs.y=i.clientY,wn===0?(mn.yaw=Xe(mn.yaw+t*.004,-2.3,2.3),mn.pitch=Xe(mn.pitch+e*.004,-1.1,1.1)):(en.az-=t*.006,en.el=Xe(en.el+e*.005,-.25,1.45))});Ne.domElement.addEventListener("dblclick",()=>{mn.yaw=0,mn.pitch=.07,mn.fov=62});Ne.domElement.addEventListener("wheel",i=>{i.preventDefault(),wn===0||wn===2?mn.fov=Xe(mn.fov+Math.sign(i.deltaY)*4,18,95):en.dist=Xe(en.dist*(i.deltaY>0?1.12:.89),45,1500)},{passive:!1});var Ed=[1,0,0];function Td(i){Wa=i,document.body.classList.remove("hud0","hud1","hud2"),document.body.classList.add("hud"+i)}function Is(i){wn=i,Za=!1;for(let t of Di.cockpitGlass)t.visible=i!==0;Td(Ed[i])}var Li=!0,bn={active:!1,x:0,y:0,brake:!1},Yn={brake:0,rev:!1,flapT:0,climbout:!1,landed:!1,retard:!1},md=[225,205,190,172,160,150];function Nv(i){let t=q,e=Yn;if(e.brake=0,e.rev=!1,!Li)return;e.retard&&(t.thr=Math.max(0,t.thr-.5*i),t.thr<=0&&(e.retard=!1));let n=t.ias/ie,s=(t.agl-5.1)/Ce;if(t.park&&t.thr>.15&&(t.park=!1,t.say("\u505C\u6A5F\u715E\u8ECA\u5DF2\u81EA\u52D5\u9B06\u958B")),t.wow){if(t.thr>.4&&(e.landed=!1,e.climbout=!0),t.tdSeen!==t.touchdown&&t.touchdown){t.tdSeen=t.touchdown,e.landed=!0,e.rw=null;let r=1e9;for(let o of Mn){let a=ss(o,t.pos[0],t.pos[1],t.alt),l=Math.abs(Math.atan2(Math.sin(t.psi-o.crs*tt),Math.cos(t.psi-o.crs*tt)));Math.abs(a.xtk)<45&&a.along>-100&&a.along<o.len&&l<.5&&l<r&&(r=l,e.rw=o)}}e.landed&&t.thr<.05&&t.gs>1.5&&(e.brake=t.wowN?.75:.25,e.rev=t.gs>30),e.landed&&t.gs<1&&t.thr<.05&&!t.park&&(t.park=!0,e.landed=!1,t.say("\u5DF2\u505C\u59A5 \u2014 \u505C\u6A5F\u715E\u8ECA \u958B",5)),!e.landed&&t.gs<5&&t.flapSel!==3&&t.thr<.3&&(t.flapSel=3)}else if(e.climbout&&(n>232||s>3500)&&(e.climbout=!1),t.gearSel&&s>150&&t.vs>2.5&&t.airT>3&&(t.gearSel=!1,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u6536\u8D77")),!t.gearSel&&s<1900&&t.vs<-1&&n<215&&(t.gearSel=!0,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u653E\u4E0B")),!t.ap.on&&t.ap.athr&&s<30&&t.vs<0&&t.airT>20&&(t.ap.athr=!1,e.retard=!0,t.say("\u81EA\u52D5\u6536\u6CB9\u9580 \u2014 \u8F15\u62C9\u6A5F\u982D\u5E73\u98C4",4)),e.flapT+=i,e.flapT>2.5){let r=t.flapSel,o=r;r>0&&n>md[r-1]+10?o=r-1:!e.climbout&&r<6&&n<md[r]&&(r<3||t.gearSel&&s<3500)&&(o=r+1),o!==r&&(t.flapSel=o,e.flapT=0,t.say("\u895F\u7FFC \u81EA\u52D5 "+Ft.flapDeg[o]+"\xB0",2.5))}}function Uv(i){let t=q.ctl,e=(...f)=>f.some(p=>Ls.has(p)),n=(e("ArrowDown")?1:0)-(e("ArrowUp")?1:0),s=(e("ArrowRight")?1:0)-(e("ArrowLeft")?1:0),r=(e("e","d")?1:0)-(e("q","a")?1:0),o=Math.max(e(" ","b")||bn.brake?1:0,Yn.brake),a=e("r")||Yn.rev,l=(e("PageUp","=","+","w")?1:0)-(e("PageDown","-","_","s")?1:0),c=navigator.getGamepads?[...navigator.getGamepads()].find(f=>f&&f.connected&&f.axes.length>=2):null,h=!1;if(c){let f=m=>Math.abs(m)<.08?0:m,p=f(c.axes[0]),g=f(c.axes[1]),x=c.axes.length>2?f(c.axes[2]):0;(p||g||x)&&(h=!0,s=p,n=g,r=x),c.buttons[7]&&c.buttons[7].value>.05&&(l=c.buttons[7].value),c.buttons[6]&&c.buttons[6].value>.05&&(l=-c.buttons[6].value),c.buttons[0]&&c.buttons[0].pressed&&(o=1)}if(bn.active&&(h=!0,s=bn.x,n=bn.y),Li&&q.wow&&r===0&&(r=Xe(s*1.2,-1,1)),Li&&Yn.landed&&q.wow&&r===0&&Yn.rw){let f=Yn.rw,p=Math.atan2(Math.sin(q.psi-f.crs*tt),Math.cos(q.psi-f.crs*tt));r=Xe(-.03*ss(f,q.pos[0],q.pos[1],q.alt).xtk-6*p,-1,1)}let u=(f,p)=>h?p:f+Xe(p-f,-(p===0?3.2:2)*i,(p===0?3.2:2)*i);t.pitch=u(t.pitch,n),t.roll=u(t.roll,s),t.yaw=u(t.yaw,r),t.brake+=Xe(o-t.brake,-4*i,2.5*i),t.reverse=a,l&&(Yn.retard=!1,q.thr=Xe(q.thr+l*.35*i,0,1),q.ap.athr&&(q.ap.athr=!1,q.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))),q.ap.on&&(Math.abs(n)>.5||Math.abs(s)>.5)&&q.toggleAP()}var Fv=[2500,1e3,500,400,300,200,100,50,40,30,20,10],Ov={2500:"twenty five hundred",1e3:"one thousand",500:"five hundred",400:"four hundred",300:"three hundred",200:"two hundred",100:"one hundred",50:"fifty",40:"forty",30:"thirty",20:"twenty",10:"ten"},$h=0,Xa=!1,_o=!1,qa=!1;function Bv(i){let t=q,e=t.ias/ie,n=(t.agl-5.1)/Ce,s=t.vs*196.85;t.stallWarn=!t.wow&&t.airT>2&&(t.alpha>t.aStall-.6*tt||t.stall>.25),t.overspeed=e>t.vmaxKt+4,t.gearWarn=!t.wow&&t.gearPos<.99&&n<750&&t.thr<.35&&t.flapSel>=4,t.cfgWarn=t.wow&&t.thr>.75&&t.gs<40*ie?t.flapSel<1||t.flapSel>4?"FLAPS":t.park?"PARK BRK":t.sbSel?"SPD BRK":"":"";let r=-s;if(t.gpwsPull=!t.wow&&t.airT>5&&n<2400&&(r>1700+n*2.2&&n>30||n<700&&t.gearPos<.5&&r>600&&t.flapSel<4&&n>60&&kv()),t.gpwsPull?Be.say("pull up","pull",1.6):!t.wow&&n<2400&&r>1100+n*1.6&&n>20&&Be.say("sink rate","sink",2.5),t.stallWarn&&Be.say("stall, stall","stall",1.8),!t.wow&&Math.abs(t.phi)>40*tt&&n<2e3&&Be.say("bank angle, bank angle","bank",3),t.gearWarn&&Be.say("too low, gear","gear",3),!t.wow&&s<-100){for(let o of Fv)if($h>o&&n<=o){Be.say(Ov[o],"ra"+o,5);break}}if(!t.wow&&n<22&&n>3&&t.thr>.06&&s<-50&&t.airT>20&&Be.say("retard","retard",1.5),$h=n,t.wow&&t.thr>.7){let o=Math.max(135,t.vstall/ie*1.13+12);!Xa&&e>o-10&&(Be.say("V one","v1",30),Xa=!0),!_o&&e>o&&(Be.say("rotate","rot",30),_o=!0,t.say("ROTATE \u2014 \u8F15\u62C9\u6A5F\u982D\u81F3\u7D04 12\xB0",5))}if(!t.wow&&!qa&&t.airT>1.5&&s>300&&_o&&(Be.say("positive climb","pos",30),qa=!0,t.say("\u6B63\u722C\u5347 \u2014 \u6309 G \u6536\u8D77\u843D\u67B6",5)),t.wow&&t.gs<20&&(Xa=_o=qa=!1),t.apDisc&&(t.apDisc=!1,t.apDiscT=1.5),t.apDiscT>0&&(t.apDiscT-=i),t.tdEvent){t.tdEvent=!1;let o=t.touchdown;Be.thump(Math.min(2.5,o.fpm/250+.4));let a=o.fpm<120?"\u5B8C\u7F8E (butter)":o.fpm<250?"\u826F\u597D":o.fpm<450?"\u504F\u91CD":o.fpm<700?"\u91CD\u843D\u5730":"\u975E\u5E38\u7C97\u66B4";t.say(`\u8457\u9678\uFF1A${o.fpm} fpm \u30FB ${o.g.toFixed(2)} g \u30FB ${o.kt} kt \u2014 ${a}`,9),Xv(o)}}function kv(){return!0}var by=new P,gd=new P,xd=new P,_d=new P;var Wh=0,vo=0,Ya=0;function zv(i){let t=q,e=t.R;gd.set(-e[3],e[6],e[0]),xd.set(-e[5],e[8],e[2]),_d.set(-e[4],e[7],e[1]),Cs.matrix.makeBasis(gd,xd,_d),Cs.matrixWorldNeedsUpdate=!0,Cs.updateMatrixWorld(!0),Kh.position.set(-t.pos[1],t.pos[2],t.pos[0]),ad(Di,t,i);for(let o of Di.fans)o.piv.rotation.x-=(t.n1[o.idx]/100*38+Math.min(4,t.tas*.02))*i;let n=Mo[as];for(let o of Di.lights){let a=1;o.kind==="strobe"?a=Ya%1.2<.06||(Ya+.14)%1.2<.06?1:0:o.kind==="beacon"?a=Ya%1.3<.14?1:0:o.kind==="land"&&(a=t.gearPos>.9?1:0),o.s.visible=a>0,o.s.material.opacity=o.kind==="nav"?.55+.45*n.night:1,o.s.scale.setScalar(o.size*(.6+.6*n.night))}Un.position.copy(Ga).multiplyScalar(250),Un.target.position.set(0,0,0),ke.position.set(0,0,0),Wh=(t.wow?Math.min(1,t.gs/80)*(.25+t.rough):0)+t.stall*.8+(t.stallWarn?.25:0)+Math.min(1,Math.hypot(...t.gust)/6)*.3+(t.sb>.1&&!t.wow?.12:0);let s=(Math.random()-.5)*Wh*.012,r=(Math.random()-.5)*Wh*.016;if(wn===0)Cs.add(ye),ye.position.set(-31.55+s,1.8+r-Xe(((t.nzSm??1)-1)*.02,-.03,.03),.55),ye.rotation.order="YXZ",ye.rotation.set(-mn.pitch,Math.PI/2-mn.yaw,0),ye.fov=mn.fov,ye.near=.06;else if(wn===1){we.add(ye),vo+=Math.atan2(Math.sin(t.psi-vo),Math.cos(t.psi-vo))*Math.min(1,i*2.5);let o=vo+Math.PI+en.az,a=Math.cos(en.el),l=en.dist,c=Math.sin(en.el)*l,h=-t.agl+2.5;c<h&&(c=h),ye.position.set(Math.sin(o)*a*l,c,-Math.cos(o)*a*l),ye.up.set(0,1,0),ye.lookAt(0,0,0),ye.fov=50,ye.near=1}else{we.add(ye);let o=os[0]-t.pos[0],a=os[1]-t.pos[1];if(!Za||Math.hypot(o,a)>3500){let l=Math.max(t.gs,30)*9;os[0]=t.pos[0]+Math.cos(t.track)*l-Math.sin(t.track)*140,os[1]=t.pos[1]+Math.sin(t.track)*l+Math.cos(t.track)*140,os[2]=Math.max(t.elev+12,t.alt-60-Math.random()*200*(t.agl>400?1:0)),Za=!0}ye.position.set(os[1]-t.pos[1],os[2]-t.alt,-(os[0]-t.pos[0])),ye.up.set(0,1,0),ye.lookAt(0,0,0),ye.fov=Xe(mn.fov*.5*500/Math.max(120,ye.position.length()),3,60),ye.near=1}ye.updateProjectionMatrix(),si.updatePapi(t.pos[0],t.pos[1],t.alt)}var Rr=0;function Hv(){Rr++;let i=wn===0;Rr%2===0&&(ld(Zh,q),Ii.PFD.needsUpdate=i),Rr%4===1&&(cd(Jh,q,xo),Ii.ND.needsUpdate=i),Rr%4===3&&(hd(jh,q),Ii.EICAS.needsUpdate=i),i&&Rr%20===5&&(ud(Sd,q),Ii.MFD.needsUpdate=!0,fd(bd,q),Ii.STBY.needsUpdate=!0),i&&Rr%120===7&&(dd(wd,q),Ii.CDU.needsUpdate=!0);let t=q.ap;mt("vSpd").textContent=t.spd,mt("vHdg").textContent=String(t.hdg%360||360).padStart(3,"0"),mt("vAlt").textContent=t.alt,mt("vVs").textContent=t.vs,mt("bAP").classList.toggle("on",t.on),mt("bAT").classList.toggle("on",t.athr),mt("bAPP").classList.toggle("on",t.app),mt("bAPP").textContent=t.app?t.lat==="LOC"?t.ver==="GS"?"LOC+G/S":"LOC":"APP \u9810\u4F4D":"APP",mt("thrFill").style.height=q.thr*100+"%",mt("thrKnob").style.bottom=`calc(${q.thr} * (100% - 28px))`;let e=mt("msg");q.msgT>0?(e.textContent=q.msg,e.style.opacity=1):e.style.opacity=0,mt("mSpd").textContent=Math.round(q.ias/ie),mt("mAlt").textContent=Math.round(q.alt/Ce/10)*10,mt("mHdg").textContent=String(Math.round((q.psi*Te%360+360)%360)||360).padStart(3,"0"),mt("stat").textContent=`\u6CB9\u9580 ${Math.round(q.thr*100)}%  \xB7  \u895F\u7FFC ${Ft.flapDeg[q.flapSel]}\xB0  \xB7  \u8D77\u843D\u67B6 ${q.gearSel?"\u653E\u4E0B":"\u6536\u8D77"}${q.park?"  \xB7  \u505C\u6A5F\u715E\u8ECA":""}${q.sbSel?"  \xB7  \u6E1B\u901F\u677F":""}  \xB7  ${["\u5EA7\u8259","\u5916\u90E8","\u5854\u53F0"][wn]}\u8996\u89D2`}function Ad(){!Cr||mt("result").style.display==="flex"||(Nn=!Nn,mt("menu").style.display=Nn?"flex":"none",mt("menuTitle").textContent="\u5DF2\u66AB\u505C",mt("resume").style.display=q.crashed?"none":"",Nn||Be.start())}var Vv=130,Gv=[[-9e3,-4e3,900],[-4e3,-6500,700],[1500,-6e3,600],[7e3,-3e3,900],[10500,3e3,1300],[8500,9e3,1950]],tu={gates:"\u822A\u9EDE\u7A7F\u8D8A",stable:"\u7A69\u5B9A\u9032\u5834",landing:"\u5E73\u7A69\u7740\u9678"},ut=null,eu="runway",$a=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Wv(i){if(ut={type:i,t:0,done:!1},i==="gates"){let t=q.pos[0],e=q.pos[1];ut.gates=Gv.map(([n,s,r])=>{let o={n,e:s,alt:Math.max(r,In(n,s)+450),psi:Math.atan2(s-e,n-t)};return t=n,e=s,o}),ut.i=0,ut.hits=0,ut.dev=[],ut.prevS=null,si.gates.set(ut.gates),si.gates.activate(0)}else si.gates.set([]),ut.loc=0,ut.gs=0,ut.n=0,ut.sampT=0,ut.td=null,ut.tdT=0;mt("mis").style.display="block",mt("misT").textContent="\u4EFB\u52D9 \xB7 "+tu[i]}function Ja(){ut=null,si.gates.set([]),mt("mis").style.display="none"}function Xv(i){if(!ut||ut.type==="gates"||ut.td)return;let t=ss(Mn[0],q.pos[0],q.pos[1],q.alt);ut.td={fpm:i.fpm,g:i.g,kt:i.kt,xtk:t.xtk,past:t.along-300,onRwy:Ri(q.pos[0],q.pos[1])==="rwy"}}function qv(i){if(!ut||ut.done)return;let t=q;if(ut.t+=i,ut.type==="gates"){let r=ut.gates[ut.i],o=t.pos[0]-r.n,a=t.pos[1]-r.e,l=t.alt-r.alt,c=o*Math.cos(r.psi)+a*Math.sin(r.psi);if(ut.prevS!==null&&ut.prevS<0&&c>=0){let x=Math.sqrt(Math.max(0,o*o+a*a-c*c)+l*l);if(x<Vv?(ut.hits++,ut.dev.push(x),t.say(`\u2714 \u822A\u9EDE ${ut.i+1} \u2014 \u504F\u96E2\u74B0\u5FC3 ${Math.round(x)} m`,3)):t.say(`\u2718 \u932F\u904E\u822A\u9EDE ${ut.i+1}\uFF08\u504F\u96E2 ${Math.round(x)} m\uFF09`,3),ut.i++,ut.prevS=null,ut.i>=ut.gates.length){si.gates.activate(-1),vd();return}si.gates.activate(ut.i)}else ut.prevS=c;let h=ut.gates[ut.i],u=Math.atan2(h.e-t.pos[1],h.n-t.pos[0]),f=Math.atan2(Math.sin(u-t.psi),Math.cos(u-t.psi))*Te,p=Math.hypot(h.n-t.pos[0],h.e-t.pos[1]),g=(h.alt-t.alt)/Ce;mt("misG").textContent=`\u822A\u9EDE ${ut.i+1} / ${ut.gates.length} \xB7 ${(p/1e3).toFixed(1)} km`,mt("misP").textContent=`${Math.abs(f)<3?"\u6B63\u524D\u65B9":(f>0?"\u5411\u53F3 ":"\u5411\u5DE6 ")+Math.round(Math.abs(f))+"\xB0"} \xB7 ${Math.abs(g)<80?"\u9AD8\u5EA6\u6B63\u78BA":(g>0?"\u722C\u5347 ":"\u4E0B\u964D ")+Math.round(Math.abs(g)/10)*10+" ft"} \xB7 ${$a(ut.t)}`;return}let e=ss(Mn[0],t.pos[0],t.pos[1],t.alt),n=(t.agl-5.1)/Ce,s=t.alt-Mn[0].elev-Math.tan(3*tt)*e.dAim;ut.td?(ut.tdT+=i,mt("misG").textContent="\u5DF2\u7740\u9678 \u2014 \u6E1B\u901F\u4E2D",mt("misP").textContent=$a(ut.t),(t.gs<25||ut.tdT>14)&&vd()):(ut.sampT+=i,ut.type==="stable"&&ut.sampT>.25&&n>200&&e.dAim>0&&e.dAim<16500&&!t.wow&&(ut.sampT=0,ut.loc+=Math.abs(e.xtk),ut.gs+=Math.abs(s),ut.n++),mt("misG").textContent=ut.type==="stable"?`\u822A\u9053 ${e.xtk>0?"\u504F\u53F3":"\u504F\u5DE6"} ${Math.round(Math.abs(e.xtk))} m \xB7 \u4E0B\u6ED1\u9053 ${s>0?"\u504F\u9AD8":"\u504F\u4F4E"} ${Math.round(Math.abs(s))} m`:`\u96E2\u5730 ${Math.max(0,Math.round(n/10)*10)} ft \xB7 \u4E0B\u964D\u7387 ${Math.round(-t.vs*196.85/50)*50} fpm`,mt("misP").textContent=`\u8DDD\u8DD1\u9053 ${(Math.max(0,-e.along)/1852).toFixed(1)} NM \xB7 ${Math.round(t.ias/ie)} kt \xB7 ${$a(ut.t)}`,e.along>Mn[0].len+400&&!t.wow&&(t.say("\u5DF2\u98DB\u8D8A\u8DD1\u9053 \u2014 \u4EFB\u52D9\u7D50\u675F\uFF0C\u53EF\u5F9E\u9078\u55AE\u91CD\u8A66",6),Ja()))}function vd(){ut.done=!0;let i=[],t=1,e="";if(i.push(["\u7528\u6642",$a(ut.t)]),ut.type==="gates"){let n=ut.dev.length?ut.dev.reduce((r,o)=>r+o,0)/ut.dev.length:0,s=ut.gates.length;i.push(["\u7A7F\u904E\u822A\u9EDE",`${ut.hits} / ${s}`],["\u822A\u7DDA\u504F\u5DEE\uFF08\u5E73\u5747\u504F\u96E2\u74B0\u5FC3\uFF09",ut.hits?`${Math.round(n)} m`:"\u2014"],["\u6700\u5927\u504F\u5DEE",ut.hits?`${Math.round(Math.max(...ut.dev))} m`:"\u2014"]),t=ut.hits===s&&n<45?3:ut.hits>=s-1&&n<85?2:ut.hits>=3?1:0,e=t===3?"\u7CBE\u6E96\u7A7F\u8D8A\uFF0C\u822A\u7DDA\u6F02\u4EAE":t===2?"\u4E0D\u932F\uFF0C\u518D\u8CBC\u8FD1\u74B0\u5FC3\u4E00\u9EDE":t===1?"\u5B8C\u6210\uFF0C\u4F46\u932F\u904E\u4E86\u4E00\u4E9B\u822A\u9EDE":"\u5927\u90E8\u5206\u822A\u9EDE\u90FD\u932F\u904E\u4E86"}else{let n=ut.td;if(ut.type==="stable"){let s=ut.n?ut.loc/ut.n:0,r=ut.n?ut.gs/ut.n:0;i.push(["\u822A\u7DDA\u504F\u5DEE\uFF08\u822A\u9053\u5E73\u5747\uFF09",`${Math.round(s)} m`],["\u4E0B\u6ED1\u9053\u5E73\u5747\u504F\u5DEE",`${Math.round(r)} m`]),t=s<25&&r<15&&n.fpm<300?3:s<60&&r<35&&n.fpm<500?2:1}else t=n.fpm<200&&Math.abs(n.xtk)<8?3:n.fpm<350&&Math.abs(n.xtk)<15?2:1;i.push(["\u7740\u9678\u4E0B\u964D\u7387",`${n.fpm} fpm`],["\u7740\u9678 G \u503C",n.g.toFixed(2)+" g"],["\u4E2D\u5FC3\u7DDA\u504F\u5DEE",`${Math.abs(n.xtk).toFixed(1)} m ${n.xtk>0?"\u504F\u53F3":"\u504F\u5DE6"}`],["\u843D\u9EDE",`\u7784\u6E96\u9EDE${n.past>=0?"\u5F8C":"\u524D"} ${Math.round(Math.abs(n.past))} m`]),n.onRwy||(t=0),e=n.onRwy?t===3?"\u5E73\u7A69\u53C8\u7CBE\u6E96\u7684\u843D\u5730":t===2?"\u5B89\u5168\u843D\u5730\uFF0C\u9084\u53EF\u4EE5\u66F4\u8F15":"\u843D\u5730\u504F\u91CD\u6216\u504F\u96E2\u4E2D\u5FC3\u7DDA":"\u6C92\u6709\u843D\u5728\u8DD1\u9053\u4E0A"}Rd(tu[ut.type],t,e,i)}function Rd(i,t,e,n){Nn=!0,mt("resTitle").textContent=i+(t?" \xB7 \u5B8C\u6210":" \xB7 \u672A\u9054\u6A19"),mt("resStars").textContent="\u2605".repeat(t)+"\u2606".repeat(3-t),mt("resGrade").textContent=e;let s=mt("resRows");s.textContent="";for(let[r,o]of n){let a=document.createElement("span"),l=document.createElement("span");a.textContent=r,l.textContent=o,s.append(a,l)}mt("result").style.display="flex"}var Yv={runway:()=>q.reset("runway"),approach:()=>q.reset("approach"),cruise:()=>{q.reset("cruise"),q.ap.vs=2500},aurora:()=>{as=2,ls===3&&(ls=1),q.reset("cruise",{pos:[-66e3,-8e3],hdg:0}),q.ap.vs=2500},gates:()=>{q.reset("approach",{pos:[-14500,-3600],alt:1100,kt:240,flap:0,hdg:5,manual:!0}),q.ap.spd=240,q.ap.alt=4e3},stable:()=>{q.reset("approach",{dist:18520,alt:3e3*Ce,kt:180,flap:2,side:350,manual:!0}),q.ap.spd=150},landing:()=>{q.reset("approach",{dist:7400,alt:Mn[0].elev+Math.tan(3*tt)*7700,kt:152,flap:5,gear:!0,manual:!0}),q.ap.spd=145}};function ja(i){eu=i,Ja(),Yv[i](),Pr(),Cr=!0,Nn=!1,Xa=_o=qa=!1,$h=0,vo=q.psi,Za=!1;for(let r of["menu","crash","result"])mt(r).style.display="none";mt("ui").style.display="block",Be.start(),Is(i==="runway"?0:wn),Li=mt("chkEasy").checked,Yn.landed=!1,Yn.retard=!1,Yn.climbout=i==="runway",Yn.flapT=0,document.body.classList.toggle("easy",Li);let t=yo?"\u628A\u53F3\u5074\u6CB9\u9580\u63A8\u5230\u9802":"\u6309\u4F4F W \u63A8\u6EFF\u6CB9\u9580",e=yo?"\u6416\u687F\u5F80\u4E0B\u62C9":"\u6309 \u2193",n=yo?"\u6416\u687F":"\u65B9\u5411\u9375",s={runway:Li?`${t}\uFF0C\u807D\u5230 Rotate \u5F8C${e}\u62AC\u982D\u3002\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u6703\u81EA\u52D5\u64CD\u4F5C\u3002`:"\u6309 P \u9B06\u958B\u505C\u6A5F\u715E\u8ECA\uFF0CW \u63A8\u6CB9\u9580\u8D77\u98DB\u3002Esc \u53EF\u66AB\u505C\u67E5\u770B\u6309\u9375\u3002",approach:Li?"\u81EA\u52D5\u99D5\u99DB\u98DB\u884C\u4E2D\u3002\u5DF2\u9810\u4F4D ILS\uFF0C\u6703\u81EA\u52D5\u5C0D\u6E96\u8DD1\u9053\u3001\u653E\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u4E26\u81EA\u52D5\u843D\u5730\uFF1B\u60F3\u81EA\u5DF1\u98DB\u96A8\u6642\u63A8\u687F\u63A5\u624B\u3002":"\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u6309 L \u9810\u4F4D ILS \u9032\u5834\uFF0CF \u653E\u895F\u7FFC\uFF0CG \u653E\u8D77\u843D\u67B6\u3002",cruise:"\u5DE1\u822A\u4E2D\uFF0C\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u5B8C\u6574\u5100\u8868\uFF08H\uFF09\u4E0A\u65B9\u9762\u677F\u53EF\u6539\u822A\u5411/\u9AD8\u5EA6/\u901F\u5EA6\u3002",aurora:"\u591C\u9593\u5411\u5317\u5DE1\u822A\uFF0C\u6975\u5149\u5C31\u5728\u524D\u65B9\u3002\u62D6\u66F3\u756B\u9762\u53EF\u74B0\u9867\u56DB\u5468\uFF0CH \u53EF\u96B1\u85CF\u4ECB\u9762\u3002",gates:`\u7528${n}\u64CD\u7E31\uFF0C\u4F9D\u5E8F\u7A7F\u904E 6 \u500B\u5149\u74B0\uFF08\u7DA0\u8272\u662F\u4E0B\u4E00\u500B\uFF09\u3002\u901F\u5EA6\u7531\u81EA\u52D5\u6CB9\u9580\u4FDD\u6301 240 kt\u3002`,stable:`\u624B\u52D5\u9032\u5834\uFF1A\u7528${n}\u5C0D\u6E96\u8DD1\u9053\uFF0C\u6CBF\u4E0B\u6ED1\u9053\u4E0B\u964D\u4E26\u843D\u5730\u3002\u901F\u5EA6\u7531\u81EA\u52D5\u6CB9\u9580\u4FDD\u6301\u3002`,landing:`\u8DD1\u9053\u5C31\u5728\u524D\u65B9\uFF1A\u4FDD\u6301\u4E0B\u964D\uFF0C\u7D04 30 ft ${yo?"\u8F15\u62C9\u6416\u687F":"\u8F15\u6309 \u2193"}\u5E73\u98C4\uFF0C\u8F15\u8F15\u843D\u5728\u4E2D\u5FC3\u7DDA\u4E0A\u3002`};q.say(s[i],12),q.ap.autoland=Li&&i==="approach",i==="approach"&&Li&&(q.toggleAPP(),q.ap.spd=150),tu[i]&&(Wv(i),q.tuneILS(),wn!==0&&(en.az=0,en.el=.1,en.dist=95))}var yo=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||/[?&]touch/.test(location.search);yo&&(document.body.classList.add("touch"),Ne.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Ne.shadowMap.enabled=!1,Un.castShadow=!1);{let i=mt("stick"),t=mt("knob"),e=c=>{let h=i.getBoundingClientRect(),u=h.width/2,f=(c.clientX-h.left-u)/(u*.72),p=(c.clientY-h.top-u)/(u*.72),g=Math.hypot(f,p);g>1&&(f/=g,p/=g);let x=m=>Math.sign(m)*Math.pow(Math.abs(m),1.5);bn.x=x(f),bn.y=x(p),bn.active=!0,t.style.transform=`translate(${f*u*.72}px, ${p*u*.72}px)`},n=()=>{bn.active=!1,bn.x=bn.y=0,t.style.transform=""};i.addEventListener("pointerdown",c=>{try{i.setPointerCapture(c.pointerId)}catch{}e(c),c.preventDefault()}),i.addEventListener("pointermove",c=>{bn.active&&e(c)}),i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n);let s=mt("thr"),r=!1,o=c=>{let h=s.getBoundingClientRect();q.thr=Xe(1-(c.clientY-h.top-14)/(h.height-28),0,1),q.ap.athr&&(q.ap.athr=!1,q.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))};s.addEventListener("pointerdown",c=>{try{s.setPointerCapture(c.pointerId)}catch{}r=!0,o(c),c.preventDefault()}),s.addEventListener("pointermove",c=>{r&&o(c)}),s.addEventListener("pointerup",()=>{r=!1}),s.addEventListener("pointercancel",()=>{r=!1});let a=(c,h,u)=>{let f=mt(c);f.addEventListener("pointerdown",g=>{try{f.setPointerCapture(g.pointerId)}catch{}h(),f.classList.add("on"),g.preventDefault()});let p=()=>{u(),f.classList.remove("on")};f.addEventListener("pointerup",p),f.addEventListener("pointercancel",p)};a("tBrake",()=>{bn.brake=!0},()=>{bn.brake=!1}),a("tRev",()=>Ls.add("r"),()=>Ls.delete("r"));let l=(c,h)=>mt(c).addEventListener("click",u=>{Qh({key:h,preventDefault(){},repeat:!1},!0),Ls.delete(h),u.currentTarget.blur()});l("tView","c"),l("tHud","h"),l("tMenu","Escape"),l("tGear","g"),l("tFlapD","f"),l("tFlapU","v"),l("tSb","x")}for(let i of document.querySelectorAll("[data-start]"))i.addEventListener("click",()=>ja(i.dataset.start));mt("resume").addEventListener("click",Ad);var Cd=()=>{for(let i of["crash","result"])mt(i).style.display="none";Ja(),Nn=!0,mt("menu").style.display="flex",mt("menuTitle").textContent="SOLARIS R7 \u98DB\u884C\u6A21\u64EC\u5668",mt("resume").style.display="none"};mt("resRetry").addEventListener("click",()=>ja(eu));mt("resGo").addEventListener("click",()=>{mt("result").style.display="none",Ja(),Nn=!1});mt("resMenu").addEventListener("click",Cd);mt("crashRetry").addEventListener("click",()=>ja(eu));mt("crashMenu").addEventListener("click",Cd);mt("selTime").addEventListener("change",i=>{as=+i.target.value,Pr()});mt("selWx").addEventListener("change",i=>{ls=+i.target.value,Pr()});Mo.forEach((i,t)=>mt("selTime").add(new Option(i.name,t)));Ka.forEach((i,t)=>mt("selWx").add(new Option(i.name,t)));var Qa=(i,t)=>{for(let e of document.querySelectorAll(`[data-adj="${i}"]`))e.addEventListener("click",n=>{t(+e.dataset.d*(n.shiftKey?5:1)),e.blur()})};Qa("spd",i=>q.ap.spd=Xe(q.ap.spd+i*5,110,340));Qa("hdg",i=>q.ap.hdg=((q.ap.hdg+i*5)%360+360)%360);Qa("alt",i=>q.ap.alt=Xe(q.ap.alt+i*(q.ap.alt>=1e4&&(i>0||q.ap.alt>1e4)?1e3:500),0,66e3));Qa("vs",i=>q.ap.vs=Xe(q.ap.vs+i*200,400,4e3));mt("bAP").addEventListener("click",i=>{q.toggleAP(),i.target.blur()});mt("bAT").addEventListener("click",i=>{q.toggleATHR(),i.target.blur()});mt("bAPP").addEventListener("click",i=>{q.toggleAPP(),i.target.blur()});addEventListener("resize",()=>{Ne.setSize(innerWidth,innerHeight),ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix()});var Xh=1/120,qh=0,yd=performance.now(),Yh=0;function Pd(i){requestAnimationFrame(Pd);let t=Math.min(.1,(i-yd)/1e3);if(yd=i,Cr&&!Nn&&!q.crashed&&!window.__freeze){for(Ya+=t,Nv(t),Uv(t),qh+=t;qh>=Xh&&(q.step(Xh),qh-=Xh,!q.crashed););Yh+=t,Yh>2&&(Yh=0,q.tuneILS()),Bv(t),qv(t),q.crashed&&(Be.thump(3),mt("crashWhy").textContent=q.crashed,mt("crash").style.display="flex",window.speechSynthesis&&speechSynthesis.cancel())}q.update0();{let e=Xe((q.alt-8e3)/1e4,0,1);if(ke.material.uniforms.rayleigh.value=qn.ray*(1-.78*e),we.fog.density=qn.fog*(.22+.78*Math.exp(-q.alt/5200)),!qn.lowvis){let n=Xe(q.alt/9e3,0,1)*(1-qn.night);we.fog.color.copy(qn.col).lerp(Pv,.55*n),ke.material.uniforms.uHaze.value.copy(we.fog.color).multiplyScalar(qn.night===1?0:1)}si.update(Nn?0:t,q.alt,ye)}zv(t),Cr&&Hv(),Be.update(q,wn===0,t,Nn||!Cr),Ne.render(we,ye)}(async function(){try{await Dv(),Pr(),Is(1),en.az=2.5,en.el=.12,en.dist=105,mt("loading").style.display="none",mt("menu").style.display="flex"}catch(t){mt("loadtxt").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+t.message,console.error(t)}requestAnimationFrame(Pd)})();window.__sim=q;window.__dbg={W:si,mission:()=>ut,showResult:(...i)=>Rd(...i),snd:Be,scene:we,camera:ye,parts:Di,model:Ps,look:mn,orbit:en,setView:Is,startFlight:ja,renderer:Ne};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
