import{r as p,j as e,a as N,x as q,B as v,t as I}from"./index-_xd8OyP8.js";import{z as l,t as Q}from"./zod-x_8lkCGK.js";import{u as J,F as W,a as o,b as i,c,e as u,d as y}from"./form-DIzSOdtk.js";import{I as j}from"./input-d0vtE30O.js";import{a as X,b as Z}from"./react-icons.esm-rZq2pt7A.js";import{V as ee,ab as se,ac as ae}from"./index-BycJudEO.js";import{S,a as T,b as k,c as _,d as f}from"./select-Cqkdx-UJ.js";import{P as ne,a as re,b as le}from"./popover-C5eiPdqD.js";import{C as te,b as oe}from"./calendar-DHKoWj25.js";import{a as F,e as ie,b as P}from"./common-BL1VIuho.js";import{O,C as V,l as ce,j as L,k as A,P as de,R as me,T as xe,D as he,e as ue,a as je,b as pe,c as ge,B as H}from"./button-DhrtVlOa.js";import{S as R}from"./switch-w5WyeRwk.js";import{T as ve}from"./textarea-Bmd-AJpD.js";import{u as be,g as fe,T as Ne,h as Ce,i as w,j as ye,k as B,l as we,m as z,B as Se}from"./column-header-BLyyjrhJ.js";import{u as Te}from"./useQuery-mr7Ep0hT.js";import{S as ke}from"./skeleton-Dzu0p8kx.js";const _e=me,De=xe,Pe=de,K=p.forwardRef(({className:n,...t},x)=>e.jsx(O,{className:N("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...t,ref:x}));K.displayName=O.displayName;const ze=q("fixed overflow-y-scroll  z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md"}},defaultVariants:{side:"right"}}),U=p.forwardRef(({side:n="right",className:t,children:x,...C},h)=>e.jsxs(Pe,{children:[e.jsx(K,{}),e.jsxs(V,{ref:h,className:N(ze({side:n}),t),...C,children:[e.jsxs(ce,{className:"absolute right-4 top-4  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(X,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]}),x]})]}));U.displayName=V.displayName;const E=({className:n,...t})=>e.jsx("div",{className:N("flex flex-col space-y-2 text-center sm:text-left",n),...t});E.displayName="SheetHeader";const Y=({className:n,...t})=>e.jsx("div",{className:N("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...t});Y.displayName="SheetFooter";const $=p.forwardRef(({className:n,...t},x)=>e.jsx(L,{ref:x,className:N("text-lg font-semibold text-foreground",n),...t}));$.displayName=L.displayName;const G=p.forwardRef(({className:n,...t},x)=>e.jsx(A,{ref:x,className:N("text-sm text-muted-foreground",n),...t}));G.displayName=A.displayName;const Me=l.object({id:l.number(),email:l.string().email(),invite_user_email:l.string().email().nullable().optional(),password:l.string().optional().nullable(),balance:l.coerce.number(),commission_balance:l.coerce.number(),u:l.number(),d:l.number(),transfer_enable:l.number(),expired_at:l.number().nullable(),plan_id:l.number().nullable(),banned:l.number(),commission_type:l.number(),commission_rate:l.number().nullable(),discount:l.number().nullable(),speed_limit:l.number().nullable(),is_admin:l.number(),is_staff:l.number(),remarks:l.string().nullable()});function Ze({refetch:n,defaultValues:t,dialogTrigger:x=e.jsxs(v,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"编辑用户信息"]})}){const[C,h]=p.useState(!1),[D,g]=p.useState(!1),r=J({resolver:Q(Me),defaultValues:t,mode:"onChange"}),[m,d]=p.useState([]);return p.useEffect(()=>{C&&ee().then(({data:s})=>{d(s)})},[C]),e.jsxs(_e,{open:C,onOpenChange:h,children:[e.jsx(De,{asChild:!0,children:x}),e.jsxs(U,{className:"max-w-[90%]  space-y-4 ",children:[e.jsxs(E,{children:[e.jsx($,{children:"用户管理"}),e.jsx(G,{})]}),e.jsxs(W,{...r,children:[e.jsx(o,{control:r.control,name:"email",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"邮箱"}),e.jsx(j,{...s,placeholder:"请输入邮箱"}),e.jsx(u,{...s})]})}),e.jsx(o,{control:r.control,name:"invite_user_email",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"邀请人邮箱"}),e.jsx(j,{value:s.value||"",onChange:a=>s.onChange(a.target.value?a.target.value:null),placeholder:"请输入邮箱"}),e.jsx(u,{...s})]})}),e.jsx(o,{control:r.control,name:"password",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"密码"}),e.jsx(j,{value:s.value||"",onChange:s.onChange,placeholder:"如需修改密码请输入"}),e.jsx(u,{...s})]})}),e.jsxs("div",{className:"grid gap-2 md:grid-cols-2",children:[e.jsx(o,{control:r.control,name:"balance",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"余额"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value||"",onChange:s.onChange,placeholder:"请输入余额",className:"rounded-r-none"}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"¥"})]}),e.jsx(u,{...s})]})}),e.jsx(o,{control:r.control,name:"commission_balance",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"佣金余额"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value||"",onChange:s.onChange,placeholder:"请输入佣金余额",className:"rounded-r-none"}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"¥"})]}),e.jsx(u,{...s})]})}),e.jsx(o,{control:r.control,name:"u",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"已用上行"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:(s.value/1024/1024/1024).toFixed(3)||"",onChange:a=>s.onChange(parseInt(a.target.value)*1024*1024*1024),placeholder:"已用上行",className:"rounded-r-none"}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"GB"})]}),e.jsx(u,{...s})]})}),e.jsx(o,{control:r.control,name:"d",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"已用下行"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:(s.value/1024/1024/1024).toFixed(3)||"",onChange:a=>s.onChange(parseInt(a.target.value)*1024*1024*1024),placeholder:"已用下行",className:"rounded-r-none"}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"GB"})]}),e.jsx(u,{...s})]})})]}),e.jsx(o,{control:r.control,name:"transfer_enable",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"流量"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value/1024/1024/1024||"",onChange:a=>s.onChange(parseInt(a.target.value)*1024*1024*1024),placeholder:"请输入流量",className:"rounded-r-none "}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"GB"})]}),e.jsx(u,{})]})}),e.jsx(o,{control:r.control,name:"expired_at",render:({field:s})=>e.jsxs(i,{className:"flex flex-col",children:[e.jsx(c,{children:"到期时间"}),e.jsxs(ne,{open:D,onOpenChange:g,children:[e.jsx(re,{asChild:!0,children:e.jsx(y,{children:e.jsxs(v,{type:"button",variant:"outline",className:N("w-full pl-3 text-left font-normal",!s.value&&"text-muted-foreground"),onClick:()=>g(!0),children:[s.value?F(s.value):e.jsx("span",{children:"请选择用户到期日期，留空为长期有效"}),e.jsx(te,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(le,{className:"w-auto p-0",align:"start",side:"top",sideOffset:4,onInteractOutside:a=>{a.preventDefault()},onEscapeKeyDown:a=>{a.preventDefault()},children:e.jsxs("div",{className:"flex flex-col space-y-3 p-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(v,{type:"button",variant:"outline",className:"flex-1",onClick:()=>{s.onChange(null),g(!1)},children:"长期有效"}),e.jsx(v,{type:"button",variant:"outline",className:"flex-1",onClick:()=>{const a=new Date;a.setMonth(a.getMonth()+1),a.setHours(23,59,59,999),s.onChange(Math.floor(a.getTime()/1e3)),g(!1)},children:"一个月"}),e.jsx(v,{type:"button",variant:"outline",className:"flex-1",onClick:()=>{const a=new Date;a.setMonth(a.getMonth()+3),a.setHours(23,59,59,999),s.onChange(Math.floor(a.getTime()/1e3)),g(!1)},children:"三个月"})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx(oe,{mode:"single",selected:s.value?new Date(s.value*1e3):void 0,onSelect:a=>{if(a){const b=new Date(s.value?s.value*1e3:Date.now());a.setHours(b.getHours(),b.getMinutes(),b.getSeconds()),s.onChange(Math.floor(a.getTime()/1e3))}},disabled:a=>a<new Date,initialFocus:!0,className:"rounded-md border-none"})}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-medium text-muted-foreground",children:"具体时间"}),e.jsx(v,{type:"button",variant:"ghost",size:"sm",onClick:()=>{const a=new Date;a.setHours(23,59,59,999),s.onChange(Math.floor(a.getTime()/1e3))},className:"h-6 px-2 text-xs",children:"设为当天结束"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{type:"datetime-local",step:"1",value:F(s.value,"YYYY-MM-DDTHH:mm:ss"),onChange:a=>{const b=new Date(a.target.value);isNaN(b.getTime())||s.onChange(Math.floor(b.getTime()/1e3))},className:"flex-1"}),e.jsx(v,{type:"button",variant:"outline",onClick:()=>g(!1),children:"确定"})]})]})]})})]}),e.jsx(u,{})]})}),e.jsx(o,{control:r.control,name:"plan_id",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"订阅计划"}),e.jsx(y,{children:e.jsxs(S,{value:s.value?s.value.toString():"null",onValueChange:a=>s.onChange(a==="null"?null:parseInt(a)),children:[e.jsx(T,{children:e.jsx(k,{placeholder:"无"})}),e.jsxs(_,{children:[e.jsx(f,{value:"null",children:"无"}),m.map(a=>e.jsx(f,{value:a.id.toString(),children:a.name},a.id))]})]})})]})}),e.jsx(o,{control:r.control,name:"banned",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"账户状态"}),e.jsx(y,{children:e.jsxs(S,{value:s.value.toString(),onValueChange:a=>s.onChange(parseInt(a)),children:[e.jsx(T,{children:e.jsx(k,{})}),e.jsxs(_,{children:[e.jsx(f,{value:"1",children:"封禁"}),e.jsx(f,{value:"0",children:"正常"})]})]})})]})}),e.jsx(o,{control:r.control,name:"commission_type",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"佣金类型"}),e.jsx(y,{children:e.jsxs(S,{value:s.value.toString(),onValueChange:a=>s.onChange(parseInt(a)),children:[e.jsx(T,{children:e.jsx(k,{placeholder:"无"})}),e.jsxs(_,{children:[e.jsx(f,{value:"0",children:"跟随系统设置"}),e.jsx(f,{value:"1",children:"循环返利"}),e.jsx(f,{value:"2",children:"首次返利"})]})]})})]})}),e.jsx(o,{control:r.control,name:"commission_rate",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"推荐返利比例"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value||"",onChange:a=>s.onChange(parseInt(a.currentTarget.value)||null),placeholder:"请输入推荐返利比例(为空则跟随站点设置返利比例)",className:"rounded-r-none "}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"%"})]}),e.jsx(u,{})]})}),e.jsx(o,{control:r.control,name:"discount",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"专享折扣比例"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value||"",onChange:a=>s.onChange(parseInt(a.currentTarget.value)||null),placeholder:"请输入专享折扣比例(为空则不享受专享折扣)",className:"rounded-r-none "}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"%"})]}),e.jsx(u,{})]})}),e.jsx(o,{control:r.control,name:"speed_limit",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"限速"}),e.jsxs("div",{className:"flex",children:[e.jsx(j,{type:"number",value:s.value||"",onChange:a=>s.onChange(parseInt(a.currentTarget.value)||null),placeholder:"留空则不限速",className:"rounded-r-none "}),e.jsx("div",{className:"z-[-1] rounded-md rounded-l-none border border-l-0 border-input px-3 py-1 shadow-sm",children:"Mbps"})]}),e.jsx(u,{})]})}),e.jsx(o,{control:r.control,name:"is_admin",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"是否管理员"}),e.jsx("div",{className:"py-2",children:e.jsx(y,{children:e.jsx(R,{checked:s.value===1,onCheckedChange:a=>s.onChange(a?1:0)})})})]})}),e.jsx(o,{control:r.control,name:"is_staff",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"是否员工"}),e.jsx("div",{className:"py-2",children:e.jsx(y,{children:e.jsx(R,{checked:s.value===1,onCheckedChange:a=>s.onChange(a?1:0)})})})]})}),e.jsx(o,{control:r.control,name:"remarks",render:({field:s})=>e.jsxs(i,{children:[e.jsx(c,{children:"备注"}),e.jsx(ve,{className:"h-24",value:s.value||"",onChange:a=>s.onChange(a.currentTarget.value??null),placeholder:"请在这里记录"})]})})]}),e.jsxs(Y,{children:[e.jsx(v,{variant:"outline",onClick:()=>h(!1),children:"取消"}),e.jsx(v,{type:"submit",onClick:()=>{r.handleSubmit(s=>{se(s).then(({data:a})=>{a&&(I.success("修改成功"),h(!1),n())}).catch(a=>{I.error("修改失败")})})()},children:"提交"})]})]})]})}const Ie=n=>e.jsx("svg",{className:"inline-block",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...n,children:e.jsx("path",{fill:"currentColor",d:"m17.71 11.29l-5-5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"})}),Fe=n=>e.jsx("svg",{className:"inline-block",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...n,children:e.jsx("path",{fill:"currentColor",d:"M17.71 11.29a1 1 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l5-5a1 1 0 0 0 0-1.42"})}),He=n=>e.jsx("svg",{className:"inline-block",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...n,children:e.jsx("path",{fill:"currentColor",d:"M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"})}),Re=n=>e.jsx("svg",{className:"inline-block",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...n,children:e.jsx("path",{fill:"currentColor",d:"M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76"})}),M=[{accessorKey:"record_at",header:"时间",cell:({row:n})=>e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("time",{className:"text-sm text-muted-foreground",children:ie(n.original.record_at)})})},{accessorKey:"u",header:"上行流量",cell:({row:n})=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Ie,{className:"h-4 w-4 text-emerald-500"}),e.jsx("span",{className:"font-mono text-sm",children:P(n.original.u)})]})},{accessorKey:"d",header:"下行流量",cell:({row:n})=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Fe,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{className:"font-mono text-sm",children:P(n.original.d)})]})},{accessorKey:"server_rate",header:"倍率",cell:({row:n})=>{const t=n.original.server_rate;return e.jsx("div",{className:"flex items-center space-x-2",children:e.jsxs(Se,{variant:"outline",className:"font-mono",children:[t,"x"]})})}},{id:"total",header:"总计",cell:({row:n})=>{const t=(n.original.u+n.original.d)*n.original.server_rate;return e.jsx("div",{className:"flex items-center justify-end font-mono text-sm",children:P(t)})}}];function es({user_id:n,dialogTrigger:t}){const[x,C]=p.useState(!1),[h,D]=p.useState({pageIndex:0,pageSize:10}),{data:g,isLoading:r}=Te({queryKey:["userStats",n,h,x],queryFn:()=>x?ae({user_id:n,pageSize:h.pageSize,page:h.pageIndex+1}):null}),m=be({data:g?.data??[],columns:M,pageCount:Math.ceil((g?.total??0)/h.pageSize),state:{pagination:h},manualPagination:!0,getCoreRowModel:fe(),onPaginationChange:D});return e.jsxs(he,{open:x,onOpenChange:C,children:[e.jsx(ue,{asChild:!0,children:t}),e.jsxs(je,{className:"sm:max-w-[700px]",children:[e.jsx(pe,{children:e.jsx(ge,{children:"流量使用记录"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"rounded-md border",children:e.jsxs(Ne,{children:[e.jsx(Ce,{children:m.getHeaderGroups().map(d=>e.jsx(w,{children:d.headers.map(s=>e.jsx(ye,{className:N("h-10 px-2 text-xs",s.id==="total"&&"text-right"),children:s.isPlaceholder?null:B(s.column.columnDef.header,s.getContext())},s.id))},d.id))}),e.jsx(we,{children:r?Array.from({length:h.pageSize}).map((d,s)=>e.jsx(w,{children:Array.from({length:M.length}).map((a,b)=>e.jsx(z,{className:"p-2",children:e.jsx(ke,{className:"h-6 w-full"})},b))},s)):m.getRowModel().rows?.length?m.getRowModel().rows.map(d=>e.jsx(w,{"data-state":d.getIsSelected()&&"selected",className:"h-10",children:d.getVisibleCells().map(s=>e.jsx(z,{className:"px-2",children:B(s.column.columnDef.cell,s.getContext())},s.id))},d.id)):e.jsx(w,{children:e.jsx(z,{colSpan:M.length,className:"h-24 text-center",children:"暂无记录"})})})]})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"每页显示"}),e.jsxs(S,{value:`${m.getState().pagination.pageSize}`,onValueChange:d=>{m.setPageSize(Number(d))},children:[e.jsx(T,{className:"h-8 w-[70px]",children:e.jsx(k,{placeholder:m.getState().pagination.pageSize})}),e.jsx(_,{side:"top",children:[10,20,30,40,50].map(d=>e.jsx(f,{value:`${d}`,children:d},d))})]}),e.jsx("p",{className:"text-sm font-medium",children:"条记录"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"flex w-[100px] items-center justify-center text-sm",children:["第 ",m.getState().pagination.pageIndex+1," /"," ",m.getPageCount()," 页"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(H,{variant:"outline",size:"icon",className:"h-8 w-8",onClick:()=>m.previousPage(),disabled:!m.getCanPreviousPage()||r,children:e.jsx(He,{className:"h-4 w-4"})}),e.jsx(H,{variant:"outline",size:"icon",className:"h-8 w-8",onClick:()=>m.nextPage(),disabled:!m.getCanNextPage()||r,children:e.jsx(Re,{className:"h-4 w-4"})})]})]})]})]})]})]})}export{es as T,Ze as U,Fe as a,Ie as u};