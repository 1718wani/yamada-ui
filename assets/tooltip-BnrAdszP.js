import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as te}from"./index-C-D6xzpN.js";import{u as x}from"./index-BTbHygxe.js";import{u as re}from"./index-ormjCxW4.js";import{r as o}from"./index-CBqU2yxZ.js";import{A as se}from"./index-_tcQm2Fk.js";import{P as ne}from"./container-portal-CAcQI922.js";import{m as ie}from"./motion-JgkBPv6g.js";import{s as f}from"./slide-fade-DJiINvtX.js";import{s as ce}from"./scale-fade-BDJIhGhc.js";import{f as le}from"./forward-ref-DuAegr0M.js";import{u as ae}from"./use-component-style-i7T2CPTB.js";import{o as ue}from"./theme-provider-LCtE2tbw.js";import{A as F,B as A,v as me,h as m,C as I,u as z,c as fe}from"./factory-D1MzC1Q2.js";const pe=(l="scale",p)=>{const n={reverse:!0,duration:p,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(l){case"scale":return{...ce,custom:{...n,scale:.95}};case"top":return{...f,custom:{...n,offsetY:-16}};case"right":return{...f,custom:{...n,offsetX:16}};case"left":return{...f,custom:{...n,offsetX:-16}};case"bottom":return{...f,custom:{...n,offsetY:16}}}},Oe=le(({closeOnPointerDown:l,zIndex:p,portalProps:n,withPortal:B=!0,...N},W)=>{const[g,S]=ae("Tooltip",N),{className:X,children:h,label:b,placement:Y,modifiers:_,gutter:K,offset:L,openDelay:C=0,closeDelay:P=0,isDisabled:T,closeOnClick:y,closeOnScroll:M,closeOnMouseDown:q,closeOnEsc:G=!0,animation:k,duration:H,...w}=ue(S);l=q;const{isOpen:t,onOpen:D,onClose:E}=te(w),i=o.useRef(null),c=o.useRef(),a=o.useRef(),{referenceRef:O,getPopperProps:J,transformOrigin:Q}=re({enabled:t,placement:Y,modifiers:_,gutter:K,offset:L}),u=o.useCallback(()=>{a.current&&(clearTimeout(a.current),a.current=void 0),E()},[E]),d=o.useCallback(()=>{if(!T&&!c.current){t&&u();const e=F(i.current);c.current=e.setTimeout(D,C)}},[T,t,C,u,D]),r=o.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=void 0);const e=F(i.current);a.current=e.setTimeout(u,P)},[P,u]),j=o.useCallback(()=>t&&y?r():void 0,[t,y,r]),R=o.useCallback(()=>t&&l?r():void 0,[t,l,r]),U=o.useCallback(e=>t&&e.key==="Escape"?r():void 0,[t,r]);x(()=>A(i.current),"keydown",e=>G?U(e):void 0),x(()=>A(i.current),"scroll",()=>t&&M?u():void 0),x(()=>i.current,"pointerleave",r),o.useEffect(()=>()=>{clearTimeout(c.current),clearTimeout(a.current)},[]);const V=o.useCallback((e={},ee=null)=>({...e,ref:me(i,ee,O),onPointerEnter:m(e.onPointerEnter,oe=>oe.pointerType!=="touch"?d():void 0),onClick:m(e.onClick,j),onPointerDown:m(e.onPointerDown,R),onFocus:m(e.onFocus,d),onBlur:m(e.onBlur,r)}),[O,j,R,d,r]),v=o.Children.only(h),Z=o.cloneElement(v,V(v.props,v.ref)),$={position:"relative",...I(g,["zIndex"])};return b?s.jsxs(s.Fragment,{children:[Z,s.jsx(se,{children:t?s.jsx(ne,{isDisabled:!B,...n,children:s.jsx(z.div,{...J(),zIndex:p??g.zIndex,pointerEvents:"none",children:s.jsx(z.div,{as:ie.div,ref:W,className:fe("ui-tooltip",X),style:{transformOrigin:Q},...k!=="none"?pe(k,H):{},initial:"exit",animate:t?"enter":"exit",exit:"exit",__css:$,...I(w,["isOpen","defaultIsOpen","onOpen","onClose"]),children:b})})}):null})]}):s.jsx(s.Fragment,{children:h})});export{Oe as T};
