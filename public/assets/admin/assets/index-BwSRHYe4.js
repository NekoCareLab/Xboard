import{r as c,j as C}from"./index-_xd8OyP8.js";function $(e,o,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),t===!1||!n.defaultPrevented)return o?.(n)}}function j(e,o){const t=c.createContext(o),u=s=>{const{children:r,...a}=s,i=c.useMemo(()=>a,Object.values(a));return C.jsx(t.Provider,{value:i,children:r})};u.displayName=e+"Provider";function n(s){const r=c.useContext(t);if(r)return r;if(o!==void 0)return o;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[u,n]}function w(e,o=[]){let t=[];function u(s,r){const a=c.createContext(r),i=t.length;t=[...t,r];const f=l=>{const{scope:p,children:v,...d}=l,h=p?.[e]?.[i]||a,S=c.useMemo(()=>d,Object.values(d));return C.jsx(h.Provider,{value:S,children:v})};f.displayName=s+"Provider";function x(l,p){const v=p?.[e]?.[i]||a,d=c.useContext(v);if(d)return d;if(r!==void 0)return r;throw new Error(`\`${l}\` must be used within \`${s}\``)}return[f,x]}const n=()=>{const s=t.map(r=>c.createContext(r));return function(a){const i=a?.[e]||s;return c.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return n.scopeName=e,[u,P(n,...o)]}function P(...e){const o=e[0];if(e.length===1)return o;const t=()=>{const u=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(s){const r=u.reduce((a,{useScope:i,scopeName:f})=>{const l=i(s)[`__scope${f}`];return{...a,...l}},{});return c.useMemo(()=>({[`__scope${o.scopeName}`]:r}),[r])}};return t.scopeName=o.scopeName,t}function m(e){const o=c.useRef(e);return c.useEffect(()=>{o.current=e}),c.useMemo(()=>(...t)=>o.current?.(...t),[])}function R({prop:e,defaultProp:o,onChange:t=()=>{}}){const[u,n]=b({defaultProp:o,onChange:t}),s=e!==void 0,r=s?e:u,a=m(t),i=c.useCallback(f=>{if(s){const l=typeof f=="function"?f(e):f;l!==e&&a(l)}else n(f)},[s,e,n,a]);return[r,i]}function b({defaultProp:e,onChange:o}){const t=c.useState(e),[u]=t,n=c.useRef(u),s=m(o);return c.useEffect(()=>{n.current!==u&&(s(u),n.current=u)},[u,n,s]),t}var _=globalThis?.document?c.useLayoutEffect:()=>{};export{$ as a,_ as b,w as c,m as d,j as e,R as u};