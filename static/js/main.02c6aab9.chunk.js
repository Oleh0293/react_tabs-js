(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=(c(10),c(11),c(12),c(4)),b=c.n(d),o=function(t,e){return t.find((function(t){return t.id===e}))||t[0]},r=c(0),l=function(t){var e,c=t.tabs,n=t.onTabSelected,a=t.selectedTabId,i=o(c,a);return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:c.map((function(t){var e=t.title,c=t.id;return Object(r.jsx)("li",{className:b()({"is-active":i.id===c}),"data-cy":"Tab",children:Object(r.jsx)("a",{onClick:function(){c!==a&&n(t)},href:"#".concat(c),"data-cy":"TabLink",children:e})},c)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=o(c,a))||void 0===e?void 0:e.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=o(j,c);return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(r.jsx)(l,{tabs:j,onTabSelected:function(t){return n(t.id)},selectedTabId:c})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.02c6aab9.chunk.js.map