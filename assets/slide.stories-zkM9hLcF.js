import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as s}from"./index-rYLD436_.js";import{S as i}from"./slide-CCZAboEm.js";import{B as o}from"./button-8iFVsPfj.js";import{V as c}from"./stack-7tlYOa-9.js";import{T as a}from"./text-DVzvb04s.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpFxuW_0.js";import"./index-BxD0PuQQ.js";import"./theme-provider-DZcwar_c.js";import"./factory-Ckx2Jgsp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-DWJMnn04.js";import"./forward-ref-DuAegr0M.js";import"./utils-Cgc4m-_l.js";import"./use-ripple-Dq_N8Uak.js";import"./loading-Bek8NsZJ.js";import"./icon-Dnn1bVsx.js";import"./index-C36DT9j5.js";import"./use-component-style-BZBbbb_H.js";const K={title:"Components / Transitions / Slide",component:i},u=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"bottom",children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},l=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"bottom",duration:.7,children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"left",children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var m,p,F;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(F=(p=u.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var d,g,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom" duration={0.7}>
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,h,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="left">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const L=["basic","withDuration","withPlacement"];export{L as __namedExportsOrder,u as basic,K as default,l as withDuration,r as withPlacement};