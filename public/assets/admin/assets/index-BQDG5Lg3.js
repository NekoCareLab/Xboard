import{r as u,j as e,B as i,t as S}from"./index-_xd8OyP8.js";import{S as D,T as R,U as T}from"./user-nav-BBmBVa03.js";import{L as V,f as M,g as k}from"./sidelinks-DLs_k-Mk.js";import{D as g,B as L,u as z,a as I,g as P,b as B,c as H,d as U,e as q,f as K}from"./column-header-BLyyjrhJ.js";import{a as E,P as O}from"./react-icons.esm-rZq2pt7A.js";import{I as C}from"./input-d0vtE30O.js";import{x as _,y as A,z as Q,A as $}from"./index-BycJudEO.js";import{D as G,e as J,a as W,b as X,c as Y,d as Z,f as ee,g as se}from"./button-DhrtVlOa.js";import{u as te,F as ae,a as c,b as d,c as m,d as x,e as h}from"./form-DIzSOdtk.js";import{z as r,t as oe}from"./zod-x_8lkCGK.js";import{T as le}from"./textarea-Bmd-AJpD.js";import{S as w}from"./switch-w5WyeRwk.js";import{C as re}from"./confirm-dialog-CHz9pK2w.js";import{T as ie}from"./trash-2-lI1I6nfk.js";import{u as ne}from"./useQuery-mr7Ep0hT.js";import"./index-CcyXqhZ9.js";import"./index-BwSRHYe4.js";import"./index-CX6PQ3zO.js";import"./index-BlMNiBlp.js";import"./IconTicket-COhvkaJH.js";import"./select-Cqkdx-UJ.js";import"./index-CRh0M8qI.js";import"./index-kwEAqj-e.js";import"./tooltip-B58e4dA7.js";import"./arrow-up-9fLptvj0.js";import"./clipboard-YH5zrf5X.js";const ce=r.object({id:r.number().nullable(),title:r.string().min(1).max(250),content:r.string().min(1),show:r.boolean(),popup:r.boolean().optional(),img_url:r.string().nullable()}),de={id:null,show:!1,popup:!1,img_url:"",title:"",content:""};function b({refetch:a,dialogTrigger:s,type:l="add",defaultFormValues:n=de}){const[p,j]=u.useState(!1),o=te({resolver:oe(ce),defaultValues:n,mode:"onChange",shouldFocusError:!0});return e.jsx(ae,{...o,children:e.jsxs(G,{onOpenChange:j,open:p,children:[e.jsx(J,{asChild:!0,children:s||e.jsx(i,{variant:"outline",children:"添加公告"})}),e.jsxs(W,{className:"sm:max-w-[425px]",children:[e.jsxs(X,{children:[e.jsx(Y,{children:l==="add"?"添加公告":"编辑公告"}),e.jsx(Z,{})]}),e.jsx(c,{control:o.control,name:"title",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{children:"标题"}),e.jsx("div",{className:"relative ",children:e.jsx(x,{children:e.jsx(C,{placeholder:"请输入公告标题",...t})})}),e.jsx(h,{})]})}),e.jsx(c,{control:o.control,name:"content",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{children:"公告内容"}),e.jsx("div",{className:"relative",children:e.jsx(x,{children:e.jsx(le,{className:"min-h-[150px]",placeholder:"请输入公告内容，支持HTML",...t})})}),e.jsx(h,{})]})}),e.jsx(c,{control:o.control,name:"img_url",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{children:"公告背景"}),e.jsx("div",{className:"relative",children:e.jsx(x,{children:e.jsx(C,{type:"text",placeholder:"请输入公告背景图片URL",...t,value:t.value||""})})}),e.jsx(h,{})]})}),e.jsx(c,{control:o.control,name:"show",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{children:"显示"}),e.jsx("div",{className:"relative py-2",children:e.jsx(x,{children:e.jsx(w,{checked:t.value,onCheckedChange:t.onChange})})}),e.jsx(h,{})]})}),e.jsx(c,{control:o.control,name:"popup",render:({field:t})=>e.jsxs(d,{children:[e.jsx(m,{children:"弹窗?"}),e.jsx("div",{className:"relative py-2",children:e.jsx(x,{children:e.jsx(w,{checked:t.value,onCheckedChange:t.onChange})})}),e.jsx(h,{})]})}),e.jsxs(ee,{children:[e.jsx(se,{asChild:!0,children:e.jsx(i,{type:"button",variant:"outline",children:"取消"})}),e.jsx(i,{type:"submit",onClick:t=>{t.preventDefault(),o.handleSubmit(async f=>{try{(await _(f)).data&&(await a(),j(!1))}catch(v){console.error("Failed to save notice:",v)}})()},children:"提交"})]})]})]})})}function me({table:a,refetch:s}){const l=a.getState().columnFilters.length>0;return e.jsxs("div",{className:"flex items-center justify-between space-x-2 ",children:[e.jsxs("div",{className:"flex flex-1 items-center space-x-4",children:[e.jsx(C,{placeholder:"搜索公告标题...",value:a.getColumn("title")?.getFilterValue()??"",onChange:n=>a.getColumn("title")?.setFilterValue(n.target.value),className:"h-9 w-[150px] lg:w-[250px]"}),l&&e.jsxs(i,{variant:"ghost",onClick:()=>a.resetColumnFilters(),className:"h-9 px-2 lg:px-3",children:["重置",e.jsx(E,{className:"ml-2 h-4 w-4"})]})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(b,{refetch:s})})]})}const xe=a=>[{accessorKey:"id",header:({column:s})=>e.jsx(g,{column:s,title:"ID"}),cell:({row:s})=>e.jsx(L,{variant:"outline",className:"font-mono",children:s.getValue("id")}),enableSorting:!0,size:60},{accessorKey:"show",header:({column:s})=>e.jsx(g,{column:s,title:"显示状态"}),cell:({row:s})=>e.jsx("div",{className:"flex items-center",children:e.jsx(w,{defaultChecked:s.getValue("show"),onCheckedChange:async()=>{const{data:l}=await A({id:s.original.id});l||a()}})}),enableSorting:!1,size:100},{accessorKey:"title",header:({column:s})=>e.jsx(g,{column:s,title:"标题"}),cell:({row:s})=>e.jsx("div",{className:"flex max-w-[500px] items-center",children:e.jsx("span",{className:"truncate font-medium",children:s.getValue("title")})}),enableSorting:!1,size:6e3},{id:"actions",header:({column:s})=>e.jsx(g,{className:"justify-end",column:s,title:"操作"}),cell:({row:s})=>e.jsxs("div",{className:"flex items-center justify-end space-x-2",children:[e.jsx(b,{refetch:a,dialogTrigger:e.jsxs(i,{variant:"ghost",size:"icon",className:"h-8 w-8 hover:bg-muted",children:[e.jsx(O,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"}),e.jsx("span",{className:"sr-only",children:"编辑"})]}),type:"edit",defaultFormValues:s.original}),e.jsx(re,{title:"删除确认",description:"确定要删除该条公告吗？此操作无法撤销。",onConfirm:async()=>{Q({id:s.original.id}).then(()=>{S.success("删除成功"),a()})},children:e.jsxs(i,{variant:"ghost",size:"icon",className:"h-8 w-8 hover:bg-red-100 dark:hover:bg-red-900",children:[e.jsx(ie,{className:"h-4 w-4 text-muted-foreground hover:text-red-600 dark:hover:text-red-400"}),e.jsx("span",{className:"sr-only",children:"删除"})]})})]}),size:100}];function he(){const[a,s]=u.useState({}),[l,n]=u.useState({}),[p,j]=u.useState([]),[o,t]=u.useState([]),{data:f,isLoading:v,refetch:y}=ne({queryKey:["notices"],queryFn:async()=>{const{data:N}=await $();return N}}),F=z({data:f??[],columns:xe(y),state:{sorting:o,columnVisibility:l,rowSelection:a,columnFilters:p},enableRowSelection:!0,onRowSelectionChange:s,onSortingChange:t,onColumnFiltersChange:j,onColumnVisibilityChange:n,getCoreRowModel:P(),getFilteredRowModel:B(),getPaginationRowModel:H(),getSortedRowModel:U(),getFacetedRowModel:q(),getFacetedUniqueValues:K(),initialState:{columnPinning:{right:["actions"]}}});return e.jsx(I,{table:F,toolbar:N=>e.jsx(me,{table:N,refetch:y})})}function qe(){return e.jsxs(V,{children:[e.jsxs(M,{className:"flex items-center justify-between",children:[e.jsx(D,{}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(R,{}),e.jsx(T,{})]})]}),e.jsxs(k,{className:"flex flex-col",fixedHeight:!0,children:[e.jsx("div",{className:"mb-2 flex items-center justify-between space-y-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",children:e.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:"公告管理"})}),e.jsx("p",{className:"text-muted-foreground",children:"在这里可以配置公告，包括添加、删除、编辑等操作。"})]})}),e.jsx("div",{className:"-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0",children:e.jsx(he,{})})]})]})}export{qe as default};