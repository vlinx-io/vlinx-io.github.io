(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{4647:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/protect-glassfish-app",function(){return n(4848)}])},4848:function(s,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var a=n(5893),t=n(1151);function o(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",strong:"strong",img:"img",h3:"h3",pre:"pre",code:"code",h4:"h4",em:"em"},(0,t.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{children:"Protect Glassfish App"}),"\n",(0,a.jsx)(e.h2,{id:"get-started",children:"Get Started"}),"\n",(0,a.jsxs)(e.p,{children:["If you haven't read the ",(0,a.jsx)(e.a,{href:"/docs/get-started",children:"get started"})," article, please read it first, it described the basic structure and concepts of Protector4J."]}),"\n",(0,a.jsx)(e.h2,{id:"gui-tool",children:"GUI Tool"}),"\n",(0,a.jsxs)(e.p,{children:["Execute ",(0,a.jsx)(e.strong,{children:"protector4j-ui[.exe]"})," in the folder of Protector4J, you will see the interface below"]}),"\n",(0,a.jsx)(e.p,{children:"For users of macOS, please just double click the Protector4J.app"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/ui-tool.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Login"}),"\n",(0,a.jsx)(e.p,{children:"If you have got the license, you can click the login button on the top-right corner and type your account information. Although, without the license, you can also try it too."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/login-dialog.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Choose app type"}),"\n",(0,a.jsx)(e.p,{children:'Click the "Glassfish/Payara Application" button on the app types page.'}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/app-type.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Choose war/jar files to protect"}),"\n",(0,a.jsx)(e.p,{children:"Choose the war/jar files to protect, you can add single or multi jar files here."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/choose-jars.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Options"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/options.png",alt:""})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Protect all classes"})}),"\n",(0,a.jsx)(e.p,{children:"if this option is selected, all the classes will be encrypted"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Protect the specified classes"})}),"\n",(0,a.jsx)(e.p,{children:"If this option is selected, you can choose which classes to be encrypted in the next step"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Protect inner jars"})}),"\n",(0,a.jsx)(e.p,{children:"If this option is checked, the classes in the inner jars will be encrypted too."}),"\n",(0,a.jsx)(e.h3,{children:"Choose classes to protect"}),"\n",(0,a.jsx)(e.p,{children:'If you selected "Protect the specified classes", you should type the classes that need to protect here manually,  but also the classes need to exclude from the encryption'}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/specify-class.png",alt:""})}),"\n",(0,a.jsx)(e.p,{children:"You can input the full class name like:"}),"\n",(0,a.jsx)(e.pre,{language:"java",code:"io.vlinx.swing.MainWindow\n",children:(0,a.jsx)(e.code,{className:"language-java",children:'<span><span style="color: var(--shiki-token-constant)">io</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-constant)">vlinx</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-constant)">swing</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-constant)">MainWindow</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"If you want to encrypt all the classes in the package, you can input a wildcard case like:"}),"\n",(0,a.jsx)(e.pre,{language:"java",code:"io.vlinx.swing.*\n",children:(0,a.jsx)(e.code,{className:"language-java",children:'<span><span style="color: var(--shiki-token-constant)">io</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-constant)">vlinx</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-constant)">swing</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-keyword)">*</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"One * means all the classes in the package, but exclude the classes in sub packages"}),"\n",(0,a.jsx)(e.p,{children:"if you want to encrypt all the classes in the package including the classes in sub packages,  please use the wildcard case like:"}),"\n",(0,a.jsx)(e.pre,{code:"io.vlinx.swing.**\n",children:(0,a.jsx)(e.code,{children:"io.vlinx.swing.**\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:'The class names or the package names above apply to all jar files, just like the classpath. We have the class information in the jars mixed together, and any classes in any jar files that meet the conditions will be encrypted or excluded, if you selected "Protect inner jars", the classes in the inner jars will be processed too.'})}),"\n",(0,a.jsx)(e.p,{children:"Although it needs to type the classes information manually, but we provide the class info tree on the right, you can view the struct there, and there is a context menu that could help you to edit the class list."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/context.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Output options"}),"\n",(0,a.jsx)(e.p,{children:'On this page, you can specify the Java version, the server version and the output folder. After this is done, click the "Next" button on the bottom, it will start the encryption process.'}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/glassfish-output-options.png",alt:""})}),"\n",(0,a.jsx)(e.h4,{children:"KeySeed"}),"\n",(0,a.jsx)(e.p,{children:"The seed to generate the encryption key,  the same key seed will generate the same encryption key. If you want jars generated from  encryption task can be used together, you can input the same keySeed. This feature is only valid for licensed user."}),"\n",(0,a.jsx)(e.h3,{children:"Encryption process"}),"\n",(0,a.jsx)(e.p,{children:"It will take some time to finish the encryption process. After it is done, you can check the result in the output folder."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://protector4j.com/resources/screenshots/encryption.png",alt:""})}),"\n",(0,a.jsx)(e.h3,{children:"Check the result"}),"\n",(0,a.jsx)(e.p,{children:"After the encryption process complete, please go to the output folder to check the result, we have placed the glassfish folder, the java runtime and the encrypted jar/war files in it."}),"\n",(0,a.jsx)(e.h3,{children:"Run the encrypted app"}),"\n",(0,a.jsx)(e.h4,{children:"For Linux and macOS"}),"\n",(0,a.jsxs)(e.p,{children:["Go to the output folder, modify the ",(0,a.jsx)(e.code,{children:"glassfish/glassfish/config/asenv.conf"})," file, set  AS_JAVA to the absolute path of our custom JRE which you can find in the output folder"]}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"# Please specify this value to the absolute path of our custom jre\nAS_JAVA=\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-token-comment)"># Please specify this value to the absolute path of our custom jre</span></span>\n<span><span style="color: var(--shiki-color-text)">AS_JAVA=</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"Start domain1"}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"glassfish/bin/asadmin start-domain domain1\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">glassfish/bin/asadmin start-domain domain1</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.h4,{children:"For Windows"}),"\n",(0,a.jsxs)(e.p,{children:["Go to the output folder, modify the ",(0,a.jsx)(e.code,{children:"glassfish/glassfish/config/asenv.bat file"}),", set  AS_JAVA to the absolute path of our custom JRE which you can find in the output folder"]}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"REM Please specify this value to the absolute path of our custom jre\nset AS_JAVA=\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">REM Please specify this value to the absolute path of our custom jre</span></span>\n<span><span style="color: var(--shiki-token-function)">set</span><span style="color: var(--shiki-color-text)"> AS_JAVA=</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"Start domain1"}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"glassfish\\bin\\asadmin.bat start-domain domain1\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">glassfish\\bin\\asadmin.bat start-domain domain1</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.strong,{children:["Every encryption task will request a new and unique key. The files encrypted in different tasks can not be used together unless providing the ",(0,a.jsx)(e.a,{href:"#KeySeed",children:"key seed"}),"."]})}),"\n",(0,a.jsx)(e.h2,{id:"cli-tool",children:"CLI Tool"}),"\n",(0,a.jsx)(e.h3,{children:"The configuration of task file"}),"\n",(0,a.jsx)(e.p,{children:"It needs to specify a task file as an argument to the command-line tool."}),"\n",(0,a.jsxs)(e.p,{children:["Please find the ",(0,a.jsx)(e.code,{children:"task.glassfish.yml"})," in the task-templates directory, copy and modify a new one."]}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"email: &#39;&#39;\npassword: &#39;&#39;\njarsPath: []\nprotectAll: false\nprotectInnerJars: false\nclassesToProtect: []\nexclude: []\noutputFolder: &#39;&#39;\ntempFolder: &#39;&#39;\njavaVersion: &#39;&#39;\nserverVersion: &#39;glassfish-5&#39;\nincludeJavaFX: false\nkeySeed: &#39;&#39;\ntargetPlatforms: []\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">email</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">password</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">jarsPath</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span><span style="color: var(--shiki-token-keyword)">protectAll</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>\n<span><span style="color: var(--shiki-token-keyword)">protectInnerJars</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>\n<span><span style="color: var(--shiki-token-keyword)">classesToProtect</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span><span style="color: var(--shiki-token-keyword)">exclude</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span><span style="color: var(--shiki-token-keyword)">outputFolder</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">tempFolder</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">javaVersion</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">serverVersion</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;glassfish-5&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">includeJavaFX</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>\n<span><span style="color: var(--shiki-token-keyword)">keySeed</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span><span style="color: var(--shiki-token-function)">#39;&amp;#39;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">targetPlatforms</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.h4,{children:"The account information"}),"\n",(0,a.jsxs)(e.p,{children:["If you have ",(0,a.jsx)(e.a,{href:"https://protector4j.com/purchase",children:"purchased "})," our product, you would have got your account information including the email address and the password for the license. Please type them in the appropriate fields, ",(0,a.jsx)(e.strong,{children:"the value of the password field should be the md5 value of the password, not the password itself."})," or you can leave the email and the password fields empty, just have a try."]}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"email: account-email\npassword: md5-of-password\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">email</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">account-email</span></span>\n<span><span style="color: var(--shiki-token-keyword)">password</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">md5-of-password</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.h4,{children:"Specify the jars and the classes need to be encrypted."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"jarsPath"})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"jarsPath"})," field is an array, which you could specify one or multi jar/war files that need to be processed in the encryption work."]}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"jarsPath: [jar-path1,jar-path2,...]\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">jarsPath</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string)">jar-path1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string)">jar-path2</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">...</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"or"}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"jarsPath: \n- jar-path1\n- jar-path2\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">jarsPath</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">jar-path1</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">jar-path2</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"protectAll"})}),"\n",(0,a.jsx)(e.p,{children:"If this value is true, all the classes in the jar will be encrypted."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"protectInnerJars"})}),"\n",(0,a.jsx)(e.p,{children:"If this value is true, the classes in the inner jars will be encrypted too."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"classesToProtect"})}),"\n",(0,a.jsx)(e.p,{children:"In this field, you can specify the classes that need to be encrypted. it can be a full class name, or wildcard case ones"}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"classesToProtect: [vlinx.test.TestClass1, vlinx.test.pack1.*, vlinx.test.pack1.**]\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">classesToProtect</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string)">vlinx.test.TestClass1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">vlinx.test.pack1.*</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">vlinx.test.pack1.**</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"or"}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"classesToProtect: \n- vlinx.test.TestClass1\n- vlinx.test.pack1.*\n- vlinx.test.pack1.**\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">classesToProtect</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">vlinx.test.TestClass1</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">vlinx.test.pack1.*</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">vlinx.test.pack1.**</span></span>\n<span></span>'})}),"\n",(0,a.jsxs)(e.p,{children:["> ",(0,a.jsx)(e.code,{children:"*"})," means all the classes in the package, but exclude the classes in the sub package\n>\n> ",(0,a.jsx)(e.code,{children:"**"})," means all the classes in the package including the classes in the sub package."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:(0,a.jsxs)(e.strong,{children:["If the ",(0,a.jsx)(e.code,{children:"protectAll"})," is true, this field will be ignored."]})})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:(0,a.jsxs)(e.strong,{children:["if you are using the version before 1.8.0,  please add ",(0,a.jsx)(e.code,{children:"WEB-INF.classes"})," prefix for each item for the classes in WEB-INF/classes, like BOOF-INF.classes.vlinx.test.TestClass1"]})})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"exclude"})}),"\n",(0,a.jsx)(e.p,{children:"In this field, you can specify the classes to exclude from encryption, the format is the same as classesToProtect field."}),"\n",(0,a.jsx)(e.h4,{children:"javaVersion"}),"\n",(0,a.jsx)(e.p,{children:'The java versions supported now are Java 8 and Java 11, you can type "java-8" for Java 8 and type "java-11" for Java 11'}),"\n",(0,a.jsx)(e.h4,{children:"serverVersion"}),"\n",(0,a.jsx)(e.p,{children:"the serverVersion is always to be glassfish-5 now."}),"\n",(0,a.jsx)(e.h4,{children:"tempFolder"}),"\n",(0,a.jsx)(e.p,{children:"The temp folder for the files generated during the encryption process, after the task completed, the files in the temp folder will be cleaned."}),"\n",(0,a.jsx)(e.h4,{children:"outputFolder"}),"\n",(0,a.jsx)(e.p,{children:"The encrypted app and the custom Java runtime will be placed into the output folder."}),"\n",(0,a.jsx)(e.h4,{children:"includeJavaFX"}),"\n",(0,a.jsx)(e.p,{children:"Whether include the JavaFX framework"}),"\n",(0,a.jsx)(e.h4,{children:"keySeed"}),"\n",(0,a.jsx)(e.p,{children:"The seed to generate the encryption key,  the same key seed will generate the same encryption key. If you want to jars generated from different encryption tasks can be used together, you can input the same keySeed. This feature is only valid for licensed user."}),"\n",(0,a.jsx)(e.h4,{children:"targetPlatforms"}),"\n",(0,a.jsx)(e.p,{children:"This field is an array, the available values are [linux64, win64, mac],  you can set one or multi target platforms according to the requirement. Or leave it empty, if you just want to generate the app for current platform."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"On windows, currently only supports win64 as the target platforms."})}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"targetPlatforms: [linux64, win64, mac]\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">targetPlatforms</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string)">linux64</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">win64</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">mac</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"or"}),"\n",(0,a.jsx)(e.pre,{language:"yaml",code:"targetPlatforms:\n- linux64\n- win64\n- mac\n",children:(0,a.jsx)(e.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-keyword)">targetPlatforms</span><span style="color: var(--shiki-token-keyword)">:</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">linux64</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">win64</span></span>\n<span><span style="color: var(--shiki-color-text)">- </span><span style="color: var(--shiki-token-string-expression)">mac</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.h3,{children:"Execute the encryption process"}),"\n",(0,a.jsx)(e.p,{children:"Go to the folder of Protector4J and type the command below to execute the encryption process"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"On Linux and macOS"})}),"\n",(0,a.jsx)(e.p,{children:"For users of macOS, you can find the cli tool in Protector4J.app/Contents/protector4j-mac"}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"./protector4j -t glassfish -f path-of-task-file\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">./protector4j -t glassfish -f path-of-task-file</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"On Windows"})}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"protector4j -t glassfish -f path-of-task-file\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">protector4j -t glassfish -f path-of-task-file</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"> -t task type\n>\n> -f task file"}),"\n",(0,a.jsxs)(e.p,{children:["You can type ",(0,a.jsx)(e.code,{children:"protector4j --help"})," to see the detail arguments."]}),"\n",(0,a.jsx)(e.h3,{children:"Check the result"}),"\n",(0,a.jsx)(e.p,{children:"After the encryption process complete, please go to the output folder to check the result, we have placed the glassfish folder, the java runtime and the encrypted jar/war files in it."}),"\n",(0,a.jsx)(e.h3,{children:"Run the encrypted app"}),"\n",(0,a.jsx)(e.h4,{children:"For Linux and macOS"}),"\n",(0,a.jsxs)(e.p,{children:["Go to the output folder, modify the ",(0,a.jsx)(e.code,{children:"glassfish/glassfish/config/asenv.conf"})," file, set  AS_JAVA to the absolute path of our custom JRE which you can find in the output folder"]}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"# Please specify this value to the absolute path of our custom jre\nAS_JAVA=\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-token-comment)"># Please specify this value to the absolute path of our custom jre</span></span>\n<span><span style="color: var(--shiki-color-text)">AS_JAVA=</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"Start domain1"}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"glassfish/bin/asadmin start-domain domain1\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">glassfish/bin/asadmin start-domain domain1</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.h4,{children:"For Windows"}),"\n",(0,a.jsxs)(e.p,{children:["Go to the output folder, modify the ",(0,a.jsx)(e.code,{children:"glassfish/glassfish/config/asenv.bat file"}),", set  AS_JAVA to the absolute path of our custom JRE which you can find in the output folder"]}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"REM Please specify this value to the absolute path of our custom jre\nset AS_JAVA=\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">REM Please specify this value to the absolute path of our custom jre</span></span>\n<span><span style="color: var(--shiki-token-function)">set</span><span style="color: var(--shiki-color-text)"> AS_JAVA=</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:"Start domain1"}),"\n",(0,a.jsx)(e.pre,{language:"bash",code:"glassfish\\bin\\asadmin.bat start-domain domain1\n",children:(0,a.jsx)(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">glassfish\\bin\\asadmin.bat start-domain domain1</span></span>\n<span></span>'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.strong,{children:["Every encryption task will request a new and unique key. The files encrypted in different tasks can not be used together unless providing the ",(0,a.jsx)(e.a,{href:"#keyseed",children:"key seed"}),"."]})})]})}var r=!0;e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.ah)(),s.components);return e?(0,a.jsx)(e,Object.assign({},s,{children:(0,a.jsx)(o,s)})):o(s)}}},function(s){s.O(0,[774,888,179],function(){return s(s.s=4647)}),_N_E=s.O()}]);