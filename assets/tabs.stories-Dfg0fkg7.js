import{j as u}from"./jsx-runtime-CKrituN3.js";import{r as A}from"./index-CBqU2yxZ.js";import{u as $u}from"./index-eENvL-zr.js";import{c as u0}from"./index-DH1WMIuf.js";import{r as Hu,x as Uu,z as Y,V as Z,u as m,c as p,h as J,a as n0,B as e0}from"./factory-BVMa8fXZ.js";import{u as a0}from"./index-DFE8F9kp.js";import{u as F0,R as s0}from"./use-ripple-qFQz7cO6.js";import{f}from"./forward-ref-DuAegr0M.js";import{a as r0}from"./index-BFfB8ey4.js";import{a as l0}from"./use-component-style-DFx-AFMQ.js";import{o as t0}from"./theme-provider-BXaPRWNI.js";import{T as a}from"./text-CocBWv30.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DhdFwUso.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CvgaHKJY.js";const{DescendantsContextProvider:T0,useDescendantsContext:i0,useDescendants:c0,useDescendant:x0}=u0(),[d0,U]=Hu({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),F=f(({align:x="start",...l},b)=>{const[c,B]=l0("Tabs",{align:x,...l}),{className:C,index:T,defaultIndex:r=0,onChange:i,isFitted:o,isManual:d,isLazy:h=!0,disableRipple:E=!1,lazyBehavior:P="keepMounted",orientation:j="horizontal",tabListProps:s,tabPanelsProps:t,children:D,...v}=t0(B),[q,g]=A.useState(r),[G,qu]=$u({value:T,defaultValue:r,onChange:i}),Gu=c0(),y=Uu(D),[Ju]=Y(y,Q),[Qu]=Y(y,X),Xu=Z(y,n),Yu=Z(y,e);A.useEffect(()=>{T!=null&&g(T)},[T]);const Zu={w:"100%",...c.container};return u.jsx(T0,{value:Gu,children:u.jsx(d0,{value:{focusedIndex:q,setFocusedIndex:g,selectedIndex:G,setSelectedIndex:qu,disableRipple:E,isFitted:o,align:x,isManual:d,isLazy:h,lazyBehavior:P,orientation:j,tabListProps:s,tabPanelsProps:t,styles:c},children:u.jsxs(m.div,{ref:b,className:p("ui-tabs",C),__css:Zu,...v,children:[Ju??u.jsx(Q,{children:Xu}),Qu??u.jsx(X,{children:Yu})]})})})}),Q=f(({className:x,...l},b)=>{const{focusedIndex:c,orientation:B,tabListProps:C,styles:T}=U(),r=i0(),i=B==="vertical",o=A.useCallback(()=>{var t;const s=r.enabledNextValue(c);s&&((t=s.node)==null||t.focus())},[r,c]),d=A.useCallback(()=>{var t;const s=r.enabledPrevValue(c);s&&((t=s.node)==null||t.focus())},[r,c]),h=A.useCallback(()=>{var t;const s=r.enabledFirstValue();s&&((t=s.node)==null||t.focus())},[r]),E=A.useCallback(()=>{var t;const s=r.enabledLastValue();s&&((t=s.node)==null||t.focus())},[r]),P=A.useCallback(s=>{const D={ArrowLeft:()=>i?{}:d(),ArrowRight:()=>i?{}:o(),ArrowDown:()=>i?o():{},ArrowUp:()=>i?d():{},Home:h,End:E}[s.key];D&&(s.preventDefault(),D(s))},[h,E,i,d,o]),j={display:"flex",...T.tabList};return u.jsx(m.div,{ref:b,className:p("ui-tabs__list",x),role:"tablist",__css:j,...C,...l,onKeyDown:J(l.onKeyDown,P)})}),n=f(({className:x,isDisabled:l,isFocusable:b,clickOnEnter:c,clickOnSpace:B,children:C,...T},r)=>{const{selectedIndex:i,isManual:o,disableRipple:d,setSelectedIndex:h,setFocusedIndex:E,styles:P}=U(),{index:j,register:s}=x0({disabled:l&&!b}),t=j===i,D=()=>{E(j),!o&&!(l&&b)&&h(j)},v=a0({ref:n0(s,r),isDisabled:l,isFocusable:b,clickOnEnter:c,clickOnSpace:B,onClick:J(T.onClick,()=>h(j))}),{onPointerDown:q,...g}=F0({...v,isDisabled:d||l}),G={position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...P.tab};return u.jsxs(m.button,{className:p("ui-tabs__tab",x),__css:G,role:"tab",...T,...v,type:"button",tabIndex:t?0:-1,"aria-selected":e0(t),onPointerDown:q,onFocus:l?void 0:J(T.onFocus,D),children:[C,u.jsx(s0,{isDisabled:d||l,...g})]})}),[b0,o0]=Hu({}),X=f(({className:x,children:l,...b},c)=>{const{selectedIndex:B,tabPanelsProps:C,styles:T}=U(),i=Uu(l).map((d,h)=>{const E=h===B;return A.createElement(b0,{key:h,value:{isSelected:E,selectedIndex:B}},d)}),o={w:"100%",...T.tabPanels};return u.jsx(m.div,{ref:c,className:p("ui-tabs__panels",x),__css:o,...C,...b,children:i})}),e=f(({className:x,children:l,...b},c)=>{const{isLazy:B,lazyBehavior:C,styles:T}=U(),{isSelected:r}=o0(),i=A.useRef(!1);r&&(i.current=!0);const o=r0({wasSelected:i.current,isSelected:r,enabled:B,mode:C}),d={...T.tabPanel};return u.jsx(m.div,{ref:c,className:p("ui-tabs__panel",x),role:"tabpanel",__css:d,...b,hidden:!r,children:o?l:null})}),L0={title:"Components / Disclosure / Tabs",component:F},S=()=>u.jsxs(F,{children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),w=()=>u.jsxs(F,{defaultIndex:1,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),z=()=>u.jsxs(u.Fragment,{children:[u.jsxs(F,{size:"sm",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{size:"md",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{size:"lg",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),k=()=>u.jsxs(u.Fragment,{children:[u.jsxs(F,{variant:"line",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"sticky",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"sticky-subtle",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"sticky-solid",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"rounded",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"rounded-subtle",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"rounded-solid",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"unstyled",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),L=()=>u.jsxs(F,{variant:"rounded-solid",colorScheme:"red",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),_=()=>u.jsxs(u.Fragment,{children:[u.jsxs(F,{align:"start",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{align:"center",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{align:"end",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),I=()=>u.jsxs(u.Fragment,{children:[u.jsxs(F,{orientation:"horizontal",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{orientation:"vertical",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),R=()=>u.jsxs(u.Fragment,{children:[u.jsxs(F,{variant:"line",isFitted:!0,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),u.jsxs(F,{variant:"sticky",isFitted:!0,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>u.jsxs(F,{children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{isDisabled:!0,children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),M=()=>u.jsxs(F,{children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{isFocusable:!0,children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),N=()=>u.jsxs(F,{isManual:!0,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),W=()=>u.jsxs(F,{isLazy:!0,lazyBehavior:"unmount",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>u.jsxs(F,{children:[u.jsxs(Q,{borderWidth:1,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"})]}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>u.jsxs(F,{variant:"sticky",children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsxs(X,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),H=()=>{const[x,l]=A.useState(0);return u.jsxs(F,{index:x,onChange:l,children:[u.jsx(n,{children:"孫悟空"}),u.jsx(n,{children:"ベジータ"}),u.jsx(n,{children:"フリーザ"}),u.jsx(e,{children:u.jsx(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(e,{children:u.jsx(a,{children:"へっ！きたねぇ花火だ"})}),u.jsx(e,{children:u.jsx(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var $,uu,nu;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(nu=(uu=S.parameters)==null?void 0:uu.docs)==null?void 0:nu.source}}};var eu,au,Fu;w.parameters={...w.parameters,docs:{...(eu=w.parameters)==null?void 0:eu.docs,source:{originalSource:`() => {
  return <Tabs defaultIndex={1}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Fu=(au=w.parameters)==null?void 0:au.docs)==null?void 0:Fu.source}}};var su,ru,lu;z.parameters={...z.parameters,docs:{...(su=z.parameters)==null?void 0:su.docs,source:{originalSource:`() => {
  return <>
      <Tabs size="sm">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="md">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="lg">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(lu=(ru=z.parameters)==null?void 0:ru.docs)==null?void 0:lu.source}}};var tu,Tu,iu;k.parameters={...k.parameters,docs:{...(tu=k.parameters)==null?void 0:tu.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="unstyled">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(iu=(Tu=k.parameters)==null?void 0:Tu.docs)==null?void 0:iu.source}}};var cu,xu,du;L.parameters={...L.parameters,docs:{...(cu=L.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
  return <Tabs variant="rounded-solid" colorScheme="red">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(du=(xu=L.parameters)==null?void 0:xu.docs)==null?void 0:du.source}}};var bu,ou,Bu;_.parameters={..._.parameters,docs:{...(bu=_.parameters)==null?void 0:bu.docs,source:{originalSource:`() => {
  return <>
      <Tabs align="start">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="center">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="end">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Bu=(ou=_.parameters)==null?void 0:ou.docs)==null?void 0:Bu.source}}};var hu,Au,Cu;I.parameters={...I.parameters,docs:{...(hu=I.parameters)==null?void 0:hu.docs,source:{originalSource:`() => {
  return <>
      <Tabs orientation="horizontal">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs orientation="vertical">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Cu=(Au=I.parameters)==null?void 0:Au.docs)==null?void 0:Cu.source}}};var Eu,ju,Du;R.parameters={...R.parameters,docs:{...(Eu=R.parameters)==null?void 0:Eu.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Du=(ju=R.parameters)==null?void 0:ju.docs)==null?void 0:Du.source}}};var Pu,mu,pu;V.parameters={...V.parameters,docs:{...(Pu=V.parameters)==null?void 0:Pu.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isDisabled>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(pu=(mu=V.parameters)==null?void 0:mu.docs)==null?void 0:pu.source}}};var fu,vu,gu;M.parameters={...M.parameters,docs:{...(fu=M.parameters)==null?void 0:fu.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isFocusable>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(gu=(vu=M.parameters)==null?void 0:vu.docs)==null?void 0:gu.source}}};var yu,Su,wu;N.parameters={...N.parameters,docs:{...(yu=N.parameters)==null?void 0:yu.docs,source:{originalSource:`() => {
  return <Tabs isManual>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(wu=(Su=N.parameters)==null?void 0:Su.docs)==null?void 0:wu.source}}};var zu,ku,Lu;W.parameters={...W.parameters,docs:{...(zu=W.parameters)==null?void 0:zu.docs,source:{originalSource:`() => {
  return <Tabs isLazy lazyBehavior="unmount">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Lu=(ku=W.parameters)==null?void 0:ku.docs)==null?void 0:Lu.source}}};var _u,Iu,Ru;K.parameters={...K.parameters,docs:{...(_u=K.parameters)==null?void 0:_u.docs,source:{originalSource:`() => {
  return <Tabs>
      <TabList borderWidth={1}>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>
      </TabList>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Ru=(Iu=K.parameters)==null?void 0:Iu.docs)==null?void 0:Ru.source}}};var Vu,Mu,Nu;O.parameters={...O.parameters,docs:{...(Vu=O.parameters)==null?void 0:Vu.docs,source:{originalSource:`() => {
  return <Tabs variant="sticky">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanels borderBottomWidth={1} borderLeftWidth={1} borderRightWidth={1}>
        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>;
}`,...(Nu=(Mu=O.parameters)==null?void 0:Mu.docs)==null?void 0:Nu.source}}};var Wu,Ku,Ou;H.parameters={...H.parameters,docs:{...(Wu=H.parameters)==null?void 0:Wu.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<number>(0);
  return <Tabs index={index} onChange={onChange}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Ou=(Ku=H.parameters)==null?void 0:Ku.docs)==null?void 0:Ou.source}}};const _0=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{_0 as __namedExportsOrder,S as basic,H as customControl,K as customTabList,O as customTabPanels,L0 as default,V as isDisabled,M as isFocusable,W as isLazy,N as isManual,_ as withAlign,L as withColorScheme,w as withDefaultIndex,R as withFitted,I as withOrientation,z as withSize,k as withVariant};