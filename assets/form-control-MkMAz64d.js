import{j as l,a as B}from"./jsx-runtime-5BUNAZ9W.js";import{r as x}from"./index-4g5l5LRQ.js";import{c as S,v as k,M as I,u as v,a as C,J as b,K as _,h as P}from"./factory-dcM_aT7G.js";import{f as h}from"./forward-ref-A-8Arhkk.js";import{u as z}from"./use-component-style-rFDzjddw.js";import{o as G}from"./theme-provider-5V_IKGX1.js";const[Q,y]=S({strict:!1,name:"FormControlContext"}),[U,p]=S({strict:!1,name:"FormControlStyleContext"}),is=h(({id:a,...s},r)=>{const[i,t]=z("FormControl",s),{className:o,isRequired:n=!1,isDisabled:d=!1,isInvalid:c=!1,isReadOnly:u=!1,isReplace:m=!0,label:e,helperMessage:F,errorMessage:f,children:g,requiredIndicator:R,optionalIndicator:H,...L}=G(t);a??(a=x.useId());const[O,M]=x.useState(!1),q=k(g),[j]=I(q,D),[A]=I(q,E),[V]=I(q,N),w=!!j,J=!!A,K=!!V,T={...i.container};return l(Q,{value:{id:a,isFocused:O,isRequired:n,isDisabled:d,isInvalid:c,isReadOnly:u,isReplace:m,onFocus:()=>M(!0),onBlur:()=>M(!1)},children:l(U,{value:i,children:B(v.div,{ref:r,className:C("ui-form__control",o),role:"group",__css:T,...L,children:[!w&&e?l(D,{requiredIndicator:R,optionalIndicator:H,children:e}):null,g,!J&&F?l(E,{children:F}):null,!K&&f?l(N,{children:f}):null]})})})}),ts=a=>{const s=y(),r=a.id??(s==null?void 0:s.id),i=a.disabled??a.isDisabled??(s==null?void 0:s.isDisabled),t=a.readOnly??a.isReadOnly??(s==null?void 0:s.isReadOnly),o=a.required??a.isRequired??(s==null?void 0:s.isRequired),n=a.isInvalid??(s==null?void 0:s.isInvalid);return{id:r,isDisabled:i,isReadOnly:t,isRequired:o,isInvalid:n}},os=({id:a,disabled:s,readOnly:r,required:i,isDisabled:t,isReadOnly:o,isRequired:n,isInvalid:d,onFocus:c,onBlur:u,...m})=>{const e=y();return s??(s=t??(e==null?void 0:e.isDisabled)),i??(i=n??(e==null?void 0:e.isRequired)),r??(r=o??(e==null?void 0:e.isReadOnly)),d??(d=e==null?void 0:e.isInvalid),{id:a??(e==null?void 0:e.id),disabled:s,required:i,readOnly:r,"aria-disabled":b(s),"aria-readonly":b(r),"aria-required":b(i),"aria-invalid":b(d),"data-readonly":_(r),onFocus:P(e==null?void 0:e.onFocus,c),onBlur:P(e==null?void 0:e.onBlur,u),...s||r?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},...m}},W=["disabled","required","readOnly","aria-disabled","aria-readonly","aria-required","aria-invalid","data-readonly","onFocus","onBlur","_hover","_active","_focus","_invalid","_focusVisible"],X=W,ns=({omit:a=[],pick:s=[]})=>{let r=X;return s.length&&(r=r.filter(i=>s.includes(i))),a.length&&(r=r.filter(i=>!a.includes(i))),r},D=h(({className:a,htmlFor:s,isRequired:r,requiredIndicator:i=l(Y,{}),optionalIndicator:t=null,children:o,...n},d)=>{const{id:c,isRequired:u,isFocused:m,isDisabled:e,isInvalid:F,isReadOnly:f}=y()??{},g=p()??{};r??(r=u);const R={display:"block",pointerEvents:f?"none":void 0,...g.label};return B(v.label,{ref:d,className:C("ui-form__label",a),"data-focus":_(m),"data-disabled":_(e),"data-readonly":_(f),"data-invalid":_(F),htmlFor:s??c,__css:R,style:{cursor:e?"not-allowed":void 0},...n,children:[o,r?i:t]})}),Y=h(({className:a,...s},r)=>{const t={...(p()??{}).requiredIndicator};return l(v.span,{ref:r,className:C("ui-form__required-indicator",a),role:"presentation","aria-hidden":!0,__css:t,...s,children:"*"})}),E=h(({className:a,...s},r)=>{const{isInvalid:i,isReplace:t}=y()??{},o=p()??{};if(t&&i)return null;const n={...o.helperMessage};return l(v.div,{ref:r,className:C("ui-form__helper-message",a),__css:n,...s})}),N=h(({className:a,...s},r)=>{const{isInvalid:i}=y()??{},t=p()??{};if(!i)return null;const o={...t.errorMessage};return l(v.div,{ref:r,className:C("ui-form__error-message",a),"aria-live":"polite",__css:o,...s})});export{N as E,is as F,E as H,D as L,ts as a,X as f,ns as g,os as u};