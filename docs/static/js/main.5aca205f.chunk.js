(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n.n(i),a=n(16),o=n.n(a),s=(n(28),n(3)),d=n(14),r=(n(29),n(40)),l=n(2),j=function(e){var t=e.notes,n=e.onAddNote,i=e.onDeleteNote,c=e.activeNote,a=e.setActiveNote,o=t.sort((function(e,t){return t.lastModified-e.lastModified}));return Object(l.jsxs)("div",{className:"app-sidebar",children:[Object(l.jsxs)("div",{className:"app-sidebar-header",children:[Object(l.jsx)("h1",{children:"Notes"}),Object(l.jsx)("button",{onClick:n,children:"Add"})]}),Object(l.jsx)("div",{className:"app-sidebar-notes",children:o.map((function(e){return Object(l.jsxs)("div",{className:"app-sidebar-note ".concat(e.id===c&&"active"),onClick:function(){return a(e.id)},children:[Object(l.jsxs)("div",{className:"sidebar-note-title",children:[Object(l.jsx)("strong",{children:e.title}),Object(l.jsx)("button",{onClick:function(){return i(e.id)},children:"Delete"})]}),Object(l.jsx)("p",{children:e.body&&e.body.substr(0,100)+"..."}),Object(l.jsxs)("small",{className:"note-data",children:[" ","Last modified"," ",new Date(e.lastModified).toLocaleDateString("en-US",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})},u=n(0),b=n(5),p=n(21),v=function(e){var t=e.activeNote,n=e.onUpdateNote,i=function(e,i){var c;n(Object(b.a)(Object(b.a)({},t),{},(c={},Object(u.a)(c,e,i),Object(u.a)(c,"lastModified",Date.now()),c)))};return t?Object(l.jsx)("div",{className:"app-main",children:Object(l.jsxs)("div",{className:"app-main-note-edit",children:[Object(l.jsx)("input",{type:"text",id:"title",value:t.title,onChange:function(e){return i("title",e.target.value)},autoFocus:!0}),Object(l.jsx)("textarea",{id:"body",placeholder:"write your note here",value:t.body,onChange:function(e){return i("body",e.target.value)}}),Object(l.jsxs)("div",{className:"app-main-note-preview",children:[Object(l.jsx)("h1",{className:"preview-title",children:t.title}),Object(l.jsx)(p.a,{className:"markdown-preview",children:t.body})]})]})}):Object(l.jsx)("div",{className:"no-active-note",children:"No note selected"})};var O=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),u=o[0],b=o[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{notes:n,onAddNote:function(){var e={id:Object(r.a)(),title:"untitled note",body:"",lastModified:Date.now()};c([e].concat(Object(s.a)(n)))},onDeleteNote:function(e){c(n.filter((function(t){return t.id!==e})))},activeNote:u,setActiveNote:b}),Object(l.jsx)(v,{activeNote:n.find((function(e){return e.id===u})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===u?e:t}));c(t)}})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}},[[35,1,2]]]);
//# sourceMappingURL=main.5aca205f.chunk.js.map