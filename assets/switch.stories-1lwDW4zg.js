import{a,j as e,F as D}from"./jsx-runtime-5BUNAZ9W.js";import{u as ve}from"./index-YuXFfT5-.js";import{r as ae}from"./index-4g5l5LRQ.js";import{u as ie,C as ce}from"./index.esm-3DtIbTPy.js";import{c as xe}from"./components-xQFVnz5b.js";import{b as _e}from"./checkbox-3nAoIrFd.js";import{m as ze}from"./motion-heeYkzTb.js";import{f as Fe}from"./forward-ref-A-8Arhkk.js";import{u as Ie}from"./use-component-style-kbmWGovm.js";import{o as Ve}from"./theme-provider-GXaWE2yQ.js";import{u as l,a as m,o as Re,K as He}from"./factory-mZ_iv4c5.js";import{H as Pe,V as le}from"./stack-9G9PghDz.js";import{L as Be}from"./form-control-h2Bmpacr.js";import{W as Le}from"./flex-C3bGtyHb.js";import{B as me}from"./button-ucuE55cc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-9vMaPlPU.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-wr9y_5_v.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-WqUFAD1u.js";import"./index-8wSksGBf.js";import"./environment-provider-lafNAkxt.js";import"./loading-provider-8YgFAqOY.js";import"./index-bHt7HYgN.js";import"./Combination-DfugsOYv.js";import"./loading-yhnSUNiJ.js";import"./index-Gv6rFnuW.js";import"./index-TgqKzHHP.js";import"./index-xCDaEQws.js";import"./icon-_tO3S1Xv.js";import"./motion-pT_7ipRu.js";import"./index-eMn_GZVX.js";import"./container-portal-fxqx26z3.js";import"./index-jmm5gWkb.js";import"./notice-xA6JoqyB.js";import"./alert-vfatqDx8.js";import"./close-button-S9Ea81aD.js";import"./use-ripple-epR309bC.js";import"./container-Qr6UO0YO.js";import"./box-fDIv0iq2.js";import"./text-IGmQoJ5n.js";import"./index-q4Wu31Qj.js";import"./index-RZADQAKp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const t=Fe((r,n)=>{const[s,c]=Ie("Switch",r),{className:o,gap:i="0.5rem",children:d,icon:v,inputProps:de,labelProps:ue,isReverse:he,flexDirection:pe,transition:Se={type:"spring",stiffness:700,damping:40},...x}=Ve(c),{isChecked:_,isFocused:we,isHovered:be,isActive:fe,getContainerProps:ge,getIconProps:ke,getInputProps:Ce,getLabelProps:ye}=_e(x),De=v?ae.cloneElement(v,{isChecked:_,isFocused:we,isHovered:be,isActive:fe}):null;return a(l.label,{ref:n,className:m("ui-switch",o),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:pe??(he?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...s.container},...ge(),...Re(x,["id","name","value","defaultValue","checked","defaultIsChecked","isChecked","isDisabled","isReadOnly","onChange","onBlur","onFocus"]),children:[e(l.input,{className:m("ui-switch__input",o),...Ce(de,n)}),De??e(l.span,{className:m("ui-switch__track",o),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...s.track},...ke(),children:e(l.span,{as:ze.span,className:m("ui-switch__thumb",o),"data-checked":He(_),layout:!0,transition:Se,__css:{...s.thumb}})}),d?e(l.span,{className:m("ui-switch__label",o),__css:{...s.label},...ye(ue),children:d}):null]})}),Ft={title:"Components / Forms / Switch",component:t},u=()=>e(t,{children:"basic"}),h=()=>e(t,{isReverse:!0,children:"basic"}),p=()=>a(D,{children:[e(t,{size:"sm",children:"small size"}),e(t,{size:"md",children:"medium size"}),e(t,{size:"lg",children:"large size"})]}),S=()=>a(D,{children:[e(t,{variant:"thick",children:"thick"}),e(t,{variant:"thin",children:"thin"})]}),w=()=>{const r=ae.useId();return a(Pe,{gap:"sm",children:[e(Be,{htmlFor:r,userSelect:"none",children:"Please Click"}),e(t,{id:r})]})},b=()=>e(Le,{gap:"md",children:xe.map(r=>e(t,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),f=()=>a(D,{children:[e(t,{isDisabled:!0,children:"disabled"}),e(t,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),g=()=>a(D,{children:[e(t,{isReadOnly:!0,children:"read only"}),e(t,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),k=()=>{const[r,{toggle:n}]=ve(!1);return e(t,{isChecked:r,onChange:n,children:"custom control"})},C=()=>{const{control:r,handleSubmit:n,watch:s}=ie(),c=o=>console.log("submit:",o);return console.log("watch:",s()),a(le,{as:"form",onSubmit:n(c),children:[e(ce,{name:"switch",control:r,render:({field:{value:o,...i}})=>e(t,{isChecked:o,...i,children:"Dark mode"})}),e(me,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},y=()=>{const r={switch:!0},{control:n,handleSubmit:s,watch:c}=ie({defaultValues:r}),o=i=>console.log("submit:",i);return console.log("watch:",c()),a(le,{as:"form",onSubmit:s(o),children:[e(ce,{name:"switch",control:n,render:({field:{value:i,...d}})=>e(t,{isChecked:i,...d,children:"Dark mode"})}),e(me,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var z,F,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var V,R,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(H=(R=h.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var P,B,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,N,W;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(W=(N=S.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var j,A,E;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(E=(A=w.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var K,M,T;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Switch key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Switch>)}
    </Wrap>;
}`,...(T=(M=b.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>;
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
        read only
      </Switch>
    </>;
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  type Data = {
    switch: boolean;
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ne,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  type Data = {
    switch: boolean;
  };
  const defaultValues: Data = {
    switch: true
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const It=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{It as __namedExportsOrder,u as basic,k as customControl,Ft as default,f as isDisabled,g as isReadonly,C as reactHookForm,y as reactHookFormWithDefaultValue,b as withColorScheme,w as withLabel,h as withReverse,p as withSize,S as withVariant};