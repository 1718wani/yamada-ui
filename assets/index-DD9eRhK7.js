import{u as h}from"./index-rYLD436_.js";import{u as b}from"./index-BTbHygxe.js";import{r as a}from"./index-CBqU2yxZ.js";import{l as u,I as f,k as g,D as v,A as w}from"./factory-D1MzC1Q2.js";import{u as l}from"./theme-provider-LCtE2tbw.js";const C=t=>{const{theme:n}=l();return u(t)?t.map(c=>f(c,n)).join(", "):f(t,n)},x=(t,n)=>{const{theme:c}=l(),e=a.useRef(g(n)?void 0:u(n)?n.map(String):String(n)),r=a.useRef(new Map),[m,d]=a.useState(()=>{for(const[s,o]of Object.entries(t)){if(r.current.has(s))return;u(o)?r.current.set(s,o.map(i=>f(i,c)).join(", ")):r.current.set(s,f(o,c))}return u(e.current)?e.current.map(s=>r.current.get(s)).join(", "):r.current.get(e.current??"")}),p=a.useCallback(s=>{const o=!g(e.current)&&u(t)?u(e.current)?e.current.map(Number):Number(e.current):e.current,i=v(s,o);e.current=u(i)?i.map(String):String(i),u(e.current)?d(e.current.map(A=>r.current.get(A)).join(", ")):d(r.current.get(e.current??""))},[t]);return[m,p]},D=({isOpen:t,ref:n})=>{const[c,e]=a.useState(t),[r,{on:m}]=h();return a.useEffect(()=>{r||(e(t),m())},[t,r,m]),b(()=>n.current,"animationend",()=>e(t)),{present:!(t?!1:!c),onAnimationComplete(){var o;const p=w(n.current),s=new p.CustomEvent("animationend",{bubbles:!0});(o=n.current)==null||o.dispatchEvent(s)}}};export{x as a,D as b,C as u};
