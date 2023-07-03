(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{8238:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/create-multi-exe",function(){return o(2325)}])},2325:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r}});var a=o(5893),t=o(1151);function e(s){let n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,t.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"如何创建多个可执行文件"}),"\n",(0,a.jsx)(n.p,{children:"通常情况下，Protector4J会为每个加密任务创建一个可执行文件来运行您的应用程序。"}),"\n",(0,a.jsx)(n.p,{children:"但是，在某些情况下，应用程序可能需要有多个可执行文件，例如主程序、更新程序或其他。"}),"\n",(0,a.jsx)(n.p,{children:"如果您打开输出目录，您可以看到一个可执行文件和一个同名且扩展名为“.json”的配置文件。如果您需要创建其他的可执行文件，只需复制并重命名它们，例如app01.exe与app01.json，打开app01.json文件并修改“LibFolder”和“MainClass”"}),"\n",(0,a.jsx)(n.p,{children:"默认情况下，可执行文件将以vlxlib下的所有jar文件作为类路径。您可以为不同的可执行文件创建不同的LibFolder，并将相应的jar文件复制到相应的LibFolder中。例如，创建一个名为app01的文件夹，并从vlxlib中移动与app01对应的所有jar文件到该文件夹中，以下是相关配置示例："}),"\n",(0,a.jsx)(n.pre,{language:"json",code:'{\n	"MainClass"      : "app01.MainClass",\n	"LibFolder"      : "app01",\n	"Verbose"        : false,\n	"HideConsole"    : false,\n	"IncludeJavaFX"  : true,\n	"Splash"         : "",\n	"SWTApplication" : false\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;MainClass&quot;</span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;app01.MainClass&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;LibFolder&quot;</span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;app01&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;Verbose&quot;</span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;HideConsole&quot;</span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;IncludeJavaFX&quot;</span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;Splash&quot;</span><span style="color: var(--shiki-color-text)">         </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;SWTApplication&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var r=!0;n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),s.components);return n?(0,a.jsx)(n,Object.assign({},s,{children:(0,a.jsx)(e,s)})):e(s)}}},function(s){s.O(0,[774,888,179],function(){return s(s.s=8238)}),_N_E=s.O()}]);