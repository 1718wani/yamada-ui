import{j as d}from"./jsx-runtime-CKrituN3.js";import{n as p,H as a}from"./factory-Ckx2Jgsp.js";import{B as u}from"./box-Dqbznj4t.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const g={title:"Hooks / useColorMode"},o=()=>{const{colorMode:e}=p();return d.jsxs(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),h=a("blackAlpha.800","whiteAlpha.800"),m=a("whiteAlpha.800","blackAlpha.800");return d.jsxs(u,{bg:h,p:"md",rounded:"md",color:m,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var t,n,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} p="md" rounded="md" color={["whiteAlpha.800", "blackAlpha.800"]} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const C=["basic","withValue"];export{C as __namedExportsOrder,o as basic,g as default,r as withValue};