import{j as h,a as V}from"./jsx-runtime-5BUNAZ9W.js";import{u as Se}from"./index-aohhlADI.js";import{r as C}from"./index-4g5l5LRQ.js";import{b as _e,c as be,g as re,a7 as te,e as X,Q as ye,h as x,o as ve,a as O,u as E,s as Pe}from"./factory-lmgb8SbK.js";import{u as we,f as xe}from"./form-control-qo1fPo3g.js";import{d as ke,h as U,c as se,f as Ee,r as De,p as Re,g as Ne,i as Me,o as Te}from"./theme-provider-IB7hRMrv.js";import{I as Oe}from"./icon-button-fQiS3eHf.js";import{b as Ae}from"./icon-nIMognNo.js";import{f as A}from"./forward-ref-A-8Arhkk.js";import{A as He}from"./alpha-slider-ffTCzNNK.js";import{H as Ve}from"./hue-slider-Tw3cWMkp.js";import{C as le}from"./color-swatch-6jdvxO02.js";import{I as je}from"./input-kLIhGT0T.js";import{S as Le}from"./saturation-slider-RskwMB2s.js";import{u as Be}from"./use-component-style-Axb1BJYP.js";const We=()=>{const[r,i]=C.useState(!1);_e(()=>{i(typeof window<"u"&&"EyeDropper"in window)},[]);const n=C.useCallback((l={})=>r?new window.EyeDropper().open(l):Promise.resolve(void 0),[r]);return{supported:r,onOpen:n}},ne=(r,i)=>{let[n,l,c,u]=Re(r,i)??[0,0,1,1];return u>1&&(u=1),{h:n,s:l,l:c,a:u}},ae=(r,i)=>{let[n,l,c,u]=Ne(r,i)??[255,255,255,1];return n>255&&(n=255),l>255&&(l=255),c>255&&(c=255),u>1&&(u=1),{r:n,g:l,b:c,a:u}},Y=(r,i)=>{const[n,l,c,u]=Me(r,i);return{h:n,s:l,v:c,a:u}},[Fe,j]=be({name:"ColorSelectorContext",errorMessage:`useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`}),Ie=({isInvalid:r,...i})=>{let{id:n,name:l,value:c,defaultValue:u,fallbackValue:o,onChange:m,onChangeStart:y,onChangeEnd:v,format:g,required:p,disabled:a,readOnly:d,onSwatchClick:D,...L}=we({isInvalid:r,...i});const $=re(y),z=re(v),{supported:Z,onOpen:G}=We(),[S,q]=Se({value:c,defaultValue:u??o??"#ffffffff",onChange:m}),B=C.useRef(void 0),_=C.useRef(g??ke(S)),W=C.useRef(!1),[T,F]=C.useState(Y(S,o)),{h:k,s:R,v:N,a:I}=T,Q=_.current.endsWith("a"),ce=!(a||d),ue=C.useMemo(()=>{if(S.startsWith("hsl")){const{h:e,s,l:t,a:f}=ne(S,o);let b=[{label:"H",space:"h",value:Math.round(e),min:0,max:360},{label:"S(%)",space:"s",value:Math.round(s*100),min:0,max:100},{label:"L(%)",space:"l",value:Math.round(t*100),min:0,max:100}];return Q&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(f*100),min:0,max:100}]),b}else{const{r:e,g:s,b:t,a:f}=ae(S,o);let b=[{label:"R",space:"r",value:Math.round(e),min:0,max:255},{label:"G",space:"g",value:Math.round(s),min:0,max:255},{label:"B",space:"b",value:Math.round(t),min:0,max:255}];return Q&&(b=[...b,{label:"A(%)",space:"a",value:Math.round(f*100),min:0,max:100}]),b}},[S,Q,o]),P=C.useCallback(e=>{te(e)?F(Y(e,o)):F(s=>({...s,...e}))},[o]),H=C.useCallback(e=>{window.clearTimeout(B.current),W.current=!0;const{h:s,s:t,v:f,a:b}={...T,...e},M=U([s,t,f,b],o)(_.current);M&&$(M)},[_,$,o,T]),w=C.useCallback(e=>{window.clearTimeout(B.current),B.current=window.setTimeout(()=>{W.current=!1},200);let s;if(te(e))s=se(e,o)(_.current);else{const{h:t,s:f,v:b,a:M}={...T,...e};s=U([t,f,b,M],o)(_.current)}s&&z(s)},[_,z,o,T]),ee=C.useCallback((e,s)=>{let t=Math.floor(parseFloat(e.target.value));isNaN(t)&&(t=0),["s","l","a"].includes(s)&&(t=t/100);let f;if(S.startsWith("hsl")){const{h:b,s:M,l:J,a:K}=Object.assign(ne(S,o),{[s]:t});f=Ee([b,M,J,K],o)(_.current)}else{const{r:b,g:M,b:J,a:K}=Object.assign(ae(S,o),{[s]:t});f=De([b,M,J,K],o)(_.current)}f&&(P(f),w(f))},[S,P,w,_,o]),oe=C.useCallback(async()=>{try{const{sRGBHex:e}=await G()??{};if(!e)return;P(e),w(e)}catch{}},[G,P,w]);X(()=>{const e=U([k,R,N,I],o)(_.current);e&&q(e)},[k,R,N,I,o]),X(()=>{W.current||c&&F(Y(c,o))},[c]),X(()=>{if(!g)return;_.current=g;const e=se(S,o)(g);e&&q(e)},[g,o]);const ie=(e={},s=null)=>({...e,ref:s,...ve(L,["aria-readonly"])}),he=C.useCallback((e={},s=null)=>({...ye(L,xe),...e,id:n,ref:s,type:"hidden",name:l,value:S,required:p,disabled:a,readOnly:d}),[a,n,l,d,p,L,S]),pe=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:[k,R,N],onChange:x(e.onChange,([,t,f])=>P({s:t,v:f})),onChangeStart:x(e.onChangeStart,([,t,f])=>H({s:t,v:f})),onChangeEnd:x(e.onChangeEnd,([,t,f])=>w({s:t,v:f}))}),[p,a,d,r,k,R,N,P,H,w]),de=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:k,onChange:x(e.onChange,t=>P({h:t})),onChangeStart:x(e.onChangeStart,t=>H({h:t})),onChangeEnd:x(e.onChangeEnd,t=>w({h:t}))}),[p,a,d,r,k,P,H,w]),fe=C.useCallback((e={},s=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...e,ref:s,value:I,color:U([k,R,N,I],o)(_.current),onChange:x(e.onChange,t=>P({a:t})),onChangeStart:x(e.onChangeStart,t=>H({a:t})),onChangeEnd:x(e.onChangeEnd,t=>w({a:t}))}),[o,p,a,d,r,_,k,R,N,I,P,H,w]),me=C.useCallback(({space:e,...s},t=null)=>({required:p,disabled:a,readOnly:d,isInvalid:r,...s,ref:t,type:"number",step:1,onChange:x(s.onChange,f=>ee(f,e))}),[p,a,d,r,ee]),Ce=C.useCallback((e={},s=null)=>({disabled:a,"aria-label":"Pick a color",...e,ref:s,onClick:x(e.onClick,oe)}),[a,oe]),ge=C.useCallback(({color:e,...s}={},t=null)=>({"aria-label":`select ${e} as the color`,disabled:a,readOnly:d,...s,ref:t,color:e,onClick:x(s.onClick,()=>{e&&(D==null||D(e),P(e),w(e))})}),[a,d,D,P,w]);return{value:S,onChange:P,eyeDropperSupported:Z,withAlpha:Q,isInteractive:ce,disabled:a,readOnly:d,channels:ue,getContainerProps:ie,getInputProps:he,getSaturationSliderProps:pe,getHueSliderProps:de,getAlphaSliderProps:fe,getEyeDropperProps:Ce,getChannelProps:me,getSwatchProps:ge}},$e=A(({className:r,...i},n)=>{const{getEyeDropperProps:l,readOnly:c,size:u,styles:o}=j(),m={h:"auto",minW:"auto",pointerEvents:c?"none":void 0,...o.eyeDropper};return h(Oe,{className:O("ui-color-selector__eye-dropper",r),variant:"outline",size:u,__css:m,...l(i,n),children:h(ze,{className:"ui-color-selector__eye-dropper__icon"})})}),ze=({...r})=>V(Ae,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[h("path",{d:"m2 22 1-1h3l9-9"}),h("path",{d:"M3 21v-3l9-9"}),h("path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"})]}),Ge=A(({className:r,hueSliderRef:i,hueSliderProps:n,alphaSliderRef:l,alphaSliderProps:c,...u},o)=>{let{size:m,withAlpha:y,getHueSliderProps:v,getAlphaSliderProps:g,styles:p}=j();m==="full"&&(m="lg");const a={display:"flex",flexDirection:"column",...p.sliders};return V(E.div,{ref:o,className:O("ui-color-selector__sliders",r),__css:a,...u,children:[h(Ve,{size:m,className:"ui-color-selector__hue-slider",__css:{...p.hueSlider},...v(n,i)}),y?h(He,{size:m,className:"ui-color-selector__alpha-slider",__css:{...p.alphaSlider},...g(c,l)}):null]})}),qe=A(({className:r,withEyeDropper:i=!0,withResult:n,eyeDropperRef:l,eyeDropperProps:c,hueSliderRef:u,hueSliderProps:o,alphaSliderRef:m,alphaSliderProps:y,...v},g)=>{const{value:p,eyeDropperSupported:a,styles:d}=j(),D={display:"flex",w:"full",...d.body};return V(E.div,{ref:g,className:O("ui-color-selector__body",r),__css:D,...v,children:[h(Ge,{hueSliderRef:u,hueSliderProps:o,alphaSliderRef:m,alphaSliderProps:y}),i&&a?h($e,{ref:l,...c}):null,n?h(le,{className:"ui-color-selector__result",color:p,__css:{...d.result}}):null]})}),Qe=A(({className:r,channelProps:i,...n},l)=>{const{withAlpha:c,channels:u,getChannelProps:o,styles:m}=j(),y={display:"grid",gridTemplateColumns:`repeat(${c?"4":"3"}, 1fr)`,...m.channels};return h(E.div,{ref:l,className:O("ui-color-selector__channels",r),__css:y,...n,children:u.map(({label:v,space:g,value:p,min:a,max:d})=>h(Ue,{channelLabel:v,...o({...i,space:g,value:p,min:a,max:d})},v))})}),Ue=A(({className:r,channelLabel:i,...n},l)=>{const c=C.useId();let{size:u,disabled:o,readOnly:m,styles:y}=j();u==="full"&&(u="lg");const v={...y.channel};return V(E.div,{className:O("ui-color-selector__channel",r),children:[i?h(E.label,{htmlFor:c,style:{cursor:o?"not-allowed":void 0},__css:{display:"block",pointerEvents:m?"none":void 0,...y.channelLabel},children:i}):null,h(je,{ref:l,id:c,size:u,__css:v,...n})]})}),Ze=A(({className:r,swatchesLabel:i,swatches:n,swatchesContainerProps:l,swatchProps:c,swatchesColumns:u,...o},m)=>{const{getSwatchProps:y,readOnly:v,styles:g}=j(),p={display:"grid",gridTemplateColumns:Pe(u,a=>a!=null?`repeat(${a}, minmax(0, 1fr))`:void 0),...g.swatches};return n!=null&&n.length?V(E.div,{...l,children:[i?h(E.p,{className:"ui-color-selector__swatches__label",__css:{...g.swatchesLabel},children:i}):null,h(E.div,{ref:m,className:O("ui-color-selector__swatches",r),__css:p,...o,children:n.map(a=>h(le,{as:"button",__css:{boxSize:"full",pointerEvents:v?"none":void 0,...g.swatch},...y({color:a,...c})},a))})]}):null}),ho=A(({size:r,...i},n)=>{const[l,c]=Be("ColorSelector",{size:r,...i}),{className:u,withResult:o=!0,withPicker:m=!0,withChannel:y=!0,swatches:v,swatchesColumns:g=7,inputProps:p,withEyeDropper:a,eyeDropperRef:d,eyeDropperProps:D,saturationSliderRef:L,saturationSliderProps:$,hueSliderRef:z,hueSliderProps:Z,alphaSliderRef:G,alphaSliderProps:S,swatchesLabel:q,swatchProps:B,swatchesProps:_,...W}=Te(c),{getContainerProps:T,getInputProps:F,getSaturationSliderProps:k,...R}=Ie(W),N={display:"flex",flexDirection:"column",...l.container};return h(Fe,{value:{styles:l,size:r,...R},children:V(E.div,{ref:n,className:O("ui-color-selector",u),__css:N,...T(),children:[h(E.input,{...F(p,n)}),m?h(Le,{size:r,className:"ui-color-selector__saturation-slider",__css:{...l.saturationSlider},...k($,L)}):null,m?h(qe,{withResult:o,withEyeDropper:a,eyeDropperRef:d,eyeDropperProps:D,hueSliderRef:z,hueSliderProps:Z,alphaSliderRef:G,alphaSliderProps:S}):null,m&&y?h(Qe,{}):null,h(Ze,{swatchesLabel:q,swatches:v,swatchesColumns:g,swatchProps:B,..._})]})})});export{ho as C,ze as E,We as u};