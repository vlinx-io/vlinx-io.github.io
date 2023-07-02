(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6244:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/the-issues-of-vm-protection",function(){return t(2405)}])},2405:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return c}});var r=t(5893),s=t(1151);function i(n){let e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"虚拟化保护方案存在的问题"}),"\n",(0,r.jsx)(e.p,{children:"混淆能够提升静态分析的难度，但无法有效防范动态分析，代码虚拟化的目的即在于提高动态分析的难度。"}),"\n",(0,r.jsx)(e.p,{children:"Java的代码虚拟化即通过构建自定义的虚拟化引擎，使原来可以直接即使的字节码，通过虚拟化引擎执行，由于是自定义的虚拟化引擎，外界无法直接获取到其执行方式，指令格式等信息，并且产生了大量的代码膨胀，因此难以逆向出包含其原语义信息的代码。"}),"\n",(0,r.jsx)(e.h2,{id:"",children:"虚拟化对于性能的影响"}),"\n",(0,r.jsxs)(e.p,{children:["虚拟化保护是一种强度极高的代码保护方案，但是虚拟化保护存在的一个最大的问题即是：",(0,r.jsx)(e.strong,{children:"性能"}),"，自定义的虚拟化引擎难以像JVM一样采取众多的性能优化措施，\n也无法应用JIT这类的性能优化技术。你们可以尝试使用我们之前提到过的",(0,r.jsx)(e.a,{href:"https://protector4j.com/articles/jvm-bytecode-engine-written-with-java-and-kotlin/",children:"JVM引擎"}),"与普通JVM执行相同的代码，然后比较下性能，可能会得到百倍以上的性能差距。"]}),"\n",(0,r.jsx)(e.p,{children:"由于虚拟化对于性能的严重影响，所以虚拟化保护无法应用于全部代码，只能应用于部分关键代码，其他代码仍然需要使用混淆或者加密的方式进行保护，由于其他部分代码未使用虚拟化进行保护，就可以在其他代码中找到虚拟化代码的入口，从而在入口与出口处直接分析代码功能，而不需要理解整段代码的逻辑。"}),"\n",(0,r.jsx)(e.h2,{id:"",children:"结论"}),"\n",(0,r.jsx)(e.p,{children:"虚拟化保护是强度最高的一种代码保护方式，但是由于期对性能的严重影响，因此无法应用到程序中的全部代码，而只能保护关键代码，其他代码仍然有暴露的风险，而以其他部分代码来切入口，就可以获取到虚拟化部分代码的功能信息。"})]})}var c=!0;e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=6244)}),_N_E=n.O()}]);