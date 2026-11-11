(()=>{var ad=0,Hh=1,cd=2;var cf=1,El=2,ti=3,Vn=0,Xe=1,Pn=2,Pi=0,ks=1,ko=2,Vh=3,Gh=4,ld=5,es=100,hd=101,ud=102,fd=103,dd=104,pd=200,md=201,gd=202,_d=203,pc=204,mc=205,xd=206,vd=207,yd=208,Md=209,Sd=210,bd=211,Td=212,wd=213,Ad=214,gc=0,_c=1,xc=2,Gs=3,vc=4,yc=5,Mc=6,Sc=7,Rl=0,Ed=1,Rd=2,Li=0,Cd=1,Id=2,Pd=3,Cl=4,Ld=5,Dd=6,Nd=7,Wh="attached",Ud="detached",lf=300,Ws=301,Xs=302,bc=303,Tc=304,pa=306,ri=1e3,ni=1001,Fr=1002,qe=1003,Il=1004;var Fs=1005;var sn=1006,Dr=1007;var Hn=1008;var oi=1009,hf=1010,uf=1011,Br=1012,Pl=1013,is=1014,Dn=1015,Yr=1016,Ll=1017,Dl=1018,qs=1020,ff=35902,df=1021,pf=1022,vn=1023,mf=1024,gf=1025,zs=1026,Ys=1027,Nl=1028,Ul=1029,_f=1030,Ol=1031;var Fl=1033,No=33776,Uo=33777,Oo=33778,Fo=33779,wc=35840,Ac=35841,Ec=35842,Rc=35843,Cc=36196,Ic=37492,Pc=37496,Lc=37808,Dc=37809,Nc=37810,Uc=37811,Oc=37812,Fc=37813,Bc=37814,kc=37815,zc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,Bo=36492,qc=36494,Yc=36495,xf=36283,Zc=36284,Kc=36285,$c=36286;var Zs=2300,Ks=2301,Ua=2302,Xh=2400,qh=2401,Yh=2402,Od=2500;var vf=0,ma=1,Zr=2,Fd=3200,Bd=3201;var Bl=0,kd=1,Ri="",Se="srgb",Ye="srgb-linear",ga="linear",he="srgb";var xs=7680;var Zh=519,zd=512,Hd=513,Vd=514,yf=515,Gd=516,Wd=517,Xd=518,qd=519,Jc=35044;var Kh="300 es",ii=2e3,zo=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,Nr=Math.PI/180,$s=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function kl(i,t){return(i%t+t)%t}function Yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ur(i,t,e){return(1-e)*i+e*t}function Kd(i,t,e,n){return Ur(i,t,1-Math.exp(-e*n))}function $d(i,t=1){return t-Math.abs(kl(i,t*2)-t)}function Jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tp(i,t){return i+Math.random()*(t-i)}function ep(i){return i*(.5-Math.random())}function np(i){i!==void 0&&($h=i);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ip(i){return i*Nr}function sp(i){return i*$s}function rp(i){return(i&i-1)===0&&i!==0}function op(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mf={DEG2RAD:Nr,RAD2DEG:$s,generateUUID:Nn,clamp:We,euclideanModulo:kl,mapLinear:Yd,inverseLerp:Zd,lerp:Ur,damp:Kd,pingpong:$d,smoothstep:Jd,smootherstep:jd,randInt:Qd,randFloat:tp,randFloatSpread:ep,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:op,floorPowerOfTwo:ap,setQuaternionFromProperEuler:cp,normalize:le,denormalize:Ln},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],R=s[2],A=s[5],E=s[8];return r[0]=o*_+a*v+c*R,r[3]=o*m+a*y+c*A,r[6]=o*d+a*x+c*E,r[1]=l*_+h*v+u*R,r[4]=l*m+h*y+u*A,r[7]=l*d+h*x+u*E,r[2]=f*_+p*v+g*R,r[5]=f*m+p*y+g*A,r[8]=f*d+p*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new qt;function Sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=kr("canvas");return i.style.display="block",i}var Jh={};function Pr(i){i in Jh||(Jh[i]=!0,console.warn(i))}function hp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function up(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jh=[.64,.33,.3,.6,.15,.06],Qh=[.2126,.7152,.0722],tu=[.3127,.329],eu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ye]:{primaries:jh,whitePoint:tu,transfer:ga,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:Qh,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:jh,whitePoint:tu,transfer:he,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:Qh,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});var vs,jc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=kr("canvas")),vs.width=t.width,vs.height=t.height;let n=vs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dp=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pp=0,Fe=class i extends Di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=sn,o=Hn,a=vn,c=oi,l=i.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Nn(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=lf;Fe.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(p+1)/2,R=(d+1)/2,A=(h+f)/4,E=(u+_)/4,C=(g+m)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vo=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let R=Math.sqrt(y),A=Math.atan2(R,d*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let x=a*v;if(c=c*m+f*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new I,iu=new un,rn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),so.subVectors(this.max,yr),ys.subVectors(t.a,yr),Ms.subVectors(t.b,yr),Ss.subVectors(t.c,yr),Si.subVectors(Ms,ys),bi.subVectors(Ss,Ms),Zi.subVectors(ys,Ss);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Zi.z,Zi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Zi.z,0,-Zi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Zi.y,Zi.x,0];return!ka(e,ys,Ms,Ss,so)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,ys,Ms,Ss,so))?!1:(ro.crossVectors(Si,bi),e=[ro.x,ro.y,ro.z],ka(e,ys,Ms,Ss,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,io=new rn,ys=new I,Ms=new I,Ss=new I,Si=new I,bi=new I,Zi=new I,yr=new I,so=new I,ro=new I,Ki=new I;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var mp=new rn,Mr=new I,za=new I,fn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(za)),this.expandByPoint(Mr.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new I,Ha=new I,oo=new I,Ti=new I,Va=new I,ao=new I,Ga=new I,Js=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=Ti.dot(this.direction),c=-Ti.dot(oo),l=Ti.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(oo,f),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),ao.subVectors(n,t),Ga.crossVectors(Va,ao);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let c=a*this.direction.dot(ao.crossVectors(Ti,ao));if(c<0)return null;let l=a*this.direction.dot(Va.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),wi.crossVectors(n,ln),wi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),wi.crossVectors(n,ln)),wi.normalize(),co.crossVectors(ln,wi),s[0]=wi.x,s[4]=co.x,s[8]=ln.x,s[1]=wi.y,s[5]=co.y,s[9]=ln.y,s[2]=wi.z,s[6]=co.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],y=n[7],x=n[11],R=n[15],A=s[0],E=s[4],C=s[8],T=s[12],S=s[1],P=s[5],H=s[9],z=s[13],G=s[2],$=s[6],q=s[10],it=s[14],W=s[3],rt=s[7],lt=s[11],St=s[15];return r[0]=o*A+a*S+c*G+l*W,r[4]=o*E+a*P+c*$+l*rt,r[8]=o*C+a*H+c*q+l*lt,r[12]=o*T+a*z+c*it+l*St,r[1]=h*A+u*S+f*G+p*W,r[5]=h*E+u*P+f*$+p*rt,r[9]=h*C+u*H+f*q+p*lt,r[13]=h*T+u*z+f*it+p*St,r[2]=g*A+_*S+m*G+d*W,r[6]=g*E+_*P+m*$+d*rt,r[10]=g*C+_*H+m*q+d*lt,r[14]=g*T+_*z+m*it+d*St,r[3]=v*A+y*S+x*G+R*W,r[7]=v*E+y*P+x*$+R*rt,r[11]=v*C+y*H+x*q+R*lt,r[15]=v*T+y*z+x*it+R*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,x=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,A=e*v+n*y+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return t[0]=v*E,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*E,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*E,t[4]=y*E,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*E,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*E,t[8]=x*E,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*E,t[12]=R*E,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,v=c*l,y=c*h,x=c*u,R=n.x,A=n.y,E=n.z;return s[0]=(1-(_+d))*R,s[1]=(p+x)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+d))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*E,s[9]=(m-v)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ii){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h,g,_;if(a===ii)g=(o+r)*u,_=-2*u;else if(a===zo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},bs=new I,Cn=new Dt,gp=new I(0,0,0),_p=new I(1,1,1),wi=new I,co=new I,ln=new I,su=new Dt,ru=new un,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xp=0,ou=new I,Ts=new un,$n=new Dt,lo=new I,Sr=new I,vp=new I,yp=new un,au=new I(1,0,0),cu=new I(0,1,0),lu=new I(0,0,1),hu={type:"added"},Mp={type:"removed"},ws={type:"childadded",child:null},Wa={type:"childremoved",child:null},ye=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Un,n=new un,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new qt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Sr,lo,this.up):$n.lookAt(lo,Sr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix($n),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new I,Jn=new I,Xa=new I,jn=new I,As=new I,Es=new I,uu=new I,qa=new I,Ya=new I,Za=new I,Ka=new se,$a=new se,Ja=new se,Ci=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Jn.subVectors(n,e),Xa.subVectors(t,e);let o=In.dot(In),a=In.dot(Jn),c=In.dot(Xa),l=Jn.dot(Jn),h=Jn.dot(Xa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),$a.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Jn.subVectors(t,e),In.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Es.subVectors(r,n),qa.subVectors(t,n);let c=As.dot(qa),l=Es.dot(qa);if(c<=0&&l<=0)return e.copy(n);Ya.subVectors(t,s);let h=As.dot(Ya),u=Es.dot(Ya);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(As,o);Za.subVectors(t,r);let p=As.dot(Za),g=Es.dot(Za);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Es,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(uu,a);let d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(As,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ho={h:0,s:0,l:0};function ja(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=kl(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ja(o,r,t+1/3),this.g=ja(o,r,t),this.b=ja(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Qt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(We(Ge.r*255,0,255))*65536+Math.round(We(Ge.g*255,0,255))*256+Math.round(We(Ge.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Se){Qt.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(ho);let n=Ur(Ai.h,ho.h,e),s=Ur(Ai.s,ho.s,e),r=Ur(Ai.l,ho.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Rt;Rt.NAMES=bf;var Sp=0,je=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Nn(),this.name="",this.blending=ks,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},on=class extends je{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new I,uo=new Ut,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}};var Wo=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=0,xn=new Dt,Qa=new ye,Rs=new I,hn=new rn,br=new rn,Oe=new I,Ee=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(hn.min,br.min),hn.expandByPoint(Oe),Oe.addVectors(hn.max,br.max),hn.expandByPoint(Oe)):(hn.expandByPoint(br.min),hn.expandByPoint(br.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(t,l),Oe.add(Rs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;let l=new I,h=new I,u=new I,f=new Ut,p=new Ut,g=new Ut,_=new I,m=new I;function d(C,T,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[T].add(_),a[S].add(_),c[C].add(m),c[T].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,T=v.length;C<T;++C){let S=v[C],P=S.start,H=S.count;for(let z=P,G=P+H;z<G;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let y=new I,x=new I,R=new I,A=new I;function E(C){R.fromBufferAttribute(s,C),A.copy(R);let T=a[C];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(A,T);let P=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,T=v.length;C<T;++C){let S=v[C],P=S.start,H=S.count;for(let z=P,G=P+H;z<G;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new Dt,$i=new Js,fo=new fn,du=new I,po=new I,mo=new I,go=new I,tc=new I,_o=new I,pu=new I,xo=new I,xe=class extends ye{constructor(t=new Ee,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(tc.fromBufferAttribute(u,t),o?_o.addScaledVector(tc,h):_o.addScaledVector(tc.sub(e),h))}e.add(_o)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(fo.containsPoint($i.origin)===!1&&($i.intersectSphere(fo,du)===null||$i.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(r).invert(),$i.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){let A=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);s=vo(this,d,t,n,l,h,u,A,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=vo(this,o,t,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){let A=x,E=x+1,C=x+2;s=vo(this,d,t,n,l,h,u,A,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=m,y=m+1,x=m+2;s=vo(this,o,t,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tp(i,t,e,n,s,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Vn,a),c===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xo);return l<e.near||l>e.far?null:{distance:l,point:xo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,po),i.getVertexPosition(c,mo),i.getVertexPosition(l,go);let h=Tp(i,t,e,n,po,mo,go,pu);if(h){let u=new I;Ci.getBarycoord(pu,po,mo,go,u),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,c,l,u,new Ut)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,c,l,u,new Ut)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};Ci.getNormal(po,mo,go,f.normal),h.face=f,h.barycoord=u}return h}var Gn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(_,m,d,v,y,x,R,A,E,C,T){let S=x/E,P=R/C,H=x/2,z=R/2,G=A/2,$=E+1,q=C+1,it=0,W=0,rt=new I;for(let lt=0;lt<q;lt++){let St=lt*P-z;for(let Pt=0;Pt<$;Pt++){let ee=Pt*S-H;rt[_]=ee*v,rt[m]=St*y,rt[d]=G,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Pt/E),u.push(1-lt/C),it+=1}}for(let lt=0;lt<C;lt++)for(let St=0;St<E;St++){let Pt=f+St+$*lt,ee=f+St+$*(lt+1),Y=f+(St+1)+$*(lt+1),st=f+(St+1)+$*lt;c.push(Pt,ee,st),c.push(ee,Y,st),W+=6}a.addGroup(p,W,T),p+=W,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=js(i[e]);for(let s in n)t[s]=n[s]}return t}function wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var zl={clone:js,merge:Je},Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends je{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qo=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new I,mu=new Ut,gu=new Ut,Pe=class extends qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cs=-90,Is=1,el=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Cs,Is,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Cs,Is,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Cs,Is,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Cs,Is,t,e);a.layers=this.layers,this.add(a);let c=new Pe(Cs,Is,t,e);c.layers=this.layers,this.add(c);let l=new Pe(Cs,Is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yo=class extends Fe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Pi});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=sn),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ec=new I,Rp=new I,Cp=new qt,ei=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ec.subVectors(n,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new fn,yo=new I,zr=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-p,x-d).normalize(),n[1].setComponents(c+r,f+l,m+p,x+d).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-_,x-y).normalize(),e===ii)n[5].setComponents(c+a,f+u,m+_,x+y).normalize();else if(e===zo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ss=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let v=d*f-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let y=v+l*d,x=v+l*(d+1),R=v+1+l*(d+1),A=v+1+l*d;p.push(y,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,Z0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,j0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,tg=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Op,aomap_fragment:Fp,aomap_pars_fragment:Bp,batching_pars_vertex:kp,batching_vertex:zp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:$p,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:cm,envmap_fragment:lm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:bm,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:xm,lightmap_pars_fragment:vm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:Mm,lights_pars_begin:Sm,lights_toon_fragment:Tm,lights_toon_pars_fragment:wm,lights_phong_fragment:Am,lights_phong_pars_fragment:Em,lights_physical_fragment:Rm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Im,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Om,map_fragment:Fm,map_pars_fragment:Bm,map_particle_fragment:km,map_particle_pars_fragment:zm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:$m,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:r0,premultiplied_alpha_fragment:o0,project_vertex:a0,dithering_fragment:c0,dithering_pars_fragment:l0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:x0,skinnormal_vertex:v0,specularmap_fragment:y0,specularmap_pars_fragment:M0,tonemapping_fragment:S0,tonemapping_pars_fragment:b0,transmission_fragment:T0,transmission_pars_fragment:w0,uv_pars_fragment:A0,uv_pars_vertex:E0,uv_vertex:R0,worldpos_vertex:C0,background_vert:I0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:N0,cube_frag:U0,depth_vert:O0,depth_frag:F0,distanceRGBA_vert:B0,distanceRGBA_frag:k0,equirect_vert:z0,equirect_frag:H0,linedashed_vert:V0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:Z0,meshmatcap_frag:K0,meshnormal_vert:$0,meshnormal_frag:J0,meshphong_vert:j0,meshphong_frag:Q0,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:og,shadow_frag:ag,sprite_vert:cg,sprite_frag:lg},ft={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},zn={basic:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Je([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Je([ft.lights,ft.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};zn.physical={uniforms:Je([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Mo={r:0,b:0,g:0},ji=new Un,hg=new Dt;function ug(i,t,e,n,s,r,o){let a=new Rt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1,x=g(v);x===null?d(a,c):x&&x.isColor&&(d(x,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===pa)?(h===void 0&&(h=new xe(new Gn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:js(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ji.copy(y.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(ji)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==he,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xe(new ss(2,2),new yn({name:"BackgroundMaterial",uniforms:js(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,y){v.getRGB(Mo,Tf(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:_,addToRenderList:m}}function fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,P,H,z,G){let $=!1,q=u(z,H,P);r!==q&&(r=q,l(r.object)),$=p(S,z,H,G),$&&g(S,z,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,P,H,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,H){let z=H.wireframe===!0,G=n[S.id];G===void 0&&(G={},n[S.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let q=$[z];return q===void 0&&(q=f(c()),$[z]=q),q}function f(S){let P=[],H=[],z=[];for(let G=0;G<e;G++)P[G]=0,H[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,H,z){let G=r.attributes,$=P.attributes,q=0,it=H.getAttributes();for(let W in it)if(it[W].location>=0){let lt=G[W],St=$[W];if(St===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(S,P,H,z){let G={},$=P.attributes,q=0,it=H.getAttributes();for(let W in it)if(it[W].location>=0){let lt=$[W];lt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));let St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),G[W]=St,q++}r.attributes=G,r.attributesNum=q,r.index=z}function _(){let S=r.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){let H=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;H[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),G[S]!==P&&(i.vertexAttribDivisor(S,P),G[S]=P)}function v(){let S=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==S[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function y(S,P,H,z,G,$,q){q===!0?i.vertexAttribIPointer(S,P,H,G,$):i.vertexAttribPointer(S,P,H,z,G,$)}function x(S,P,H,z){_();let G=z.attributes,$=H.getAttributes(),q=P.defaultAttributeValues;for(let it in $){let W=$[it];if(W.location>=0){let rt=G[it];if(rt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){let lt=rt.normalized,St=rt.itemSize,Pt=t.get(rt);if(Pt===void 0)continue;let ee=Pt.buffer,Y=Pt.type,st=Pt.bytesPerElement,xt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===Pl;if(rt.isInterleavedBufferAttribute){let ht=rt.data,X=ht.stride,ct=rt.offset;if(ht.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)d(W.location+wt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let wt=0;wt<W.locationSize;wt++)y(W.location+wt,St/W.locationSize,Y,lt,X*st,(ct+St/W.locationSize*wt)*st,xt)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)d(W.location+ht,rt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ht=0;ht<W.locationSize;ht++)y(W.location+ht,St/W.locationSize,Y,lt,St*st,St/W.locationSize*ht*st,xt)}}else if(q!==void 0){let lt=q[it];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(W.location,lt);break;case 3:i.vertexAttrib3fv(W.location,lt);break;case 4:i.vertexAttrib4fv(W.location,lt);break;default:i.vertexAttrib1fv(W.location,lt)}}}}v()}function R(){C();for(let S in n){let P=n[S];for(let H in P){let z=P[H];for(let G in z)h(z[G].object),delete z[G];delete P[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let H in P){let z=P[H];for(let G in z)h(z[G].object),delete z[G];delete P[H]}delete n[S.id]}function E(S){for(let P in n){let H=n[P];if(H[S.id]===void 0)continue;let z=H[S.id];for(let G in z)h(z[G].object),delete z[G];delete H[S.id]}}function C(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===Yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Dn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function mg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ei,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,x=d.clippingState||null;c.value=x,x=h(g,f,y,p);for(let R=0;R!==y;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function gg(i){let t=new WeakMap;function e(o,a){return a===bc?o.mapping=Ws:a===Tc&&(o.mapping=Xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bc||a===Tc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qs=class extends qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bs=4,_u=[.125,.215,.35,.446,.526,.582],ns=20,nc=new Qs,xu=new Rt,ic=null,sc=0,rc=0,oc=!1,ts=(1+Math.sqrt(5))/2,Ps=1/ts,vu=[new I(-ts,Ps,0),new I(ts,Ps,0),new I(-Ps,0,ts),new I(Ps,0,ts),new I(0,ts,-Ps),new I(0,ts,Ps),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=oc,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Yr,format:vn,colorSpace:Ye,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,nc)}_sceneToCubeUV(t,e,n,s){let a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(xu),h.toneMapping=Li,h.autoClear=!1;let p=new on({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new xe(new Gn,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(xu),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let y=this._cubeSize;So(s,v*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ws||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;So(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xe(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let d=[],v=0;for(let E=0;E<ns;++E){let C=E/_,T=Math.exp(-C*C/2);d.push(T),E===0?v+=T:E<m&&(v+=2*T)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let x=this._sizeLods[s],R=3*x*(s>y-Bs?s-y+Bs:0),A=4*(this._cubeSize-x);So(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(u,nc)}};function _g(i){let t=[],e=[],n=[],s=i,r=i-Bs+1+_u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Bs?c=_u[o-i+Bs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let A=0;A<p;A++){let E=A%3*2/3-1,C=A>2?0:-1,T=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(T,_*g*A),y.set(f,m*g*A);let S=[A,A,A,A,A,A];x.set(S,d*g*A)}let R=new Ee;R.setAttribute("position",new me(v,_)),R.setAttribute("uv",new me(y,m)),R.setAttribute("faceIndex",new me(x,d)),t.push(R),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){let n=new ai(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){let n=new Float32Array(ns),s=new I(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Mu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Su(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===bc||c===Tc,h=c===Ws||c===Xs;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tr(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new tr(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){let R=v[y+0],A=v[y+1],E=v[y+2];f.push(R,A,A,E,E,R)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let R=y+0,A=y+1,E=y+2;f.push(R,A,A,E,E,R)}}else return;let m=new(Sf(f)?Xo:Wo)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){let n=new WeakMap,s=new se;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*R*4*u),E=new Vo(A,x,R,u);E.type=Dn,E.needsUpdate=!0;let C=y*4;for(let S=0;S<u;S++){let P=m[S],H=d[S],z=v[S],G=x*R*4*S;for(let $=0;$<P.count;$++){let q=$*C;p===!0&&(s.fromBufferAttribute(P,$),A[G+q+0]=s.x,A[G+q+1]=s.y,A[G+q+2]=s.z,A[G+q+3]=0),g===!0&&(s.fromBufferAttribute(H,$),A[G+q+4]=s.x,A[G+q+5]=s.y,A[G+q+6]=s.z,A[G+q+7]=0),_===!0&&(s.fromBufferAttribute(z,$),A[G+q+8]=s.x,A[G+q+9]=s.y,A[G+q+10]=s.z,A[G+q+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Ut(x,R)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Zo=class extends Fe{constructor(t,e,n,s,r,o,a,c,l,h=zs){if(h!==zs&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=is),n===void 0&&h===Ys&&(n=qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Af=new Fe,bu=new Zo(1,1),Ef=new Vo,Rf=new tl,Cf=new Yo,Tu=[],wu=[],Au=new Float32Array(16),Eu=new Float32Array(9),Ru=new Float32Array(4);function rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),De(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),De(e,n)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),De(e,n)}}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=yf,r=bu):r=Af,e.setTexture2D(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cf,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ef,s)}function Xg(i){switch(i){case 5126:return Ag;case 35664:return Eg;case 35665:return Rg;case 35666:return Cg;case 35674:return Ig;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Og;case 5125:return Fg;case 36294:return Bg;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function qg(i,t){i.uniform1fv(this.addr,t)}function Yg(i,t){let e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){let e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){let e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){let e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jg(i,t){let e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jg(i,t){let e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qg(i,t){i.uniform1iv(this.addr,t)}function t_(i,t){i.uniform2iv(this.addr,t)}function e_(i,t){i.uniform3iv(this.addr,t)}function n_(i,t){i.uniform4iv(this.addr,t)}function i_(i,t){i.uniform1uiv(this.addr,t)}function s_(i,t){i.uniform2uiv(this.addr,t)}function r_(i,t){i.uniform3uiv(this.addr,t)}function o_(i,t){i.uniform4uiv(this.addr,t)}function a_(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Af,r[o])}function c_(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rf,r[o])}function l_(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Cf,r[o])}function h_(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ef,r[o])}function u_(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Kg;case 35674:return $g;case 35675:return Jg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xg(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function Cu(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){let n=i.name,s=n.length;for(ac.lastIndex=0;;){let r=ac.exec(n),o=ac.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cu(e,l===void 0?new il(a,i,t):new sl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),Cu(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var d_=37297,p_=0;function m_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pu=new qt;function g_(i){Qt._getMatrix(Pu,Qt.workingColorSpace,i);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+m_(i.getShaderSource(t),o)}else return s}function __(i,t){let e=g_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x_(i,t){let e;switch(t){case Cd:e="Linear";break;case Id:e="Reinhard";break;case Pd:e="Cineon";break;case Cl:e="ACESFilmic";break;case Dd:e="AgX";break;case Nd:e="Neutral";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bo=new I;function v_(){Qt.getLuminanceCoefficients(bo);let i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function M_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Lr(i){return i!==""}function Du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(b_,w_)}var T_=new Map;function w_(i,t){let e=Zt[t];if(e===void 0){let n=T_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(A_,E_)}function E_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function R_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function C_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xs&&(t="ENVMAP_MODE_REFRACTION"),t}function P_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ed:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function L_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=R_(e),l=C_(e),h=I_(e),u=P_(e),f=L_(e),p=y_(e),g=M_(r),_=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Li?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,__("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=ol(o),o=Du(o,e),o=Nu(o,e),a=ol(a),a=Du(a,e),a=Nu(a,e),o=Uu(o),a=Uu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+m+o,x=v+d+a,R=Iu(s,s.VERTEX_SHADER,y),A=Iu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(A).trim(),$=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{let it=Lu(s,R,"vertex"),W=Lu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+it+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||G==="")&&(q=!1);q&&(P.diagnostics={runnable:$,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(A),C=new Vs(s,_),T=S_(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,d_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var N_=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cl(t),e.set(t,n)),n}},cl=class{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}};function U_(i,t,e,n,s,r,o){let a=new Go,c=new al,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,H,z){let G=H.fog,$=z.geometry,q=T.isMeshStandardMaterial?H.environment:null,it=(T.isMeshStandardMaterial?e:t).get(T.envMap||q),W=it&&it.mapping===pa?it.image.height:null,rt=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=lt!==void 0?lt.length:0,Pt=0;$.morphAttributes.position!==void 0&&(Pt=1),$.morphAttributes.normal!==void 0&&(Pt=2),$.morphAttributes.color!==void 0&&(Pt=3);let ee,Y,st,xt;if(rt){let te=zn[rt];ee=te.vertexShader,Y=te.fragmentShader}else ee=T.vertexShader,Y=T.fragmentShader,c.update(T),st=c.getVertexShaderID(T),xt=c.getFragmentShaderID(T);let ht=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ct=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,Yt=!!T.map,zt=!!T.matcap,ce=!!it,D=!!T.aoMap,ue=!!T.lightMap,Ht=!!T.bumpMap,Ft=!!T.normalMap,At=!!T.displacementMap,fe=!!T.emissiveMap,Ct=!!T.metalnessMap,w=!!T.roughnessMap,M=T.anisotropy>0,F=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Z=T.sheen>0,Mt=T.transmission>0,ut=M&&!!T.anisotropyMap,pt=F&&!!T.clearcoatMap,Jt=F&&!!T.clearcoatNormalMap,et=F&&!!T.clearcoatRoughnessMap,mt=J&&!!T.iridescenceMap,It=J&&!!T.iridescenceThicknessMap,Lt=Z&&!!T.sheenColorMap,gt=Z&&!!T.sheenRoughnessMap,Kt=!!T.specularMap,Bt=!!T.specularColorMap,ie=!!T.specularIntensityMap,L=Mt&&!!T.transmissionMap,at=Mt&&!!T.thicknessMap,V=!!T.gradientMap,O=!!T.alphaMap,tt=T.alphaTest>0,ot=!!T.alphaHash,vt=!!T.extensions,Nt=Li;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Me={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:Y,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:ct,instancingColor:ct&&z.instanceColor!==null,instancingMorph:ct&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ye,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:zt,envMap:ce,envMapMode:ce&&it.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:ue,bumpMap:Ht,normalMap:Ft,displacementMap:f&&At,emissiveMap:fe,normalMapObjectSpace:Ft&&T.normalMapType===kd,normalMapTangentSpace:Ft&&T.normalMapType===Bl,metalnessMap:Ct,roughnessMap:w,anisotropy:M,anisotropyMap:ut,clearcoat:F,clearcoatMap:pt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:et,dispersion:K,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:It,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Kt,specularColorMap:Bt,specularIntensityMap:ie,transmission:Mt,transmissionMap:L,thicknessMap:at,gradientMap:V,opaque:T.transparent===!1&&T.blending===ks&&T.alphaToCoverage===!1,alphaMap:O,alphaTest:tt,alphaHash:ot,combine:T.combine,mapUv:Yt&&_(T.map.channel),aoMapUv:D&&_(T.aoMap.channel),lightMapUv:ue&&_(T.lightMap.channel),bumpMapUv:Ht&&_(T.bumpMap.channel),normalMapUv:Ft&&_(T.normalMap.channel),displacementMapUv:At&&_(T.displacementMap.channel),emissiveMapUv:fe&&_(T.emissiveMap.channel),metalnessMapUv:Ct&&_(T.metalnessMap.channel),roughnessMapUv:w&&_(T.roughnessMap.channel),anisotropyMapUv:ut&&_(T.anisotropyMap.channel),clearcoatMapUv:pt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(T.sheenRoughnessMap.channel),specularMapUv:Kt&&_(T.specularMap.channel),specularColorMapUv:Bt&&_(T.specularColorMap.channel),specularIntensityMapUv:ie&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:at&&_(T.thicknessMap.channel),alphaMapUv:O&&_(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ft||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Yt||O),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===he,decodeVideoTextureEmissive:fe&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===he,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pn,flipSided:T.side===Xe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:vt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&T.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function d(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(S,T),y(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){let S=g[T.type],P;if(S){let H=zn[S];P=zl.clone(H.uniforms)}else P=T.uniforms;return P}function R(T,S){let P;for(let H=0,z=h.length;H<z;H++){let G=h[H];if(G.cacheKey===S){P=G,++P.usedTimes;break}}return P===void 0&&(P=new D_(i,S,T,r),h.push(P)),P}function A(T){if(--T.usedTimes===0){let S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function E(T){c.remove(T)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:C}}function O_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||F_),n.length>1&&n.sort(f||Fu),s.length>1&&s.sort(f||Fu)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function B_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var H_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G_(i){let t=new k_,e=z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Dt,o=new Dt;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,y=0,x=0,R=0,A=0,E=0;l.sort(V_);for(let T=0,S=l.length;T<S;T++){let P=l[T],H=P.color,z=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,u+=H.g*z,f+=H.b*z;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],z);E++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,W=e.get(P);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[_]=q;let it=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,it.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=it.matrix,P.castShadow){let W=e.get(P);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=$,x++}_++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let it=P.shadow,W=e.get(P);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=q,g++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(z),q.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=E,n.version=H_++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let y=l[d];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ku(i){let t=new G_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function W_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ku(i),t.set(s,[a])):r>=o.length?(a=new ku(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ll=class extends je{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends je{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Y_(i,t,e){let n=new zr,s=new Ut,r=new Ut,o=new se,a=new ll({depthPacking:Bd}),c=new hl,l={},h=e.maxTextureSize,u={[Vn]:Xe,[Xe]:Vn,[Pn]:Pn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let d=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let T=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Pi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=d!==ti&&this.type===ti,G=d===ti&&this.type!==ti;for(let $=0,q=A.length;$<q;$++){let it=A[$],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();if(s.multiply(rt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,W.mapSize.y=r.y)),W.map===null||z===!0||G===!0){let St=this.type!==ti?{minFilter:qe,magFilter:qe}:{};W.map!==null&&W.map.dispose(),W.map=new ai(s.x,s.y,St),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let lt=W.getViewportCount();for(let St=0;St<lt;St++){let Pt=W.getViewport(St);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),H.viewport(o),W.updateMatrices(it,St),n=W.getFrustum(),x(E,C,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===ti&&v(W,C),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,P)};function v(A,E){let C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,C,p,_,null)}function y(A,E,C,T){let S=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let H=S.uuid,z=E.uuid,G=l[H];G===void 0&&(G={},l[H]=G);let $=G[z];$===void 0&&($=S.clone(),G[z]=$,E.addEventListener("dispose",R)),S=$}if(S.visible=E.visible,S.wireframe=E.wireframe,T===ti?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=C}return S}function x(A,E,C,T,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ti)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let z=t.update(A),G=A.material;if(Array.isArray(G)){let $=z.groups;for(let q=0,it=$.length;q<it;q++){let W=$[q],rt=G[W.materialIndex];if(rt&&rt.visible){let lt=y(A,rt,T,S);A.onBeforeShadow(i,A,E,C,z,lt,W),i.renderBufferDirect(C,null,z,lt,A,W),A.onAfterShadow(i,A,E,C,z,lt,W)}}}else if(G.visible){let $=y(A,G,T,S);A.onBeforeShadow(i,A,E,C,z,$,null),i.renderBufferDirect(C,null,z,$,A,null),A.onAfterShadow(i,A,E,C,z,$,null)}}let H=A.children;for(let z=0,G=H.length;z<G;z++)x(H[z],E,C,T,S)}function R(A){A.target.removeEventListener("dispose",R);for(let C in l){let T=l[C],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var Z_={[gc]:_c,[xc]:Mc,[vc]:Sc,[Gs]:yc,[_c]:gc,[Mc]:xc,[Sc]:vc,[yc]:Gs};function K_(i,t){function e(){let L=!1,at=new se,V=null,O=new se(0,0,0,0);return{setMask:function(tt){V!==tt&&!L&&(i.colorMask(tt,tt,tt,tt),V=tt)},setLocked:function(tt){L=tt},setClear:function(tt,ot,vt,Nt,Me){Me===!0&&(tt*=Nt,ot*=Nt,vt*=Nt),at.set(tt,ot,vt,Nt),O.equals(at)===!1&&(i.clearColor(tt,ot,vt,Nt),O.copy(at))},reset:function(){L=!1,V=null,O.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,V=null,O=null,tt=null;return{setReversed:function(ot){if(at!==ot){let vt=t.get("EXT_clip_control");at?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT);let Nt=tt;tt=null,this.setClear(Nt)}at=ot},getReversed:function(){return at},setTest:function(ot){ot?ht(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!L&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(at&&(ot=Z_[ot]),O!==ot){switch(ot){case gc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=ot}},setLocked:function(ot){L=ot},setClear:function(ot){tt!==ot&&(at&&(ot=1-ot),i.clearDepth(ot),tt=ot)},reset:function(){L=!1,V=null,O=null,tt=null,at=!1}}}function s(){let L=!1,at=null,V=null,O=null,tt=null,ot=null,vt=null,Nt=null,Me=null;return{setTest:function(te){L||(te?ht(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(te){at!==te&&!L&&(i.stencilMask(te),at=te)},setFunc:function(te,Ke,tn){(V!==te||O!==Ke||tt!==tn)&&(i.stencilFunc(te,Ke,tn),V=te,O=Ke,tt=tn)},setOp:function(te,Ke,tn){(ot!==te||vt!==Ke||Nt!==tn)&&(i.stencilOp(te,Ke,tn),ot=te,vt=Ke,Nt=tn)},setLocked:function(te){L=te},setClear:function(te){Me!==te&&(i.clearStencil(te),Me=te)},reset:function(){L=!1,at=null,V=null,O=null,tt=null,ot=null,vt=null,Nt=null,Me=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,R=null,A=null,E=new Rt(0,0,0),C=0,T=!1,S=null,P=null,H=null,z=null,G=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=it>=2);let rt=null,lt={},St=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),ee=new se().fromArray(St),Y=new se().fromArray(Pt);function st(L,at,V,O){let tt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<V;vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(at+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return ot}let xt={};xt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Gs),Ht(!1),Ft(Hh),ht(i.CULL_FACE),D(Pi);function ht(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function X(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ct(L,at){return u[L]!==at?(i.bindFramebuffer(L,at),u[L]=at,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(L,at){let V=p,O=!1;if(L){V=f.get(at),V===void 0&&(V=[],f.set(at,V));let tt=L.textures;if(V.length!==tt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,vt=tt.length;ot<vt;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=tt.length,O=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,O=!0);O&&i.drawBuffers(V)}function Yt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let zt={[es]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[ud]:i.FUNC_REVERSE_SUBTRACT};zt[fd]=i.MIN,zt[dd]=i.MAX;let ce={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[yd]:i.DST_COLOR,[xd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,at,V,O,tt,ot,vt,Nt,Me,te){if(L===Pi){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),L!==ld){if(L!==m||te!==T){if((d!==es||x!==es)&&(i.blendEquation(i.FUNC_ADD),d=es,x=es),te)switch(L){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,R=null,A=null,E.set(0,0,0),C=0,m=L,T=te}return}tt=tt||at,ot=ot||V,vt=vt||O,(at!==d||tt!==x)&&(i.blendEquationSeparate(zt[at],zt[tt]),d=at,x=tt),(V!==v||O!==y||ot!==R||vt!==A)&&(i.blendFuncSeparate(ce[V],ce[O],ce[ot],ce[vt]),v=V,y=O,R=ot,A=vt),(Nt.equals(E)===!1||Me!==C)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Me),E.copy(Nt),C=Me),m=L,T=!1}function ue(L,at){L.side===Pn?X(i.CULL_FACE):ht(i.CULL_FACE);let V=L.side===Xe;at&&(V=!V),Ht(V),L.blending===ks&&L.transparent===!1?D(Pi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let O=L.stencilWrite;a.setTest(O),O&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Ft(L){L!==ad?(ht(i.CULL_FACE),L!==P&&(L===Hh?i.cullFace(i.BACK):L===cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),P=L}function At(L){L!==H&&(q&&i.lineWidth(L),H=L)}function fe(L,at,V){L?(ht(i.POLYGON_OFFSET_FILL),(z!==at||G!==V)&&(i.polygonOffset(at,V),z=at,G=V)):X(i.POLYGON_OFFSET_FILL)}function Ct(L){L?ht(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+$-1),rt!==L&&(i.activeTexture(L),rt=L)}function M(L,at,V){V===void 0&&(rt===null?V=i.TEXTURE0+$-1:V=rt);let O=lt[V];O===void 0&&(O={type:void 0,texture:void 0},lt[V]=O),(O.type!==L||O.texture!==at)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(L,at||xt[L]),O.type=L,O.texture=at)}function F(){let L=lt[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){ee.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function gt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Kt(L,at){let V=l.get(at);V===void 0&&(V=new WeakMap,l.set(at,V));let O=V.get(L);O===void 0&&(O=i.getUniformBlockIndex(at,L.name),V.set(L,O))}function Bt(L,at){let O=l.get(at).get(L);c.get(at)!==O&&(i.uniformBlockBinding(at,O,L.__bindingPointIndex),c.set(at,O))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,lt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,y=null,x=null,R=null,A=null,E=new Rt(0,0,0),C=0,T=!1,S=null,P=null,H=null,z=null,G=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:X,bindFramebuffer:ct,drawBuffers:wt,useProgram:Yt,setBlending:D,setMaterial:ue,setFlipSided:Ht,setCullFace:Ft,setLineWidth:At,setPolygonOffset:fe,setScissorTest:Ct,activeTexture:w,bindTexture:M,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:mt,texImage3D:It,updateUBOMapping:Kt,uniformBlockBinding:Bt,texStorage2D:Jt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:ie}}function zu(i,t,e,n){let s=$_(n);switch(e){case df:return i*t;case mf:return i*t;case gf:return i*t*2;case Nl:return i*t/s.components*s.byteLength;case Ul:return i*t/s.components*s.byteLength;case _f:return i*t*2/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case pf:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:case Rc:return Math.max(i,16)*Math.max(t,8)/4;case wc:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case Cc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bo:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xf:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kc:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $_(i){switch(i){case oi:case hf:return{byteLength:1,components:1};case Br:case uf:case Yr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case is:case Pl:case Dn:return{byteLength:4,components:1};case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function J_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):kr("canvas")}function _(w,M,F){let K=1,J=Ct(w);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor(K*J.width),Mt=Math.floor(K*J.height);u===void 0&&(u=g(Z,Mt));let ut=M?g(Z,Mt):u;return ut.width=Z,ut.height=Mt,ut.getContext("2d").drawImage(w,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Mt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,F,K,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=M;if(M===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),M===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){let Mt=J?ga:Qt.getTransfer(K);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=Mt===he?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(w,M){let F;return w?M===null||M===is||M===qs?F=i.DEPTH24_STENCIL8:M===Dn?F=i.DEPTH32F_STENCIL8:M===Br&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===is||M===qs?F=i.DEPTH_COMPONENT24:M===Dn?F=i.DEPTH_COMPONENT32F:M===Br&&(F=i.DEPTH_COMPONENT16),F}function R(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){let M=w.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function E(w){let M=w.target;M.removeEventListener("dispose",E),S(M)}function C(w){let M=n.get(w);if(M.__webglInit===void 0)return;let F=w.source,K=f.get(F);if(K){let J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(w),Object.keys(K).length===0&&f.delete(F)}n.remove(w)}function T(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let F=w.source,K=f.get(F);delete K[M.__cacheKey],o.memory.textures--}function S(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[K][J]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=w.textures;for(let K=0,J=F.length;K<J;K++){let Z=n.get(F[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(w)}let P=0;function H(){P=0}function z(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function G(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){let F=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function q(w,M){let F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function it(w,M){let F=n.get(w);if(w.version>0&&F.__version!==w.version){Y(F,w,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function W(w,M){let F=n.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}let rt={[ri]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},lt={[qe]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},St={[zd]:i.NEVER,[qd]:i.ALWAYS,[Hd]:i.LESS,[yf]:i.LEQUAL,[Vd]:i.EQUAL,[Xd]:i.GEQUAL,[Gd]:i.GREATER,[Wd]:i.NOTEQUAL};function Pt(w,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Dr||M.magFilter===Fs||M.magFilter===Hn||M.minFilter===sn||M.minFilter===Dr||M.minFilter===Fs||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,St[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==Fs&&M.minFilter!==Hn||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));let K=M.source,J=f.get(K);J===void 0&&(J={},f.set(K,J));let Z=G(M);if(Z!==w.__cacheKey){J[Z]===void 0&&(J[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Z].usedTimes++;let Mt=J[w.__cacheKey];Mt!==void 0&&(J[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(M)),w.__cacheKey=Z,w.__webglTexture=J[Z].texture}return F}function Y(w,M,F){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);let J=ee(w,M),Z=M.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+F);let Mt=n.get(Z);if(Z.version!==Mt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let ut=Qt.getPrimaries(Qt.workingColorSpace),pt=M.colorSpace===Ri?null:Qt.getPrimaries(M.colorSpace),Jt=M.colorSpace===Ri||ut===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let et=_(M.image,!1,s.maxTextureSize);et=fe(M,et);let mt=r.convert(M.format,M.colorSpace),It=r.convert(M.type),Lt=y(M.internalFormat,mt,It,M.colorSpace,M.isVideoTexture);Pt(K,M);let gt,Kt=M.mipmaps,Bt=M.isVideoTexture!==!0,ie=Mt.__version===void 0||J===!0,L=Z.dataReady,at=R(M,et);if(M.isDepthTexture)Lt=x(M.format===Ys,M.type),ie&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,mt,It,null));else if(M.isDataTexture)if(Kt.length>0){Bt&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Lt,Kt[0].width,Kt[0].height);for(let V=0,O=Kt.length;V<O;V++)gt=Kt[V],Bt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,It,gt.data);M.generateMipmaps=!1}else Bt?(ie&&e.texStorage2D(i.TEXTURE_2D,at,Lt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,mt,It,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,Kt[0].width,Kt[0].height,et.depth);for(let V=0,O=Kt.length;V<O;V++)if(gt=Kt[V],M.format!==vn)if(mt!==null)if(Bt){if(L)if(M.layerUpdates.size>0){let tt=zu(gt.width,gt.height,M.format,M.type);for(let ot of M.layerUpdates){let vt=gt.data.subarray(ot*tt/gt.data.BYTES_PER_ELEMENT,(ot+1)*tt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,gt.width,gt.height,1,mt,vt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,It,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,et.depth,0,mt,It,gt.data)}else{Bt&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Lt,Kt[0].width,Kt[0].height);for(let V=0,O=Kt.length;V<O;V++)gt=Kt[V],M.format!==vn?mt!==null?Bt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,It,gt.data)}else if(M.isDataArrayTexture)if(Bt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,et.width,et.height,et.depth),L)if(M.layerUpdates.size>0){let V=zu(et.width,et.height,M.format,M.type);for(let O of M.layerUpdates){let tt=et.data.subarray(O*V/et.data.BYTES_PER_ELEMENT,(O+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,et.width,et.height,1,mt,It,tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,mt,It,et.data);else if(M.isData3DTexture)Bt?(ie&&e.texStorage3D(i.TEXTURE_3D,at,Lt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,mt,It,et.data);else if(M.isFramebufferTexture){if(ie)if(Bt)e.texStorage2D(i.TEXTURE_2D,at,Lt,et.width,et.height);else{let V=et.width,O=et.height;for(let tt=0;tt<at;tt++)e.texImage2D(i.TEXTURE_2D,tt,Lt,V,O,0,mt,It,null),V>>=1,O>>=1}}else if(Kt.length>0){if(Bt&&ie){let V=Ct(Kt[0]);e.texStorage2D(i.TEXTURE_2D,at,Lt,V.width,V.height)}for(let V=0,O=Kt.length;V<O;V++)gt=Kt[V],Bt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,It,gt):e.texImage2D(i.TEXTURE_2D,V,Lt,mt,It,gt);M.generateMipmaps=!1}else if(Bt){if(ie){let V=Ct(et);e.texStorage2D(i.TEXTURE_2D,at,Lt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,It,et);m(M)&&d(K),Mt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function st(w,M,F){if(M.image.length!==6)return;let K=ee(w,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let Z=n.get(J);if(J.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+F);let Mt=Qt.getPrimaries(Qt.workingColorSpace),ut=M.colorSpace===Ri?null:Qt.getPrimaries(M.colorSpace),pt=M.colorSpace===Ri||Mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let O=0;O<6;O++)!Jt&&!et?mt[O]=_(M.image[O],!0,s.maxCubemapSize):mt[O]=et?M.image[O].image:M.image[O],mt[O]=fe(M,mt[O]);let It=mt[0],Lt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Kt=y(M.internalFormat,Lt,gt,M.colorSpace),Bt=M.isVideoTexture!==!0,ie=Z.__version===void 0||K===!0,L=J.dataReady,at=R(M,It);Pt(i.TEXTURE_CUBE_MAP,M);let V;if(Jt){Bt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Kt,It.width,It.height);for(let O=0;O<6;O++){V=mt[O].mipmaps;for(let tt=0;tt<V.length;tt++){let ot=V[tt];M.format!==vn?Lt!==null?Bt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt,0,0,ot.width,ot.height,Lt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt,Kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt,0,0,ot.width,ot.height,Lt,gt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt,Kt,ot.width,ot.height,0,Lt,gt,ot.data)}}}else{if(V=M.mipmaps,Bt&&ie){V.length>0&&at++;let O=Ct(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Kt,O.width,O.height)}for(let O=0;O<6;O++)if(et){Bt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,mt[O].width,mt[O].height,Lt,gt,mt[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Kt,mt[O].width,mt[O].height,0,Lt,gt,mt[O].data);for(let tt=0;tt<V.length;tt++){let vt=V[tt].image[O].image;Bt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt+1,0,0,vt.width,vt.height,Lt,gt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt+1,Kt,vt.width,vt.height,0,Lt,gt,vt.data)}}else{Bt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Lt,gt,mt[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Kt,Lt,gt,mt[O]);for(let tt=0;tt<V.length;tt++){let ot=V[tt];Bt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt+1,0,0,Lt,gt,ot.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,tt+1,Kt,Lt,gt,ot.image[O])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Z.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xt(w,M,F,K,J,Z){let Mt=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),pt=y(F.internalFormat,Mt,ut,F.colorSpace),Jt=n.get(M),et=n.get(F);if(et.__renderTarget=M,!Jt.__hasExternalTextures){let mt=Math.max(1,M.width>>Z),It=Math.max(1,M.height>>Z);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,pt,mt,It,M.depth,0,Mt,ut,null):e.texImage2D(J,Z,pt,mt,It,0,Mt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,et.__webglTexture,0,Ht(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,et.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=x(M.stencilBuffer,J),Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ht(M);Ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,w)}else{let K=M.textures;for(let J=0;J<K.length;J++){let Z=K[J],Mt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),pt=y(Z.internalFormat,Mt,ut,Z.colorSpace),Jt=Ht(M);F&&Ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,pt,M.width,M.height):Ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let J=K.__webglTexture,Z=Ht(M);if(M.depthTexture.format===zs)Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===Ys)Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ct(w){let M=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");X(M.__webglFramebuffer,w)}else if(F){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ht(M.__webglDepthbuffer[K],w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ht(M.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(w,M,F){let K=n.get(w);M!==void 0&&xt(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ct(w)}function Yt(w){let M=w.texture,F=n.get(w),K=n.get(M);w.addEventListener("dispose",E);let J=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let pt=0;pt<M.mipmaps.length;pt++)F.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else F.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)F.__webglFramebuffer[ut]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ut=0,pt=J.length;ut<pt;ut++){let Jt=n.get(J[ut]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ft(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){let pt=J[ut];F.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let Jt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=y(pt.internalFormat,Jt,et,pt.colorSpace,w.isXRRenderTarget===!0),It=Ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)xt(F.__webglFramebuffer[ut][pt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else xt(F.__webglFramebuffer[ut],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,pt=J.length;ut<pt;ut++){let Jt=J[ut],et=n.get(Jt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,Jt),xt(F.__webglFramebuffer,w,Jt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Jt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),Pt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)xt(F.__webglFramebuffer[pt],w,M,i.COLOR_ATTACHMENT0,ut,pt);else xt(F.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ut,0);m(M)&&d(ut),e.unbindTexture()}w.depthBuffer&&ct(w)}function zt(w){let M=w.textures;for(let F=0,K=M.length;F<K;F++){let J=M[F];if(m(J)){let Z=v(w),Mt=n.get(J).__webglTexture;e.bindTexture(Z,Mt),d(Z),e.unbindTexture()}}}let ce=[],D=[];function ue(w){if(w.samples>0){if(Ft(w)===!1){let M=w.textures,F=w.width,K=w.height,J=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(w),ut=M.length>1;if(ut)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Jt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,J,i.NEAREST),c===!0&&(ce.length=0,D.length=0,ce.push(i.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ce.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Jt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ht(w){return Math.min(s.maxSamples,w.samples)}function Ft(w){let M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function fe(w,M){let F=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Ye&&F!==Ri&&(Qt.getTransfer(F)===he?(K!==vn||J!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=W,this.rebindTextures=wt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ft}function j_(i,t){function e(n,s=Ri){let r,o=Qt.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return i.BYTE;if(n===uf)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Yr)return i.HALF_FLOAT;if(n===df)return i.ALPHA;if(n===pf)return i.RGB;if(n===vn)return i.RGBA;if(n===mf)return i.LUMINANCE;if(n===gf)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===_f)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===No||n===Uo||n===Oo||n===Fo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ac||n===Ec||n===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Ic||n===Pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Ic)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===qc||n===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xf||n===Zc||n===Kc||n===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ul=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ze=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`,fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends Di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,_=new fl,m=e.getContextAttributes(),d=null,v=null,y=[],x=[],R=new Ut,A=null,E=new Pe;E.viewport=new se;let C=new Pe;C.viewport=new se;let T=[E,C],S=new ul,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=y[Y];return st===void 0&&(st=new Or,y[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=y[Y];return st===void 0&&(st=new Or,y[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=y[Y];return st===void 0&&(st=new Or,y[Y]=st),st.getHandSpace()};function z(Y){let st=x.indexOf(Y.inputSource);if(st===-1)return;let xt=y[st];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||o),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<y.length;Y++){let st=x[Y];st!==null&&(x[Y]=null,y[Y].disconnect(st))}P=null,H=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ai(p.framebufferWidth,p.framebufferHeight,{format:vn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,xt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ys:zs,xt=m.stencil?qs:is);let X={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ai(f.textureWidth,f.textureHeight,{format:vn,type:oi,depthTexture:new Zo(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let st=0;st<Y.removed.length;st++){let xt=Y.removed[st],ht=x.indexOf(xt);ht>=0&&(x[ht]=null,y[ht].disconnect(xt))}for(let st=0;st<Y.added.length;st++){let xt=Y.added[st],ht=x.indexOf(xt);if(ht===-1){for(let ct=0;ct<y.length;ct++)if(ct>=x.length){x.push(xt),ht=ct;break}else if(x[ct]===null){x[ct]=xt,ht=ct;break}if(ht===-1)break}let X=y[ht];X&&X.connect(xt)}}let q=new I,it=new I;function W(Y,st,xt){q.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(xt.matrixWorld);let ht=q.distanceTo(it),X=st.projectionMatrix.elements,ct=xt.projectionMatrix.elements,wt=X[14]/(X[10]-1),Yt=X[14]/(X[10]+1),zt=(X[9]+1)/X[5],ce=(X[9]-1)/X[5],D=(X[8]-1)/X[0],ue=(ct[8]+1)/ct[0],Ht=wt*D,Ft=wt*ue,At=ht/(-D+ue),fe=At*-D;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),X[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Ct=wt+At,w=Yt+At,M=Ht-fe,F=Ft+(ht-fe),K=zt*Yt/w*Ct,J=ce*Yt/w*Ct;Y.projectionMatrix.makePerspective(M,F,K,J,Ct,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,xt=Y.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),S.near=C.near=E.near=st,S.far=C.far=E.far=xt,(P!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),E.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|C.layers.mask;let ht=Y.parent,X=S.cameras;rt(S,ht);for(let ct=0;ct<X.length;ct++)rt(X[ct],ht);X.length===2?W(S,E,C):S.projectionMatrix.copy(E.projectionMatrix),lt(Y,S,ht)};function lt(Y,st,xt){xt===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let St=null;function Pt(Y,st){if(h=st.getViewerPose(l||o),g=st,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ht=!1;xt.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let ct=0;ct<xt.length;ct++){let wt=xt[ct],Yt=null;if(p!==null)Yt=p.getViewport(wt);else{let ce=u.getViewSubImage(f,wt);Yt=ce.viewport,ct===0&&(t.setRenderTargetTextures(v,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(v))}let zt=T[ct];zt===void 0&&(zt=new Pe,zt.layers.enable(ct),zt.viewport=new se,T[ct]=zt),zt.matrix.fromArray(wt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(wt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),ct===0&&(S.matrix.copy(zt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(zt)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let ct=u.getDepthInformation(xt[0]);ct&&ct.isValid&&ct.texture&&_.init(t,ct,s.renderState)}}for(let xt=0;xt<y.length;xt++){let ht=x[xt],X=y[xt];ht!==null&&X!==void 0&&X.update(ht,st,l||o)}St&&St(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let ee=new wf;ee.setAnimationLoop(Pt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Qi=new Un,nx=new Dt;function ix(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Tf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Qi.copy(x),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(Qi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(v,R);let A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let y=u();v.__bindingPointIndex=y;let x=i.createBuffer(),R=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,E=x.length;A<E;A++){let C=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,S=C.length;T<S;T++){let P=C[T];if(p(P,A,T,R)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],G=0;for(let $=0;$<z.length;$++){let q=z[$],it=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,x,R){let A=v.value,E=y+"_"+x;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{let C=R[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){let y=v.uniforms,x=0,R=16;for(let E=0,C=y.length;E<C;E++){let T=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,P=T.length;S<P;S++){let H=T[S],z=Array.isArray(H.value)?H.value:[H.value];for(let G=0,$=z.length;G<$;G++){let q=z[G],it=_(q),W=x%R,rt=W%it.boundary,lt=W+rt;x+=rt,lt!==0&&R-lt<it.storage&&(x+=R-lt),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=it.storage}}}let A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ko=class{constructor(t={}){let{canvas:e=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Li,this.toneMappingExposure=1;let x=this,R=!1,A=0,E=0,C=null,T=-1,S=null,P=new se,H=new se,z=null,G=new Rt(0),$=0,q=e.width,it=e.height,W=1,rt=null,lt=null,St=new se(0,0,q,it),Pt=new se(0,0,q,it),ee=!1,Y=new zr,st=!1,xt=!1,ht=new Dt,X=new Dt,ct=new I,wt=new se,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function ce(){return C===null?W:1}let D=n;function ue(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){let N="webgl2";if(D=ue(N,b),D===null)throw ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ht,Ft,At,fe,Ct,w,M,F,K,J,Z,Mt,ut,pt,Jt,et,mt,It,Lt,gt,Kt,Bt,ie,L;function at(){Ht=new yg(D),Ht.init(),Bt=new j_(D,Ht),Ft=new pg(D,Ht,t,Bt),At=new K_(D,Ht),Ft.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),fe=new bg(D),Ct=new O_,w=new J_(D,Ht,At,Ct,Ft,Bt,fe),M=new gg(x),F=new vg(x),K=new Ip(D),ie=new fg(D,K),J=new Mg(D,K,fe,ie),Z=new wg(D,J,K,fe),Lt=new Tg(D,Ft,w),et=new mg(Ct),Mt=new U_(x,M,F,Ht,Ft,ie,et),ut=new ix(x,Ct),pt=new B_,Jt=new W_(Ht),It=new ug(x,M,F,At,Z,p,c),mt=new Y_(x,Z,Ft),L=new sx(D,fe,Ft,At),gt=new dg(D,Ht,fe),Kt=new Sg(D,Ht,fe),fe.programs=Mt.programs,x.capabilities=Ft,x.extensions=Ht,x.properties=Ct,x.renderLists=pt,x.shadowMap=mt,x.state=At,x.info=fe}at();let V=new dl(x,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(q,it,!1))},this.getSize=function(b){return b.set(q,it)},this.setSize=function(b,N,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,it=N,e.width=Math.floor(b*W),e.height=Math.floor(N*W),k===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(q*W,it*W).floor()},this.setDrawingBufferSize=function(b,N,k){q=b,it=N,W=k,e.width=Math.floor(b*k),e.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,N,k,B){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,N,k,B),At.viewport(P.copy(St).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Pt)},this.setScissor=function(b,N,k,B){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,N,k,B),At.scissor(H.copy(Pt).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){At.setScissorTest(ee=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,N=!0,k=!0){let B=0;if(b){let U=!1;if(C!==null){let nt=C.texture.format;U=nt===Fl||nt===Ol||nt===Ul}if(U){let nt=C.texture.type,dt=nt===oi||nt===is||nt===Br||nt===qs||nt===Ll||nt===Dl,yt=It.getClearColor(),bt=It.getClearAlpha(),Vt=yt.r,Xt=yt.g,Tt=yt.b;dt?(g[0]=Vt,g[1]=Xt,g[2]=Tt,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Vt,_[1]=Xt,_[2]=Tt,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT),k&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),pt.dispose(),Jt.dispose(),Ct.dispose(),M.dispose(),F.dispose(),Z.dispose(),ie.dispose(),L.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Wn),V.removeEventListener("sessionend",gs),en.stop()};function O(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=fe.autoReset,N=mt.enabled,k=mt.autoUpdate,B=mt.needsUpdate,U=mt.type;at(),fe.autoReset=b,mt.enabled=N,mt.autoUpdate=k,mt.needsUpdate=B,mt.type=U}function ot(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){let N=b.target;N.removeEventListener("dispose",vt),Nt(N)}function Nt(b){Me(b),Ct.remove(b)}function Me(b){let N=Ct.get(b).programs;N!==void 0&&(N.forEach(function(k){Mt.releaseProgram(k)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,B,U,nt){N===null&&(N=Yt);let dt=U.isMesh&&U.matrixWorld.determinant()<0,yt=Yi(b,N,k,B,U);At.setMaterial(B,dt);let bt=k.index,Vt=1;if(B.wireframe===!0){if(bt=J.getWireframeAttribute(k),bt===void 0)return;Vt=2}let Xt=k.drawRange,Tt=k.attributes.position,ne=Xt.start*Vt,de=(Xt.start+Xt.count)*Vt;nt!==null&&(ne=Math.max(ne,nt.start*Vt),de=Math.min(de,(nt.start+nt.count)*Vt)),bt!==null?(ne=Math.max(ne,0),de=Math.min(de,bt.count)):Tt!=null&&(ne=Math.max(ne,0),de=Math.min(de,Tt.count));let ge=de-ne;if(ge<0||ge===1/0)return;ie.setup(U,B,yt,k,bt);let nn,oe=gt;if(bt!==null&&(nn=K.get(bt),oe=Kt,oe.setIndex(nn)),U.isMesh)B.wireframe===!0?(At.setLineWidth(B.wireframeLinewidth*ce()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(U.isLine){let Et=B.linewidth;Et===void 0&&(Et=1),At.setLineWidth(Et*ce()),U.isLineSegments?oe.setMode(D.LINES):U.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else U.isPoints?oe.setMode(D.POINTS):U.isSprite&&oe.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)oe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))oe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Et=U._multiDrawStarts,Yn=U._multiDrawCounts,ae=U._multiDrawCount,En=bt?K.get(bt).bytesPerElement:1,_s=Ct.get(B).currentProgram.getUniforms();for(let cn=0;cn<ae;cn++)_s.setValue(D,"_gl_DrawID",cn),oe.render(Et[cn]/En,Yn[cn])}else if(U.isInstancedMesh)oe.renderInstances(ne,ge,U.count);else if(k.isInstancedBufferGeometry){let Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Yn=Math.min(k.instanceCount,Et);oe.renderInstances(ne,ge,Yn)}else oe.render(ne,ge)};function te(b,N,k){b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,Te(b,N,k),b.side=Vn,b.needsUpdate=!0,Te(b,N,k),b.side=Pn):Te(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),d=Jt.get(k),d.init(N),y.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),b!==k&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let B=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let yt=nt[dt];te(yt,k,U),B.add(yt)}else te(nt,k,U),B.add(nt)}),y.pop(),d=null,B},this.compileAsync=function(b,N,k=null){let B=this.compile(b,N,k);return new Promise(U=>{function nt(){if(B.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&B.delete(dt)}),B.size===0){U(b);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ke=null;function tn(b){Ke&&Ke(b)}function Wn(){en.stop()}function gs(){en.start()}let en=new wf;en.setAnimationLoop(tn),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(b){Ke=b,V.setAnimationLoop(b),b===null?en.stop():en.start()},V.addEventListener("sessionstart",Wn),V.addEventListener("sessionend",gs),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,C),d=Jt.get(b,y.length),d.init(N),y.push(d),X.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(X),xt=this.localClippingEnabled,st=et.init(this.clippingPlanes,xt),m=pt.get(b,v.length),m.init(),v.push(m),V.enabled===!0&&V.isPresenting===!0){let nt=x.xr.getDepthSensingMesh();nt!==null&&xi(nt,N,-1/0,x.sortObjects)}xi(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,lt),zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,zt&&It.addToRenderList(m,b),this.info.render.frame++,st===!0&&et.beginShadows();let k=d.state.shadowsArray;mt.render(k,b,N),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){let nt=N.cameras;if(U.length>0)for(let dt=0,yt=nt.length;dt<yt;dt++){let bt=nt[dt];Xn(B,U,b,bt)}zt&&It.render(b);for(let dt=0,yt=nt.length;dt<yt;dt++){let bt=nt[dt];Xi(m,b,bt,bt.viewport)}}else U.length>0&&Xn(B,U,b,N),zt&&It.render(b),Xi(m,b,N);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,N),ie.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],st===!0&&et.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xi(b,N,k,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){B&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);let dt=Z.update(b),yt=b.material;yt.visible&&m.push(b,dt,yt,k,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let dt=Z.update(b),yt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),wt.copy(dt.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(X)),Array.isArray(yt)){let bt=dt.groups;for(let Vt=0,Xt=bt.length;Vt<Xt;Vt++){let Tt=bt[Vt],ne=yt[Tt.materialIndex];ne&&ne.visible&&m.push(b,dt,ne,k,wt.z,Tt)}}else yt.visible&&m.push(b,dt,yt,k,wt.z,null)}}let nt=b.children;for(let dt=0,yt=nt.length;dt<yt;dt++)xi(nt[dt],N,k,B)}function Xi(b,N,k,B){let U=b.opaque,nt=b.transmissive,dt=b.transparent;d.setupLightsView(k),st===!0&&et.setGlobalState(x.clippingPlanes,k),B&&At.viewport(P.copy(B)),U.length>0&&Bn(U,N,k),nt.length>0&&Bn(nt,N,k),dt.length>0&&Bn(dt,N,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Xn(b,N,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new ai(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Yr:oi,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let nt=d.state.transmissionRenderTarget[B.id],dt=B.viewport||P;nt.setSize(dt.z,dt.w);let yt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(G),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),zt&&It.render(k);let bt=x.toneMapping;x.toneMapping=Li;let Vt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),st===!0&&et.setGlobalState(x.clippingPlanes,B),Bn(b,k,B),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Tt=0,ne=N.length;Tt<ne;Tt++){let de=N[Tt],ge=de.object,nn=de.geometry,oe=de.material,Et=de.group;if(oe.side===Pn&&ge.layers.test(B.layers)){let Yn=oe.side;oe.side=Xe,oe.needsUpdate=!0,Ue(ge,k,B,nn,oe,Et),oe.side=Yn,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}x.setRenderTarget(yt),x.setClearColor(G,$),Vt!==void 0&&(B.viewport=Vt),x.toneMapping=bt}function Bn(b,N,k){let B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,nt=b.length;U<nt;U++){let dt=b[U],yt=dt.object,bt=dt.geometry,Vt=B===null?dt.material:B,Xt=dt.group;yt.layers.test(k.layers)&&Ue(yt,N,k,bt,Vt,Xt)}}function Ue(b,N,k,B,U,nt){b.onBeforeRender(x,N,k,B,U,nt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,N,k,B,b,nt),U.transparent===!0&&U.side===Pn&&U.forceSinglePass===!1?(U.side=Xe,U.needsUpdate=!0,x.renderBufferDirect(k,N,B,U,b,nt),U.side=Vn,U.needsUpdate=!0,x.renderBufferDirect(k,N,B,U,b,nt),U.side=Pn):x.renderBufferDirect(k,N,B,U,b,nt),b.onAfterRender(x,N,k,B,U,nt)}function Te(b,N,k){N.isScene!==!0&&(N=Yt);let B=Ct.get(b),U=d.state.lights,nt=d.state.shadowsArray,dt=U.state.version,yt=Mt.getParameters(b,U.state,nt,N,k),bt=Mt.getProgramCacheKey(yt),Vt=B.programs;B.environment=b.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(b.isMeshStandardMaterial?F:M).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",vt),Vt=new Map,B.programs=Vt);let Xt=Vt.get(bt);if(Xt!==void 0){if(B.currentProgram===Xt&&B.lightsStateVersion===dt)return qn(b,yt),Xt}else yt.uniforms=Mt.getUniforms(b),b.onBeforeCompile(yt,x),Xt=Mt.acquireProgram(yt,bt),Vt.set(bt,Xt),B.uniforms=yt.uniforms;let Tt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=et.uniform),qn(b,yt),B.needsLights=vi(b),B.lightsStateVersion=dt,B.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Xt,B.uniformsList=null,Xt}function qi(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Vs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function qn(b,N){let k=Ct.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Yi(b,N,k,B,U){N.isScene!==!0&&(N=Yt),w.resetTextureUnits();let nt=N.fog,dt=B.isMeshStandardMaterial?N.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ye,bt=(B.isMeshStandardMaterial?F:M).get(B.envMap||dt),Vt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!k.morphAttributes.position,ne=!!k.morphAttributes.normal,de=!!k.morphAttributes.color,ge=Li;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=x.toneMapping);let nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=nn!==void 0?nn.length:0,Et=Ct.get(B),Yn=d.state.lights;if(st===!0&&(xt===!0||b!==S)){let _n=b===S&&B.id===T;et.setState(B,b,_n)}let ae=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Yn.state.version||Et.outputColorSpace!==yt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==bt||B.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Vt||Et.vertexTangents!==Xt||Et.morphTargets!==Tt||Et.morphNormals!==ne||Et.morphColors!==de||Et.toneMapping!==ge||Et.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Et.__version=B.version);let En=Et.currentProgram;ae===!0&&(En=Te(B,N,U));let _s=!1,cn=!1,xr=!1,_e=En.getUniforms(),kn=Et.uniforms;if(At.useProgram(En.program)&&(_s=!0,cn=!0,xr=!0),B.id!==T&&(T=B.id,cn=!0),_s||S!==b){At.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),up(ht),fp(ht),_e.setValue(D,"projectionMatrix",ht)):_e.setValue(D,"projectionMatrix",b.projectionMatrix),_e.setValue(D,"viewMatrix",b.matrixWorldInverse);let yi=_e.map.cameraPosition;yi!==void 0&&yi.setValue(D,ct.setFromMatrixPosition(b.matrixWorld)),Ft.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_e.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,cn=!0,xr=!0)}if(U.isSkinnedMesh){_e.setOptional(D,U,"bindMatrix"),_e.setOptional(D,U,"bindMatrixInverse");let _n=U.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),_e.setValue(D,"boneTexture",_n.boneTexture,w))}U.isBatchedMesh&&(_e.setOptional(D,U,"batchingTexture"),_e.setValue(D,"batchingTexture",U._matricesTexture,w),_e.setOptional(D,U,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",U._indirectTexture,w),_e.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",U._colorsTexture,w));let vr=k.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Lt.update(U,k,En),(cn||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,_e.setValue(D,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(kn.envMap.value=bt,kn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(kn.envMapIntensity.value=N.environmentIntensity),cn&&(_e.setValue(D,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&_r(kn,xr),nt&&B.fog===!0&&ut.refreshFogUniforms(kn,nt),ut.refreshMaterialUniforms(kn,B,W,it,d.state.transmissionRenderTarget[b.id]),Vs.upload(D,qi(Et),kn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vs.upload(D,qi(Et),kn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_e.setValue(D,"center",U.center),_e.setValue(D,"modelViewMatrix",U.modelViewMatrix),_e.setValue(D,"normalMatrix",U.normalMatrix),_e.setValue(D,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let _n=B.uniformsGroups;for(let yi=0,Mi=_n.length;yi<Mi;yi++){let zh=_n[yi];L.update(zh,En),L.bind(zh,En)}}return En}function _r(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function vi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,k){Ct.get(b.texture).__webglTexture=N,Ct.get(b.depthTexture).__webglTexture=k;let B=Ct.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let k=Ct.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,k=0){C=b,A=N,E=k;let B=!0,U=null,nt=!1,dt=!1;if(b){let bt=Ct.get(b);if(bt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(bt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(bt.__hasExternalTextures)w.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Tt=b.depthTexture;if(bt.__boundDepthTexture!==Tt){if(Tt!==null&&Ct.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(dt=!0);let Xt=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?U=Xt[N][k]:U=Xt[N],nt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?U=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[k]:U=Xt,P.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else P.copy(St).multiplyScalar(W).floor(),H.copy(Pt).multiplyScalar(W).floor(),z=ee;if(At.bindFramebuffer(D.FRAMEBUFFER,U)&&B&&At.drawBuffers(b,U),At.viewport(P),At.scissor(H),At.setScissorTest(z),nt){let bt=Ct.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,k)}else if(dt){let bt=Ct.get(b.texture),Vt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Vt)}T=-1},this.readRenderTargetPixels=function(b,N,k,B,U,nt,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){At.bindFramebuffer(D.FRAMEBUFFER,yt);try{let bt=b.texture,Vt=bt.format,Xt=bt.type;if(!Ft.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&k>=0&&k<=b.height-U&&D.readPixels(N,k,B,U,Bt.convert(Vt),Bt.convert(Xt),nt)}finally{let bt=C!==null?Ct.get(C).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,B,U,nt,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){let bt=b.texture,Vt=bt.format,Xt=bt.type;if(!Ft.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-B&&k>=0&&k<=b.height-U){At.bindFramebuffer(D.FRAMEBUFFER,yt);let Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(N,k,B,U,Bt.convert(Vt),Bt.convert(Xt),0);let ne=C!==null?Ct.get(C).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,ne);let de=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hp(D,de,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Tt),D.deleteSync(de),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,k=0){b.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let B=Math.pow(2,-k),U=Math.floor(b.image.width*B),nt=Math.floor(b.image.height*B),dt=N!==null?N.x:0,yt=N!==null?N.y:0;w.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,dt,yt,U,nt),At.unbindTexture()},this.copyTextureToTexture=function(b,N,k=null,B=null,U=0){b.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let nt,dt,yt,bt,Vt,Xt,Tt,ne,de,ge=b.isCompressedTexture?b.mipmaps[U]:b.image;k!==null?(nt=k.max.x-k.min.x,dt=k.max.y-k.min.y,yt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Vt=k.min.y,Xt=k.isBox3?k.min.z:0):(nt=ge.width,dt=ge.height,yt=ge.depth||1,bt=0,Vt=0,Xt=0),B!==null?(Tt=B.x,ne=B.y,de=B.z):(Tt=0,ne=0,de=0);let nn=Bt.convert(N.format),oe=Bt.convert(N.type),Et;N.isData3DTexture?(w.setTexture3D(N,0),Et=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Et=D.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Yn=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),En=D.getParameter(D.UNPACK_SKIP_PIXELS),_s=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let xr=b.isDataArrayTexture||b.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let kn=Ct.get(b),vr=Ct.get(N),_n=Ct.get(kn.__renderTarget),yi=Ct.get(vr.__renderTarget);At.bindFramebuffer(D.READ_FRAMEBUFFER,_n.__webglFramebuffer),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<yt;Mi++)xr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,U,Xt+Mi),b.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,U,de+Mi),D.blitFramebuffer(bt,Vt,nt,dt,Tt,ne,nt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(Et,U,Tt,ne,de+Mi,bt,Vt,nt,dt):D.copyTexSubImage2D(Et,U,Tt,ne,de+Mi,bt,Vt,nt,dt);At.bindFramebuffer(D.READ_FRAMEBUFFER,null),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Et,U,Tt,ne,de,nt,dt,yt,nn,oe,ge.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,U,Tt,ne,de,nt,dt,yt,nn,ge.data):D.texSubImage3D(Et,U,Tt,ne,de,nt,dt,yt,nn,oe,ge):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Tt,ne,nt,dt,nn,oe,ge.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Tt,ne,ge.width,ge.height,nn,ge.data):D.texSubImage2D(D.TEXTURE_2D,U,Tt,ne,nt,dt,nn,oe,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,Yn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,En),D.pixelStorei(D.UNPACK_SKIP_ROWS,_s),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),U===0&&N.generateMipmaps&&D.generateMipmap(Et),At.unbindTexture()},this.copyTextureToTexture3D=function(b,N,k=null,B=null,U=0){return b.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,k,B,U)},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},$o=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hr=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},er=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new I,rs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vr=class extends je{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ls,Tr=new I,Ds=new I,Ns=new I,Us=new Ut,wr=new Ut,If=new Dt,To=new I,Ar=new I,wo=new I,Hu=new Ut,cc=new Ut,Vu=new Ut,Jo=class extends ye{constructor(t=new Vr){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new er(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new rs(n,3,0,!1)),Ls.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ao(To.set(-.5,-.5,0),Ns,o,Ds,s,r),Ao(Ar.set(.5,-.5,0),Ns,o,Ds,s,r),Ao(wo.set(.5,.5,0),Ns,o,Ds,s,r),Hu.set(0,0),cc.set(1,0),Vu.set(1,1);let a=t.ray.intersectTriangle(To,Ar,wo,!1,Tr);if(a===null&&(Ao(Ar.set(-.5,.5,0),Ns,o,Ds,s,r),cc.set(0,1),a=t.ray.intersectTriangle(To,wo,Ar,!1,Tr),a===null))return;let c=t.ray.origin.distanceTo(Tr);c<t.near||c>t.far||e.push({distance:c,point:Tr.clone(),uv:Ci.getInterpolation(Tr,To,Ar,wo,Hu,cc,Vu,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ao(i,t,e,n,s,r){Us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*Us.x-s*Us.y,wr.y=s*Us.x+r*Us.y):wr.copy(Us),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(If)}var Gu=new I,Wu=new se,Xu=new se,rx=new I,qu=new Dt,Eo=new I,lc=new fn,Yu=new Dt,hc=new Js,jo=class extends xe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lc.copy(this.boundingSphere),lc.applyMatrix4(s),t.ray.intersectsSphere(lc)!==!1&&(Yu.copy(s).invert(),hc.copy(t.ray).applyMatrix4(Yu),!(this.boundingBox!==null&&hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,hc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Wu.fromBufferAttribute(s.attributes.skinIndex,t),Xu.fromBufferAttribute(s.attributes.skinWeight,t),Gu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Xu.getComponent(r);if(o!==0){let a=Wu.getComponent(r);qu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(rx.copy(Gu).applyMatrix4(qu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qo=class extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,h=qe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zu=new Dt,ox=new Dt,ta=class i{constructor(t=[],e=[]){this.uuid=Nn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:ox;Zu.multiplyMatrices(a,e[r]),Zu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Qo(e,t,t,vn,Dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gr),this.bones.push(o),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},os=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new Dt,Ku=new Dt,Ro=[],$u=new rn,ax=new Dt,Er=new xe,Rr=new fn,as=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ax)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),$u.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Rr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Ku.multiplyMatrices(n,Os),Er.matrixWorld=Ku,Er.raycast(t,Ro);for(let o=0,a=Ro.length;o<a;o++){let c=Ro[o];c.instanceId=r,c.object=this,e.push(c)}Ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(s*this.count),s,this.count,Nl,Dn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wr=class extends je{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ea=new I,na=new I,Ju=new Dt,Cr=new Js,Co=new fn,uc=new I,ju=new I,nr=class extends ye{constructor(t=new Ee,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ea.fromBufferAttribute(e,s-1),na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ea.distanceTo(na);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Ju.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let d=h.getX(_),v=h.getX(_+1),y=Io(this,t,Cr,c,d,v);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),d=Io(this,t,Cr,c,_,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let d=Io(this,t,Cr,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){let _=Io(this,t,Cr,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Io(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ea.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),e.distanceSqToSegment(ea,na,uc,ju)>n)return;uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:ju.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Qu=new I,tf=new I,ia=class extends nr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qu.fromBufferAttribute(e,s),tf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qu.distanceTo(tf);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sa=class extends nr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ni=class extends je{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ef=new Dt,pl=new Js,Po=new fn,Lo=new I,cs=class extends ye{constructor(t=new Ee,e=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;ef.copy(s).invert(),pl.copy(t.ray).applyMatrix4(ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=l.getX(g);Lo.fromBufferAttribute(u,m),nf(Lo,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Lo.fromBufferAttribute(u,g),nf(Lo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nf(i,t,e,n,s,r,o){let a=pl.distanceSqToPoint(i);if(a<e){let c=new I;pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ui=class extends Fe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ml=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new I,x=new I,R=new I;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],x),p(e[A+2],R),c(y,x,R,v)}function c(v,y,x,R){let A=R+1,E=[];for(let C=0;C<=A;C++){E[C]=[];let T=v.clone().lerp(x,C/A),S=y.clone().lerp(x,C/A),P=A-C;for(let H=0;H<=P;H++)H===0&&C===A?E[C][H]=T:E[C][H]=T.clone().lerp(S,H/P)}for(let C=0;C<A;C++)for(let T=0;T<2*(A-C)-1;T++){let S=Math.floor(T/2);T%2===0?(f(E[C][S+1]),f(E[C+1][S]),f(E[C][S])):(f(E[C][S+1]),f(E[C+1][S+1]),f(E[C+1][S]))}}function l(v){let y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let v=new I;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let x=m(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],R=o[v+4],A=Math.max(y,x,R),E=Math.min(y,x,R);A>.9&&E<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let v=new I,y=new I,x=new I,R=new I,A=new Ut,E=new Ut,C=new Ut;for(let T=0,S=0;T<r.length;T+=9,S+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),A.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),R.copy(v).add(y).add(x).divideScalar(3);let P=m(R);_(A,S+0,v,P),_(E,S+2,y,P),_(C,S+4,x,P)}}function _(v,y,x,R){R<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ra=class i extends ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Be=class extends je{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dn=class extends Be{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var oa=class extends je{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Do(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lx(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function sf(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Pf(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gl=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qh:r=t,a=2*e-n;break;case Yh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:o=t,c=2*n-e;break;case Yh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let R=0;R!==a;++R)r[R]=d*o[h+R]+v*o[l+R]+y*o[c+R]+x*o[u+R];return r}},_l=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},xl=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Ks:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&cx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ks;var Fi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Zs;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Mn{};aa.prototype.ValueTypeName="color";var ci=class extends Mn{};ci.prototype.ValueTypeName="number";var vl=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)un.slerpFlat(r,0,o,l-a,o,l,c);return r}},li=class extends Mn{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};li.prototype.ValueTypeName="quaternion";li.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Zs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Mn{};hi.prototype.ValueTypeName="vector";var ca=class{constructor(t="",e=-1,n=[],s=Od){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ux(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=lx(c);c=sf(c,1,h),l=sf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ci(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,_){if(p.length!==0){let m=[],d=[];Pf(p,m,d,g),m.length!==0&&_.push(new u(f,m,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(let _ in p){let m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){let y=f[g];m.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new ci(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{let p=".bones["+e[u].name+"]";n(hi,p+".position",f,"pos",s),n(li,p+".quaternion",f,"rot",s),n(hi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return hi;case"color":return aa;case"quaternion":return li;case"bool":case"boolean":return Fi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ux(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=hx(i.type);if(i.times===void 0){let e=[],n=[];Pf(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}var Ii={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},yl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},fx=new yl,ui=class{constructor(t){this.manager=t!==void 0?t:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},Ml=class extends Error{constructor(t,e){super(t),this.response=e}},Xr=class extends ui{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ii.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:n,onError:s});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Qn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,_=0,m=new ReadableStream({start(d){v();function v(){u.read().then(({done:y,value:x})=>{if(y)d.close();else{_+=x.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,E=h.length;A<E;A++){let C=h[A];C.onProgress&&C.onProgress(R)}d.enqueue(x),v()}},y=>{d.error(y)})}}});return new Response(m)}else throw new Ml(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ii.add(t,l);let h=Qn[t];delete Qn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Qn[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Sl=class extends ui{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ii.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=kr("img");function c(){h(),Ii.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var la=class extends ui{constructor(t){super(t)}load(t,e,n,s){let r=new Fe,o=new Sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ir=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ha=class extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fc=new Dt,rf=new I,of=new I,qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(rf),of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(of),e.updateMatrixWorld(),fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bl=class extends qr{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=$s*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ua=class extends ir{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},af=new Dt,Ir=new I,dc=new I,Tl=class extends qr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),dc.copy(n.position),dc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dc),n.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}},fa=class extends ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wl=class extends qr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ki=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var da=class extends ui{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ii.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ii.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Ii.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ii.add(t,c),r.manager.itemStart(t)}};var Vl="\\[\\]\\.:\\/",dx=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",px="[^"+Vl.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",Gl),gx=/(WCOD+)?/.source.replace("WCOD",px),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),vx=new RegExp("^"+mx+gx+_x+xx+"$"),yx=["material","materials","bones","map"],Al=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(t){let e=vx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Al;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Wl(i,t){if(t===vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Zr||t===ma){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===Zr)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var xa=class extends ui{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Jl(e)}),this.register(function(e){return new jl(e)}),this.register(function(e){return new ah(e)}),this.register(function(e){return new ch(e)}),this.register(function(e){return new lh(e)}),this.register(function(e){return new th(e)}),this.register(function(e){return new eh(e)}),this.register(function(e){return new nh(e)}),this.register(function(e){return new ih(e)}),this.register(function(e){return new $l(e)}),this.register(function(e){return new sh(e)}),this.register(function(e){return new Ql(e)}),this.register(function(e){return new oh(e)}),this.register(function(e){return new rh(e)}),this.register(function(e){return new Zl(e)}),this.register(function(e){return new hh(e)}),this.register(function(e){return new uh(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ki.extractUrlBase(t);o=ki.resolveURL(l,this.path)}else o=ki.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Xr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ff){try{o[jt.KHR_BINARY_GLTF]=new fh(t)}catch(u){s&&s(u);return}r=JSON.parse(o[jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new vh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case jt.KHR_MATERIALS_UNLIT:o[u]=new Kl;break;case jt.KHR_DRACO_MESH_COMPRESSION:o[u]=new dh(r,this.dracoLoader);break;case jt.KHR_TEXTURE_TRANSFORM:o[u]=new ph;break;case jt.KHR_MESH_QUANTIZATION:o[u]=new mh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function Mx(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}var jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zl=class{constructor(t){this.parser=t,this.name=jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new Rt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ye);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fa(h),l.distance=u;break;case"spot":l=new ua(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},Kl=class{constructor(){this.name=jt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(t,e,n){let s=[];t.color=new Rt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ye),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Se))}return Promise.all(s)}},$l=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Jl=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(a,a)}return Promise.all(r)}},jl=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ql=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},th=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Rt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ye)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Se)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},eh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},nh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Rt().setRGB(a[0],a[1],a[2],Ye),Promise.all(r)}},ih=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},sh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new Rt().setRGB(a[0],a[1],a[2],Ye),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Se)),Promise.all(r)}},rh=class{constructor(t){this.parser=t,this.name=jt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},oh=class{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ah=class{constructor(t){this.parser=t,this.name=jt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},ch=class{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},lh=class{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},hh=class{constructor(t){this.name=jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},uh=class{constructor(t){this.name=jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let _=new Dt,m=new I,d=new un,v=new I(1,1,1),y=new as(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,d,v));for(let x in c)if(x==="_COLOR_0"){let R=c[x];y.instanceColor=new os(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ye.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Ff="glTF",Kr=12,Df={JSON:1313821514,BIN:5130562},fh=class{constructor(t){this.name=jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ff)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Kr,r=new DataView(t,Kr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Df.JSON){let l=new Uint8Array(t,Kr+o,a);this.content=n.decode(l)}else if(c===Df.BIN){let l=Kr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},dh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=_h[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=_h[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],p=or[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,Ye,f)})})}},ph=class{constructor(){this.name=jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},mh=class{constructor(){this.name=jt.KHR_MESH_QUANTIZATION}},va=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,p=f*u,g=t*l,_=g-l,m=-2*p+3*f,d=p-f,v=1-m,y=d-f+u;for(let x=0;x!==a;x++){let R=o[_+x+a],A=o[_+x+c]*h,E=o[g+x+a],C=o[g+x]*h;r[x]=v*R+y*A+m*E+d*C}return r}},Sx=new un,gh=class extends va{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return Sx.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:qe,9729:sn,9984:Il,9985:Dr,9986:Fs,9987:Hn},Uf={33071:ni,33648:Fr,10497:ri},Xl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bx={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Zs},ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Be({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),i.DefaultMaterial}function ls(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function wx(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ax(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ex(i){let t,e=i.extensions&&i.extensions[jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Yl(e.attributes):t=i.indices+":"+Yl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Yl(i.targets[n]);return t}function Yl(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function xh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Cx=new Dt,vh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Mx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new la(this.options.manager):this.textureLoader=new da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ls(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[jt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ki.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=Xl[s.type],a=or[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new me(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Xl[s.type],l=or[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(p&&p!==u){let d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,y=e.cache.get(v);y||(_=new l(a,d*p,s.count*p/h),y=new er(_,p/h),e.cache.add(v,y)),m=new rs(y,c,f%p/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new me(_,c,g);if(s.sparse!==void 0){let d=Xl.SCALAR,v=or[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new v(o[1],y,s.sparse.count*d),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new me(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=R.length;E<C;E++){let T=R[E];if(m.setX(T,A[E*c]),c>=2&&m.setY(T,A[E*c+1]),c>=3&&m.setZ(T,A[E*c+2]),c>=4&&m.setW(T,A[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Nf[f.magFilter]||sn,h.minFilter=Nf[f.minFilter]||Hn,h.wrapS=Uf[f.wrapS]||ri,h.wrapT=Uf[f.wrapT]||ri,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qe&&h.minFilter!==sn,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;e.isImageBitmapLoader===!0&&(g=function(_){let m=new Fe(_);m.needsUpdate=!0,f(m)}),e.load(ki.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),fi(u,o),u.userData.mimeType=o.mimeType||Rx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[jt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ni,je.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Wr,je.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Be}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[jt.KHR_MATERIALS_UNLIT]){let u=s[jt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Rt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ye),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Pn);let h=r.alphaMode||ql.OPAQUE;if(h===ql.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ql.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ut(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){let u=r.emissiveFactor;a.emissive=new Rt().setRGB(u[0],u[1],u[2],Ye)}return r.emissiveTexture!==void 0&&o!==on&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Se)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),fi(u,r),e.associations.set(u,{materials:t}),r.extensions&&ls(s,u,r),u})}createUniqueName(t){let e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Of(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=Ex(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[jt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Of(new Ee,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Tx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[p],d,v=l[p];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new jo(_,v):new xe(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?d.geometry=Wl(d.geometry,ma):m.mode===Sn.TRIANGLE_FAN&&(d.geometry=Wl(d.geometry,Zr));else if(m.mode===Sn.LINES)d=new ia(_,v);else if(m.mode===Sn.LINE_STRIP)d=new nr(_,v);else if(m.mode===Sn.LINE_LOOP)d=new sa(_,v);else if(m.mode===Sn.POINTS)d=new cs(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ax(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),fi(d,r),m.extensions&&ls(s,d,m),e.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)e.associations.set(u[p],{meshes:t,primitives:p});if(u.length===1)return r.extensions&&ls(s,u[0],r),u[0];let f=new ze;r.extensions&&ls(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Pe(Mf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Dt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new ta(a,c)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],_=u[3],m=u[4],d=[];for(let v=0,y=f.length;v<y;v++){let x=f[v],R=p[v],A=g[v],E=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let T=n._createAnimationTracks(x,R,A,E,C);if(T)for(let S=0;S<T.length;S++)d.push(T[S])}return new ca(r,void 0,d)})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Cx)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Gr:l.length>1?h=new ze:l.length===1?h=l[0]:h=new ye,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&ls(n,h,r),r.matrix!==void 0){let u=new Dt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new ze;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&ls(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof je||f instanceof Fe)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,c=[];zi[r.path]===zi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(zi[r.path]){case zi.weights:l=ci;break;case zi.rotation:l=li;break;case zi.position:case zi.scale:l=hi;break;default:n.itemSize===1?l=ci:l=hi;break}let h=s.interpolation!==void 0?bx[s.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+zi[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=xh(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof li?gh:va;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ix(i,t,e){let n=t.attributes,s=new rn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=xh(or[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let _=xh(or[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Of(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=_h[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qt.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),fi(i,t),Ix(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?wx(i,t.targets,e):i})}var $r=class i extends xe{constructor(){let t=i.SkyShader,e=new yn({name:t.name,uniforms:zl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Xe,depthWrite:!1});super(new Gn(1,1,1),e),this.isSky=!0}};$r.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var di=Math.PI/180,cr={size:16e4,n:384},bn=[{id:"SOL",name:"SOLARIS INTL",n:0,e:0,elev:12,hdg:0,len:4e3,width:60,ids:["36","18"]},{id:"LUM",name:"LUMEN VALLEY",n:41e3,e:24e3,elev:380,hdg:70,len:3400,width:60,ids:["07","25"]}];function ya(i,t){let e=i*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177|0,e=e^e>>>16,(e>>>0)/4294967295}function Px(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=ya(e,n),l=ya(e+1,n),h=ya(e,n+1),u=ya(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function ar(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Px(i*r,t*r),s*=.5,r*=2.03;return n}var Ma=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function yh(i,t,e){let n=i.hdg*di,s=t-i.n,r=e-i.e,o=s*Math.cos(n)+r*Math.sin(n),a=-s*Math.sin(n)+r*Math.cos(n);return{along:o,cross:a}}function Lx(i,t){let e=Ma(-22e3,3e4,t+.35*i+9e3*(ar(i/26e3+7.1,t/26e3+3.3,3)-.5)*2),n=ar(i/9e3+11.7,t/9e3+5.2,5),s=1-Math.abs(2*ar(i/21e3+2.2,t/21e3+9.4,4)-1),r=Ma(.25,1,e)*Math.pow(s,2.2)*2300,o=-60+e*150+e*(n-.35)*420+r,a=cr.size/2,c=Math.min(a-Math.abs(i),a-Math.abs(t)),l=Ma(0,14e3,c);return o=o*l-60*(1-l),o}function Dx(i,t){let e=Lx(i,t);for(let n of bn){let{along:s,cross:r}=yh(n,i,t),o=Math.max(0,Math.abs(s)-n.len/2-1500),a=Math.max(0,Math.abs(r)-1300),c=Math.hypot(o,a),l=1-Ma(0,6500,c);e=e*(1-l)+n.elev*l}return e}var Jr=null;function Sa(){if(Jr)return Jr;let{size:i,n:t}=cr,e=t+1;Jr=new Float32Array(e*e);for(let n=0;n<e;n++){let s=-i/2+n/t*i;for(let r=0;r<e;r++){let o=-i/2+r/t*i;Jr[n*e+r]=Dx(s,o)}}return Jr}function Nx(i,t){for(let e of bn){let{along:n,cross:s}=yh(e,i,t);if(Math.abs(n)<e.len/2+1400&&Math.abs(s)<1200)return e}return null}function jr(i,t){let e=Nx(i,t);if(e)return e.elev;let n=Sa(),{size:s,n:r}=cr,o=r+1,a=(t+s/2)/s*r,c=(i+s/2)/s*r;if(a<0||c<0||a>=r||c>=r)return 0;let l=Math.floor(a),h=Math.floor(c),u=a-l,f=c-h,p=n[h*o+l],g=n[h*o+l+1],_=n[(h+1)*o+l],m=n[(h+1)*o+l+1],d=p+(g-p)*u+(_-p)*f+(p-g-_+m)*u*f;return Math.max(0,d)}function ba(i,t){for(let d of bn){let{along:v,cross:y}=yh(d,i,t);if(Math.abs(v)<d.len/2+60&&Math.abs(y)<d.width/2)return"rwy";if(Math.abs(v)<d.len/2&&y>d.width/2-1&&y<520){if(Math.abs(y-190)<20||Math.abs(v)<520&&y>190)return"paved";for(let x of[-d.len/2+40,-d.len/4,0,d.len/4,d.len/2-40])if(Math.abs(v-x)<20&&y<200)return"paved"}}let e=Sa(),{size:n,n:s}=cr,r=s+1,o=(t+n/2)/n*s,a=(i+n/2)/n*s;if(o<0||a<0||o>=s||a>=s)return"water";let c=Math.floor(o),l=Math.floor(a),h=o-c,u=a-l,f=e[l*r+c],p=e[l*r+c+1],g=e[(l+1)*r+c],_=e[(l+1)*r+c+1];return f+(p-f)*h+(g-f)*u+(f-p-g+_)*h*u<.2?"water":"grass"}var Hi=[];for(let i of bn)for(let t=0;t<2;t++){let e=(i.hdg+(t?180:0))%360,n=e*di;Hi.push({ap:i,id:i.id+" "+i.ids[t],ident:i.ids[t],crs:e,thrN:i.n-Math.cos(n)*i.len/2,thrE:i.e-Math.sin(n)*i.len/2,elev:i.elev,len:i.len})}function lr(i,t,e,n){let s=i.crs*di,r=t-i.thrN,o=e-i.thrE,a=r*Math.cos(s)+o*Math.sin(s),c=-r*Math.sin(s)+o*Math.cos(s),l=i.len+300-a,h=Math.atan2(c,Math.max(1,l))/di,u=300-a,f=Math.atan2(n-i.elev,Math.max(1,u))/di;return{along:a,xtk:c,loc:h,gs:f-3,dAim:u,dist:Math.hypot(r,o),valid:u>0&&u<6e4&&Math.abs(h)<35}}function Mh(i,t,e){let n=null,s=1e9;for(let r of Hi){let o=lr(r,i,t,0);if(!o.valid)continue;let a=Math.abs((e-r.crs+540)%360-180),c=o.dist/1e3+a*.8+Math.abs(o.loc)*2;a<100&&c<s&&(s=c,n=r)}return n}var Q=Math.PI/180,Re=180/Math.PI,re=.514444,ke=.3048,pi=9.80665,Ot=(i,t,e)=>Math.min(e,Math.max(t,i)),Sh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Gt={S:450,b:71.8,c:7.6,Ixx:25e6,Iyy:46e6,Izz:68e6,oew:178e3,payload:12e3,fuelMax:11e4,Tmax:218e3,eng:[{y:-19.5,z:1.4},{y:-10.5,z:2.75},{y:10.5,z:2.75},{y:19.5,z:1.4}],gear:[{name:"nose",r:[27.5,0,5.2],k:16e5,c:26e4,steer:!0,brake:!1},{name:"left",r:[-2,-5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0},{name:"right",r:[-2,5.5,5.4],k:38e5,c:75e4,steer:!1,brake:!0}],body:[{name:"\u6A5F\u9F3B",r:[31,0,1.6],fatal:!0},{name:"\u6A5F\u5C3E",r:[-31,0,-.9],fatal:!1},{name:"\u5DE6\u7FFC\u5C16",r:[-18,-35.9,-2.4],fatal:!0},{name:"\u53F3\u7FFC\u5C16",r:[-18,35.9,-2.4],fatal:!0},{name:"\u5DE6\u5167\u5074\u767C\u52D5\u6A5F",r:[0,-10.5,4.5],fatal:!1},{name:"\u53F3\u5167\u5074\u767C\u52D5\u6A5F",r:[0,10.5,4.5],fatal:!1},{name:"\u5DE6\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,-19.5,2.8],fatal:!1},{name:"\u53F3\u5916\u5074\u767C\u52D5\u6A5F",r:[-6,19.5,2.8],fatal:!1},{name:"\u6A5F\u8179",r:[0,0,2.4],fatal:!0}],CLa:5.5,CD0:.017,k:1/(Math.PI*(71.8*71.8/450)*.8),flapDeg:[0,1,5,15,20,25,30],flapLift:[0,.25,.45,.65,.78,.9,1],flapDrag:[0,.006,.012,.028,.04,.058,.08],flapVmax:[340,265,245,230,225,200,180],vmo:340,mmo:.89,vle:270};function Ux(i){let[t,e,n,s]=i;return[1-2*(n*n+s*s),2*(e*n-t*s),2*(e*s+t*n),2*(e*n+t*s),1-2*(e*e+s*s),2*(n*s-t*e),2*(e*s-t*n),2*(n*s+t*e),1-2*(e*e+n*n)]}var bh=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]],Bf=(i,t)=>[i[0]*t[0]+i[3]*t[1]+i[6]*t[2],i[1]*t[0]+i[4]*t[1]+i[7]*t[2],i[2]*t[0]+i[5]*t[1]+i[8]*t[2]],kf=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function zf(i,t,e){let n=Math.cos(i/2),s=Math.sin(i/2),r=Math.cos(t/2),o=Math.sin(t/2),a=Math.cos(e/2),c=Math.sin(e/2);return[n*r*a+s*o*c,s*r*a-n*o*c,n*o*a+s*r*c,n*r*c-s*o*a]}function Ox(){let i=0,t=0;for(;i===0;)i=Math.random();return t=Math.random(),Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*t)}function hr(i,t){let e=Ot(Math.floor(t),0,i.length-2),n=Ot(t-e,0,1);return i[e]+(i[e+1]-i[e])*n}function Th(i){let t,e;return i<11e3?(t=288.15-.0065*i,e=101325*Math.pow(t/288.15,5.25588)):(t=216.65,e=22632.1*Math.exp(-(i-11e3)/6341.62)),{T:t,p:e,rho:e/(287.05*t),a:Math.sqrt(1.4*287.05*t)}}function wh(i,t){let e=t*(Math.pow(1+.2*i*i,3.5)-1);return 340.294*Math.sqrt(5*(Math.pow(e/101325+1,2/7)-1))}var Ta=class{constructor(){this.wind={dir:0,spd:0,turb:0},this.ctl={pitch:0,roll:0,yaw:0,brake:0,reverse:!1},this.reset("runway")}mass(){return Gt.oew+Gt.payload+this.fuel}reset(t){let e=bn[0],n=Hi[0];this.t=0,this.crashed=null,this.msg="",this.msgT=0,this.fuel=72e3,this.vsDot=0,this.w=[0,0,0],this.n1=[22,22,22,22],this.engOn=[!0,!0,!0,!0],this.thrust=[0,0,0,0],this.ff=0,this.thr=0,this.rev=0,this.de=0,this.da=0,this.dr=0,this.trimI=0,this.manTrim=0,this.fbw=0,this.law="normal",this.thHold=null,this.phiHold=0,this.sb=0,this.sbSel=0,this.gndSpoiler=!1,this.gust=[0,0,0],this.park=!1,this.steer=0,this.wow=!1,this.wowN=!1,this.airT=0,this.gndT=0,this.touchdown=null,this.strike="",this.gearLoad=[0,0,0],this.ap={autoland:!1,on:!1,athr:!1,hdg:n.crs,alt:5e3,spd:250,vs:1800,app:!1,lat:"HDG",ver:"ALT",rw:null},this.nz=1,this.acc=0,this.iasPrev=0;let s=n.crs*Q;if(t==="runway")this.pos=[n.thrN+Math.cos(s)*90,n.thrE+Math.sin(s)*90,-(e.elev+5.1)],this.vel=[0,0,0],this.q=zf(0,0,s),this.flapSel=3,this.flapPos=3,this.gearSel=!0,this.gearPos=1,this.park=!0,this.ap.alt=5e3,this.ap.spd=250;else{let r=t==="cruise",o=r?15e4:22e3,a=r?35e3*ke:3e3*ke+0,c=(r?285:190)*re;this.flapSel=this.flapPos=r?0:2,this.gearSel=!1,this.gearPos=0,this.pos=[n.thrN-Math.cos(s)*o,n.thrE-Math.sin(s)*o,-a],r&&(this.pos[0]=-62e3,this.pos[1]=-38e3,this.fuel=8e4);let l=Th(a),h=c/l.a;for(let _=0;_<20;_++){let m=wh(h,l.p);h*=c/m}let u=h*l.a,f=this.trim(u,a),p=r?Math.atan2(n.thrE-this.pos[1],n.thrN-3e4-this.pos[0]):s;this.q=zf(0,f.alpha,p),this.vel=[u*Math.cos(p),u*Math.sin(p),0],this.thr=f.thr;let g=22+78*f.thr;this.n1=[g,g,g,g],this.trimI=f.de,this.fbw=1,this.thHold=f.alpha,this.ap.on=!0,this.ap.athr=!0,this.ap.hdg=Math.round((p*Re+360)%360),this.ap.alt=Math.round(a/ke/100)*100,this.ap.spd=Math.round(c/re),this.airT=10}this.update0()}trim(t,e){let n=Th(e),s=t/n.a,r=.5*n.rho*t*t*Gt.S,o=this.mass()*pi,a=hr(Gt.flapLift,this.flapPos),c=1/Math.sqrt(1-Math.pow(Math.min(s,.85)*.75,2)),l=o/r,h=(l-(.25+.9*a))/(Gt.CLa*c),f=(Gt.CD0+hr(Gt.flapDrag,this.flapPos)+Gt.k*l*l+.02*this.gearPos+(s>.82?8*(s-.82)**2:0))*r,p=Math.pow(n.rho/1.225,.7)*(1-.75*s+.35*s*s),g=Ot(f/(4*Gt.Tmax*p),0,1),_=5+95*Math.pow(g,1/2.3),m=Ot((_-22)/78,0,1),d=f*2.07/(r*Gt.c),v=-(.04-.1*a-1.2*h+d)/1.4;return{alpha:h,thr:m,de:v}}update0(){let t=Ux(this.q);this.R=t;let[e,n,s,r]=this.q;this.phi=Math.atan2(2*(e*n+s*r),1-2*(n*n+s*s)),this.theta=Math.asin(Ot(2*(e*s-r*n),-1,1)),this.psi=Math.atan2(2*(e*r+n*s),1-2*(s*s+r*r)),this.alt=-this.pos[2],this.elev=jr(this.pos[0],this.pos[1]),this.agl=this.alt-this.elev;let o=Th(this.alt);this.at=o;let a=.55+.45*Math.min(1,Math.max(0,this.agl)/400),c=this.wind.dir*Q;this.windW=[-this.wind.spd*a*Math.cos(c)+this.gust[0],-this.wind.spd*a*Math.sin(c)+this.gust[1],this.gust[2]];let l=[this.vel[0]-this.windW[0],this.vel[1]-this.windW[1],this.vel[2]-this.windW[2]];this.vb=Bf(t,l),this.tas=Math.hypot(l[0],l[1],l[2]),this.mach=this.tas/o.a,this.ias=wh(this.mach,o.p),this.alpha=this.tas>1?Math.atan2(this.vb[2],this.vb[0]):0,this.beta=this.tas>1?Math.asin(Ot(this.vb[1]/this.tas,-1,1)):0,this.vs=-this.vel[2],this.gs=Math.hypot(this.vel[0],this.vel[1]),this.track=this.gs>1?Math.atan2(this.vel[1],this.vel[0]):this.psi;let h=hr(Gt.flapLift,this.flapPos);this.clmax=1.5+1.1*h,this.cl0=.25+.9*h,this.aStall=(this.clmax-this.cl0)/Gt.CLa,this.vstall=Math.sqrt(2*this.mass()*pi/(1.225*Gt.S*this.clmax*.94)),this.vmaxKt=Math.min(Gt.vmo,hr(Gt.flapVmax,this.flapPos),this.gearPos>.05?Gt.vle:999,wh(Gt.mmo,o.p)/re)}say(t,e=4){this.msg=t,this.msgT=e}step(t){if(this.crashed)return;this.t+=t,this.msgT>0&&(this.msgT-=t),this.update0();let e=this.ctl,n=this.ap,s=this.R,r=this.at,o=this.mass(),a=Math.max(this.tas,.01),[c,l,h]=this.w,u=.5*r.rho*a*a,f=u*Gt.S,p=Math.sin(this.phi),g=Math.cos(this.phi),_=this.wind.turb*(.5+.5*Math.min(1,this.wind.spd/8+.3));for(let O=0;O<3;O++)this.gust[O]+=-this.gust[O]/2.2*t+_*(O===2?.7:1)*Math.sqrt(2*t/2.2)*Ox();this.flapPos+=Ot(this.flapSel-this.flapPos,-.22*t,.22*t),this.gearPos+=Ot((this.gearSel?1:0)-this.gearPos,-t/9,t/9),this.wow&&this.thr<.1&&this.gs>25&&this.gndT>.2&&(this.gndSpoiler=!0),(!this.wow||this.thr>.3||this.gs<12)&&(this.gndSpoiler=!1);let m=this.gndSpoiler?1:this.sbSel*(this.wow?1:.6);this.sb+=Ot(m-this.sb,-1.2*t,1.2*t);let d=null,v=null,y=n.rw?lr(n.rw,this.pos[0],this.pos[1],this.alt):null;if(this.ils=y,n.on&&this.fbw>.9){let O;if(n.app&&n.lat==="HDG"&&y&&y.valid&&Math.abs(y.loc)<2.2&&Math.abs(Sh(this.track-n.rw.crs*Q))<80*Q&&(n.lat="LOC",this.say("LOC \u622A\u7372")),n.lat==="LOC"&&y){let Nt=Ot(y.dAim/2e4,.35,1),Me=n.rw.crs*Q-Ot(y.xtk*.035/Nt,-32,32)*Q;O=Ot(1.6*Sh(Me-this.track),-27*Q,27*Q)}else O=Ot(1.3*Sh(n.hdg*Q-this.psi),-25*Q,25*Q);v=Ot(1.4*(O-this.phi),-6*Q,6*Q);let tt;if(n.app&&n.lat==="LOC"&&n.ver!=="GS"&&y&&Math.abs(y.gs)<.12&&(n.ver="GS",this.say("G/S \u622A\u7372")),n.ver==="FLARE"){let Nt=this.agl-5.1;tt=Ot(-.17*Nt-.3,-4.5,-.3),Nt<10&&(this.thr=Math.max(0,this.thr-.35*t)),this.wow&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1)}else if(n.ver==="GS"&&y){let Nt=this.alt-n.rw.elev-Math.tan(3*Q)*y.dAim;tt=Ot(-this.gs*Math.tan(3*Q)-.16*Nt,-9,1.5)}else{let Nt=Math.abs(n.vs)*ke/60;tt=Ot(.13*(n.alt*ke-this.alt),-Nt,Nt)}let ot=this.vs/Math.max(a,30),vt=tt/Math.max(a,30);d=Ot((n.ver==="FLARE"?1.5:.9)*(vt-ot)-1.3*this.vsDot/Math.max(a,30),-2.2*Q,2.2*Q),n.ver==="GS"&&this.agl<30&&n.autoland?(n.ver="FLARE",n.athr=!1,this.say("\u81EA\u52D5\u843D\u5730\uFF1AFLARE",5)):n.ver==="GS"&&this.agl<30&&(n.on=!1,n.lat="HDG",n.ver="ALT",n.app=!1,this.apDisc=!0,this.say("\u81EA\u52D5\u99D5\u99DB\u5DF2\u89E3\u9664 \u2014 \u8ACB\u624B\u52D5\u843D\u5730",6))}let x=(this.ias-this.iasPrev)/t;if(this.iasPrev=this.ias,this.acc+=(x-this.acc)*Math.min(1,t/.7),n.athr)if(this.wow&&this.gndT>1&&this.touchdown)n.athr=!1;else{let O=Ot(.045*(n.spd*re-this.ias)-.3*this.acc,-.3,.3);this.thr=Ot(this.thr+O*t,0,1)}let R=this.wow||this.law!=="normal"?0:1;this.fbw+=Ot(R-this.fbw,-t/.8,t/1.2);let A=this.fbw,E=Ot(3900/Math.max(u,1),.12,3),C=Math.max(a,40),T=Ot(this.phi,-45*Q,45*Q),S=pi*Math.sin(T)*Math.tan(T)/C,P=this.flapPos>.2,H;if(d!==null)H=d+S,this.thHold=null;else if(Math.abs(e.pitch)>.03){let O=Math.min(((P?2:2.5)-1)*pi/C,5*Q),tt=Math.min((P?1:2)*pi/C,4*Q);H=(e.pitch>0?e.pitch*O:e.pitch*tt)+S,this.thHold=null}else this.thHold===null&&Math.abs(l-S)<.6*Q&&(this.thHold=this.theta),H=(this.thHold!==null?Ot(1.2*(this.thHold-this.theta),-2*Q,2*Q):0)+S;let z=this.aStall-1.2*Q;this.aProt=this.alpha>z-2.5*Q&&A>.5,this.alpha>z-3*Q&&(H=Math.min(H,1.6*(z-this.alpha)+S)),this.theta>22*Q&&(H=Math.min(H,1*(30*Q-this.theta))),this.theta<-10*Q&&(H=Math.max(H,1*(-15*Q-this.theta))),this.ias>(this.vmaxKt+6)*re&&(H=Math.max(H,.004*(this.ias-(this.vmaxKt+6)*re)));let G=H-l;A>.5?this.trimI=Ot(this.trimI+E*4.5*G*t,-14*Q,18*Q):this.law==="normal"&&(this.trimI+=(1.5*Q-this.trimI)*Math.min(1,t/7));let $=Ot(Math.asin(Ot((this.agl+.4)/31,0,1))-1.7*Q,8*Q,.6);this.agl<22&&(H=Math.min(H,2*($-this.theta)));let q=e.pitch*25*Q+(this.law==="normal"?this.trimI:this.manTrim);if(this.law==="normal"&&(this.wow||this.agl<22)&&e.pitch>.03&&this.ias>60*re){let O=Math.min(e.pitch*3.2*Q,2*($-this.theta));q=Math.min(q,this.trimI+E*9*(O-l)+4*Q*e.pitch)}let it=E*5*G+this.trimI,W=Ot(q*(1-A)+it*A,-20*Q,28*Q),rt;v!==null?(rt=v,this.phiHold=this.phi):Math.abs(e.roll)>.03?(rt=e.roll*15*Q,this.phiHold=this.phi):(this.phiHold=Ot(this.phiHold,-33*Q,33*Q),rt=Ot(2*(this.phiHold-this.phi),-10*Q,10*Q)),rt=Math.min(rt,2.5*(67*Q-this.phi)),rt=Math.max(rt,2.5*(-67*Q-this.phi));let lt=E*6*(rt-c),St=Ot(e.roll*25*Q*(1-A)+lt*A,-25*Q,25*Q),Pt=30*Q*Ot(Math.pow(75/Math.max(this.ias,1),2),.12,1),ee=pi*p/C,Y=Ot(-3*E*(h-ee)+.6*this.beta,-8*Q,8*Q),st=Ot(e.yaw*Pt+Y*Math.max(A,this.law==="normal"&&this.ias>30?.5:0),-30*Q,30*Q);this.de+=Ot(W-this.de,-40*Q*t,40*Q*t),this.da+=Ot(St-this.da,-50*Q*t,50*Q*t),this.dr+=Ot(st-this.dr,-45*Q*t,45*Q*t);let xt=68*Q*Ot(1-(this.gs-8)/40,.09,1);this.steer+=Ot(e.yaw*xt-this.steer,-60*Q*t,60*Q*t);let ht=r.rho/1.225,X=this.mach,ct=Math.pow(ht,.7)*(1-.75*Math.min(X,.95)+.35*X*X),wt=e.reverse&&this.wow&&this.thr<.05;this.rev+=Ot((wt?1:0)-this.rev,-t/1.5,t/1.5);let Yt=0,zt=0,ce=0,D=0;for(let O=0;O<4;O++){let tt=0;this.engOn[O]&&(tt=this.rev>.9&&wt?72:22+78*(this.rev>.05?0:this.thr));let ot=.8+3.6*Math.pow(1-this.n1[O]/100,2);this.n1[O]+=Ot((tt-this.n1[O])/ot,-22,26)*t;let vt=Math.pow(Ot((this.n1[O]-5)/95,0,1),2.3),Nt=Gt.Tmax*ct*vt-(this.engOn[O]?0:.02*f*.3);this.rev>.5&&(Nt=-.42*Nt),this.thrust[O]=Nt,Yt+=Nt,zt+=Gt.eng[O].z*Nt,ce+=-Gt.eng[O].y*Nt,this.engOn[O]&&(D+=Math.max(.14*Math.sqrt(ht),93e-7*(1+.45*X)*Math.abs(Gt.Tmax*ct*vt)))}this.ff=D,this.fuel-=D*t,this.fuel<=0&&(this.fuel=0,this.engOn[0]&&this.say("\u71C3\u6599\u8017\u76E1 \u2014 \u5168\u90E8\u767C\u52D5\u6A5F\u7184\u706B",8),this.engOn=[!1,!1,!1,!1]);let ue=[Yt,0,0],Ht=[0,zt,ce],Ft=0;if(this.tas>.5){let O=this.alpha,tt=this.beta,ot=c*Gt.b/(2*a),vt=l*Gt.c/(2*a),Nt=h*Gt.b/(2*a),Me=hr(Gt.flapLift,this.flapPos),te=1/Math.sqrt(1-Math.pow(Math.min(X,.85)*.75,2)),Ke=1-(this.wow?.6:.42)*this.sb,tn=(this.cl0+Gt.CLa*te*O+5*vt-.3*this.de)*Ke,Wn=this.aStall+2*Q,gs=(-.9-this.cl0)/Gt.CLa-2*Q,en=1.1*Q,xi=1/(1+Math.exp(-(O-Wn)/en)),Xi=1/(1+Math.exp((O-gs)/en));Ft=Math.min(1,xi+Xi);let Xn=Math.max(this.agl-1.5,.5)/Gt.b,Bn=(16*Xn)**2/(1+(16*Xn)**2);tn*=1+.08*(1-Bn);let Ue=(1-Ft)*tn+Ft*1.05*Math.sin(2*O),Te=Gt.CD0+hr(Gt.flapDrag,this.flapPos)+.021*this.gearPos+(this.wow?.075:.05)*this.sb+Gt.k*Bn*Ue*Ue*(1-Ft)+(X>.82?8*(X-.82)**2:0)+Ft*1.9*Math.sin(O)**2+.6*tt*tt,qi=-.85*tt-.18*this.dr,qn=1-.6*Ft,Yi=-.09*tt-.45*ot*(1-.5*Ft)+(.06+.12*Math.max(Ue,0))*Nt+.1*this.da*qn-.008*this.dr+Ft*.012*Math.sin(this.t*2.3),_r=.04-.1*Me-.012*this.gearPos-1.2*O-21*vt+1.4*this.de-.22*Ft*Math.sign(O)+.06*this.sb*(this.wow?0:1),vi=.14*tt-.28*Nt-.03*Math.max(Ue,0)*ot+.1*this.dr-.008*this.da,b=Math.cos(O),N=Math.sin(O);ue[0]+=f*(-Te*b+Ue*N),ue[1]+=f*qi,ue[2]+=f*(-Te*N-Ue*b),Ht[0]+=f*Gt.b*Yi,Ht[1]+=f*Gt.c*_r,Ht[2]+=f*Gt.b*vi,this.CL=Ue}this.stall=Ft;let At=bh(s,ue),fe=ue[2],Ct=0,w=this.wow,M=!1,F=!1;this.strike="";let K=(O,tt,ot,vt)=>{let Nt=bh(s,O),Me=this.pos[0]+Nt[0],te=this.pos[1]+Nt[1],Ke=this.pos[2]+Nt[2],tn=jr(Me,te),Wn=Ke+tn;if(Wn<=0)return 0;let gs=kf(this.w,O),en=bh(s,gs),xi=this.vel[0]+en[0],Xi=this.vel[1]+en[1],Xn=this.vel[2]+en[2],Bn=ba(Me,te);if(Bn==="water")return this.crash("\u589C\u5165\u6C34\u4E2D"),0;if(vt.fatal)return this.crash(vt.name+"\u89F8\u5730"),0;if(Xn>(vt.gear?vt.steer?9.5:6.2:3.2))return this.crash(vt.gear?"\u843D\u5730\u904E\u91CD\uFF0C\u8D77\u843D\u67B6\u6298\u65B7 ("+Math.round(Xn*196.85)+" fpm)":vt.name+"\u91CD\u64CA\u5730\u9762"),0;vt.gear||(this.strike=vt.name);let Ue=tt*Wn+ot*Xn+(Wn>.65?4*tt*(Wn-.65):0);Ue=Ot(Ue,0,6*o*pi);let Te=[s[0],s[3]];if(vt.steer){let dt=Math.cos(this.steer),yt=Math.sin(this.steer);Te=[s[0]*dt+s[1]*yt,s[3]*dt+s[4]*yt]}let qi=Math.hypot(Te[0],Te[1])||1;Te=[Te[0]/qi,Te[1]/qi];let qn=[-Te[1],Te[0]],Yi=xi*Te[0]+Xi*Te[1],_r=xi*qn[0]+Xi*qn[1],vi=Bn!=="grass",b=vi?.012:.09;vt.brake&&(b+=(vi?.52:.3)*Math.max(e.brake,this.park?1:0)),vt.gear||(b=.55);let N=-Ue*b*Ot(Yi/.4,-1,1),k=-Ue*(vi?.75:.5)*Ot(_r/(.1*Math.max(Math.abs(Yi),3)),-1,1)*(vt.gear?1:.7),B=[N*Te[0]+k*qn[0],N*Te[1]+k*qn[1],-Ue];At[0]+=B[0],At[1]+=B[1],At[2]+=B[2];let U=Bf(s,B),nt=kf(O,U);return Ht[0]+=nt[0],Ht[1]+=nt[1],Ht[2]+=nt[2],Ct+=U[2],!vi&&Ue>0&&(this.rough=Math.min(1,Math.abs(Yi)/30)),Ue};if(this.rough=0,this.gearPos>.95)for(let O=0;O<3;O++){let tt=Gt.gear[O],ot=K(tt.r,tt.k,tt.c,{gear:!0,steer:tt.steer,brake:tt.brake,name:tt.name});this.gearLoad[O]=ot,ot>0&&(O===0?F=!0:M=!0)}else this.gearLoad=[0,0,0];if(this.agl<45)for(let O of Gt.body){if(this.crashed)break;K(O.r,6e6,12e5,{gear:!1,fatal:O.fatal,name:O.name})}if(this.crashed)return;this.wow=M,this.wowN=F,this.wow?(this.gndT+=t,w||(this.airT>2&&(this.touchdown={fpm:Math.round(-this.vs*196.85),g:this.nz,kt:Math.round(this.ias/re),t:this.t},this.tdEvent=!0),this.airT=0)):(this.airT+=t,this.airT>1&&(this.gndT=0)),this.nz=-(fe+Ct)/(o*pi),this.nzSm=(this.nzSm??1)+(this.nz-(this.nzSm??1))*Math.min(1,t/.15);let J=At[0]/o,Z=At[1]/o,Mt=At[2]/o+pi;this.vsDot+=(-Mt-this.vsDot)*Math.min(1,t/.25),this.vel[0]+=J*t,this.vel[1]+=Z*t,this.vel[2]+=Mt*t,this.pos[0]+=this.vel[0]*t,this.pos[1]+=this.vel[1]*t,this.pos[2]+=this.vel[2]*t;let{Ixx:ut,Iyy:pt,Izz:Jt}=Gt,et=[(Ht[0]-(Jt-pt)*l*h)/ut,(Ht[1]-(ut-Jt)*h*c)/pt,(Ht[2]-(pt-ut)*c*l)/Jt];this.w[0]+=et[0]*t,this.w[1]+=et[1]*t,this.w[2]+=et[2]*t;let[mt,It,Lt,gt]=this.q,[Kt,Bt,ie]=this.w,L=.5*t,at=[mt+L*(-It*Kt-Lt*Bt-gt*ie),It+L*(mt*Kt+Lt*ie-gt*Bt),Lt+L*(mt*Bt-It*ie+gt*Kt),gt+L*(mt*ie+It*Bt-Lt*Kt)],V=Math.hypot(at[0],at[1],at[2],at[3]);this.q=[at[0]/V,at[1]/V,at[2]/V,at[3]/V],this.wow&&this.park&&this.gs<.05&&this.thr<.2&&(this.vel[0]=0,this.vel[1]=0)}crash(t){this.crashed||(this.crashed=t)}flaps(t){this.flapSel=Ot(this.flapSel+t,0,6),this.say("\u895F\u7FFC "+Gt.flapDeg[this.flapSel]+"\xB0")}toggleGear(){if(this.wow){this.say("\u5730\u9762\u4E0A\u4E0D\u53EF\u6536\u8D77\u843D\u67B6");return}this.gearSel=!this.gearSel,this.say(this.gearSel?"\u8D77\u843D\u67B6 \u653E\u4E0B":"\u8D77\u843D\u67B6 \u6536\u8D77")}toggleAP(){let t=this.ap;if(t.on)t.on=!1,t.lat="HDG",t.ver="ALT",this.apDisc=!0,this.thHold=this.theta,this.phiHold=this.phi,this.say("\u81EA\u52D5\u99D5\u99DB \u89E3\u9664");else{if(this.wow||this.fbw<.9){this.say("\u81EA\u52D5\u99D5\u99DB\u53EA\u80FD\u5728\u7A7A\u4E2D\u63A5\u901A");return}t.on=!0,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Re+360)%360),this.say("\u81EA\u52D5\u99D5\u99DB \u63A5\u901A")}}toggleATHR(){let t=this.ap;t.athr=!t.athr,t.athr&&this.wow&&(t.spd=Math.max(t.spd,160)),this.say(t.athr?"\u81EA\u52D5\u6CB9\u9580 \u63A5\u901A ("+t.spd+" kt)":"\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664")}toggleAPP(){let t=this.ap;if(t.app){t.app=!1,t.lat="HDG",t.ver="ALT",t.hdg=Math.round((this.psi*Re+360)%360),t.alt=Math.round(this.alt/ke/100)*100,this.say("\u9032\u5834\u6A21\u5F0F \u53D6\u6D88");return}let e=Mh(this.pos[0],this.pos[1],this.psi*Re);if(!e){this.say("\u9644\u8FD1\u6C92\u6709\u53EF\u7528\u7684 ILS \u2014 \u8ACB\u5148\u5C0D\u6E96\u8DD1\u9053\u65B9\u5411");return}t.rw=e,t.app=!0,this.say("ILS \u9032\u5834\u9810\u4F4D\uFF1A"+e.id+"  \u822A\u9053 "+String(Math.round(e.crs)||360).padStart(3,"0")+"\xB0",6)}tuneILS(){if(this.ap.app)return;let t=Mh(this.pos[0],this.pos[1],this.psi*Re);this.ap.rw=t}};function wa(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Fx(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d"),e=wa(7);t.fillStyle="#c8c8c8",t.fillRect(0,0,512,512);for(let s=0;s<9e3;s++){let r=150+e()*105|0;t.fillStyle=`rgba(${r},${r},${r},${.25+e()*.4})`;let o=2+e()*14;t.fillRect(e()*512,e()*512,o,o*(.5+e()))}for(let s=0;s<60;s++){let r=170+e()*80|0;t.fillStyle=`rgba(${r},${r},${r-10},0.35)`,t.fillRect(e()*512,e()*512,30+e()*90,30+e()*90)}let n=new Ui(i);return n.wrapS=n.wrapT=ri,n.anisotropy=8,n.colorSpace=Se,n}function Bx(){let{size:i,n:t}=cr,e=t+1,n=Sa(),s=new Float32Array(e*e*3),r=new Float32Array(e*e*3),o=new Float32Array(e*e*2),a=i/t,c=new Rt,l=new Rt;for(let _=0;_<e;_++)for(let m=0;m<e;m++){let d=_*e+m,v=-i/2+m*a,y=-i/2+_*a,x=n[d];s[d*3]=v,s[d*3+1]=x,s[d*3+2]=-y,o[d*2]=v/150,o[d*2+1]=y/150;let R=n[_*e+Math.min(t,m+1)]-n[_*e+Math.max(0,m-1)],A=n[Math.min(t,_+1)*e+m]-n[Math.max(0,_-1)*e+m],E=Math.hypot(R,A)/(2*a),C=ar(y/2500,v/2500,3),T=ar(y/700+31,v/700+17,2);x<4?c.setRGB(.76,.7,.52):x<500?(c.setRGB(.28,.44,.17),l.setRGB(.5,.52,.24),c.lerp(l,C),l.setRGB(.16,.3,.12),c.lerp(l,Math.max(0,T-.45)*1.6)):x<1400?(c.setRGB(.2,.33,.15),l.setRGB(.42,.4,.3),c.lerp(l,Math.min(1,(x-500)/900+C*.3))):(c.setRGB(.45,.42,.38),l.setRGB(.95,.96,.98),c.lerp(l,Math.min(1,Math.max(0,(x-1500)/500+(C-.5))))),E>.22&&x>60&&(l.setRGB(.4,.37,.33),c.lerp(l,Math.min(1,(E-.22)*4))),x<-1&&c.setRGB(.1,.22,.3),r[d*3]=c.r,r[d*3+1]=c.g,r[d*3+2]=c.b}let h=new Uint32Array(t*t*6),u=0;for(let _=0;_<t;_++)for(let m=0;m<t;m++){let d=_*e+m,v=d+1,y=d+e,x=y+1;h[u++]=d,h[u++]=v,h[u++]=y,h[u++]=v,h[u++]=x,h[u++]=y}let f=new Ee;f.setAttribute("position",new me(s,3)),f.setAttribute("color",new me(r,3)),f.setAttribute("uv",new me(o,2)),f.setIndex(new me(h,1)),f.computeVertexNormals();let p=new Be({vertexColors:!0,map:Fx(),roughness:.95,metalness:0}),g=new xe(f,p);return g.receiveShadow=!0,g.frustumCulled=!1,g}function kx(i){let n=document.createElement("canvas");n.width=512,n.height=4096;let s=n.getContext("2d"),r=i.len,o=i.width,a=wa(i.len);s.setTransform(512/o,0,0,4096/r,0,0),s.fillStyle="#34363a",s.fillRect(0,0,o,r);for(let l=0;l<5e3;l++){let h=40+a()*35|0;s.fillStyle=`rgba(${h},${h},${h+2},0.5)`,s.fillRect(a()*o,a()*r,.5+a()*2.5,2+a()*14)}s.fillStyle="#e9e9e4",s.fillRect(1.2,0,.9,r),s.fillRect(o-2.1,0,.9,r);for(let l=95;l<r-95;l+=60)s.fillRect(o/2-.45,l,.9,30);for(let l=0;l<2;l++){s.save(),l===1&&(s.translate(o,r),s.rotate(Math.PI));let h=u=>r-u;s.fillStyle="#e9e9e4";for(let u=0;u<12;u++){let f=4+(u<6?u:u+.9)*4.05;s.fillRect(f,h(36),1.8,30)}s.font="700 26px Arial",s.textAlign="center",s.textBaseline="alphabetic",s.save(),s.translate(o/2,h(46)),s.scale(.75,1),s.fillText(i.ids[l],0,0),s.restore();for(let[u,f]of[[150,3],[300,2],[450,2],[600,1],[750,1]])for(let p=0;p<f;p++)for(let g of[-1,1])s.fillRect(o/2+g*(9+p*3)-.9,h(u+22.5),1.8,22.5);for(let u of[-1,1])s.fillRect(o/2+u*12-3,h(450),6,50);for(let u=0;u<260;u++){s.fillStyle=`rgba(15,15,16,${.05+a()*.1})`;let f=o/2+(a()-.5)*18;s.fillRect(f,h(250+a()*500+60),.9+a(),40+a()*90)}s.restore()}let c=new Ui(n);return c.anisotropy=16,c.colorSpace=Se,c}function zx(i,t){let e=new ze;e.position.set(i.e,i.elev,-i.n),e.rotation.y=-i.hdg*di;let n=i.len,s=i.width,r=(x,R,A,E,C,T)=>{let S=new xe(new ss(x,R).rotateX(-Math.PI/2),T);return S.position.set(A,C,E),S.receiveShadow=!0,e.add(S),S},o=r(s,n+120,0,0,.25,new Be({color:3092788,roughness:.9})),a=r(s,n,0,0,.32,new Be({map:kx(i),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));r(s+30,n+120,0,0,.12,new Be({color:5593178,roughness:1}));let c=new Be({color:4671820,roughness:.95}),l=new on({color:14201372,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});r(40,n,190,0,.2,c),r(.6,n,190,0,.3,l);for(let x of[-n/2+40,-n/4,0,n/4,n/2-40])r(180,40,110,-x,.2,c),r(170,.6,115,-x,.3,l);r(330,1040,355,0,.18,new Be({color:5264214,roughness:.95}));let h=new Be({color:12172996,roughness:.7,metalness:.1}),u=new Be({color:2704220,roughness:.25,metalness:.6}),f=(x,R,A,E,C,T=h)=>{let S=new xe(new Gn(x,R,A),T);return S.position.set(E,R/2,C),S.castShadow=!0,S.receiveShadow=!0,e.add(S),S};f(70,24,620,580,0),f(72,14,600,579,0,u).position.y=14;for(let x=-2;x<=2;x++)f(90,10,14,500,x*130);f(16,70,16,640,-520),f(26,9,26,640,-520,u).position.y=72;for(let x=0;x<3;x++)f(120,34,110,620,520+x*140,new Be({color:9344926,roughness:.6,metalness:.3}));let p=[],g=[],_=(x,R,A,E,C,T)=>{p.push(x,R,A),g.push(E,C,T)};for(let x=-n/2;x<=n/2;x+=60)_(-s/2-1,.6,-x,1,1,.85),_(s/2+1,.6,-x,1,1,.85);for(let x=-n/2+30;x<=n/2;x+=30)_(0,.4,-x,1,1,1);for(let x of[-1,1]){for(let R=-s/2;R<=s/2;R+=3)_(R,.6,x*(n/2+2),0,1,.2),_(R,.6,x*(n/2-1),1,.05,.05);for(let R=30;R<=900;R+=30)for(let A=-4;A<=4;A+=2)_(A,1.5,x*(n/2+60+R),1,1,.9);for(let R of[300])for(let A=-22;A<=22;A+=2)_(A,1.5,x*(n/2+60+R),1,1,.9);for(let R=30;R<=900;R+=30)for(let A of[-1,1])for(let E=0;E<3;E++)_(A*(9+E*1.5),.4,x*(n/2-R),1,1,1)}for(let x=-n/2;x<=n/2;x+=40)_(170,.5,-x,.1,.3,1),_(210,.5,-x,.1,.3,1);let m=new Ee;m.setAttribute("position",new Ae(p,3)),m.setAttribute("color",new Ae(g,3));let d=new Ni({size:2.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1}),v=new cs(m,d);v.frustumCulled=!1,e.add(v),t.push(d);let y=[];for(let x=0;x<2;x++){let R=x===0?1:-1,A=new Ee,E=[],C=[];for(let P=0;P<4;P++)E.push(-R*(s/2+15+P*9),1,R*(n/2-300)),C.push(1,1,1);A.setAttribute("position",new Ae(E,3)),A.setAttribute("color",new Ae(C,3));let T=new Ni({size:5,sizeAttenuation:!1,vertexColors:!0,toneMapped:!1,depthWrite:!1,transparent:!0}),S=new cs(A,T);S.frustumCulled=!1,e.add(S),y.push({geo:A,rw:Hi[bn.indexOf(i)*2+x]})}return{grp:e,papi:y}}function Hx(i){let t=wa(99),e=new Gn(1,1,1).translate(0,.5,0),n=new Be({roughness:.75,metalness:.1}),s=2600,r=new as(e,n,s),o=new Dt,a=new Rt,c=[[6500,9e3,3800,1],[-9e3,5200,2600,.7],[16e3,3e3,2200,.6],[38e3,30500,2e3,.6],[-3e3,15e3,1800,.5]],l=0,h=0;for(;l<s&&h++<4e4;){let u=c[t()*c.length|0],f=t()*6.283,p=Math.pow(t(),.8)*u[2],g=Math.round((u[0]+Math.cos(f)*p)/70)*70,_=Math.round((u[1]+Math.sin(f)*p)/70)*70;if(ba(g,_)!=="grass")continue;let m=jr(g,_);if(m<1.5||m>700)continue;let d=1-p/u[2],v=18+t()*34,y=18+t()*34,x=6+t()*14+Math.pow(d,3)*t()*190*u[3];o.makeScale(v,x,y),o.setPosition(_,m-1,-g),r.setMatrixAt(l,o);let R=.55+t()*.35;a.setRGB(R,R*(.95+t()*.05),R*(.9+t()*.12)),r.setColorAt(l,a),l++}r.count=l,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!1,i.add(r)}function Vx(i){let t=wa(4242),e=new ra(1,2),n=new oa({color:16777215,emissive:14870510,emissiveIntensity:1}),s=300,r=7,o=new as(e,n,s*r),a=new Dt,c=new un,l=new I,h=new I,u=0;for(let f=0;f<s;f++){let p=(t()-.5)*15e4,g=(t()-.5)*15e4,_=1500+t()*900,m=280+t()*520;for(let d=0;d<r;d++){let v=m*(.55+t()*.6);h.set(p+(t()-.5)*m*2.6,_+v*.35+t()*m*.25,g+(t()-.5)*m*2.6),l.set(v,v*(.45+t()*.2),v),a.compose(h,c,l),o.setMatrixAt(u++,a)}}return o.frustumCulled=!1,o.userData.max=s*r,i.add(o),o}function Hf(i){let t=Bx();i.add(t);let e=new xe(new ss(9e5,9e5).rotateX(-Math.PI/2),new Be({color:1331310,roughness:.22,metalness:.1}));e.position.y=0,e.receiveShadow=!0,i.add(e);let n=[],s=[];for(let o of bn){let a=zx(o,n);i.add(a.grp),s.push(...a.papi)}Hx(i);let r=Vx(i);return{terrain:t,sea:e,clouds:r,setNight(o){for(let a of n)a.size=2.2+2.6*o,a.opacity=.75+.25*o},updatePapi(o,a,c){for(let l of s){let h=l.rw,u=h.crs*di,f=o-h.thrN,p=a-h.thrE,g=f*Math.cos(u)+p*Math.sin(u),_=Math.atan2(c-h.elev,Math.max(1,300-g))/di,m=l.geo.attributes.color,d=[3.5,3.17,2.83,2.5];for(let v=0;v<4;v++){let y=_>d[v];m.setXYZ(v,1,y?1:.05,y?1:.05)}m.needsUpdate=!0}}}}var Aa=class{constructor(){this.ctx=null,this.muted=!1,this.beepT=0,this.lastSay={}}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t,n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;this.master=e.createGain(),this.master.gain.value=.7,this.master.connect(e.destination);let o=(c,l,h)=>{let u=e.createBufferSource();u.buffer=s,u.loop=!0;let f=e.createBiquadFilter();f.type=c,f.frequency.value=l,f.Q.value=h;let p=e.createGain();return p.gain.value=0,u.connect(f),f.connect(p),p.connect(this.master),u.start(),{fl:f,g:p}},a=(c,l)=>{let h=e.createOscillator();h.type=c,h.frequency.value=l;let u=e.createGain();return u.gain.value=0,h.connect(u),u.connect(this.master),h.start(),{o:h,g:u}};this.roar=o("lowpass",300,.7),this.hiss=o("bandpass",2600,.8),this.wind=o("bandpass",800,.5),this.rumble=o("lowpass",70,1),this.fan=a("sawtooth",60),this.fan2=a("sawtooth",61.5),this.whine=a("triangle",800),this.warn=a("square",900)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7),t&&window.speechSynthesis&&speechSynthesis.cancel()}say(t,e=t,n=3){if(this.muted||!window.speechSynthesis)return;let s=performance.now()/1e3;if(this.lastSay[e]&&s-this.lastSay[e]<n)return;this.lastSay[e]=s;let r=new SpeechSynthesisUtterance(t);r.lang="en-US",r.rate=1.15,r.pitch=.9,r.volume=.9,speechSynthesis.pending&&speechSynthesis.cancel(),speechSynthesis.speak(r)}thump(t=1){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="sine",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(30,n+.35),r.gain.setValueAtTime(Math.min(1,.5*t),n),r.gain.exponentialRampToValueAtTime(.001,n+.5),s.connect(r),r.connect(this.master),s.start(n),s.stop(n+.55);let o=e.createOscillator(),a=e.createGain();o.type="sawtooth",o.frequency.setValueAtTime(1900,n),o.frequency.exponentialRampToValueAtTime(700,n+.25),a.gain.setValueAtTime(.08*t,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),o.connect(a),a.connect(this.master),o.start(n),o.stop(n+.32)}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=(p,g)=>p.setTargetAtTime(g,r,.08);if(s||t.crashed){for(let p of[this.roar,this.hiss,this.wind,this.rumble,this.fan,this.fan2,this.whine,this.warn])o(p.g.gain,0);return}let a=(t.n1[0]+t.n1[1]+t.n1[2]+t.n1[3])/400,c=e?.45:1,l=Math.pow(a,2.2);o(this.roar.g.gain,c*(.05+.75*l)),o(this.roar.fl.frequency,(e?160:260)+900*a),o(this.hiss.g.gain,c*.1*l*(e?.4:1)),o(this.fan.g.gain,c*(.03+.05*a)),o(this.fan.o.frequency,34+105*a),o(this.fan2.g.gain,c*(.03+.05*a)),o(this.fan2.o.frequency,34.6+106.5*a),o(this.whine.g.gain,c*.018*(.3+a)),o(this.whine.o.frequency,420+2400*a);let h=t.ias/(130*re);o(this.wind.g.gain,Math.min(.5,(e?.16:.1)*h*h+.12*t.sb*h*h+.05*t.gearPos*h*h)),o(this.wind.fl.frequency,500+500*Math.min(2,h)),o(this.rumble.g.gain,t.wow?Math.min(.9,t.gs/70)*(e?.9:.5)*(1+t.rough):0),this.beepT+=n;let u=0,f=900;t.stallWarn?(u=this.beepT%.12<.06?1:0,f=420):t.overspeed?(u=this.beepT%.18<.09?1:0,f=1400):t.cfgWarn||t.gearWarn?(u=this.beepT%1<.5?1:0,f=760):t.apDiscT>0&&(u=this.beepT%.3<.15?1:0,f=1100),o(this.warn.o.frequency,f),this.warn.g.gain.setTargetAtTime(u*.07,r,.005)}};var $t="#39e06b",Tn="#ff5cf4",He="#3fd8ff",be="#ffb224",wn="#ff3b30",Wt="#f2f4f7",Ah="#8b949e",Gx=(i,t=!0)=>`${t?"600 ":""}${i}px "Consolas","DejaVu Sans Mono","Menlo",monospace`,pn=(i,t,e)=>Math.min(e,Math.max(t,i)),ur=i=>String(Math.round((i%360+360)%360)||360).padStart(3,"0");function Vi(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function _t(i,t,e,n,s=Wt,r=18,o="center"){i.font=Gx(r),i.fillStyle=s,i.textAlign=o,i.textBaseline="middle",i.fillText(t,e,n)}function Vf(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);let s=t.ias/re,r=t.alt/ke,o=t.vs*196.85,a=(t.psi*Re%360+360)%360,c=t.ap,l=236,h=262,u=124,f=132,p=5.2;e.save(),e.beginPath(),e.roundRect(l-u,h-f,u*2,f*2,26),e.clip(),e.translate(l,h),e.rotate(-t.phi),e.translate(0,t.theta*Re*p),e.fillStyle="#2b83d6",e.fillRect(-600,-900,1200,900),e.fillStyle="#7b4d22",e.fillRect(-600,0,1200,900),e.strokeStyle=Wt,e.lineWidth=2,e.beginPath(),e.moveTo(-600,0),e.lineTo(600,0),e.stroke();for(let X=-90;X<=90;X+=2.5){if(X===0)continue;let ct=-X*p,wt=X%10===0?44:X%5===0?22:10;e.beginPath(),e.moveTo(-wt,ct),e.lineTo(wt,ct),e.stroke(),X%10===0&&(_t(e,Math.abs(X),-wt-16,ct,Wt,15),_t(e,Math.abs(X),wt+16,ct,Wt,15))}e.restore(),e.save(),e.translate(l,h),e.strokeStyle=Wt,e.lineWidth=2;for(let X of[-60,-45,-30,-20,-10,10,20,30,45,60]){let ct=(X-90)*Q,wt=f-4,Yt=wt-(Math.abs(X)===30||Math.abs(X)===60?14:8);e.beginPath(),e.moveTo(Math.cos(ct)*wt,Math.sin(ct)*wt),e.lineTo(Math.cos(ct)*Yt,Math.sin(ct)*Yt),e.stroke()}e.fillStyle=Wt,e.beginPath(),e.moveTo(0,-f+4),e.lineTo(-8,-f-8),e.lineTo(8,-f-8),e.fill(),e.rotate(-t.phi);let g=Math.abs(t.phi)>35*Q;e.fillStyle=g?be:Wt,e.beginPath(),e.moveTo(0,-f+6),e.lineTo(-9,-f+22),e.lineTo(9,-f+22),e.closePath(),e.fill();let _=pn(-t.beta*Re*3,-18,18);e.fillRect(-11+_,-f+25,22,5),e.restore(),e.fillStyle="#111",e.strokeStyle="#ffe94a",e.lineWidth=3;for(let X of[-1,1])e.beginPath(),e.rect(l+X*34-(X<0?46:0),h-4,46,8),e.fill(),e.stroke(),e.beginPath(),e.rect(l+X*34-(X<0?0:8),h-4,8,20),e.fill(),e.stroke();if(e.beginPath(),e.rect(l-4,h-4,8,8),e.fill(),e.stroke(),t.tas>30&&!t.wow){let X=Math.atan2(t.vs,Math.max(t.gs,1))*Re,wt=pn((t.track-t.psi)*Re,-20,20)*p,Yt=-(X-t.theta*Re)*p,zt=Math.cos(-t.phi),ce=Math.sin(-t.phi),D=l+wt*zt-Yt*ce,ue=h+wt*ce+Yt*zt;Math.abs(D-l)<u-10&&Math.abs(ue-h)<f-10&&(e.strokeStyle=$t,e.lineWidth=2,e.beginPath(),e.arc(D,ue,7,0,7),e.moveTo(D-7,ue),e.lineTo(D-20,ue),e.moveTo(D+7,ue),e.lineTo(D+20,ue),e.moveTo(D,ue-7),e.lineTo(D,ue-15),e.stroke())}let m=(t.agl-5.1)/ke;m<2500&&_t(e,Math.max(0,m<50?Math.round(m):Math.round(m/10)*10),l,h+f-16,m<400?be:$t,22),t.stallWarn?(e.fillStyle=wn,e.fillRect(l-48,h-80,96,28),_t(e,"STALL",l,h-66,"#fff",20)):t.gpwsPull&&(e.fillStyle=wn,e.fillRect(l-56,h-80,112,28),_t(e,"PULL UP",l,h-66,"#fff",20));let d=t.ils;if(d&&d.valid&&c.rw){e.strokeStyle=Wt,e.lineWidth=1.5;for(let Yt of[-2,-1,1,2])e.beginPath(),e.arc(l+Yt*38,h+f+14,4,0,7),e.stroke(),e.beginPath(),e.arc(l+u+14,h+Yt*38,4,0,7),e.stroke();e.beginPath(),e.moveTo(l,h+f+5),e.lineTo(l,h+f+23),e.moveTo(l+u+5,h),e.lineTo(l+u+23,h),e.stroke();let X=pn(-d.loc/.8,-2.4,2.4)*38,ct=pn(d.gs/.35,-2.4,2.4)*38,wt=(Yt,zt,ce)=>{e.beginPath(),e.moveTo(Yt-9,zt),e.lineTo(Yt,zt-6),e.lineTo(Yt+9,zt),e.lineTo(Yt,zt+6),e.closePath(),e.strokeStyle=Tn,e.lineWidth=2,e.stroke(),ce&&(e.fillStyle=Tn,e.fill())};wt(l+X,h+f+14,Math.abs(d.loc)<1.9),e.save(),e.translate(l+u+14,h+ct),e.rotate(Math.PI/2),wt(0,0,Math.abs(d.gs)<.8),e.restore(),_t(e,`ILS ${c.rw.id}`,46,426,Tn,14,"left"),_t(e,`${ur(c.rw.crs)}\xB0  ${(d.dAim/1852).toFixed(1)} NM`,46,444,Tn,14,"left")}let v=34,y=62,x=h-130,R=260,A=2.4;e.fillStyle="#39414c",e.fillRect(v,x,y,R),e.save(),e.beginPath(),e.rect(v-4,x,y+26,R),e.clip(),e.strokeStyle=Wt,e.lineWidth=2;let E=Math.floor((s-60)/10)*10;for(let X=Math.max(30,E);X<s+60;X+=10){let ct=h-(X-s)*A;e.beginPath(),e.moveTo(v+y-12,ct),e.lineTo(v+y,ct),e.stroke(),X%20===0&&_t(e,X,v+y-16,ct,Wt,17,"right")}let C=t.vstall/re*Math.sqrt(Math.max(.5,t.nzSm||1)),T=t.vmaxKt,S=h-(C-s)*A,P=h-(C*1.13-s)*A,H=h-(T-s)*A;if(!t.wow){e.fillStyle=be,e.fillRect(v+y,P,5,S-P),e.fillStyle=wn;for(let X=S;X<x+R+8;X+=8)e.fillRect(v+y,X,8,5)}e.fillStyle=wn;for(let X=H;X>x-8;X-=8)e.fillRect(v+y,X-5,8,5);if(c.athr||c.on){let X=pn(h-(c.spd-s)*A,x+2,x+R-2);e.fillStyle=Tn,e.beginPath(),e.moveTo(v+y,X),e.lineTo(v+y+12,X-8),e.lineTo(v+y+12,X+8),e.fill()}let z=pn(t.acc/re*10,-50,50);Math.abs(z)>2&&(e.strokeStyle=$t,e.lineWidth=3,e.beginPath(),e.moveTo(v+y+16,h),e.lineTo(v+y+16,h-z*A),e.stroke(),e.beginPath(),e.moveTo(v+y+11,h-z*A+Math.sign(z)*7),e.lineTo(v+y+16,h-z*A),e.lineTo(v+y+21,h-z*A+Math.sign(z)*7),e.stroke()),e.restore(),e.fillStyle="#000",e.strokeStyle=Wt,e.lineWidth=2,e.beginPath(),e.rect(v-6,h-18,y-4,36),e.fill(),e.stroke(),_t(e,Math.round(s<30?0:s),v+y-16,h,s>T?wn:!t.wow&&s<C*1.05?be:Wt,24,"right"),_t(e,c.athr||c.on?c.spd:"---",v+y/2,x-14,Tn,18),t.mach>.4?_t(e,"M "+t.mach.toFixed(3).slice(1),v+y/2,x+R+14,$t,16):_t(e,"GS "+Math.round(t.gs/re),v+y/2,x+R+14,$t,16);let G=392,$=72,q=.2;e.fillStyle="#39414c",e.fillRect(G,x,$,R),e.save(),e.beginPath(),e.rect(G-14,x,$+18,R),e.clip(),e.strokeStyle=Wt,e.lineWidth=2;let it=Math.floor((r-700)/100)*100;for(let X=it;X<r+700;X+=100){let ct=h-(X-r)*q;e.beginPath(),e.moveTo(G,ct),e.lineTo(G+10,ct),e.stroke(),X%200===0&&_t(e,X,G+$-4,ct,Wt,15,"right")}let W=h-(t.elev/ke+17-r)*q;e.fillStyle="#a0652a",W<x+R&&e.fillRect(G,W,$,x+R-W);{let X=pn(h-(c.alt-r)*q,x+2,x+R-2);e.strokeStyle=Tn,e.lineWidth=3,e.beginPath(),e.moveTo(G-10,X-12),e.lineTo(G-10,X+12),e.lineTo(G+2,X+12),e.lineTo(G-6,X),e.lineTo(G+2,X-12),e.closePath(),e.stroke()}e.restore(),e.fillStyle="#000",e.strokeStyle=Wt,e.lineWidth=2,e.beginPath(),e.rect(G+4,h-18,$+6,36),e.fill(),e.stroke();let rt=Math.round(r/20)*20;_t(e,rt,G+$+6,h,Wt,22,"right"),_t(e,c.alt,G+$/2+4,x-14,Tn,18),_t(e,"STD",G+$/2+4,x+R+14,$t,16);let lt=480;e.fillStyle="#39414c",e.beginPath(),e.moveTo(lt,x+30),e.lineTo(lt+14,x+30),e.lineTo(lt+28,x+70),e.lineTo(lt+28,x+R-70),e.lineTo(lt+14,x+R-30),e.lineTo(lt,x+R-30),e.fill();let St=X=>{let ct=Math.abs(X),wt=ct<1e3?ct/1e3*44:ct<2e3?44+(ct-1e3)/1e3*26:70+pn((ct-2e3)/4e3,0,1)*26;return h-Math.sign(X)*wt};e.strokeStyle=Wt,e.lineWidth=1.5;for(let X of[-6e3,-2e3,-1e3,-500,500,1e3,2e3,6e3]){let ct=St(X);e.beginPath(),e.moveTo(lt+2,ct),e.lineTo(lt+9,ct),e.stroke()}e.strokeStyle=Wt,e.lineWidth=3,e.beginPath(),e.moveTo(lt+30,h),e.lineTo(lt+4,St(o)),e.stroke(),Math.abs(o)>150&&_t(e,Math.round(Math.abs(o)/50)*50,lt+30,o>0?x+14:x+R-14,o<-2500?be:Wt,15,"right");let Pt=468,ee=3.4;e.fillStyle="#39414c",e.fillRect(l-124,Pt-14,248,44),e.save(),e.beginPath(),e.rect(l-124,Pt-16,248,48),e.clip(),e.strokeStyle=Wt,e.lineWidth=2;for(let X=Math.floor(a-40);X<=a+40;X++){if(X%5!==0)continue;let ct=l+(X-a)*ee;e.beginPath(),e.moveTo(ct,Pt-14),e.lineTo(ct,Pt-(X%10===0?2:7)),e.stroke(),X%10===0&&_t(e,String(Math.round((X%360+360)%360/10)||36).padStart(2,"0"),ct,Pt+12,Wt,16)}let Y=(c.hdg-a+540)%360-180;{let X=pn(l+Y*ee,l-120,l+120);e.strokeStyle=Tn,e.lineWidth=3,e.strokeRect(X-8,Pt-16,16,9)}let st=pn((t.track-t.psi)*Re,-30,30);e.strokeStyle=$t,e.lineWidth=2,e.beginPath();let xt=l+st*ee;e.moveTo(xt,Pt-12),e.lineTo(xt-6,Pt-4),e.lineTo(xt,Pt+2),e.lineTo(xt+6,Pt-4),e.closePath(),e.stroke(),e.restore(),e.fillStyle="#ffe94a",e.fillRect(l-1.5,Pt-22,3,14),_t(e,ur(a)+"\xB0",l+150,Pt+6,$t,18),e.strokeStyle="#586270",e.lineWidth=1.5;for(let X of[128,256,384])e.beginPath(),e.moveTo(X,6),e.lineTo(X,62),e.stroke();let ht=c.athr?"SPEED":t.rev>.5?"REV":t.thr>.97?"TOGA":"MAN THR";_t(e,ht,64,22,c.athr?$t:Wt,19),_t(e,c.on?c.lat==="LOC"?"LOC":"HDG":"",192,22,$t,19),_t(e,c.on?c.ver==="FLARE"?"FLARE":c.ver==="GS"?"G/S":Math.abs(c.alt*ke-t.alt)<60?"ALT":c.alt*ke>t.alt?"CLB":"DES":"",320,22,$t,19),c.app&&c.lat!=="LOC"&&_t(e,"LOC",192,46,He,16),c.app&&c.ver==="ALT"&&_t(e,"G/S",320,46,He,16),_t(e,c.on?"AP1":"",448,18,Wt,18),_t(e,c.athr?"A/THR":"",448,38,Wt,15),_t(e,t.law==="normal"?t.fbw>.5?"NORMAL LAW":"GROUND LAW":"DIRECT LAW",448,56,t.law==="normal"?$t:be,12),t.aProt&&!t.wow&&_t(e,"\u03B1 PROT",64,46,be,16)}function Gf(i,t,e){let n=i.getContext("2d"),s=512;n.fillStyle="#05070a",n.fillRect(0,0,s,s);let r=256,o=420,a=330,c=t.psi*Re,l=a/(e*1852);n.save(),n.translate(r,o),n.strokeStyle="#5b6470",n.lineWidth=1.5,n.setLineDash([6,8]);for(let d of[.25,.5,.75])n.beginPath(),n.arc(0,0,a*d,-Math.PI*.95,-Math.PI*.05),n.stroke();n.setLineDash([]),_t(n,e/2,-a*.5*.72,-a*.5*.72+4,He,14),n.save(),n.rotate(-t.psi),n.strokeStyle=Wt,n.lineWidth=2,n.beginPath(),n.arc(0,0,a,0,7),n.stroke();for(let d=0;d<360;d+=5)n.save(),n.rotate(d*Q),n.beginPath(),n.moveTo(0,-a),n.lineTo(0,-a+(d%10===0?14:7)),n.stroke(),d%30===0&&_t(n,d/10||36,0,-a+28,Wt,17),n.restore();n.save(),n.rotate(t.ap.hdg*Q),n.strokeStyle=Tn,n.lineWidth=3,n.strokeRect(-9,-a-9,18,9),t.ap.on&&t.ap.lat==="HDG"&&(n.setLineDash([8,8]),n.lineWidth=1.5,n.beginPath(),n.moveTo(0,0),n.lineTo(0,-a),n.stroke()),n.restore();let h=(d,v)=>[(v-t.pos[1])*l,-(d-t.pos[0])*l];for(let d of bn){let v=d.hdg*Q,y=Math.cos(v)*d.len/2,x=Math.sin(v)*d.len/2,R=h(d.n-y,d.e-x),A=h(d.n+y,d.e+x),E=h(d.n,d.e);n.strokeStyle="#7e8794",n.lineWidth=1.2,n.setLineDash([10,8]);let C=15*1852*l;n.beginPath(),n.moveTo(R[0]-Math.sin(v)*C,R[1]+Math.cos(v)*C),n.lineTo(R[0],R[1]),n.moveTo(A[0],A[1]),n.lineTo(A[0]+Math.sin(v)*C,A[1]-Math.cos(v)*C),n.stroke(),n.setLineDash([]),n.strokeStyle=Wt,n.lineWidth=Math.max(3,60*l),n.beginPath(),n.moveTo(R[0],R[1]),n.lineTo(A[0],A[1]),n.stroke(),n.strokeStyle=He,n.lineWidth=2,n.beginPath(),n.arc(E[0],E[1],9,0,7),n.stroke(),n.save(),n.translate(E[0]+14,E[1]-14),n.rotate(t.psi),_t(n,d.id,0,0,He,15,"left"),n.restore()}if(t.ap.rw&&t.ap.app){let d=t.ap.rw,v=h(d.thrN,d.thrE);n.strokeStyle=Tn,n.lineWidth=2,n.beginPath(),n.arc(v[0],v[1],6,0,7),n.stroke()}n.restore(),n.save(),n.rotate(t.track-t.psi),n.strokeStyle=$t,n.lineWidth=2,n.beginPath(),n.moveTo(0,-30),n.lineTo(0,-a),n.stroke(),n.restore(),n.strokeStyle="#ffe94a",n.lineWidth=3,n.beginPath(),n.moveTo(0,-16),n.lineTo(0,18),n.moveTo(-18,0),n.lineTo(18,0),n.moveTo(-8,14),n.lineTo(8,14),n.stroke(),n.fillStyle="#ffe94a",n.beginPath(),n.moveTo(0,-a+1),n.lineTo(-7,-a-11),n.lineTo(7,-a-11),n.fill(),n.restore(),n.fillStyle="#05070a",n.fillRect(0,0,s,54),_t(n,"GS "+Math.round(t.gs/re),12,16,$t,17,"left"),_t(n,"TAS "+Math.round(t.tas/re),108,16,$t,17,"left");let u=t.wind.dir,f=Math.hypot(t.windW[0],t.windW[1])/re;_t(n,ur(u)+"\xB0 / "+Math.round(f),12,38,$t,16,"left"),f>1&&(n.save(),n.translate(128,38),n.rotate((u+180)*Q-t.psi),n.strokeStyle=$t,n.lineWidth=2,n.beginPath(),n.moveTo(0,10),n.lineTo(0,-10),n.lineTo(-5,-3),n.moveTo(0,-10),n.lineTo(5,-3),n.stroke(),n.restore()),_t(n,"HDG",228,16,Wt,14),n.strokeStyle=Wt,n.lineWidth=2,n.strokeRect(250,4,58,26),_t(n,ur(c),279,18,Wt,20),_t(n,"MAG",330,16,$t,14);let p=t.ap.rw?t.ap.rw.ap:null,g=1e12;if(!p)for(let d of bn){let v=Math.hypot(d.n-t.pos[0],d.e-t.pos[1]);v<g&&(g=v,p=d)}let _=Math.hypot(p.n-t.pos[0],p.e-t.pos[1]),m=Math.atan2(p.e-t.pos[1],p.n-t.pos[0])*Re;_t(n,p.id,500,14,Wt,17,"right"),_t(n,ur(m)+"\xB0  "+(_/1852).toFixed(1)+" NM",500,36,Wt,16,"right"),_t(n,e+" NM",12,498,He,15,"left")}function Wf(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n);for(let l=0;l<4;l++){let h=68+l*98,u=86,f=40,p=t.n1[l],g=Math.PI*.75,_=g+Math.PI*1.35;e.lineWidth=3,e.strokeStyle=Wt,e.beginPath(),e.arc(h,u,f,g,g+(_-g)*.96),e.stroke(),e.strokeStyle=wn,e.beginPath(),e.arc(h,u,f,g+(_-g)*.96,_+.12),e.stroke();let m=g+(_-g)*pn(p/104,0,1.03);e.fillStyle="rgba(120,130,140,0.35)",e.beginPath(),e.moveTo(h,u),e.arc(h,u,f-2,g,m),e.fill(),e.strokeStyle=t.engOn[l]?Wt:be,e.lineWidth=3,e.beginPath(),e.moveTo(h,u),e.lineTo(h+Math.cos(m)*f,u+Math.sin(m)*f),e.stroke();let d=g+(_-g)*pn((22+78*t.thr)/104,0,1);e.strokeStyle=He,e.lineWidth=2,e.beginPath(),e.moveTo(h+Math.cos(d)*(f+2),u+Math.sin(d)*(f+2)),e.lineTo(h+Math.cos(d)*(f+9),u+Math.sin(d)*(f+9)),e.stroke(),e.strokeStyle=Wt,e.lineWidth=1.5,e.strokeRect(h-4,u-34,50,24),_t(e,p.toFixed(1),h+43,u-21,t.engOn[l]?$t:be,17,"right"),t.rev>.05&&_t(e,"REV",h,u+22,t.rev>.9?$t:be,16),_t(e,Math.round(Math.abs(t.thrust[l])/1e3),h,u+54,$t,15)}_t(e,"N1 %",256,16,He,15),_t(e,"THRUST kN",256,158,He,13),e.strokeStyle="#586270",e.lineWidth=1.5,e.beginPath(),e.moveTo(10,172),e.lineTo(502,172),e.moveTo(256,172),e.lineTo(256,372),e.moveTo(10,372),e.lineTo(502,372),e.stroke();let s=(l,h,u,f=$t,p="")=>{_t(e,l,20,u,He,15,"left"),_t(e,h,200,u,f,18,"right"),p&&_t(e,p,206,u,He,12,"left")};s("FUEL",(t.fuel/1e3).toFixed(1),194,t.fuel<6e3?be:$t,"t"),s("FF",(t.ff*3.6).toFixed(1),220,$t,"t/h"),s("GW",(t.mass()/1e3).toFixed(1),246,$t,"t"),s("TAT",(t.at.T-273.15+t.mach*t.mach*.2*t.at.T).toFixed(0),272,$t,"\xB0C"),s("G LOAD",(t.nzSm??1).toFixed(2),298,Math.abs((t.nzSm??1)-1)>1?be:$t,"g"),s("AOA",(t.alpha*Re).toFixed(1),324,t.aProt?be:$t,"\xB0"),s("TRIM",(t.trimI*Re).toFixed(1),350,$t,"\xB0");let r=276;_t(e,"FLAPS",r,194,He,15,"left"),e.strokeStyle=Wt,e.lineWidth=1.5,e.strokeRect(r+62,186,110,14),e.fillStyle=Math.abs(t.flapPos-t.flapSel)>.02?Tn:$t,e.fillRect(r+62,186,110*t.flapPos/6,14),_t(e,Gt.flapDeg[t.flapSel],r+214,194,$t,18,"right"),_t(e,"SPD BRK",r,222,He,15,"left"),e.strokeRect(r+82,214,90,14),e.fillStyle=t.sb>.02?be:$t,e.fillRect(r+82,214,90*t.sb,14),t.gndSpoiler&&_t(e,"GND",r+214,222,$t,14,"right"),_t(e,"GEAR",r,262,He,15,"left");let o=t.gearPos;[[r+128,246],[r+92,276],[r+164,276]].forEach(([l,h])=>{if(o>.99)e.fillStyle=$t,e.fillRect(l-15,h-11,30,22),_t(e,"DN",l,h,"#000",14);else if(o>.01){e.strokeStyle=be,e.lineWidth=2,e.strokeRect(l-15,h-11,30,22);for(let u=-10;u<14;u+=7)e.beginPath(),e.moveTo(l+u,h+10),e.lineTo(l+u+8,h-10),e.stroke()}else e.strokeStyle="#586270",e.lineWidth=1.5,e.strokeRect(l-15,h-11,30,22),_t(e,"UP",l,h,Ah,13)}),_t(e,"BRAKES",r,312,He,15,"left"),_t(e,t.park?"PARK":t.ctl.brake>.05?"ON":"OFF",r+214,312,t.park?be:$t,17,"right"),_t(e,"CTL",r,344,He,15,"left");let a=(l,h,u)=>{e.strokeStyle="#586270",e.strokeRect(l,334,44,10),e.fillStyle=$t,e.fillRect(l+22+pn(h,-1,1)*20-2,332,4,14),_t(e,u,l+22,358,Ah,11)};a(r+42,t.da/(25*Q),"AIL"),a(r+100,-t.de/(25*Q),"ELEV"),a(r+158,t.dr/(30*Q),"RUD");let c=[];t.crashed&&c.push([wn,"CRASH"]),t.stallWarn&&c.push([wn,"STALL"]),t.overspeed&&c.push([wn,"OVERSPEED"]),t.gpwsPull&&c.push([wn,"TERRAIN  PULL UP"]),t.cfgWarn&&c.push([wn,"CONFIG "+t.cfgWarn]),t.gearWarn&&c.push([wn,"GEAR NOT DOWN"]),t.strike&&c.push([be,"GROUND CONTACT"]),t.fuel<6e3&&c.push([be,"FUEL LO"]),t.engOn[0]||c.push([be,"ENG 1-4 FLAME OUT"]),t.law!=="normal"&&c.push([be,"F/CTL DIRECT LAW"]),t.park&&t.thr>.3&&c.push([be,"PARK BRK ON"]),t.park&&c.push([Wt,"PARK BRK"]),t.sbSel>0&&!t.wow&&c.push([Wt,"SPEEDBRAKE EXT"]),t.ap.app&&c.push([Wt,"APPR ARMED "+t.ap.rw.id]),c.slice(0,6).forEach(([l,h],u)=>_t(e,h,20,392+u*21,l,17,"left"))}function Xf(i,t){let e=i.getContext("2d"),n=512;e.fillStyle="#05070a",e.fillRect(0,0,n,n),_t(e,"SOLARIS R7  \u2014  FLIGHT DATA",256,22,He,18),[["POSITION",`N ${(t.pos[0]/1852).toFixed(1)}  E ${(t.pos[1]/1852).toFixed(1)} NM`],["ALTITUDE",`${Math.round(t.alt/ke)} ft   RA ${Math.max(0,Math.round((t.agl-5.1)/ke))} ft`],["IAS / TAS / GS",`${Math.round(t.ias/re)} / ${Math.round(t.tas/re)} / ${Math.round(t.gs/re)} kt`],["MACH",t.mach.toFixed(3)],["V/S",`${Math.round(t.vs*196.85)} fpm`],["PITCH / BANK",`${(t.theta*Re).toFixed(1)}\xB0 / ${(t.phi*Re).toFixed(1)}\xB0`],["WIND",`${ur(t.wind.dir)}\xB0 / ${Math.round(t.wind.spd/re)} kt`],["OAT",`${(t.at.T-273.15).toFixed(0)} \xB0C`],["VS1G / VREF",`${Math.round(t.vstall/re)} / ${Math.round(t.vstall/re*1.23)} kt`],["VMAX",`${Math.round(t.vmaxKt)} kt`],["RANGE (EST)",`${Math.round(t.fuel/Math.max(t.ff,.2)*t.gs/1852)} NM`],["LAST LANDING",t.touchdown?`${-t.touchdown.fpm} fpm  ${t.touchdown.g.toFixed(2)} g  ${t.touchdown.kt} kt`:"\u2014"]].forEach(([r,o],a)=>{_t(e,r,24,66+a*34,Ah,16,"left"),_t(e,o,490,66+a*34,$t,18,"right")})}function qf(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#000",e.fillRect(0,0,n,n),e.save(),e.translate(128,128),e.rotate(-t.phi),e.translate(0,t.theta*Re*3),e.fillStyle="#2b83d6",e.fillRect(-400,-600,800,600),e.fillStyle="#7b4d22",e.fillRect(-400,0,800,600),e.strokeStyle=Wt,e.lineWidth=2;for(let s=-30;s<=30;s+=10)e.beginPath(),e.moveTo(-24,-s*3),e.lineTo(24,-s*3),e.stroke();e.restore(),e.strokeStyle="#ffe94a",e.lineWidth=4,e.beginPath(),e.moveTo(88,128),e.lineTo(112,128),e.moveTo(144,128),e.lineTo(168,128),e.stroke(),e.fillStyle="rgba(0,0,0,.65)",e.fillRect(0,108,58,40),e.fillRect(186,108,70,40),_t(e,Math.round(t.ias/re),52,128,Wt,22,"right"),_t(e,Math.round(t.alt/ke/10)*10,252,128,Wt,20,"right")}function Yf(i,t){let e=i.getContext("2d"),n=256;e.fillStyle="#031006",e.fillRect(0,0,n,n),["  SOLARIS R7  IDENT","","MODEL        ENGINES","767B-R7      4xH2/ABEP","","UTC  "+new Date().toISOString().slice(11,19),"FOB  "+(t.fuel/1e3).toFixed(1)+" T","GW   "+(t.mass()/1e3).toFixed(1)+" T","","DEST "+(t.ap.rw?t.ap.rw.id:"----")].forEach((o,a)=>_t(e,o,10,22+a*23,a===0?Wt:$t,15,"left"))}var kt=i=>document.getElementById(i),Ze=(i,t,e)=>Math.min(e,Math.max(t,i)),Ie=new Ko({antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Ie.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ie.setSize(innerWidth,innerHeight);Ie.toneMapping=Cl;Ie.toneMappingExposure=.5;Ie.shadowMap.enabled=!0;Ie.shadowMap.type=El;document.body.prepend(Ie.domElement);var Ce=new Hr,ve=new Pe(60,innerWidth/innerHeight,.08,6e5);Ce.add(ve);var Uh=new ze;Ce.add(Uh);var us=new ze;us.matrixAutoUpdate=!1;Ce.add(us);var fs=new ze;fs.position.set(-29,.5,0);us.add(fs);var On=new $r;On.scale.setScalar(45e4);Ce.add(On);var An=new sr(16777215,3);An.castShadow=!0;An.shadow.mapSize.set(2048,2048);Object.assign(An.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:10,far:500});An.shadow.bias=-4e-4;An.shadow.normalBias=.08;Ce.add(An);Ce.add(An.target);var td=new ha(12572927,5591103,.9);Ce.add(td);Ce.fog=new $o(13229295,2e-5);var Wx=new tr(Ie),Eh=new Hr,Ea=null,dr=Hf(Uh),no=[{name:"\u767D\u5929",el:48,az:140,exp:.5,sun:3.2,hemi:.9,fog:[.74,.83,.93],night:0},{name:"\u9EC3\u660F",el:5,az:262,exp:.62,sun:2.2,hemi:.55,fog:[.8,.62,.5],night:.5},{name:"\u591C\u665A",el:-14,az:262,exp:.9,sun:0,hemi:.1,fog:[.02,.03,.06],night:1}],La=[{name:"\u6674\u6717\u7121\u98A8",dir:0,spd:0,turb:0,fog:16e-6,clouds:.3},{name:"\u5C11\u96F2\u5FAE\u98A8",dir:320,spd:10,turb:.6,fog:22e-6,clouds:1},{name:"\u5F37\u5074\u98A8\u4E82\u6D41",dir:280,spd:24,turb:2.2,fog:3e-5,clouds:1},{name:"\u4F4E\u80FD\u898B\u5EA6",dir:20,spd:6,turb:.5,fog:3e-4,clouds:1}],ps=0,pr=1,Lh=new I;function gr(){let i=no[ps],t=La[pr],e=(90-i.el)*Q,n=-i.az*Q+Math.PI;Lh.set(Math.sin(i.az*Q)*Math.cos(i.el*Q),Math.sin(i.el*Q),-Math.cos(i.az*Q)*Math.cos(i.el*Q));let s=On.material.uniforms;s.sunPosition.value.copy(Lh),s.turbidity.value=t.fog>1e-4?12:4,s.rayleigh.value=i.el<10?2.6:1.9,s.mieCoefficient.value=.004,s.mieDirectionalG.value=.8,Ie.toneMappingExposure=i.exp,An.intensity=i.sun*(t.fog>1e-4?.45:1),td.intensity=i.hemi*(t.fog>1e-4?1.25:1),An.color.set(i.el<10?16756848:16774374);let r=t.fog>1e-4;Ce.fog.color.setRGB(r?i.night===1?.03:.72-.25*i.night:i.fog[0],r?i.night===1?.035:.74-.28*i.night:i.fog[1],r?i.night===1?.05:.77-.3*i.night:i.fog[2]),Ce.fog.density=t.fog,On.visible=!r,Ce.background=r?Ce.fog.color:null,dr.clouds.count=Math.round(dr.clouds.userData.max*t.clouds/7)*7,dr.clouds.material.emissiveIntensity=1*(1-.93*i.night),dr.clouds.material.color.setScalar(1-.8*i.night),dr.setNight(i.night),j.wind.dir=t.dir,j.wind.spd=t.spd*re,j.wind.turb=t.turb,Ce.remove(On),Eh.add(On),On.visible=!0,Ea&&Ea.dispose(),Ea=Wx.fromScene(Eh,0,1,5e5),Ce.environment=Ea.texture,Eh.remove(On),Ce.add(On),On.visible=!r,Ce.environmentIntensity=(i.night===1?.25:.9)*(r?.6:1),kt("selTime").value=ps,kt("selWx").value=pr}var j=new Ta,Ne=new Aa,Oh=Vi(512,512),Fh=Vi(512,512),Bh=Vi(512,512),ed=Vi(512,512),nd=Vi(256,256),id=Vi(256,256),mi={};for(let[i,t]of Object.entries({PFD:Oh,ND:Fh,EICAS:Bh,MFD:ed,STBY:nd,CDU:id})){let e=new Ui(t);e.flipY=!1,e.colorSpace=Se,e.anisotropy=8,mi[i]=e}kt("instr").append(Oh,Fh,Bh);var Qr=20,Qe={gear:[],fans:[],cockpitGlass:[],doorsOpen:null,doorsClosed:null,lights:[]};function Xx(i){let t=kt(i);if(!t)return null;let e=atob(t.textContent.trim()),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}async function Zf(i,t){let e=new xa,n=Xx("glb-"+i);if(!n){let s=(window.__GLB_DIR??"models/")+i,r=(window.__GLB_PARTS||{})[i],o=r?Array.from({length:r},(f,p)=>`${s}.${p}.bin`):[s+(window.__GLB_EXT||".glb")],a=[],c=0,l=0;for(let f of o){let p=await fetch(f);if(!p.ok)throw new Error(f+" "+p.status);let g=+p.headers.get("content-length")||0,_=p.body.getReader(),m=0;for(;;){let{done:d,value:v}=await _.read();if(d)break;a.push(v),c+=v.length,m+=v.length,t&&g&&t((l+m/g)/o.length)}l++}let h=new Uint8Array(c),u=0;for(let f of a)h.set(f,u),u+=f.length;n=h.buffer}return new Promise((s,r)=>e.parse(n,"",o=>s(o.scene),r))}function qx(i,t,e){let n=i.geometry.index?i.geometry.toNonIndexed():i.geometry,s=n.attributes.position,r=[],o=Array.from({length:e},()=>[]);for(let a=0;a<s.count;a+=3){let c=(s.getX(a)+s.getX(a+1)+s.getX(a+2))/3,l=(s.getY(a)+s.getY(a+1)+s.getY(a+2))/3,h=(s.getZ(a)+s.getZ(a+1)+s.getZ(a+2))/3;o[t(c,l,h)].push(a,a+1,a+2)}for(let a of o){let c=new Ee;for(let h of Object.keys(n.attributes)){let u=n.attributes[h],f=new u.array.constructor(a.length*u.itemSize);a.forEach((p,g)=>{for(let _=0;_<u.itemSize;_++)f[g*u.itemSize+_]=u.array[p*u.itemSize+_]}),c.setAttribute(h,new me(f,u.itemSize,u.normalized))}let l=new xe(c,i.material);l.castShadow=!0,r.push(l)}return r}function Yx(){let i=Vi(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ui(i)}async function Zx(){let i=await Zf("exterior",u=>{kt("loadbar").style.width=u*80+"%"}),t=await Zf("cockpit",u=>{kt("loadbar").style.width=80+u*20+"%"});fs.add(i),fs.add(t),i.traverse(u=>{if(!u.isMesh)return;u.castShadow=!0,u.receiveShadow=!0;let f=u.material.name||"";/Glass|Window/.test(f)&&(u.material.transparent=!0,u.material.opacity=Math.min(u.material.opacity,.55),u.material.roughness=.05,u.material.metalness=.9,u.castShadow=!1),/Paint|Nacelle|Wing|Navy/.test(f)&&(u.material.roughness=Math.min(u.material.roughness,.35),u.material.envMapIntensity=1.1)}),t.traverse(u=>{if(!u.isMesh)return;u.receiveShadow=!0,u.castShadow=!1;let f=/M_FD_Screen_(\w+)/.exec(u.material.name||"");f&&mi[f[1]]&&(u.material=new on({map:mi[f[1]],toneMapped:!1}))}),fs.updateMatrixWorld(!0);let e=u=>i.getObjectByName(u);for(let u of["Ext_CockpitWindows"]){let f=e(u);f&&Qe.cockpitGlass.push(f)}let n=(u,f,p)=>{let g=new ze;return g.position.set(u,f,p),i.add(g),g},s=n(31,-1.75,-6.1),r=n(31,-1.75,6.1),o=n(1.5,-2.2,0),a=(u,f)=>{f&&u.attach(f)};a(s,e("Ext_MainGear_R")),a(r,e("Ext_MainGear_L")),a(o,e("Ext_NoseGear"));let c=e("Ext_GearDetail")||i.children.find(u=>u.name.startsWith("Ext_GearDetail"));if(c){let u=[];c.traverse(f=>{f.isMesh&&u.push(f)}),c.updateMatrixWorld(!0);for(let f of u){let p=new Dt().copy(fs.matrixWorld).invert().multiply(f.matrixWorld),g=new I;qx(f,(m,d,v)=>(g.set(m,d,v).applyMatrix4(p),g.x<12?0:g.z<0?1:2),3).forEach((m,d)=>{m.applyMatrix4(p),i.add(m),[o,s,r][d].attach(m)}),f.visible=!1}}Qe.gear=[{p:o,ax:"z",ang:-100*Q},{p:s,ax:"x",ang:-84*Q},{p:r,ax:"x",ang:84*Q}],Qe.doorsOpen=e("Ext_GearDoors_Open"),Qe.doorsClosed=e("Ext_GearDoors_Closed");for(let u of["Eng_H2_R","Eng_H2_L","Eng_ABEP_R","Eng_ABEP_L"]){let f=e(u);if(!f)continue;let p=[];if(f.traverse(d=>{d.isMesh&&/Fan|Spinner|Hub|BladeEdge/.test(d.material.name||"")&&!/Inlet/.test(d.material.name)&&p.push(d)}),!p.length)continue;let g=new rn;p.forEach(d=>g.expandByObject(d));let _=g.getCenter(new I);i.worldToLocal(_);let m=n(_.x,_.y,_.z);p.forEach(d=>m.attach(d)),Qe.fans.push({piv:m,idx:u.includes("ABEP")?u.endsWith("_L")?0:3:u.endsWith("_L")?1:2})}let l=Yx(),h=(u,f,p,g,_,m)=>{let d=new Jo(new Vr({map:l,color:g,blending:ko,depthWrite:!1,transparent:!0,toneMapped:!1}));d.position.set(u,p,-f),d.scale.setScalar(_),i.add(d),Qe.lights.push({s:d,kind:m,size:_})};h(50.25,35.95,2.75,2162512,1.6,"nav"),h(50.25,-35.95,2.75,16719904,1.6,"nav"),h(65.1,0,2.6,16777215,1.3,"nav"),h(50.55,35.95,2.75,16777215,5,"strobe"),h(50.55,-35.95,2.75,16777215,5,"strobe"),h(22,0,3.8,16722458,3,"beacon"),h(44,0,-2.6,16722458,3,"beacon"),h(1.4,0,-3.3,16774880,4.5,"land"),h(24.5,4.2,-1.2,16774880,4,"land"),h(24.5,-4.2,-1.2,16774880,4,"land")}var ms=new Set,Fn=0,an={yaw:0,pitch:.07,fov:62},gn={az:.35,el:.16,dist:120},Wi=!0,mr=!1,Ra=0,Gi=[0,0,0],Da=!1;function kh(i,t){let e=i.key.length===1?i.key.toLowerCase():i.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","PageUp","PageDown","Home","End","Tab","Backspace"].includes(i.key)&&i.preventDefault(),t?ms.add(e):ms.delete(e),!(!t||i.repeat)){if(e==="Escape"){sd();return}if(!(!mr||Wi||j.crashed))switch(e){case"g":j.toggleGear();break;case"f":j.flaps(1);break;case"v":j.flaps(-1);break;case"p":j.park=!j.park,j.say(j.park?"\u505C\u6A5F\u715E\u8ECA \u958B":"\u505C\u6A5F\u715E\u8ECA \u95DC");break;case"x":j.sbSel=j.sbSel>0?0:1,j.say(j.sbSel?"\u6E1B\u901F\u677F \u5C55\u958B":"\u6E1B\u901F\u677F \u6536\u56DE");break;case"z":j.toggleAP();break;case"t":j.toggleATHR();break;case"l":j.toggleAPP();break;case"i":j.law=j.law==="normal"?"direct":"normal",j.manTrim=j.trimI,j.say(j.law==="normal"?"\u98DB\u63A7\uFF1A\u6B63\u5E38\u6CD5\u5247 (\u7DDA\u50B3\u98DB\u63A7\u4FDD\u8B77)":"\u98DB\u63A7\uFF1A\u76F4\u63A5\u6CD5\u5247 (\u7121\u4FDD\u8B77\uFF0C, . \u8ABF\u914D\u5E73)");break;case"c":ds((Fn+1)%3);break;case"1":ds(0);break;case"2":ds(1);break;case"3":ds(2);break;case"h":Ra=(Ra+1)%3,kt("instr").className="m"+Ra;break;case"m":Ne.setMuted(!Ne.muted),j.say(Ne.muted?"\u975C\u97F3":"\u8072\u97F3 \u958B");break;case"n":ps=(ps+1)%no.length,gr(),j.say("\u6642\u9593\uFF1A"+no[ps].name);break;case"u":pr=(pr+1)%La.length,gr(),j.say("\u5929\u6C23\uFF1A"+La[pr].name);break;case"[":Qr=Math.max(5,Qr/2);break;case"]":Qr=Math.min(160,Qr*2);break;case"Home":j.thr=1,j.ap.athr=!1;break;case"End":j.thr=0,j.ap.athr=!1;break;case",":j.manTrim-=.5*Q;break;case".":j.manTrim+=.5*Q;break}}}addEventListener("keydown",i=>kh(i,!0));addEventListener("keyup",i=>kh(i,!1));addEventListener("blur",()=>ms.clear());var hs=null;Ie.domElement.addEventListener("pointerdown",i=>{hs={x:i.clientX,y:i.clientY},Ie.domElement.setPointerCapture(i.pointerId)});Ie.domElement.addEventListener("pointerup",()=>{hs=null});Ie.domElement.addEventListener("pointermove",i=>{if(!hs)return;let t=i.clientX-hs.x,e=i.clientY-hs.y;hs.x=i.clientX,hs.y=i.clientY,Fn===0?(an.yaw=Ze(an.yaw+t*.004,-2.3,2.3),an.pitch=Ze(an.pitch+e*.004,-1.1,1.1)):(gn.az-=t*.006,gn.el=Ze(gn.el+e*.005,-.25,1.45))});Ie.domElement.addEventListener("dblclick",()=>{an.yaw=0,an.pitch=.07,an.fov=62});Ie.domElement.addEventListener("wheel",i=>{i.preventDefault(),Fn===0||Fn===2?an.fov=Ze(an.fov+Math.sign(i.deltaY)*4,18,95):gn.dist=Ze(gn.dist*(i.deltaY>0?1.12:.89),45,1500)},{passive:!1});function ds(i){Fn=i,Da=!1;for(let t of Qe.cockpitGlass)t.visible=i!==0}var gi=!0,mn={active:!1,x:0,y:0,brake:!1},_i={brake:0,rev:!1,flapT:0,climbout:!1,landed:!1},Kf=[225,205,190,172,160,150];function Kx(i){let t=j,e=_i;if(e.brake=0,e.rev=!1,!gi)return;let n=t.ias/re,s=(t.agl-5.1)/ke;if(t.park&&t.thr>.15&&(t.park=!1,t.say("\u505C\u6A5F\u715E\u8ECA\u5DF2\u81EA\u52D5\u9B06\u958B")),t.wow){if(t.thr>.4&&(e.landed=!1,e.climbout=!0),t.tdSeen!==t.touchdown&&t.touchdown){t.tdSeen=t.touchdown,e.landed=!0,e.rw=null;let r=1e9;for(let o of Hi){let a=lr(o,t.pos[0],t.pos[1],t.alt),c=Math.abs(Math.atan2(Math.sin(t.psi-o.crs*Q),Math.cos(t.psi-o.crs*Q)));Math.abs(a.xtk)<45&&a.along>-100&&a.along<o.len&&c<.5&&c<r&&(r=c,e.rw=o)}}e.landed&&t.thr<.05&&t.gs>1.5&&(e.brake=t.wowN?.75:.25,e.rev=t.gs>30),e.landed&&t.gs<1&&t.thr<.05&&!t.park&&(t.park=!0,e.landed=!1,t.say("\u5DF2\u505C\u59A5 \u2014 \u505C\u6A5F\u715E\u8ECA \u958B",5)),!e.landed&&t.gs<5&&t.flapSel!==3&&t.thr<.3&&(t.flapSel=3)}else if(e.climbout&&(n>232||s>3500)&&(e.climbout=!1),t.gearSel&&s>150&&t.vs>2.5&&t.airT>3&&(t.gearSel=!1,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u6536\u8D77")),!t.gearSel&&s<1900&&t.vs<-1&&n<215&&(t.gearSel=!0,t.say("\u8D77\u843D\u67B6 \u81EA\u52D5\u653E\u4E0B")),e.flapT+=i,e.flapT>2.5){let r=t.flapSel,o=r;r>0&&n>Kf[r-1]+10?o=r-1:!e.climbout&&r<6&&n<Kf[r]&&(r<3||t.gearSel&&s<3500)&&(o=r+1),o!==r&&(t.flapSel=o,e.flapT=0,t.say("\u895F\u7FFC \u81EA\u52D5 "+Gt.flapDeg[o]+"\xB0",2.5))}}function $x(i){let t=j.ctl,e=(...f)=>f.some(p=>ms.has(p)),n=(e("ArrowDown")?1:0)-(e("ArrowUp")?1:0),s=(e("ArrowRight")?1:0)-(e("ArrowLeft")?1:0),r=(e("e","d")?1:0)-(e("q","a")?1:0),o=Math.max(e(" ","b")||mn.brake?1:0,_i.brake),a=e("r")||_i.rev,c=(e("PageUp","=","+","w")?1:0)-(e("PageDown","-","_","s")?1:0),l=navigator.getGamepads?[...navigator.getGamepads()].find(f=>f&&f.connected&&f.axes.length>=2):null,h=!1;if(l){let f=m=>Math.abs(m)<.08?0:m,p=f(l.axes[0]),g=f(l.axes[1]),_=l.axes.length>2?f(l.axes[2]):0;(p||g||_)&&(h=!0,s=p,n=g,r=_),l.buttons[7]&&l.buttons[7].value>.05&&(c=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(c=-l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(o=1)}if(mn.active&&(h=!0,s=mn.x,n=mn.y),gi&&j.wow&&r===0&&(r=Ze(s*1.2,-1,1)),gi&&_i.landed&&j.wow&&r===0&&_i.rw){let f=_i.rw,p=Math.atan2(Math.sin(j.psi-f.crs*Q),Math.cos(j.psi-f.crs*Q));r=Ze(-.03*lr(f,j.pos[0],j.pos[1],j.alt).xtk-6*p,-1,1)}let u=(f,p)=>h?p:f+Ze(p-f,-(p===0?3.2:2)*i,(p===0?3.2:2)*i);t.pitch=u(t.pitch,n),t.roll=u(t.roll,s),t.yaw=u(t.yaw,r),t.brake+=Ze(o-t.brake,-4*i,2.5*i),t.reverse=a,c&&(j.thr=Ze(j.thr+c*.35*i,0,1),j.ap.athr&&(j.ap.athr=!1,j.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))),j.ap.on&&(Math.abs(n)>.5||Math.abs(s)>.5)&&j.toggleAP()}var Jx=[2500,1e3,500,400,300,200,100,50,40,30,20,10],jx={2500:"twenty five hundred",1e3:"one thousand",500:"five hundred",400:"four hundred",300:"three hundred",200:"two hundred",100:"one hundred",50:"fifty",40:"forty",30:"thirty",20:"twenty",10:"ten"},Dh=0,Ca=!1,to=!1,Ia=!1;function Qx(i){let t=j,e=t.ias/re,n=(t.agl-5.1)/ke,s=t.vs*196.85;t.stallWarn=!t.wow&&t.airT>2&&(t.alpha>t.aStall-.6*Q||t.stall>.25),t.overspeed=e>t.vmaxKt+4,t.gearWarn=!t.wow&&t.gearPos<.99&&n<750&&t.thr<.35&&t.flapSel>=4,t.cfgWarn=t.wow&&t.thr>.75&&t.gs<40*re?t.flapSel<1||t.flapSel>4?"FLAPS":t.park?"PARK BRK":t.sbSel?"SPD BRK":"":"";let r=-s;if(t.gpwsPull=!t.wow&&t.airT>5&&n<2400&&(r>1700+n*2.2&&n>30||n<700&&t.gearPos<.5&&r>600&&t.flapSel<4&&n>60&&tv()),t.gpwsPull?Ne.say("pull up","pull",1.6):!t.wow&&n<2400&&r>1100+n*1.6&&n>20&&Ne.say("sink rate","sink",2.5),t.stallWarn&&Ne.say("stall, stall","stall",1.8),!t.wow&&Math.abs(t.phi)>40*Q&&n<2e3&&Ne.say("bank angle, bank angle","bank",3),t.gearWarn&&Ne.say("too low, gear","gear",3),!t.wow&&s<-100){for(let o of Jx)if(Dh>o&&n<=o){Ne.say(jx[o],"ra"+o,5);break}}if(!t.wow&&n<22&&n>3&&t.thr>.06&&s<-50&&t.airT>20&&Ne.say("retard","retard",1.5),Dh=n,t.wow&&t.thr>.7){let o=Math.max(135,t.vstall/re*1.13+12);!Ca&&e>o-10&&(Ne.say("V one","v1",30),Ca=!0),!to&&e>o&&(Ne.say("rotate","rot",30),to=!0,t.say("ROTATE \u2014 \u8F15\u62C9\u6A5F\u982D\u81F3\u7D04 12\xB0",5))}if(!t.wow&&!Ia&&t.airT>1.5&&s>300&&to&&(Ne.say("positive climb","pos",30),Ia=!0,t.say("\u6B63\u722C\u5347 \u2014 \u6309 G \u6536\u8D77\u843D\u67B6",5)),t.wow&&t.gs<20&&(Ca=to=Ia=!1),t.apDisc&&(t.apDisc=!1,t.apDiscT=1.5),t.apDiscT>0&&(t.apDiscT-=i),t.tdEvent){t.tdEvent=!1;let o=t.touchdown;Ne.thump(Math.min(2.5,o.fpm/250+.4));let a=o.fpm<120?"\u5B8C\u7F8E (butter)":o.fpm<250?"\u826F\u597D":o.fpm<450?"\u504F\u91CD":o.fpm<700?"\u91CD\u843D\u5730":"\u975E\u5E38\u7C97\u66B4";t.say(`\u8457\u9678\uFF1A${o.fpm} fpm \u30FB ${o.g.toFixed(2)} g \u30FB ${o.kt} kt \u2014 ${a}`,9)}}function tv(){return!0}var Iv=new I,$f=new I,Jf=new I,jf=new I;var Rh=0,eo=0,Pa=0;function ev(i){let t=j,e=t.R;$f.set(-e[3],e[6],e[0]),Jf.set(-e[5],e[8],e[2]),jf.set(-e[4],e[7],e[1]),us.matrix.makeBasis($f,Jf,jf),us.matrixWorldNeedsUpdate=!0,us.updateMatrixWorld(!0),Uh.position.set(-t.pos[1],t.pos[2],t.pos[0]);let n=t.gearPos;for(let a of Qe.gear)a.p.rotation[a.ax]=a.ang*(1-n),a.p.visible=n>.02;Qe.doorsOpen&&(Qe.doorsOpen.visible=n>.03),Qe.doorsClosed&&(Qe.doorsClosed.visible=n<=.03);for(let a of Qe.fans)a.piv.rotation.x-=(t.n1[a.idx]/100*38+Math.min(4,t.tas*.02))*i;let s=no[ps];for(let a of Qe.lights){let c=1;a.kind==="strobe"?c=Pa%1.2<.06||(Pa+.14)%1.2<.06?1:0:a.kind==="beacon"?c=Pa%1.3<.14?1:0:a.kind==="land"&&(c=t.gearPos>.9?1:0),a.s.visible=c>0,a.s.material.opacity=a.kind==="nav"?.55+.45*s.night:1,a.s.scale.setScalar(a.size*(.6+.6*s.night))}An.position.copy(Lh).multiplyScalar(250),An.target.position.set(0,0,0),On.position.set(0,0,0),Rh=(t.wow?Math.min(1,t.gs/80)*(.25+t.rough):0)+t.stall*.8+(t.stallWarn?.25:0)+Math.min(1,Math.hypot(...t.gust)/6)*.3+(t.sb>.1&&!t.wow?.12:0);let r=(Math.random()-.5)*Rh*.012,o=(Math.random()-.5)*Rh*.016;if(Fn===0)us.add(ve),ve.position.set(-31.55+r,1.8+o-Ze(((t.nzSm??1)-1)*.02,-.03,.03),.55),ve.rotation.order="YXZ",ve.rotation.set(-an.pitch,Math.PI/2-an.yaw,0),ve.fov=an.fov,ve.near=.06;else if(Fn===1){Ce.add(ve),eo+=Math.atan2(Math.sin(t.psi-eo),Math.cos(t.psi-eo))*Math.min(1,i*2.5);let a=eo+Math.PI+gn.az,c=Math.cos(gn.el),l=gn.dist,h=Math.sin(gn.el)*l,u=-t.agl+2.5;h<u&&(h=u),ve.position.set(Math.sin(a)*c*l,h,-Math.cos(a)*c*l),ve.up.set(0,1,0),ve.lookAt(0,0,0),ve.fov=50,ve.near=1}else{Ce.add(ve);let a=Gi[0]-t.pos[0],c=Gi[1]-t.pos[1];if(!Da||Math.hypot(a,c)>3500){let l=Math.max(t.gs,30)*9;Gi[0]=t.pos[0]+Math.cos(t.track)*l-Math.sin(t.track)*140,Gi[1]=t.pos[1]+Math.sin(t.track)*l+Math.cos(t.track)*140,Gi[2]=Math.max(t.elev+12,t.alt-60-Math.random()*200*(t.agl>400?1:0)),Da=!0}ve.position.set(Gi[1]-t.pos[1],Gi[2]-t.alt,-(Gi[0]-t.pos[0])),ve.up.set(0,1,0),ve.lookAt(0,0,0),ve.fov=Ze(an.fov*.5*500/Math.max(120,ve.position.length()),3,60),ve.near=1}ve.updateProjectionMatrix(),dr.updatePapi(t.pos[0],t.pos[1],t.alt)}var fr=0;function nv(){fr++;let i=Fn===0;fr%2===0&&(Vf(Oh,j),mi.PFD.needsUpdate=i),fr%4===1&&(Gf(Fh,j,Qr),mi.ND.needsUpdate=i),fr%4===3&&(Wf(Bh,j),mi.EICAS.needsUpdate=i),i&&fr%20===5&&(Xf(ed,j),mi.MFD.needsUpdate=!0,qf(nd,j),mi.STBY.needsUpdate=!0),i&&fr%120===7&&(Yf(id,j),mi.CDU.needsUpdate=!0);let t=j.ap;kt("vSpd").textContent=t.spd,kt("vHdg").textContent=String(t.hdg%360||360).padStart(3,"0"),kt("vAlt").textContent=t.alt,kt("vVs").textContent=t.vs,kt("bAP").classList.toggle("on",t.on),kt("bAT").classList.toggle("on",t.athr),kt("bAPP").classList.toggle("on",t.app),kt("bAPP").textContent=t.app?t.lat==="LOC"?t.ver==="GS"?"LOC+G/S":"LOC":"APP \u9810\u4F4D":"APP",kt("thrFill").style.height=j.thr*100+"%",kt("thrKnob").style.bottom=`calc(${j.thr} * (100% - 28px))`;let e=kt("msg");j.msgT>0?(e.textContent=j.msg,e.style.opacity=1):e.style.opacity=0,kt("stat").textContent=`\u6CB9\u9580 ${Math.round(j.thr*100)}%  \xB7  \u895F\u7FFC ${Gt.flapDeg[j.flapSel]}\xB0  \xB7  \u8D77\u843D\u67B6 ${j.gearSel?"\u653E\u4E0B":"\u6536\u8D77"}${j.park?"  \xB7  \u505C\u6A5F\u715E\u8ECA":""}${j.sbSel?"  \xB7  \u6E1B\u901F\u677F":""}  \xB7  ${["\u5EA7\u8259","\u5916\u90E8","\u5854\u53F0"][Fn]}\u8996\u89D2`}function sd(){mr&&(Wi=!Wi,kt("menu").style.display=Wi?"flex":"none",kt("menuTitle").textContent="\u5DF2\u66AB\u505C",kt("resume").style.display=j.crashed?"none":"",Wi||Ne.start())}function rd(i){j.reset(i),gr(),mr=!0,Wi=!1,Ca=to=Ia=!1,Dh=0,eo=j.psi,Da=!1,kt("menu").style.display="none",kt("crash").style.display="none",kt("ui").style.display="block",Ne.start(),ds(i==="runway"?0:Fn),gi=kt("chkEasy").checked,_i.landed=!1,_i.climbout=i==="runway",_i.flapT=0,document.body.classList.toggle("easy",gi);let t=Nh?"\u628A\u53F3\u5074\u6CB9\u9580\u63A8\u5230\u9802":"\u6309\u4F4F W \u63A8\u6EFF\u6CB9\u9580",e=Nh?"\u6416\u687F\u5F80\u4E0B\u62C9":"\u6309 \u2193";j.say(i==="runway"?gi?`${t}\uFF0C\u807D\u5230 Rotate \u5F8C${e}\u62AC\u982D\u3002\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u6703\u81EA\u52D5\u64CD\u4F5C\u3002`:"\u6309 P \u9B06\u958B\u505C\u6A5F\u715E\u8ECA\uFF0CW \u63A8\u6CB9\u9580\u8D77\u98DB\u3002Esc \u53EF\u66AB\u505C\u67E5\u770B\u6309\u9375\u3002":i==="approach"?gi?"\u81EA\u52D5\u99D5\u99DB\u98DB\u884C\u4E2D\u3002\u5DF2\u9810\u4F4D ILS\uFF0C\u6703\u81EA\u52D5\u5C0D\u6E96\u8DD1\u9053\u3001\u653E\u895F\u7FFC\u8207\u8D77\u843D\u67B6\u4E26\u81EA\u52D5\u843D\u5730\uFF1B\u60F3\u81EA\u5DF1\u98DB\u96A8\u6642\u63A8\u687F\u63A5\u624B\u3002":"\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u6309 L \u9810\u4F4D ILS \u9032\u5834\uFF0CF \u653E\u895F\u7FFC\uFF0CG \u653E\u8D77\u843D\u67B6\u3002":"\u5DE1\u822A\u4E2D\uFF0C\u81EA\u52D5\u99D5\u99DB\u5DF2\u63A5\u901A\u3002\u9EDE\u4E0A\u65B9\u9762\u677F\u53EF\u6539\u822A\u5411/\u9AD8\u5EA6/\u901F\u5EA6\u3002",12),j.ap.autoland=gi,i==="approach"&&gi&&(j.toggleAPP(),j.ap.spd=150)}var Nh=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||/[?&]touch/.test(location.search);Nh&&(document.body.classList.add("touch"),Ie.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),Ie.shadowMap.enabled=!1,An.castShadow=!1,Ra=1,kt("instr").className="m1");{let i=kt("stick"),t=kt("knob"),e=l=>{let h=i.getBoundingClientRect(),u=h.width/2,f=(l.clientX-h.left-u)/(u*.72),p=(l.clientY-h.top-u)/(u*.72),g=Math.hypot(f,p);g>1&&(f/=g,p/=g);let _=m=>Math.sign(m)*Math.pow(Math.abs(m),1.5);mn.x=_(f),mn.y=_(p),mn.active=!0,t.style.transform=`translate(${f*u*.72}px, ${p*u*.72}px)`},n=()=>{mn.active=!1,mn.x=mn.y=0,t.style.transform=""};i.addEventListener("pointerdown",l=>{try{i.setPointerCapture(l.pointerId)}catch{}e(l),l.preventDefault()}),i.addEventListener("pointermove",l=>{mn.active&&e(l)}),i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n);let s=kt("thr"),r=!1,o=l=>{let h=s.getBoundingClientRect();j.thr=Ze(1-(l.clientY-h.top-14)/(h.height-28),0,1),j.ap.athr&&(j.ap.athr=!1,j.say("\u81EA\u52D5\u6CB9\u9580 \u89E3\u9664"))};s.addEventListener("pointerdown",l=>{try{s.setPointerCapture(l.pointerId)}catch{}r=!0,o(l),l.preventDefault()}),s.addEventListener("pointermove",l=>{r&&o(l)}),s.addEventListener("pointerup",()=>{r=!1}),s.addEventListener("pointercancel",()=>{r=!1});let a=(l,h,u)=>{let f=kt(l);f.addEventListener("pointerdown",g=>{try{f.setPointerCapture(g.pointerId)}catch{}h(),f.classList.add("on"),g.preventDefault()});let p=()=>{u(),f.classList.remove("on")};f.addEventListener("pointerup",p),f.addEventListener("pointercancel",p)};a("tBrake",()=>{mn.brake=!0},()=>{mn.brake=!1}),a("tRev",()=>ms.add("r"),()=>ms.delete("r"));let c=(l,h)=>kt(l).addEventListener("click",u=>{kh({key:h,preventDefault(){},repeat:!1},!0),ms.delete(h),u.currentTarget.blur()});c("tView","c"),c("tHud","h"),c("tMenu","Escape"),c("tGear","g"),c("tFlapD","f"),c("tFlapU","v"),c("tSb","x")}for(let i of document.querySelectorAll("[data-start]"))i.addEventListener("click",()=>rd(i.dataset.start));kt("resume").addEventListener("click",sd);kt("selTime").addEventListener("change",i=>{ps=+i.target.value,gr()});kt("selWx").addEventListener("change",i=>{pr=+i.target.value,gr()});no.forEach((i,t)=>kt("selTime").add(new Option(i.name,t)));La.forEach((i,t)=>kt("selWx").add(new Option(i.name,t)));var Na=(i,t)=>{for(let e of document.querySelectorAll(`[data-adj="${i}"]`))e.addEventListener("click",n=>{t(+e.dataset.d*(n.shiftKey?5:1)),e.blur()})};Na("spd",i=>j.ap.spd=Ze(j.ap.spd+i*5,110,340));Na("hdg",i=>j.ap.hdg=((j.ap.hdg+i*5)%360+360)%360);Na("alt",i=>j.ap.alt=Ze(j.ap.alt+i*500,0,41e3));Na("vs",i=>j.ap.vs=Ze(j.ap.vs+i*200,400,4e3));kt("bAP").addEventListener("click",i=>{j.toggleAP(),i.target.blur()});kt("bAT").addEventListener("click",i=>{j.toggleATHR(),i.target.blur()});kt("bAPP").addEventListener("click",i=>{j.toggleAPP(),i.target.blur()});addEventListener("resize",()=>{Ie.setSize(innerWidth,innerHeight),ve.aspect=innerWidth/innerHeight,ve.updateProjectionMatrix()});var Ch=1/120,Ih=0,Qf=performance.now(),Ph=0;function od(i){requestAnimationFrame(od);let t=Math.min(.1,(i-Qf)/1e3);if(Qf=i,mr&&!Wi&&!j.crashed&&!window.__freeze){for(Pa+=t,Kx(t),$x(t),Ih+=t;Ih>=Ch&&(j.step(Ch),Ih-=Ch,!j.crashed););Ph+=t,Ph>2&&(Ph=0,j.tuneILS()),Qx(t),j.crashed&&(Ne.thump(3),kt("crashWhy").textContent=j.crashed,kt("crash").style.display="flex",window.speechSynthesis&&speechSynthesis.cancel())}j.update0(),ev(t),mr&&nv(),Ne.update(j,Fn===0,t,Wi||!mr),Ie.render(Ce,ve)}(async function(){try{await Zx(),gr(),ds(1),gn.az=2.5,gn.el=.12,gn.dist=105,kt("loading").style.display="none",kt("menu").style.display="flex"}catch(t){kt("loadtxt").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+t.message,console.error(t)}requestAnimationFrame(od)})();window.__sim=j;window.__dbg={snd:Ne,scene:Ce,camera:ve,parts:Qe,model:fs,look:an,orbit:gn,setView:ds,startFlight:rd,renderer:Ie};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
