(this["webpackJsonpreact-routing"]=this["webpackJsonpreact-routing"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(18),s=n.n(o),i=n(1);function r(){return Object(i.jsx)("h1",{children:"Welcome to HOME page"})}var a=n.p+"static/media/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.64776b64.webp";function b(){return Object(i.jsxs)(i.Fragment,{children:[" ",Object(i.jsx)("h1",{children:"Welcome to BLOG page"}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:a})})]})}function j(){return Object(i.jsx)("h1",{children:"Start adding your NEW BLOG POST here"})}var l=n.p+"static/media/3edabd_4ab0648779e6445ab97275c98203158d~mv2.0a666e85.png";function h(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Welcome to CONTACT page"}),";",Object(i.jsx)("img",{src:l})]})}var p=n(2),d=n(8),O=n(10),g=n.n(O);var x=function(){const e=[{command:["Go to * page","Go to *","Open * page","Open *"],callback:e=>o(e)}],{transcript:t}=Object(O.useSpeechRecognition)({commands:e}),[n,o]=Object(c.useState)(""),s=["home","blog","new blog post","contact"],a={home:"/",blog:"/blog","new blog post":"/blog/new",contact:"/contact"};if(!g.a.browserSupportsSpeechRecognition())return null;let l="";return n&&(l=s.includes(n)?Object(i.jsx)(p.a,{to:a[n]}):Object(i.jsxs)("p",{children:["Could not find page: ",n]})),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(d.a,{basename:"/Voice-navigation",children:[Object(i.jsxs)("div",{id:"links",children:[Object(i.jsx)(d.b,{to:"/",children:"Home"}),Object(i.jsx)(d.b,{to:"/blog",children:"Blog"}),Object(i.jsx)(d.b,{to:"/blog/new",children:"Add Blog Post"}),Object(i.jsx)(d.b,{to:"/contact",children:"Contact"})]}),Object(i.jsx)(p.b,{path:"/",exact:!0,component:r}),Object(i.jsx)(p.b,{path:"/home",component:r}),Object(i.jsx)(p.b,{path:"/blog",exact:!0,component:b}),Object(i.jsx)(p.b,{path:"/blog/new",component:j}),Object(i.jsx)(p.b,{path:"/contact",component:h}),l]}),Object(i.jsxs)("p",{id:"transcript",children:["Transcript: ",t]}),Object(i.jsx)("button",{onClick:g.a.startListening,children:"Start"})]})};n(40);var m=()=>(Object(c.useEffect)((()=>((()=>{const e=document.body.innerText;if(console.log(e),"speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t)}else console.error("Speech synthesis not supported in this browser.")})(),()=>{"speechSynthesis"in window&&window.speechSynthesis.cancel()})),[]),Object(i.jsx)("div",{}));s.a.render(Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{}),Object(i.jsx)(m,{})]}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.513a9fbd.chunk.js.map