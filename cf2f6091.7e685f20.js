(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(157)),i={title:"getCompositions()",id:"get-compositions"},c={unversionedId:"get-compositions",id:"get-compositions",isDocsHomePage:!1,title:"getCompositions()",description:"Part of the @remotion/renderer package.",source:"@site/docs/get-compositions.md",slug:"/get-compositions",permalink:"/docs/get-compositions",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/get-compositions.md",version:"current",sidebar:"someSidebar",previous:{title:"visualizeAudio()",permalink:"/docs/visualize-audio"},next:{title:"renderFrames()",permalink:"/docs/render-frames"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>bundle</code>",id:"bundle",children:[]},{value:"<code>options?</code>",id:"options",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Part of the ",Object(a.b)("inlineCode",{parentName:"em"},"@remotion/renderer")," package.")),Object(a.b)("p",null,"Gets the compositions defined in a Remotion project based on a webpack bundle. Spins up a browser with Puppeteer and evaluates the Remotion root."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const getCompositions: (bundle: string, options: {\n  inputProps?: object | null;\n  browserInstance?: puppeteer.Browser;\n}) => Promise<TComposition[]>\n")),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("h3",{id:"bundle"},Object(a.b)("inlineCode",{parentName:"h3"},"bundle")),Object(a.b)("p",null,"A string pointing to a Webpack bundle generated by ",Object(a.b)("inlineCode",{parentName:"p"},"@remotion/bundler"),"."),Object(a.b)("h3",{id:"options"},Object(a.b)("inlineCode",{parentName:"h3"},"options?")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"optional")),Object(a.b)("p",null,"An object containing one or more of the following options:"),Object(a.b)("h4",{id:"inputprops"},Object(a.b)("inlineCode",{parentName:"h4"},"inputProps?")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"optional")),Object(a.b)("p",null,"Define custom props that can be retrieved using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/get-input-props"}),Object(a.b)("inlineCode",{parentName:"a"},"getInputProps()"))," at runtime. Useful for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/dynamic-metadata"}),"setting a dynamic duration or dimensions")," for your video."),Object(a.b)("h4",{id:"browserinstance"},Object(a.b)("inlineCode",{parentName:"h4"},"browserInstance?")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"optional")),Object(a.b)("p",null,"An already open Puppeteer ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-browser"}),Object(a.b)("inlineCode",{parentName:"a"},"Browser"))," instance. Reusing a browser across multiple function calls can speed up the rendering process. You are responsible for opening and closing the browser yourself. If you don't specify this option, a new browser will be opened and closed at the end."),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"Returns a promise that resolves to an array of available compositions. Example value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "HelloWorld",\n    "width": 1920,\n    "height": 1080,\n    "fps": 30\n  },\n  {\n    "id": "Title",\n    "width": 1080,\n    "height": 1080,\n    "fps": 30\n  }\n]\n')),Object(a.b)("h2",{id:"see-also"},"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/ssr"}),"Server-Side rendering")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/bundle"}),"bundle()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/render-frames"}),"renderFrames()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/stitch-frames-to-video"}),"stitchFramesToVideo()"))))}l.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);