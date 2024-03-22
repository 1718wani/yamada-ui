import{j as m}from"./jsx-runtime-CKrituN3.js";import{p as xt,b as gt}from"./popover-content-Dzj6KE1S.js";import{f as te}from"./forward-ref-DuAegr0M.js";import{p as Ct,Q as bt,Y as tt,Z as st,C as ht,l as W,k as Qe,t as nt,a8 as vt,R as yt,d as xe,P as kt,v as De,h as U,y as ae,z as Ze,ae as It,aa as Pe,u as H,c as Z,e as At,D as qe}from"./factory-D1MzC1Q2.js";import{u as _t}from"./index-BAkiw5U8.js";import{r as n}from"./index-CBqU2yxZ.js";import{u as jt}from"./index-DOHT0qqe.js";import{c as Et}from"./index-Bknf-GSb.js";import{u as Pt}from"./index-C-D6xzpN.js";import{u as Dt}from"./index-BpQz06QL.js";import{u as wt,g as Ot}from"./form-control-Dbo-pJGm.js";import{c as St,a as Rt}from"./icon-B3uV5IZ5.js";const Xe={ｶﾞ:"ガ",ｷﾞ:"ギ",ｸﾞ:"グ",ｹﾞ:"ゲ",ｺﾞ:"ゴ",ｻﾞ:"ザ",ｼﾞ:"ジ",ｽﾞ:"ズ",ｾﾞ:"ゼ",ｿﾞ:"ゾ",ﾀﾞ:"ダ",ﾁﾞ:"ヂ",ﾂﾞ:"ヅ",ﾃﾞ:"デ",ﾄﾞ:"ド",ﾊﾞ:"バ",ﾋﾞ:"ビ",ﾌﾞ:"ブ",ﾍﾞ:"ベ",ﾎﾞ:"ボ",ﾊﾟ:"パ",ﾋﾟ:"ピ",ﾌﾟ:"プ",ﾍﾟ:"ペ",ﾎﾟ:"ポ",ｳﾞ:"ヴ",ﾜﾞ:"ヷ",ｦﾞ:"ヺ",ｱ:"ア",ｲ:"イ",ｳ:"ウ",ｴ:"エ",ｵ:"オ",ｶ:"カ",ｷ:"キ",ｸ:"ク",ｹ:"ケ",ｺ:"コ",ｻ:"サ",ｼ:"シ",ｽ:"ス",ｾ:"セ",ｿ:"ソ",ﾀ:"タ",ﾁ:"チ",ﾂ:"ツ",ﾃ:"テ",ﾄ:"ト",ﾅ:"ナ",ﾆ:"ニ",ﾇ:"ヌ",ﾈ:"ネ",ﾉ:"ノ",ﾊ:"ハ",ﾋ:"ヒ",ﾌ:"フ",ﾍ:"ヘ",ﾎ:"ホ",ﾏ:"マ",ﾐ:"ミ",ﾑ:"ム",ﾒ:"メ",ﾓ:"モ",ﾔ:"ヤ",ﾕ:"ユ",ﾖ:"ヨ",ﾗ:"ラ",ﾘ:"リ",ﾙ:"ル",ﾚ:"レ",ﾛ:"ロ",ﾜ:"ワ",ｦ:"ヲ",ﾝ:"ン",ｧ:"ァ",ｨ:"ィ",ｩ:"ゥ",ｪ:"ェ",ｫ:"ォ",ｯ:"ッ",ｬ:"ャ",ｭ:"ュ",ｮ:"ョ","｡":"。","､":"、",ｰ:"ー","｢":"「","｣":"」","･":"・"},Ft=o=>{o=o.replace(/[！-～]/g,l=>String.fromCharCode(l.charCodeAt(0)-65248));const t=new RegExp("("+Object.keys(Xe).join("|")+")","g");return o=o.replace(t,l=>Xe[l]).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜"),o=o.toUpperCase(),o},Tt=o=>{const t=l=>l.map(a=>{const{isDisabled:d,isFocusable:u}=a;if(!(d&&!u))return"items"in a?t(a.items??[]):a}).filter(Boolean);return t(o).flat(1/0)},Nt=o=>{var t;return It(o)&&!!((t=o==null?void 0:o.getAttribute("role"))!=null&&t.startsWith("autocomplete-item"))},{DescendantsContextProvider:as,useDescendantsContext:ot,useDescendants:Mt,useDescendant:Lt}=Et(),[rs,S]=Ct({name:"AutocompleteContext",errorMessage:`useAutocompleteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Autocomplete />" or "<MultiAutocomplete />"`}),us=({value:o,defaultValue:t,onChange:l,onCreate:a,onSearch:d,closeOnSelect:u=!0,omitSelectedValues:i=!1,maxSelectValues:f,closeOnBlur:y=!0,closeOnEsc:v=!0,allowCreate:g=!1,allowFree:h=!1,insertPositionItem:_="first",emptyMessage:j="No results found",format:k=Ft,placement:E="bottom-start",duration:R=.2,optionProps:F,placeholder:J,items:we,children:re,isOpen:q,defaultIsOpen:ge,onOpen:Oe,onClose:Ve,...P})=>{P=wt(P);const{id:Ce}=P,N=bt(P,Ot({omit:["aria-readonly"]})),[Y,be]=tt(ht(P,[...xt,"onKeyDown","onFocus","aria-readonly"]),st),x=Mt(),se=n.useRef(null),he=n.useRef(null),V=n.useRef(null),D=n.useRef(new Set([])),ue=n.useRef(!1),ne=n.useRef(void 0),[oe,lt]=n.useState(we),[I,ve]=jt({value:o,defaultValue:t,onChange:l}),[Se,ye]=n.useState(void 0),[w,le]=n.useState(""),[z,A]=n.useState(-1),[X,Be]=n.useState(!1),[ie,Ke]=n.useState(!0),{isOpen:C,onOpen:Ue,onClose:M}=Pt({isOpen:q,defaultIsOpen:ge,onOpen:Oe,onClose:Ve}),de=z>-1,Re=z===-2&&g,b=W(I),ke=b?!I.length:!I,[pe,ze]=n.useMemo(()=>W(_)?_:[_,"first"],[_]);g&&!Qe(re)&&console.warn(`${b?"MultiAutocomplete":"Autocomplete"}: ${b?"MultiAutocomplete":"Autocomplete"} internally prefers 'children'. If 'allowCreate' is true, it will not be reflected correctly. If want to reflect, please set 'items' in props.`);const G=x.enabledValues(({node:e})=>b&&I.includes(e.dataset.value??"")).map(({index:e})=>e),B=x.enabledValues(({node:e,index:s})=>"target"in e.dataset&&!G.includes(s)),it=nt(re),Ie=oe==null?void 0:oe.map((e,s)=>{if("value"in e){const{label:r,value:c,...p}=e;return m.jsx(et,{value:c,...p,children:r},s)}else if("items"in e){const{label:r,items:c=[],...p}=e;return m.jsx(Gt,{label:r,...p,children:c.map(({label:K,value:T,...Le},mt)=>m.jsx(et,{value:T,...Le,children:K},mt))},s)}}),ee=!it.length&&!(Ie!=null&&Ie.length),O=n.useCallback(()=>{N.disabled||N.readOnly||!g&&(ee||X)||(Ue(),V.current&&V.current.focus())},[g,N,X,ee,Ue]),ce=n.useCallback(()=>{const e=setTimeout(()=>{if(ee||X)return;const s=x.enabledFirstValue(({node:r})=>"target"in r.dataset);if(s)if(!b||!i)A(s.index);else if(G.includes(s.index)){const r=B[0];A(r.index)}else A(s.index)});D.current.add(e)},[x,B,X,ee,b,i,G]),Ae=n.useCallback(()=>{const e=setTimeout(()=>{if(ee||X)return;const s=x.enabledLastValue(({node:r})=>"target"in r.dataset);if(s)if(!b||!i)A(s.index);else if(G.includes(s.index)){const r=B.reverse()[0];A(r.index)}else A(s.index)});D.current.add(e)},[x,B,X,ee,b,i,G]),Fe=n.useCallback(()=>{const e=setTimeout(()=>{const r=x.enabledValues().find(({node:c})=>b?I.includes(c.dataset.value??""):c.dataset.value===I);r&&A(r.index)});D.current.add(e)},[x,b,I]),fe=n.useCallback((e=z)=>{const s=setTimeout(()=>{const r=x.enabledNextValue(e,({node:c})=>"target"in c.dataset);if(r)if(!b||!i)A(r.index);else if(G.includes(r.index)){const c=B.find(({index:p})=>r.index<p)??B[0];A(c.index)}else A(r.index)});D.current.add(s)},[x,B,z,b,i,G]),Te=n.useCallback((e=z)=>{const s=setTimeout(()=>{const r=x.enabledPrevValue(e,({node:c})=>"target"in c.dataset);if(r)if(!b||!i)A(r.index);else if(G.includes(r.index)){const c=B.reverse().find(({index:p})=>p<r.index)??B[0];A(c.index)}else A(r.index)});D.current.add(s)},[x,B,z,b,i,G]),Q=ke||i?ce:Fe,Ge=ke||i?Ae:Fe,Ne=n.useCallback(e=>{const s=x.values();let r=!1,c=!1;s.forEach(({node:p,index:K})=>{if(k(p.textContent??"").includes(e)){r=!0;const T="disabled"in p.dataset;p.dataset.target="",!c&&!T&&(c=!0,A(K))}else delete p.dataset.target}),Ke(r)},[x,k]),$=n.useCallback((e=!0)=>{x.values().forEach(({node:r})=>{r.dataset.target=""}),e&&ce(),Ke(!0)},[x,ce]),_e=n.useCallback(e=>{const s=x.enabledValues();return(W(e)?e:[e]).map(p=>{const{node:K}=s.find(({node:T})=>T.dataset.value===p)??{};if(K){const T=Array.from(K.children).find(Le=>Le.getAttribute("data-label")!==null);return(T==null?void 0:T.textContent)??void 0}else return h?p:void 0}).filter(Boolean)},[h,x]),me=n.useCallback((e,s=!0)=>{const r=_e(e);ye(c=>b?(r.forEach(p=>{W(c)&&c.includes(p??"")?s&&(c=W(c)?c.filter(T=>T!==p):void 0):c=[...W(c)?c:[],p]}),c):r[0])},[_e,b]),L=n.useCallback((e,s=!0)=>{ve(c=>{let p;return W(c)?c.includes(e)?p=c.filter(T=>T!==e):p=[...c,e]:p=e,ne.current=p,p});const r=x.values().filter(({node:c})=>k(c.textContent??"").includes(e)).length>0;me(e),(h||r)&&le(""),b&&s&&$(!1)},[h,b,me,$,ve,x,k]),Me=n.useCallback(()=>{let e=x.value(z);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const s=e.node.dataset.value??"";L(s),u&&M(),i&&fe()},[u,x,z,i,L,M,fe]),ct=n.useCallback(e=>{C||O(),d==null||d(e);const s=e.target.value,r=k(s);r?Ne(r):$(),le(s)},[C,O,k,d,Ne,$]),at=n.useCallback(()=>{ue.current=!0},[]),rt=n.useCallback(()=>{ue.current=!1},[]),je=n.useCallback(()=>{if(!he.current)return;const e={label:w,value:w};let s=[];if(oe&&(s=oe),pe==="first")s=[e,...s];else if(pe==="last")s=[...s,e];else{const c=s.findIndex(({label:K})=>K===pe),p=s[c];c!==-1&&"items"in p?(ze==="first"?p.items=[e,...p.items??[]]:p.items=[...p.items??[],e],s[c]=p):console.warn(`${b?"MultiAutocomplete":"Autocomplete"}: '${pe}' specified in insertPositionItem does not exist in the option group.`)}lt(s),L(w),$(!1);const r=Tt(s).findIndex(({value:c})=>c===w);A(r),a==null||a(e,s)},[w,oe,pe,L,$,a,ze,b]),$e=n.useCallback(()=>{C?V.current&&V.current.focus():(O(),Q())},[C,Q,O]),Ee=n.useCallback(()=>{C||(O(),Q())},[C,Q,O]),We=n.useCallback(e=>{const s=vt(e);yt(se.current,s)||!y&&ie||(h&&w&&L(w,!1),le(""),C&&M())},[y,ie,C,w,h,M,L]),Je=n.useCallback(()=>{L(b?I[I.length-1]:""),C||Ee()},[b,C,L,Ee,I]),ut=n.useCallback(e=>{e.stopPropagation(),ne.current=[],ve([]),ye(void 0),le(""),$(),C&&V.current&&V.current.focus()},[C,ye,le,ve,$]),Ye=n.useCallback(e=>{if(e.key===" "&&(e.key=e.code),N.disabled||N.readOnly||ue.current)return;const s=Se===w||!w.length,c={ArrowDown:de?()=>fe():C?void 0:Pe(O,Q),ArrowUp:de?()=>Te():C?void 0:Pe(O,Ge),Space:Re?je:de?Me:C?void 0:Pe(O,Q),Enter:Re?je:de?Me:C?h&&b?()=>{w&&L(w),A(0)}:void 0:Pe(O,Q),Home:C?ce:void 0,End:C?Ae:void 0,Escape:v?M:void 0,Backspace:!ke&&s?Je:void 0}[e.key];c&&(e.preventDefault(),e.stopPropagation(),c(e))},[h,N,Se,w,O,de,b,Q,fe,Ge,Te,Re,je,Me,C,ce,Ae,v,M,ke,Je,L]);n.useEffect(()=>{if(!b||!i&&Qe(f))return;const e=I.length>0&&I.length===x.count(),s=I.length===f;e||s?(M(),Be(!0)):Be(!1)},[i,I,x,b,M,f]),n.useEffect(()=>{if(b){if(JSON.stringify(ne.current??[])===JSON.stringify(I??[]))return;const e=_e(I);ye(e)}else{if(ne.current===I)return;me(I,!1)}},[b,I,me,_e]),xe(()=>{C||h||(A(-1),le(""))},[C]),xe(()=>{ie||A(-2)},[ie]),kt(()=>{D.current.forEach(e=>clearTimeout(e)),D.current.clear()}),Dt({ref:se,handler:M,enabled:C&&(y||!ie)});const dt=n.useCallback(e=>({matchWidth:!0,...P,...e,isOpen:C,onOpen:O,onClose:M,placement:E,duration:R,trigger:"never",closeOnButton:!1,closeOnBlur:y}),[R,y,C,M,O,E,P]),pt=n.useCallback((e={},s=null)=>({ref:De(se,s),...Y,...e,...N,onClick:U(e.onClick,P.onClick,$e),onBlur:U(e.onBlur,P.onBlur,We)}),[Y,N,We,$e,P]),ft=n.useCallback((e={},s=null)=>({ref:s,tabIndex:-1,...e,...N,placeholder:J,"data-active":ae(C),"aria-expanded":ae(C),onFocus:U(e.onFocus,P.onFocus,Ee),onKeyDown:U(e.onKeyDown,P.onKeyDown,Ye)}),[N,J,C,P,Ee,Ye]);return{id:Ce,descendants:x,value:I,label:Se,inputValue:w,isHit:ie,isEmpty:ee,computedChildren:Ie,focusedIndex:z,omitSelectedValues:i,closeOnSelect:u,allowCreate:g,allowFree:h,emptyMessage:j,isOpen:C,isAllSelected:X,listRef:he,inputRef:V,optionProps:F,formControlProps:N,setFocusedIndex:A,onChangeLabel:me,onChange:L,onSearch:ct,onCreate:je,onClear:ut,onCompositionStart:at,onCompositionEnd:rt,pickOptions:Ne,rebirthOptions:$,onOpen:O,onClose:M,onFocusFirst:ce,onFocusLast:Ae,onFocusSelected:Fe,onFocusNext:fe,onFocusPrev:Te,getPopoverProps:dt,getContainerProps:pt,getFieldProps:ft,inputProps:be}},ds=()=>{const{id:o,inputRef:t,onSearch:l,onCompositionStart:a,onCompositionEnd:d,isAllSelected:u,formControlProps:i,inputProps:f}=S();return xe(()=>{u&&t.current&&t.current.blur()},[u]),{getInputProps:n.useCallback((v={},g=null)=>({ref:De(t,g),...i,...f,...v,id:o,cursor:i.readOnly?"default":"text",pointerEvents:i.disabled||u?"none":"auto",tabIndex:u?-1:0,onChange:U(v.onChange,l),onCompositionStart:U(v.onCompositionStart,f.onCompositionStart,a),onCompositionEnd:U(v.onCompositionEnd,f.onCompositionEnd,d)}),[f,t,i,o,u,l,a,d])}},Ht=()=>{const{focusedIndex:o,isOpen:t,listRef:l,rebirthOptions:a}=S(),d=ot(),u=n.useRef(-1),i=d.value(o),f=n.useCallback(()=>{t||a(!1)},[t,a]);return n.useEffect(()=>{if(!l.current||!i||u.current===i.index)return;const v=l.current,g=i.node,h=v.clientHeight,_=v.scrollTop,j=_+h,k=g.clientHeight,E=g.offsetTop,R=E+k,F=_<=E&&R<=j,J=u.current<i.index;F||(R<=h?l.current.scrollTo({top:0}):J?l.current.scrollTo({top:R-h}):l.current.scrollTo({top:E+1})),u.current=i.index},[l,i]),xe(()=>{t||(u.current=-1)},[t]),{getListProps:n.useCallback((v={},g=null)=>({as:"ul",ref:De(l,g),role:"select",tabIndex:-1,...v,onAnimationComplete:U(v.onAnimationComplete,f)}),[l,f])}},Vt=({label:o,...t})=>{const{value:l,omitSelectedValues:a}=S(),d=W(l),u=ot(),i=u.values(),y=(d&&a?u.values(({node:k})=>l.includes(k.dataset.value??"")):[]).map(({index:k})=>k),g=!i.filter(({node:k,index:E})=>{var R;return((R=k.parentElement)==null?void 0:R.dataset.label)===o&&!y.includes(E)&&"target"in k.dataset}).length,h=tt(t,st),_=n.useCallback((k={},E=null)=>{const R={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:E,...k,...h[0],style:g?R:void 0,"data-label":o,role:"autocomplete-group-container"}},[h,g,o]),j=n.useCallback((k={},E=null)=>({ref:E,...k,...h[1],"data-label":o,role:"autocomplete-group"}),[h,o]);return{label:o,getContainerProps:_,getGroupProps:j}},Bt=o=>{var V;const{value:t,omitSelectedValues:l,onChange:a,onChangeLabel:d,focusedIndex:u,setFocusedIndex:i,onClose:f,closeOnSelect:y,optionProps:v,inputRef:g,onFocusNext:h}=S();let{icon:_,isDisabled:j,isFocusable:k,closeOnSelect:E,children:R,value:F,...J}={...v,...o};const we=!!j&&!k,re=n.useRef(null),{index:q,register:ge,descendants:Oe}=Lt({disabled:we}),P=Oe.values().slice(0,q),Ce=W(t),Y=!(Ce?!1:P.some(({node:D})=>D.dataset.value===(F??"")))&&(Ce?t.includes(F??""):(F??"")===t),be="target"in(((V=re.current)==null?void 0:V.dataset)??{}),x=q===u,se=n.useCallback(D=>{if(D.stopPropagation(),j){g.current&&g.current.focus();return}if(!Nt(D.currentTarget)){g.current&&g.current.focus();return}i(q),a(F??""),g.current&&g.current.focus(),(E??y)&&f(),l&&h(q)},[h,l,j,F,i,q,a,E,y,f,g]);xe(()=>{Y&&d(F??"",!1)},[F]);const he=n.useCallback((D={},ue=null)=>{const ne={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:De(re,ue,ge),...J,...D,role:"autocomplete-item",tabIndex:-1,style:!be||l&&Y?ne:void 0,"data-target":ae(!0),"data-value":F??"","data-focus":ae(x),"data-disabled":ae(j),"aria-checked":Ze(Y),"aria-disabled":Ze(j),onClick:U(J.onClick,D.onClick,se)}},[F,J,j,x,Y,be,l,se,ge]);return{isSelected:Y,isFocused:x,customIcon:_,children:R,getOptionProps:he}},Kt=()=>{const{isHit:o,onCreate:t}=S();return{getCreateProps:n.useCallback((a={},d=null)=>({ref:d,...a,tabIndex:-1,style:o?{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}:void 0,"data-focus":ae(!o),onClick:U(a.onClick,t)}),[o,t])}},Ut=()=>{const{isHit:o,isEmpty:t}=S();return{getEmptyProps:n.useCallback((a={},d=null)=>({ref:d,...a,tabIndex:-1,style:o&&!t?{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}:void 0}),[o,t])}},zt=te(({className:o,children:t,__css:l,...a},d)=>{const{styles:u}=S(),i={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...u.icon,...l},y=nt(t).map(v=>n.cloneElement(v,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return m.jsx(H.div,{ref:d,className:Z("ui-autocomplete__icon",o),__css:i,...a,children:At(t)?y:m.jsx(St,{})})}),ps=({className:o,children:t,...l})=>{const a=n.useRef(null),{styles:d}=S(),u=l.disabled,i=_t({ref:a,isDisabled:u,...l});return m.jsx(zt,{"aria-label":"Clear value",className:Z("ui-autocomplete__icon--clear",o),__css:d.clearIcon,...i,children:t??m.jsx(Rt,{w:"0.5em",h:"0.5em"})})},He=te(({className:o,...t},l)=>{const{styles:a}=S(),d={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...a.itemIcon};return m.jsx(H.span,{ref:l,className:Z("ui-autocomplete__item__icon",o),__css:d,...t})}),fs=te(({className:o,w:t,width:l,minW:a,minWidth:d,...u},i)=>{var g,h,_,j;const{styles:f}=S(),{getListProps:y}=Ht();t=t??l??((g=f.list)==null?void 0:g.w)??((h=f.list)==null?void 0:h.width),a=a??d??((_=f.list)==null?void 0:_.minW)??((j=f.list)==null?void 0:j.minWidth);const v={...f.list};return m.jsx(gt,{className:Z("ui-autocomplete__list",o),w:t,minW:a,__css:v,...y(u,i)})}),Gt=te(({className:o,color:t,h:l,height:a,minH:d,minHeight:u,children:i,...f},y)=>{const{styles:v}=S(),{label:g,getContainerProps:h,getGroupProps:_}=Vt(f);return l??(l=a),d??(d=u),m.jsxs(H.li,{className:Z("ui-autocomplete__item","ui-autocomplete__item--group",o),__css:{w:"100%",h:"fit-content",color:t},...h(),children:[m.jsx(H.span,{className:"ui-autocomplete__item__group-label",__css:v.groupLabel,lineClamp:1,children:g}),m.jsx(H.ul,{..._({},y),className:"ui-autocomplete__item__group",__css:{h:l,minH:d,...v.group},children:i})]})}),et=te(({className:o,icon:t,...l},a)=>{const{styles:d}=S(),{isSelected:u,customIcon:i,children:f,getOptionProps:y}=Bt(l);t??(t=i);const v={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...d.item};return m.jsxs(H.li,{className:Z("ui-autocomplete__item",o),__css:v,...y({},a),children:[t!==null?m.jsx(He,{opacity:u?1:0,children:t||m.jsx($t,{})}):null,m.jsx(H.span,{style:{flex:1},"data-label":!0,children:f})]})}),$t=()=>m.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:m.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),ms=te(({className:o,icon:t,children:l,...a},d)=>{const{inputValue:u,styles:i}=S(),{getCreateProps:f}=Kt();l??(l=u);const y={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...i.item};return m.jsxs(H.li,{className:Z("ui-autocomplete__item--create",o),__css:y,...f(a,d),children:[t!==null?m.jsx(He,{children:t||m.jsx(Wt,{})}):null,t?m.jsx(H.span,{style:{pointerEvents:"none",flex:1},lineClamp:1,children:qe(l,u)}):qe(l,u)]})}),Wt=()=>m.jsx("svg",{viewBox:"0 0 45.402 45.402",width:"1em",height:"1em",children:m.jsx("path",{fill:"currentColor",d:"M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"})}),xs=te(({className:o,icon:t,children:l,...a},d)=>{const{emptyMessage:u,styles:i}=S(),{getEmptyProps:f}=Ut();l??(l=u);const y={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",pointerEvents:"none",...i.item};return m.jsxs(H.li,{className:Z("ui-autocomplete__item--empty",o),__css:y,...f(a,d),children:[t!==null?m.jsx(He,{children:t||m.jsx(Jt,{})}):null,t?m.jsx(H.span,{style:{pointerEvents:"none",flex:1},lineClamp:1,children:l}):l]})}),Jt=()=>m.jsx("svg",{viewBox:"0 0 448 512",width:"1em",height:"1em",children:m.jsx("path",{fill:"currentColor",d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"})});export{as as A,rs as a,zt as b,fs as c,ms as d,xs as e,S as f,ds as g,et as h,Gt as i,ps as j,us as u};
