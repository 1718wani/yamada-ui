import{j as u}from"./jsx-runtime-CKrituN3.js";import{u as s}from"./index-rYLD436_.js";import{F as l}from"./fade-C7U_DtA0.js";import{B as d}from"./button-ByzKvAA6.js";import{B as n}from"./box-BNFaYC6y.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-DzQfhwIS.js";import"./forward-ref-DuAegr0M.js";import"./factory-HTeyK_fA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./utils-Cf-6jYhN.js";import"./use-ripple-C7PrLSTl.js";import"./loading-DnyjtoRI.js";import"./icon-B1_QQpZG.js";import"./index-dkYwPDS2.js";import"./theme-provider-DvYDGHdP.js";import"./use-component-style-CaxTiwrP.js";const G={title:"Components / Transitions / Fade",component:l},r=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,duration:.4,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:o,unmountOnExit:!0,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var F,m,p;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,a,B;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(a=t.parameters)==null?void 0:a.docs)==null?void 0:B.source}}};var g,C,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const H=["basic","withDuration","exitUnmount"];export{H as __namedExportsOrder,r as basic,G as default,i as exitUnmount,t as withDuration};
