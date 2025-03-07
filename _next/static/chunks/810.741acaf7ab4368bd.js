"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{8810:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7437),r=a(2265),l=a(8298);let s=r.forwardRef(function(e,t){let{title:a,titleId:n,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),a?r.createElement("title",{id:n},a):null,r.createElement("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"}))}),o=r.forwardRef(function(e,t){let{title:a,titleId:n,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},l),a?r.createElement("title",{id:n},a):null,r.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"}))});var i=()=>{let[e,t]=(0,r.useState)(!1),{theme:a,setTheme:i}=(0,l.F)();return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsx)("button",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 hover:ring-2 ring-gray-300 transition-all duration-200",onClick:()=>i("dark"===a?"light":"dark"),"aria-label":"Toggle Dark Mode",children:"dark"===a?(0,n.jsx)(s,{className:"w-5 h-5 text-yellow-500"}):(0,n.jsx)(o,{className:"w-5 h-5 text-gray-700"})}):(0,n.jsx)("button",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700","aria-label":"Loading theme toggle",children:(0,n.jsx)("div",{className:"w-5 h-5 animate-pulse bg-gray-300 dark:bg-gray-600 rounded"})})}},8298:function(e,t,a){a.d(t,{F:function(){return c},f:function(){return d}});var n=a(2265);let r=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,n.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,n.useContext)(o))&&void 0!==e?e:i},d=e=>(0,n.useContext)(o)?n.createElement(n.Fragment,null,e.children):n.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=m,defaultTheme:d=a?"system":"light",attribute:u="data-theme",value:v,children:b,nonce:w})=>{let[$,k]=(0,n.useState)(()=>g(i,d)),[p,E]=(0,n.useState)(()=>g(i)),x=v?Object.values(v):c,S=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&a&&(n=y());let l=v?v[n]:n,o=t?f():null,i=document.documentElement;if("class"===u?(i.classList.remove(...x),l&&i.classList.add(l)):l?i.setAttribute(u,l):i.removeAttribute(u),s){let e=r.includes(d)?d:null,t=r.includes(n)?n:e;i.style.colorScheme=t}null==o||o()},[]),C=(0,n.useCallback)(e=>{k(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),T=(0,n.useCallback)(t=>{E(y(t)),"system"===$&&a&&!e&&S("system")},[$,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,n.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,n.useEffect)(()=>{S(null!=e?e:$)},[e,$]);let M=(0,n.useMemo)(()=>({theme:$,setTheme:C,forcedTheme:e,resolvedTheme:"system"===$?p:$,themes:a?[...c,"system"]:c,systemTheme:a?p:void 0}),[$,C,e,p,a,c]);return n.createElement(o.Provider,{value:M},n.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:a,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:d,attribute:u,value:v,children:b,attrs:x,nonce:w}),b)},h=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:a,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,attrs:d,nonce:m})=>{let u="system"===i,h="class"===a?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${a}',s='setAttribute';`,g=o?r.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(e,t=!1,n=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return o&&n&&!t&&r.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===a?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},y=e?`!function(){${h}${f(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${f(c?"x[e]":"e",!0)}}${u?"":"else{"+f(i,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${f(c?"x[e]":"e",!0)}}else{${f(i,!1,!1)};}${g}}catch(t){}}();`;return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),g=(e,t)=>{let a;if(!s){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}}]);