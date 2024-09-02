"use strict";(self.webpackChunkdao=self.webpackChunkdao||[]).push([[1623],{5884:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(4848),a=i(8453);const o={title:"RPC/API Full Node",sidebar_position:2},r="RPC/API Full Node",l={id:"infrastructure/fullnode",title:"RPC/API Full Node",description:"The RPC Node, providing Remote Procedure Call and API interfaces is operational. It allows external applications or clients to interact with the Sentinel Blockchain.",source:"@site/docs/infrastructure/fullnode.md",sourceDirName:"infrastructure",slug:"/infrastructure/fullnode",permalink:"/docs/infrastructure/fullnode",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infrastructure/fullnode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"RPC/API Full Node",sidebar_position:2},sidebar:"infrastructureSidebar",previous:{title:"Validator",permalink:"/docs/infrastructure/validator"},next:{title:"IBC Relayer",permalink:"/docs/infrastructure/relayer"}},s={},c=[{value:"Remote Procedure Call (RPC)",id:"remote-procedure-call-rpc",level:2},{value:"Global:",id:"global",level:3},{value:"Regional:",id:"regional",level:3},{value:"Application Programming Interface (API)",id:"application-programming-interface-api",level:2},{value:"Global:",id:"global-1",level:3},{value:"Regional:",id:"regional-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rpcapi-full-node",children:"RPC/API Full Node"}),"\n",(0,t.jsx)(n.p,{children:"The RPC Node, providing Remote Procedure Call and API interfaces is operational. It allows external applications or clients to interact with the Sentinel Blockchain."}),"\n",(0,t.jsx)(n.p,{children:"RPC nodes typically expose an interface that allows clients to send requests to the node, querying information or requesting certain actions to be performed on the blockchain. This is done through RPC calls, which are remote requests to the node's services."}),"\n",(0,t.jsx)(n.p,{children:"Busurnode is responsible for overseeing its maintenance, ensuring the implementation of essential monitoring measures."}),"\n",(0,t.jsx)(n.admonition,{title:"Node Status",type:"info",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://status.sentineldao.com/",children:"https://status.sentineldao.com/"})})}),"\n",(0,t.jsx)(n.h2,{id:"remote-procedure-call-rpc",children:"Remote Procedure Call (RPC)"}),"\n",(0,t.jsx)(n.p,{children:"The Global RPC is a load-balanced system that distributes requests across 6 nodes to ensure optimal performance and reliability. Each Regional RPC is also load-balanced, with 2 nodes allocated per region to maintain high availability and minimize downtime. This architecture is designed to provide maximum failover capability in the event of any errors or outages."}),"\n",(0,t.jsx)(n.h3,{id:"global",children:"Global:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://rpc.sentineldao.com:443",children:"https://rpc.sentineldao.com:443"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"regional",children:"Regional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Asia: ",(0,t.jsx)(n.a,{href:"https://as-rpc.sentineldao.com:443",children:"https://as-rpc.sentineldao.com:443"})]}),"\n",(0,t.jsxs)(n.li,{children:["Europe: ",(0,t.jsx)(n.a,{href:"https://eu-rpc.sentineldao.com:443",children:"https://eu-rpc.sentineldao.com:443"})]}),"\n",(0,t.jsxs)(n.li,{children:["North America: ",(0,t.jsx)(n.a,{href:"https://na-rpc.sentineldao.com:443",children:"https://na-rpc.sentineldao.com:443"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"application-programming-interface-api",children:"Application Programming Interface (API)"}),"\n",(0,t.jsx)(n.p,{children:"The Global API is a load-balanced system that distributes requests across 6 nodes to ensure optimal performance and reliability. Each Regional RPC is also load-balanced, with 2 nodes allocated per region to maintain high availability and minimize downtime. This architecture is designed to provide maximum failover capability in the event of any errors or outages."}),"\n",(0,t.jsx)(n.h3,{id:"global-1",children:"Global:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://api.sentineldao.com",children:"https://api.sentineldao.com"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"regional-1",children:"Regional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Asia: ",(0,t.jsx)(n.a,{href:"https://as-api.sentineldao.com",children:"https://as-api.sentineldao.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["Europe: ",(0,t.jsx)(n.a,{href:"https://eu-api.sentineldao.com",children:"https://eu-api.sentineldao.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["North America: ",(0,t.jsx)(n.a,{href:"https://na-api.sentineldao.com",children:"https://na-api.sentineldao.com"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);