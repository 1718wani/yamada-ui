import{a as pe,j as $}from"./jsx-runtime-29545a09.js";import{k as F,n as te,J as ge,V as H,m as T,I as N,z as ne,o as W,F as B,y as S,A as be,W as L,X as ye,l as ke,Y as we,Z as V,a as se,D as re,_ as xe}from"./factory-bced6cdc.js";import{r as g}from"./index-76fb7be0.js";const R=()=>!!(typeof window<"u"&&window.document&&window.document.createElement),ze=()=>{var e;return((e=navigator.userAgentData)==null?void 0:e.platform)??navigator.platform},je=e=>R()&&e.test(navigator.vendor),oe=e=>R()&&e.test(ze()),pt=()=>oe(/^mac/),ve=()=>oe(/mac|iphone|ipad|ipod/i),gt=()=>ve()&&je(/apple/i),ae=e=>e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE,ce=e=>{if(!ae(e))return!1;const t=e.ownerDocument.defaultView??window;return e instanceof t.HTMLElement},ie=e=>e.parentElement&&ie(e.parentElement)?!0:e.hidden,Se=e=>!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled"),$e=e=>e.offsetWidth>0&&e.offsetHeight>0,le=e=>e.hasAttribute("tabindex"),Ee=e=>{const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null},bt=(e,t)=>e===t||(e==null?void 0:e.contains(t)),yt=e=>e.relatedTarget??e.currentTarget.ownerDocument.activeElement,kt=e=>e?"":void 0,wt=e=>e?!0:void 0,Te=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Ce=Te.join(),xt=e=>{const t=Array.from(e.querySelectorAll(Ce));return t.unshift(e),t.filter(n=>ue(n)&&$e(n))},ue=e=>{if(!ce(e)||ie(e)||Se(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const s={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in s?s[t]():Ee(e)?!0:le(e)},Me=e=>le(e)&&e.tabIndex===-1,zt=e=>e?ce(e)&&ue(e)&&!Me(e):!1,jt=e=>{var t;return((t=de(e))==null?void 0:t.defaultView)??window},de=e=>ae(e)?e.ownerDocument:document,Ae=e=>de(e).activeElement,vt=e=>Ae(e)===e,Oe=(e,t="")=>e.replace(/\s+/g,t),E=(e,...t)=>t.join(` ${e} `).replace(/calc/g,""),P=(...e)=>`calc(${E("+",...e)})`,G=(...e)=>`calc(${E("-",...e)})`,M=(...e)=>`calc(${E("*",...e)})`,Q=(...e)=>`calc(${E("/",...e)})`,K=e=>e!=null&&!isNaN(parseFloat(e.toString()))?String(e).startsWith("-")?String(e).slice(1):`-${e}`:M(e,-1),b=Object.assign(e=>({add:(...t)=>b(P(e,...t)),subtract:(...t)=>b(G(e,...t)),multiply:(...t)=>b(M(e,...t)),divide:(...t)=>b(Q(e,...t)),negate:()=>b(K(e))}),{add:P,subtract:G,multiply:M,divide:Q,negate:K});function y(e,t,n){return Math.min(Math.max(e,n),t)}class qe extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var x=qe;function z(e){if(typeof e!="string")throw new x(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=We.test(e)?Re(e):e;const n=Ie.exec(t);if(n){const c=Array.from(n).slice(1);return[...c.slice(0,3).map(a=>parseInt(j(a,2),16)),parseInt(j(c[3]||"f",2),16)/255]}const s=De.exec(t);if(s){const c=Array.from(s).slice(1);return[...c.slice(0,3).map(a=>parseInt(a,16)),parseInt(c[3]||"ff",16)/255]}const r=He.exec(t);if(r){const c=Array.from(r).slice(1);return[...c.slice(0,3).map(a=>parseInt(a,10)),parseFloat(c[3]||"1")]}const o=Ne.exec(t);if(o){const[c,a,l,i]=Array.from(o).slice(1).map(parseFloat);if(y(0,100,a)!==a)throw new x(e);if(y(0,100,l)!==l)throw new x(e);return[...Be(c,a,l),Number.isNaN(i)?1:i]}throw new x(e)}function Fe(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const U=e=>parseInt(e.replace(/_/g,""),36),Ve="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=U(t.substring(0,3)),s=U(t.substring(3)).toString(16);let r="";for(let o=0;o<6-s.length;o++)r+="0";return e[n]=`${r}${s}`,e},{});function Re(e){const t=e.toLowerCase().trim(),n=Ve[Fe(t)];if(!n)throw new x(e);return`#${n}`}const j=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),Ie=new RegExp(`^#${j("([a-f0-9])",3)}([a-f0-9])?$`,"i"),De=new RegExp(`^#${j("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),He=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${j(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),Ne=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,We=/^[a-z]+$/i,Y=e=>Math.round(e*255),Be=(e,t,n)=>{let s=n/100;if(t===0)return[s,s,s].map(Y);const r=(e%360+360)%360/60,o=(1-Math.abs(2*s-1))*(t/100),c=o*(1-Math.abs(r%2-1));let a=0,l=0,i=0;r>=0&&r<1?(a=o,l=c):r>=1&&r<2?(a=c,l=o):r>=2&&r<3?(l=o,i=c):r>=3&&r<4?(l=c,i=o):r>=4&&r<5?(a=c,i=o):r>=5&&r<6&&(a=o,i=c);const u=s-o/2,h=a+u,_=l+u,d=i+u;return[h,_,d].map(Y)};function fe(e,t,n,s){return`rgba(${y(0,255,e).toFixed()}, ${y(0,255,t).toFixed()}, ${y(0,255,n).toFixed()}, ${parseFloat(y(0,1,s).toFixed(3))})`}function Le(e,t,n){const s=(D,_e)=>_e===3?D:D/255,[r,o,c,a]=z(e).map(s),[l,i,u,h]=z(t).map(s),_=h-a,d=n*2-1,f=((d*_===-1?d:d+_/(1+d*_))+1)/2,m=1-f,v=(r*m+l*f)*255,k=(o*m+i*f)*255,w=(c*m+u*f)*255,he=h*n+a*(1-n);return fe(v,k,w,he)}function Pe(e,t){const[n,s,r,o]=z(e);return fe(n,s,r,o-t)}function A(e){const[t,n,s,r]=z(e);let o=c=>{const a=y(0,255,c).toString(16);return a.length===1?`0${a}`:a};return`#${o(t)}${o(n)}${o(s)}${r<1?o(Math.round(r*255)):""}`}const Ge=[50,100,200,300,400,500,600,700,800,900,950],St=e=>e==="gray"||e==="zinc"||e==="neutral"||e==="stone",I=(e,t)=>(n={},s)=>{var l;const[r,o]=e.split("."),[,c]=Object.entries(((l=n.semantics)==null?void 0:l.colorSchemes)??{}).find(([i])=>r===i)??[];c&&(e=`${c}.${o}`);const a=F(n,`colors.${e}`,e);try{return te(a)?A(String(s!=="dark"?a[0]:a[1])):A(String(a))}catch{return t??"#000000"}},$t=(e,t)=>(n,s)=>{const r=I(e,e)(n,s);return A(Le(r,"#000",t/100))},Et=(e,t)=>(n,s)=>{const r=I(e,e)(n,s);return Pe(r,1-t)},Tt=({string:e,colors:t}={})=>{const n=Qe();return e&&t?Ue(e,t):e&&!t?Ke(e):t&&!e?Ye(t):n},Qe=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`,Ke=e=>{let t=0;if(e.length===0)return t.toString();for(let s=0;s<e.length;s+=1)t=e.charCodeAt(s)+((t<<5)-t),t=t&t;let n="#";for(let s=0;s<3;s+=1){const r=t>>s*8&255;n+=`00${r.toString(16)}`.substr(-2)}return n},Ue=(e,t)=>{let n=0;if(e.length===0)return t[0];for(let s=0;s<e.length;s+=1)n=e.charCodeAt(s)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]},Ye=e=>e[Math.floor(Math.random()*e.length)],Je=e=>{const[t,n,s]=z(e);return(t*299+n*587+s*114)/1e3},Xe=e=>(t,n)=>{const s=t?I(e)(t,n):e;return Je(s)<128?"dark":"light"},Ct=e=>(t,n)=>Xe(e)(t,n)==="light",C=(e,t)=>{const n=["@media screen"];return e&&n.push("and",`(min-width: ${e}px)`),t&&n.push("and",`(max-width: ${t}px)`),n.length>1?n.join(" "):void 0},Ze=e=>Object.entries(e).map(([t,n],s,r)=>{let[,o]=r[s-1]??[];return n=t!=="base"?n:void 0,o&&(o+=1),{breakpoint:t,minW:o,maxW:n,maxWQuery:C(void 0,n),minWQuery:C(o),minMaxQuery:C(o,n)}}),et=e=>{const n=R()?parseFloat(window.getComputedStyle(document.documentElement).fontSize):16;return Object.fromEntries(Object.entries(e).map(([s,r])=>r.includes("px")?(r=parseFloat(r),[s,r]):(r=parseFloat(r),r=r*n,[s,r])).sort((s,r)=>s[1]-r[1]))},tt=e=>{if(!e)return;e.base="9999px",e=et(e);const t=ge(e),n=Ze(e);return{keys:t,isResponsive:s=>{const r=Object.keys(s);return r.length>0&&r.every(o=>t.includes(o))},queries:n}},nt=(e,t)=>{const n=`--${[t,Oe(e,"-")].filter(Boolean).join("-")}`,s=`var(${n})`;return{variable:n,reference:s}},J=(e,t)=>{const n=e.replace(/\./g,"-");return nt(n,t)},st=(e,t="ui")=>{let n={},s={};for(let[r,{isSemantic:o,value:c}]of Object.entries(e)){const{variable:a,reference:l}=J(r,t);let[i,u]=te(c)?[...c]:[c];if(r.startsWith("gradients")&&(i=H(i,{__cssMap:n}),u=H(u,{__cssMap:n})),!o){if(r.startsWith("spaces")){const p=r.split("."),[f,...m]=p,v=`${f}.-${m.join(".")}`,k=b.negate(i),w=b.negate(l);n[v]={value:k,var:a,ref:w}}s[a]=i,u&&(s=T(s,{[N._dark]:{[a]:u}})),n[r]={value:i,var:a,ref:l};continue}const h=(p="")=>{const[f]=r.split("."),m=[f,p].join(".");if(!e[m])return[,p];const{variable:k,reference:w}=J(m,t);return[k,w]},[_,d]=h(i);if(s=T(s,{[a]:d}),u){const[,p]=h(u);s=T(s,{[N._dark]:{[a]:p}})}n[r]={value:_??i,var:a,ref:l}}return{cssMap:n,cssVars:s}},rt=["blurs","borders","breakpoints","colors","fontSizes","fontWeights","fonts","gradients","letterSpacings","lineHeights","radii","shadows","sizes","spaces","transitions","zIndices"],ot=(e,t)=>{var i;const n=ct(e),s=at(n),r=(i=t==null?void 0:t.var)==null?void 0:i.prefix,o=n.breakpoints,{cssMap:c,cssVars:a}=st(s,r);return Object.assign(n,{__config:t,__cssVars:{...{},...a},__cssMap:c,__breakpoints:tt(o)}),n},at=e=>{const t=be(e,rt),n=e.semantics??{},s=Object.entries(L(t)??{}).map(([o,c])=>[o,{isSemantic:!1,value:c}]),r=Object.entries(L(n)??{}).reduce((o,[c,a])=>{if(c.startsWith("colorSchemes.")){const[,l]=c.split(".");Ge.forEach(i=>{const u={isSemantic:!0,value:`${a}.${i}`};o.push([`colors.${l}.${i}`,u])})}else{const l={isSemantic:!0,value:a};o.push([c,l])}return o},[]);return ye([...s,...r])},ct=e=>ne(e,["__cssMap","__cssVar","__breakpoints"]),Mt=e=>ne(e,["size","variant","colorScheme"]),X=(e,t)=>{let n=Object.assign({},e);if(W(t))if(W(e))for(const[s,r]of Object.entries(t)){const o=e[s];e.hasOwnProperty(s)?!B(o)&&!B(r)?n[s]=X(o,r):n[s]=c=>X(S(o,c),S(r,c)):Object.assign(n,{[s]:r})}else n=t;return n},O="ui-theme-scheme",me=!!(globalThis!=null&&globalThis.document),Z=e=>({ssr:!1,type:"localStorage",get:t=>{if(!me)return t;try{return localStorage.getItem(e)||t}catch{return t}},set:t=>{try{localStorage.setItem(e,String(t))}catch{}}}),ee=(e,t)=>{const n=e.match(new RegExp(`(^| )${t}=([^;]+)`));return n==null?void 0:n[2]},q=(e,t)=>({ssr:!!t,type:"cookie",get:n=>t?ee(t,e):me&&ee(document.cookie,e)||n,set:n=>{document.cookie=`${e}=${n}; max-age=31536000; path=/`}}),it=e=>q(O,e),lt={localStorage:Z(O),cookieStorage:q(O),createLocalStorage:Z,cookieStorageSSR:it,createCookieStorage:q},{localStorage:ut}=lt,At=({theme:e,config:t,themeSchemeManager:n=ut,children:s})=>{const[r,o]=g.useState(n.get(t==null?void 0:t.initialThemeScheme)),c=g.useMemo(()=>ke(r)?e:r in e?e[r]:e,[e,r]),a=g.useCallback(i=>{const u=t!=null&&t.disableTransitionOnChange?ft():void 0;document.documentElement.dataset.theme=i,u==null||u(),o(i),n.set(i)},[t,n]),l=g.useMemo(()=>ot(c,t),[c,t]);return g.useEffect(()=>{const i=n.get();i&&a(i)},[a,n]),pe(we,{theme:{themeScheme:r,changeThemeScheme:a,...l},children:[$(dt,{}),s]})},dt=()=>$(V,{styles:({__cssVars:e})=>({":host, :root, [data-mode]":e})}),Ot=()=>{const{colorMode:e}=se();return $(V,{styles:t=>{let n=F(t,"styles.resetStyle",{});const s=S(n,{theme:t,colorMode:e});if(s)return re(s)(t)}})},qt=()=>{const{colorMode:e}=se();return $(V,{styles:t=>{let n=F(t,"styles.globalStyle",{});const s=S(n,{theme:t,colorMode:e});if(s)return re(s)(t)}})},Ft=()=>{const{themeScheme:e,changeThemeScheme:t,...n}=g.useContext(xe);if(!n)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");return g.useMemo(()=>({themeScheme:e,changeThemeScheme:t,theme:n}),[t,n,e])},ft=()=>{const e=document.createElement("style"),t=document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}");return e.appendChild(t),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}};export{qt as G,Ot as R,At as T,wt as a,xt as b,R as c,kt as d,gt as e,Ae as f,de as g,zt as h,bt as i,jt as j,ae as k,pt as l,yt as m,vt as n,Mt as o,ce as p,Se as q,I as r,$t as s,X as t,Ft as u,Et as v,Tt as w,Ct as x,St as y};
//# sourceMappingURL=theme-provider-29c1af7d.js.map