import{S as z,A as U,C as f,m as Q,D as O,E as N,F as I,G as _,H as V,I as W,J as K,K as M,p as B,r as p,q}from"./index-_xd8OyP8.js";var G=class extends z{constructor(t,e){super(),this.options=e,this.#s=t,this.#i=null,this.#r=U(),this.options.experimental_prefetchInRender||this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}#s;#t=void 0;#p=void 0;#e=void 0;#a;#c;#r;#i;#v;#l;#d;#o;#h;#n;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),k(this.#t,this.options)?this.#u():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return T(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return T(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#m(),this.#O(),this.#t.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#t;if(this.options=this.#s.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof f(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#C(),this.#t.setOptions(this.options),s._defaulted&&!Q(this.options,s)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const o=this.hasListeners();o&&L(this.#t,i,this.options,s)&&this.#u(),this.updateResult(e),o&&(this.#t!==i||f(this.options.enabled,this.#t)!==f(s.enabled,this.#t)||O(this.options.staleTime,this.#t)!==O(s.staleTime,this.#t))&&this.#R();const u=this.#b();o&&(this.#t!==i||f(this.options.enabled,this.#t)!==f(s.enabled,this.#t)||u!==this.#n)&&this.#y(u)}getOptimisticResult(t){const e=this.#s.getQueryCache().build(this.#s,t),s=this.createResult(e,t);return $(this,s)&&(this.#e=s,this.#c=this.options,this.#a=this.#t.state),s}getCurrentResult(){return this.#e}trackResult(t,e){const s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),e?.(i),t[i])})}),s}trackProp(t){this.#f.add(t)}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#s.defaultQueryOptions(t),s=this.#s.getQueryCache().build(this.#s,e);return s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#u({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#u(t){this.#C();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(N)),e}#R(){this.#m();const t=O(this.options.staleTime,this.#t);if(I||this.#e.isStale||!_(t))return;const s=V(this.#e.dataUpdatedAt,t)+1;this.#o=setTimeout(()=>{this.#e.isStale||this.updateResult()},s)}#b(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#y(t){this.#O(),this.#n=t,!(I||f(this.options.enabled,this.#t)===!1||!_(this.#n)||this.#n===0)&&(this.#h=setInterval(()=>{(this.options.refetchIntervalInBackground||W.isFocused())&&this.#u()},this.#n))}#g(){this.#R(),this.#y(this.#b())}#m(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#O(){this.#h&&(clearInterval(this.#h),this.#h=void 0)}createResult(t,e){const s=this.#t,i=this.options,o=this.#e,u=this.#a,r=this.#c,a=t!==s?t.state:this.#p,{state:c}=t;let n={...c},g=!1,l;if(e._optimisticResults){const h=this.hasListeners(),R=!h&&k(t,e),b=h&&L(t,s,e,i);(R||b)&&(n={...n,...K(c.data,t.options)}),e._optimisticResults==="isRestoring"&&(n.fetchStatus="idle")}let{error:w,errorUpdatedAt:F,status:v}=n;if(e.select&&n.data!==void 0)if(o&&n.data===u?.data&&e.select===this.#v)l=this.#l;else try{this.#v=e.select,l=e.select(n.data),l=M(o?.data,l,e),this.#l=l,this.#i=null}catch(h){this.#i=h}else l=n.data;if(e.placeholderData!==void 0&&l===void 0&&v==="pending"){let h;if(o?.isPlaceholderData&&e.placeholderData===r?.placeholderData)h=o.data;else if(h=typeof e.placeholderData=="function"?e.placeholderData(this.#d?.state.data,this.#d):e.placeholderData,e.select&&h!==void 0)try{h=e.select(h),this.#i=null}catch(R){this.#i=R}h!==void 0&&(v="success",l=M(o?.data,h,e),g=!0)}this.#i&&(w=this.#i,l=this.#l,F=Date.now(),v="error");const C=n.fetchStatus==="fetching",S=v==="pending",E=v==="error",D=S&&C,P=l!==void 0,d={status:v,fetchStatus:n.fetchStatus,isPending:S,isSuccess:v==="success",isError:E,isInitialLoading:D,isLoading:D,data:l,dataUpdatedAt:n.dataUpdatedAt,error:w,errorUpdatedAt:F,failureCount:n.fetchFailureCount,failureReason:n.fetchFailureReason,errorUpdateCount:n.errorUpdateCount,isFetched:n.dataUpdateCount>0||n.errorUpdateCount>0,isFetchedAfterMount:n.dataUpdateCount>a.dataUpdateCount||n.errorUpdateCount>a.errorUpdateCount,isFetching:C,isRefetching:C&&!S,isLoadingError:E&&!P,isPaused:n.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:E&&P,isStale:x(t,e),refetch:this.refetch,promise:this.#r};if(this.options.experimental_prefetchInRender){const h=m=>{d.status==="error"?m.reject(d.error):d.data!==void 0&&m.resolve(d.data)},R=()=>{const m=this.#r=d.promise=U();h(m)},b=this.#r;switch(b.status){case"pending":t.queryHash===s.queryHash&&h(b);break;case"fulfilled":(d.status==="error"||d.data!==b.value)&&R();break;case"rejected":(d.status!=="error"||d.error!==b.reason)&&R();break}}return d}updateResult(t){const e=this.#e,s=this.createResult(this.#t,this.options);if(this.#a=this.#t.state,this.#c=this.options,this.#a.data!==void 0&&(this.#d=this.#t),Q(s,e))return;this.#e=s;const i={},o=()=>{if(!e)return!0;const{notifyOnChangeProps:u}=this.options,r=typeof u=="function"?u():u;if(r==="all"||!r&&!this.#f.size)return!0;const y=new Set(r??this.#f);return this.options.throwOnError&&y.add("error"),Object.keys(this.#e).some(a=>{const c=a;return this.#e[c]!==e[c]&&y.has(c)})};t?.listeners!==!1&&o()&&(i.listeners=!0),this.#S({...i,...t})}#C(){const t=this.#s.getQueryCache().build(this.#s,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#p=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#S(t){B.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#e)}),this.#s.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function J(t,e){return f(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function k(t,e){return J(t,e)||t.state.data!==void 0&&T(t,e,e.refetchOnMount)}function T(t,e,s){if(f(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&x(t,e)}return!1}function L(t,e,s,i){return(t!==e||f(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&x(t,s)}function x(t,e){return f(e.enabled,t)!==!1&&t.isStaleByTime(O(e.staleTime,t))}function $(t,e){return!Q(t.getCurrentResult(),e)}var H=p.createContext(!1),X=()=>p.useContext(H);H.Provider;function Y(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Z=p.createContext(Y()),tt=()=>p.useContext(Z);function et(t,e){return typeof t=="function"?t(...e):!!t}function j(){}var st=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},it=t=>{p.useEffect(()=>{t.clearReset()},[t])},rt=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&et(s,[t.error,i]),nt=t=>{t.suspense&&(t.staleTime===void 0&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},at=(t,e)=>t.isLoading&&t.isFetching&&!e,ot=(t,e)=>t?.suspense&&e.isPending,A=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function ht(t,e,s){const i=q(),o=X(),u=tt(),r=i.defaultQueryOptions(t);i.getDefaultOptions().queries?._experimental_beforeQuery?.(r),r._optimisticResults=o?"isRestoring":"optimistic",nt(r),st(r,u),it(u);const y=!i.getQueryCache().get(r.queryHash),[a]=p.useState(()=>new e(i,r)),c=a.getOptimisticResult(r);if(p.useSyncExternalStore(p.useCallback(n=>{const g=o?j:a.subscribe(B.batchCalls(n));return a.updateResult(),g},[a,o]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),p.useEffect(()=>{a.setOptions(r,{listeners:!1})},[r,a]),ot(r,c))throw A(r,a,u);if(rt({result:c,errorResetBoundary:u,throwOnError:r.throwOnError,query:i.getQueryCache().get(r.queryHash)}))throw c.error;return i.getDefaultOptions().queries?._experimental_afterQuery?.(r,c),r.experimental_prefetchInRender&&!I&&at(c,o)&&(y?A(r,a,u):i.getQueryCache().get(r.queryHash)?.promise)?.catch(j).finally(()=>{a.updateResult()}),r.notifyOnChangeProps?c:a.trackResult(c)}function lt(t,e){return ht(t,G)}export{j as n,et as s,lt as u};