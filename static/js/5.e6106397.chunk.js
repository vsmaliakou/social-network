(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[5],{382:function(e,t,n){"use strict";n.r(t);var a=n(147),r=n(0),c=n.n(r),l=n(18),u=n(184),o=function(){var e=Object(l.d)((function(e){return e.chat.status})),t=Object(l.c)();return Object(r.useEffect)((function(){return t(Object(u.c)()),function(){t(Object(u.d)())}})),c.a.createElement("div",null,"error"===e&&c.a.createElement("div",null,"Some error occured. Please refresh the page"),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(m,null)))},i=function(){var e=Object(l.d)((function(e){return e.chat.messages})),t=Object(r.useRef)(null),n=Object(r.useState)(!0),u=Object(a.a)(n,2),o=u[0],i=u[1];return Object(r.useEffect)((function(){var e;o&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),c.a.createElement("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!o&&i(!0):o&&i(!1)}},e.map((function(e,t){return c.a.createElement(s,{key:e.id,message:e})})),c.a.createElement("div",{ref:t}))},s=c.a.memo((function(e){var t=e.message;return c.a.createElement("div",null,c.a.createElement("img",{src:t.photo,style:{width:"30px"},alt:"img"})," ",c.a.createElement("b",null,t.userName),c.a.createElement("br",null),t.message,c.a.createElement("hr",null))})),m=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(l.d)((function(e){return e.chat.status})),s=Object(l.c)();return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",{value:n,onChange:function(e){return o(e.currentTarget.value)}})),c.a.createElement("div",null,c.a.createElement("button",{disabled:"ready"!==i,onClick:function(){n&&(s(Object(u.b)(n)),o(""))}},"Send")))};t.default=function(){return c.a.createElement("div",null,c.a.createElement(o,null))}}}]);
//# sourceMappingURL=5.e6106397.chunk.js.map