import{r as h,j as e,B as p,t as v}from"./index-_xd8OyP8.js";import{S as f}from"./separator-lX8UNwTG.js";import{z as t,t as _}from"./zod-x_8lkCGK.js";import{u as b,F,a,b as l,c,d as i,f as m,e as d}from"./form-DIzSOdtk.js";import{I as u}from"./input-d0vtE30O.js";import{u as g}from"./useQuery-mr7Ep0hT.js";import{e as S,s as y}from"./index-BycJudEO.js";import"./index-CX6PQ3zO.js";import"./clipboard-YH5zrf5X.js";const E=t.object({server_pull_interval:t.coerce.number().nullable(),server_push_interval:t.coerce.number().nullable(),server_token:t.string().nullable()}),N={server_pull_interval:0,server_push_interval:0,server_token:""};function k(){const s=b({resolver:_(E),defaultValues:N,mode:"onChange"}),{data:n}=g({queryKey:["settings","server"],queryFn:()=>S("server")});h.useEffect(()=>{if(n?.data.server){const r=n.data.server;Object.entries(r).forEach(([o,j])=>{s.setValue(o,j)})}},[n]);function x(r){y(r).then(({data:o})=>{o&&v.success("保存成功")})}return e.jsx(F,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(x),className:"space-y-8",children:[e.jsx(a,{control:s.control,name:"server_token",render:({field:r})=>e.jsxs(l,{children:[e.jsx(c,{children:"通讯密钥"}),e.jsx(i,{children:e.jsx(u,{placeholder:"请输入",...r})}),e.jsx(m,{children:"Xboard与节点通讯的密钥，以便数据不会被他人获取。"}),e.jsx(d,{})]})}),e.jsx(a,{control:s.control,name:"server_pull_interval",render:({field:r})=>e.jsxs(l,{children:[e.jsx(c,{children:"节点拉取动作轮询间隔"}),e.jsx(i,{children:e.jsx(u,{placeholder:"请输入",...r})}),e.jsx(m,{children:"节点从面板获取数据的间隔频率。"}),e.jsx(d,{})]})}),e.jsx(a,{control:s.control,name:"server_push_interval",render:({field:r})=>e.jsxs(l,{children:[e.jsx(c,{children:"节点推送动作轮询间隔"}),e.jsx(i,{children:e.jsx(u,{placeholder:"请输入",...r})}),e.jsx(m,{children:"节点推送数据到面板的间隔频率。"}),e.jsx(d,{})]})}),e.jsx(p,{type:"submit",children:"保存设置"})]})})}function M(){return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium",children:"节点配置"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"配置节点通信和同步设置，包括通信密钥、轮询间隔、负载均衡等高级选项。"})]}),e.jsx(f,{}),e.jsx(k,{})]})}export{M as default};