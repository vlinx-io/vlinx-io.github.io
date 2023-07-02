(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{9895:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/protect-tomcat-web-app",function(){return t(2378)}])},2378:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r}});var s=t(5893),o=t(1151);function a(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",img:"img",strong:"strong",h4:"h4",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Protect Tomcat Web Applications"}),"\n",(0,s.jsx)(n.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=7d8afvHc2V4",children:"▶️ https://www.youtube.com/watch?v=7d8afvHc2V4"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1v54y1G7mM/",children:"▶️ https://www.bilibili.com/video/BV1v54y1G7mM/"})}),"\n",(0,s.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.a,{href:"https://protector4j.com/download",children:"https://protector4j.com/download"})," to download the latest version."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{children:"Windows and Linux"}),"\n",(0,s.jsxs)(n.p,{children:["No special installation steps are required, just ",(0,s.jsx)(n.a,{href:"https://protector4j.com/download",children:"download"})," and extract the archive."]}),"\n",(0,s.jsx)(n.h3,{children:"macOS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://protector4j.com/download",children:"Download"}),"  the dmg file and drag Protector4J to Applications, the actual contents of this tool are in Protector4J.app/Contents/protector4j-mac"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/mac-app-installation.png",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"use-gui-tool-to-encrypt-tomcat-web-applications",children:"Use GUI Tool to Encrypt Tomcat Web Applications"}),"\n",(0,s.jsxs)(n.p,{children:["Go to the folder of Protector4J then execute ",(0,s.jsx)(n.strong,{children:"p4j-ui[.exe]"})," , you will see the interface below"]}),"\n",(0,s.jsx)(n.p,{children:"For macOS,  just double click the Protector4J.app"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/ui-tool.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{children:"Login"}),"\n",(0,s.jsx)(n.p,{children:"If you have got the license, please click the login button on the top-right corner and input your account information. Although you can still try this tool free without the license."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/login-dialog.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{children:"Choose app type"}),"\n",(0,s.jsx)(n.p,{children:'Click the "Tomcat Web Application" button on the app type page.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/app-type.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{children:"Choose jar/war files to encrypt"}),"\n",(0,s.jsx)(n.p,{children:"Choose the war files to protect"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/choose-jars.png",alt:""})}),"\n",(0,s.jsx)(n.h4,{children:"Options"}),"\n",(0,s.jsx)(n.h4,{children:"Just encrypt jar files"}),"\n",(0,s.jsx)(n.p,{children:"If this option is selected, only the encrypted jar files will be generated and the Java runtime will not be deployed, this option is usually used in combination with key seed for updating existing applications"}),"\n",(0,s.jsx)(n.h3,{children:"Output"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/output-page.png",alt:""})}),"\n",(0,s.jsx)(n.h4,{children:"Java Version"}),"\n",(0,s.jsx)(n.p,{children:"Select the target Java version, supports Java 8, Java 11 and Java 17"}),"\n",(0,s.jsx)(n.h4,{children:"Create new folder"}),"\n",(0,s.jsx)(n.p,{children:"Selected by default, the task will create a folder like p4j-[task-id] in the output folder, the final result is in the folder"}),"\n",(0,s.jsx)(n.h4,{children:"KeySeed"}),"\n",(0,s.jsx)(n.p,{children:'Every encryption task will request a random key from the server by default, so the jar files generated in different encryption tasks can\'t be used together. However, the same key seed will generate the same key,  this option can used in combination with "Only Encrypt Jar Files"  to update existing applications.  This option is only valid for Licensed user.'}),"\n",(0,s.jsx)(n.h3,{children:"Encryption process"}),"\n",(0,s.jsx)(n.p,{children:"It will take some time to finish the encryption process. After it is done, you can check the result in the output folder."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://protector4j.com/resources/screenshots/encryption.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{children:"Run the encrypted app"}),"\n",(0,s.jsxs)(n.p,{children:["Go to the output  folder,  execute ",(0,s.jsx)(n.code,{children:"tomcat/bin/startup.sh"})," or ",(0,s.jsx)(n.code,{children:"tomcat/bin/startup.bat"})," to launch the application"]}),"\n",(0,s.jsxs)(n.h3,{children:["Where is the ",(0,s.jsx)(n.code,{children:"META-INF/classes"})]}),"\n",(0,s.jsx)(n.p,{children:"You can also find your application in the webapps directory, but the original WEB-INF/classes folder no longer exists, in order to protect your application architecture so that external users cannot even obtain the name information of the class, we have packaged the content of WEB-INF/classes into WEB-INF/vlxapp.jar, this is a jarx format file, the jarx format is our private and encrypted java archive format."}),"\n",(0,s.jsx)(n.h4,{children:"Notice"}),"\n",(0,s.jsx)(n.p,{children:"If the application is for macOS or Linux and is generated under Windows,\nplease execute add-executable-permission.sh first to give the program executable permission."}),"\n",(0,s.jsx)(n.h2,{id:"use-cli-tool-to-protect-tomcat-web-applications",children:"Use CLI Tool to Protect Tomcat Web Applications"}),"\n",(0,s.jsx)(n.h3,{children:"The configuration of task file"}),"\n",(0,s.jsx)(n.p,{children:"It needs to specify a task file as an argument to the command-line tool."}),"\n",(0,s.jsxs)(n.p,{children:["Find  ",(0,s.jsx)(n.code,{children:"tomcat-task.yml"})," in  ",(0,s.jsx)(n.code,{children:"task-templates"})," folder, copy and modify a new one."]}),"\n",(0,s.jsx)(n.pre,{language:"yaml",code:"# Available values: 8,11,17\njavaVersion: 8\n\n# The war files that need to be encrypted\nwarFiles: []\n# Only encrypt the jar files, do not deploy the runtime\n# This option is used while upgrading an existing application\nonlyEncryptJarFiles: false\n\n## [ Output Options ]\n# The output folder\noutputFolder: ''\n# Create a new and unique folder for the application, the folder name is like p4j-&lt;taskId&gt;\ncreateNewFolder: true\n# Fixed key seed, only avaiable for licensed user\n# Jars encrypted in different tasks can be used together with same key seed\nkeySeed: ''\n# The target platforms, available values: [win, linux, mac] or emtpy for current platforms\n# if you need the support for win32, linux32 and linux-aarch64, the addon need to be purchased, please visit https://protector4j.com/addons\nplatforms: []\n",children:(0,s.jsx)(n.code,{className:"language-yaml",children:'<span><span style="color: var(--shiki-token-comment)"># Available values: 8,11,17</span></span>\n<span><span style="color: var(--shiki-token-keyword)">javaVersion</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">8</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># The war files that need to be encrypted</span></span>\n<span><span style="color: var(--shiki-token-keyword)">warFiles</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Only encrypt the jar files, do not deploy the runtime</span></span>\n<span><span style="color: var(--shiki-token-comment)"># This option is used while upgrading an existing application</span></span>\n<span><span style="color: var(--shiki-token-keyword)">onlyEncryptJarFiles</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">## [ Output Options ]</span></span>\n<span><span style="color: var(--shiki-token-comment)"># The output folder</span></span>\n<span><span style="color: var(--shiki-token-keyword)">outputFolder</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Create a new and unique folder for the application, the folder name is like p4j-&amp;lt;taskId&amp;gt;</span></span>\n<span><span style="color: var(--shiki-token-keyword)">createNewFolder</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Fixed key seed, only avaiable for licensed user</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Jars encrypted in different tasks can be used together with same key seed</span></span>\n<span><span style="color: var(--shiki-token-keyword)">keySeed</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span></span>\n<span><span style="color: var(--shiki-token-comment)"># The target platforms, available values: [win, linux, mac] or emtpy for current platforms</span></span>\n<span><span style="color: var(--shiki-token-comment)"># if you need the support for win32, linux32 and linux-aarch64, the addon need to be purchased, please visit https://protector4j.com/addons</span></span>\n<span><span style="color: var(--shiki-token-keyword)">platforms</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span></span>\n<span></span>'})}),"\n",(0,s.jsx)(n.h3,{children:"Execute the encryption process"}),"\n",(0,s.jsx)(n.p,{children:"Go to the folder of Protector4J and execute the command below to run the encryption task"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Linux or macOS"})}),"\n",(0,s.jsx)(n.p,{children:"For macOS users, you can find the cli tool in Protector4J.app/Contents/protector4j-mac"}),"\n",(0,s.jsx)(n.pre,{language:"bash",code:"./p4j -t tomcat -f path-of-task-file\n",children:(0,s.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">./p4j -t tomcat -f path-of-task-file</span></span>\n<span></span>'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Windows"})}),"\n",(0,s.jsx)(n.pre,{language:"bash",code:"p4j -t tomcat -f path-of-task-file\n",children:(0,s.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">p4j -t tomcat -f path-of-task-file</span></span>\n<span></span>'})}),"\n",(0,s.jsx)(n.p,{children:"> -t task type\n>\n> -f task file"}),"\n",(0,s.jsxs)(n.p,{children:["You can execute ",(0,s.jsx)(n.code,{children:"p4j --help"})," to see the detail arguments."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run with account information"})}),"\n",(0,s.jsx)(n.pre,{code:"./p4j -t tomcat -f path-of-task-file -u email -p password\n",children:(0,s.jsx)(n.code,{children:"./p4j -t tomcat -f path-of-task-file -u email -p password\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Check the result"}),"\n",(0,s.jsx)(n.p,{children:"After the encryption task, please go to the output folder to check the result."}),"\n",(0,s.jsx)(n.h3,{children:"Run the encrypted app"}),"\n",(0,s.jsxs)(n.p,{children:["Go to the output  folder, execute ",(0,s.jsx)(n.code,{children:"tomcat/bin/startup.sh"})," or ",(0,s.jsx)(n.code,{children:"tomcat/bin/startup.bat"})," to launch the application"]}),"\n",(0,s.jsxs)(n.h3,{children:["Where is the ",(0,s.jsx)(n.code,{children:"META-INF/classes"})]}),"\n",(0,s.jsx)(n.p,{children:"You can also find your application in the webapps directory, but the original WEB-INF/classes folder no longer exists, in order to protect your application architecture so that external users cannot even obtain the name information of the class, we have packaged the content of WEB-INF/classes into WEB-INF/vlxapp.jar, this is a jarx format file, the jarx format is our private and encrypted java archive format."}),"\n",(0,s.jsx)(n.h4,{children:"Notice"}),"\n",(0,s.jsx)(n.p,{children:"If the application is for macOS or Linux and is generated under Windows,\nplease execute add-executable-permission.sh first to give the program executable permission."})]})}var r=!0;n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9895)}),_N_E=e.O()}]);