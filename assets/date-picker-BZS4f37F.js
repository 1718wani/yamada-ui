import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as Le}from"./index-xvtPiTnZ.js";import{r as n}from"./index-CBqU2yxZ.js";import{d as ee,i as Ie,a as we,b as Ue,C as Ze}from"./ja-BrQV8v62.js";import{u as qe}from"./index-DSj5GNQO.js";import{u as Ge}from"./index-BHuzZ_Dc.js";import{u as Je}from"./index-DNgTNNH4.js";import{u as Qe,g as Xe}from"./form-control-C66gGVhm.js";import{p as $e,P as et,b as tt,a as ot}from"./popover-content-nZ9PAZaa.js";import{u as nt,o as st}from"./theme-provider-DZcwar_c.js";import{R as at,Z as rt,_ as it,B as lt,a3 as ct,S as ut,a as te,h as A,x as Fe,k as pt,e as dt,a4 as ft,u as W,c as L,s as mt,g as Ct}from"./factory-Ckx2Jgsp.js";import{P as Pt}from"./container-portal-B2VDKFW4.js";import{b as ht,a as gt}from"./icon-Dnn1bVsx.js";import{f as oe}from"./forward-ref-DuAegr0M.js";import{a as kt}from"./use-component-style-BZBbbb_H.js";const yt=m=>{var Oe;const{theme:l}=nt();let{id:c,closeOnBlur:p=!0,closeOnEsc:C=!0,placement:d="bottom-start",duration:r=.2,enableMultiple:f,enableRange:g,value:P,defaultValue:j,onChange:B,type:O,defaultType:_,onChangeType:S,month:D,defaultMonth:R,onChangeMonth:T,firstDayOfWeek:M,amountOfMonths:N,paginateBy:H,withWeekdays:z,disableOutsideDays:I,hiddenOutsideDays:k,minDate:u,maxDate:h,locale:t,yearFormat:i,monthFormat:w,weekdayFormat:se,dateFormat:ae,weekendDays:re,today:ie,excludeDate:y,calendarVariant:le,calendarSize:ce,calendarColorScheme:ue,holidays:pe,withHeader:de,withControls:fe,withLabel:me,maxSelectValues:Ce,selectMonthWith:Pe,calendarProps:he,allowInput:b=!0,allowInputBeyond:U=!1,parseDate:Z,pattern:Ee=/[^0-9\-\/]/g,inputFormat:q="YYYY/MM/DD",autoFocus:Y=!0,isOpen:Be,defaultIsOpen:Re,onOpen:Se,onClose:Te,onClear:G,onEnter:ge,onDelete:ke,...v}=Qe(m);t??(t=((Oe=l.__config.date)==null?void 0:Oe.locale)??"en");const F=at(v,Xe({omit:["aria-readonly"]})),[ye,Me]=rt(lt(v,$e),it),{disabled:J,readOnly:Q}=F,{isOpen:a,onOpen:be,onClose:V}=Ge({isOpen:Be,defaultIsOpen:Re,onOpen:Se,onClose:Te}),X=n.useRef(null),K=n.useRef(null),Ne=n.useCallback(e=>{let o=(Z==null?void 0:Z(e))??ee(e,q,t).toDate();if(o!=null&&!(y!=null&&y(o)))return U||(h&&Ie(o,h)&&(o=h),u&&we(o,u)&&(o=u)),o},[U,y,q,t,h,u,Z]),He=n.useCallback(e=>{if(e!=null&&!(y!=null&&y(e)))return U||(h&&Ie(e,h)&&(e=h),u&&we(e,u)&&(e=u)),ee(e).locale(t??"en").format(q)},[U,y,q,t,h,u]),x=n.useCallback(()=>{var e;J||Q||(be(),Y&&b&&((e=K.current)==null||e.focus()))},[Y,b,J,Q,be]),ve=n.useCallback(()=>{var e;a?Y&&b&&((e=K.current)==null||e.focus()):x()},[Y,b,a,x]),xe=n.useCallback(()=>{a||x()},[a,x]),_e=n.useCallback(e=>{const o=ct(e);ut(X.current,o)||p&&a&&V()},[p,a,V]),De=n.useCallback(e=>{if(e.key===" "&&(e.key=e.code),J||Q)return;const $={Space:a?void 0:E=>{E.preventDefault(),E.stopPropagation(),x()},Enter:a?ge:E=>{E.preventDefault(),E.stopPropagation(),x()},Escape:C?E=>{E.preventDefault(),E.stopPropagation(),V()}:void 0,Backspace:ke}[e.key];$&&$(e)},[C,J,Q,a,V,ge,ke,x]),je=n.useCallback(e=>{var o;e.stopPropagation(),G==null||G(),Y&&b&&a&&((o=K.current)==null||o.focus())},[Y,b,a,G]);Je({ref:X,handler:V,enabled:a&&p});const ze=n.useCallback((e={},o=null)=>({ref:te(X,o),...ye,...e,...F,onClick:A(e.onClick,v.onClick,ve),onBlur:A(e.onBlur,v.onBlur,_e)}),[ye,F,_e,ve,v]),Ye=n.useCallback(e=>({...v,...e,isOpen:a,onOpen:x,onClose:V,placement:d,duration:r,trigger:"never",closeOnButton:!1,closeOnBlur:!1}),[r,a,V,x,d,v]),Ae=n.useCallback((e={},o=null)=>{const $={...e.style,...b?{}:{cursor:"pointer"}};return{ref:te(K,o),tabIndex:b?-1:0,...e,...F,style:$,"data-active":Fe(a),"aria-expanded":Fe(a),onFocus:A(e.onFocus,v.onFocus,xe),onKeyDown:A(e.onKeyDown,v.onKeyDown,De)}},[b,F,a,v,xe,De]),Ke=n.useCallback(e=>({...e,type:O,defaultType:_,onChangeType:S,month:D,defaultMonth:R,onChangeMonth:T,firstDayOfWeek:M,amountOfMonths:N,paginateBy:H,withWeekdays:z,disableOutsideDays:I,hiddenOutsideDays:k,yearFormat:i,monthFormat:w,weekdayFormat:se,dateFormat:ae,weekendDays:re,today:ie,holidays:pe,withHeader:de,withControls:fe,withLabel:me,maxSelectValues:Ce,variant:le,size:ce,colorScheme:ue,...he,value:P,defaultValue:j,onChange:B,minDate:u,maxDate:h,excludeDate:y,locale:t,selectMonthWith:Pe,enableMultiple:f,enableRange:g}),[k,Ce,f,g,N,ue,he,ce,le,ae,R,_,j,I,y,M,pe,t,h,u,D,w,B,T,S,H,ie,O,P,se,re,fe,de,me,z,i,Pe]),We=n.useCallback(({clear:e,...o})=>({...o,...F,onClick:A(o.onClick,e?je:void 0)}),[F,je]);return{id:c,allowInput:b,pattern:Ee,inputProps:Me,formControlProps:F,containerRef:X,inputRef:K,isOpen:a,onOpen:x,onClose:V,dateToString:He,stringToDate:Ne,getContainerProps:ze,getPopoverProps:Ye,getFieldProps:Ae,getCalendarProps:Ke,getIconProps:We}},[bt,ne]=pt({strict:!1,name:"DatePickerContext"}),vt=({value:m,defaultValue:l,onChange:c,placeholder:p,closeOnSelect:C=!0,...d})=>{const[r,f]=qe({value:m,defaultValue:l,onChange:c,onUpdate:(t,i)=>!Ue(t,i)}),{inputRef:g,id:P,allowInput:j,pattern:B,inputProps:O,formControlProps:_,onClose:S,dateToString:D,stringToDate:R,getContainerProps:T,getPopoverProps:M,getFieldProps:N,getCalendarProps:H,getIconProps:z}=yt({...d,value:r,defaultValue:l,onChange:t=>{const i=D(t);f(t),k(i),C&&t&&S()},onClear:()=>{f(void 0),k(void 0)},onClose:()=>{var i;const t=D(r);k(t),(i=d.onClose)==null||i.call(d)}}),[I,k]=n.useState(D(r)),u=n.useCallback(t=>{let i=t.target.value;i=i.replace(B,"");const w=R(i);k(i),w&&ee(w).isValid()?f(w):f(void 0)},[B,R,k,f]);dt(()=>{if(g.current&&ft(g.current))return;const t=D(r);k(t)},[r]);const h=n.useCallback((t={},i=null)=>{const w={...t.style,...O.style,...j?{}:{pointerEvents:"none"}};return{placeholder:p,..._,...O,...t,ref:i,style:w,id:P,tabIndex:j?0:-1,value:I??"",cursor:_.readOnly?"default":"text",pointerEvents:_.disabled?"none":"auto",onChange:A(t.onChange,u)}},[O,j,p,_,P,I,u]);return{value:r,getContainerProps:T,getPopoverProps:M,getFieldProps:N,getInputProps:h,getIconProps:z,getCalendarProps:H}},Yt=oe((m,l)=>{const[c,p]=kt("DatePicker",m);let{className:C,isClearable:d=!0,color:r,h:f,height:g,minH:P,minHeight:j,containerProps:B,inputProps:O,iconProps:_,clearIconProps:S,portalProps:D={isDisabled:!0},...R}=st(p);const{getPopoverProps:T,getContainerProps:M,getCalendarProps:N,getFieldProps:H,getInputProps:z,getIconProps:I,value:k}=vt(R);f??(f=g),P??(P=j);const u={w:"100%",h:"fit-content",color:r,...c.container};return s.jsx(bt,{value:c,children:s.jsx(et,{...T(),children:s.jsxs(W.div,{className:L("ui-date-picker",C),__css:u,...M(B),children:[s.jsxs(W.div,{className:"ui-date-picker__inner",__css:{position:"relative",...c.inner},children:[s.jsx(xt,{...H({h:f,minH:P},l),inputProps:z(O)}),d&&k?s.jsx(Dt,{...I({clear:!0,...S})}):s.jsx(Ve,{...I({clear:!1,..._})})]}),s.jsx(Pt,{...D,children:s.jsx(tt,{className:"ui-date-picker__popover",__css:{...c.list},children:s.jsx(Ze,{className:"ui-date-picker__calendar",...N()})})})]})})})}),xt=oe(({className:m,h:l,minH:c,inputProps:p,...C},d)=>{const r=ne(),{ref:f,...g}=p,P={pe:"2rem",h:l,minH:c,display:"flex",alignItems:"center",...r.field};return s.jsx(ot,{children:s.jsx(W.div,{className:L("ui-date-picker__field",m),__css:P,...C,children:s.jsx(W.input,{ref:te(d,f),className:"ui-date-picker__field__input",display:"inline-block",w:"100%",...g})})})}),Ve=oe(({className:m,children:l,__css:c,...p},C)=>{const r={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...ne().icon,...c},g=mt(l).map(P=>n.cloneElement(P,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return s.jsx(W.div,{ref:C,className:L("ui-date-picker__icon",m),__css:r,...p,children:Ct(l)?g:s.jsx(_t,{})})}),_t=({className:m,...l})=>s.jsx(ht,{className:L("ui-date-picker__icon__calendar",m),viewBox:"0 0 24 24",...l,children:s.jsx("path",{fill:"currentColor",d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"})}),Dt=({className:m,children:l,...c})=>{const p=n.useRef(null),C=ne(),d=c.disabled,r=Le({ref:p,isDisabled:d,...c});return s.jsx(Ve,{"aria-label":"Clear value",className:L("ui-date-picker__icon--clear",m),__css:C.clearIcon,...r,children:l??s.jsx(gt,{w:"0.5em",h:"0.5em"})})};export{Yt as D,bt as a,xt as b,Dt as c,Ve as d,ne as e,yt as u};