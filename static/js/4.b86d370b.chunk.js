/*! For license information please see 4.b86d370b.chunk.js.LICENSE.txt */
(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[4],{288:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(93);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},291:function(e,t,n){e.exports=n.p+"static/media/user.35aa54a1.jpg"},295:function(e,t,n){e.exports={paginator:"Paginator_paginator__1Eobv",pageNumber:"Paginator_pageNumber__mL8zj",selectedPage:"Paginator_selectedPage__p0kWs"}},296:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},297:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1MlkK"}},299:function(e,t,n){"use strict";n.r(t);var r=n(50),o=n(51),a=n(53),u=n(52),l=n(0),i=n.n(l),s=n(20),c=n(126),f=n(67),p=n(96),g=n(288),h=n(295),m=n.n(h),d=n(296),v=n.n(d),b=function(e){for(var t=e.pageSize,n=e.currentPage,r=e.totalItemsCount,o=e.onPageChanged,a=e.portionSize,u=Math.ceil(r/t),s=[],c=1;c<=u;c++)s.push(c);var f=Math.ceil(u/a),h=Object(l.useState)(1),d=Object(g.a)(h,2),b=d[0],y=d[1],P=(b-1)*a+1,w=b*a;return i.a.createElement("div",{className:m.a.paginator},b>1&&i.a.createElement("button",{onClick:function(){y(b-1)}},"PREV"),s.filter((function(e){return e>=P&&e<=w})).map((function(e){return i.a.createElement("span",{className:v()(Object(p.a)({},m.a.selectedPage,n===e),m.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),f>b&&i.a.createElement("button",{onClick:function(){y(b+1)}},"NEXT"))},y=n(297),P=n.n(y),w=n(291),E=n.n(w),C=n(17),S=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("div",null,i.a.createElement(C.b,{to:"/profile/"+t.id},i.a.createElement("img",{src:null!==t.photos.small?t.photos.small:E.a,className:P.a.userPhoto}))),i.a.createElement("div",null,t.followed?i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,t.name),i.a.createElement("div",null,t.status)),i.a.createElement("span",null,i.a.createElement("div",null,"u.location.country"),i.a.createElement("div",null,"u.location.city"))))},j=function(e){var t=e.pageSize,n=e.currentPage,r=e.totalUsersCount,o=e.onPageChanged,a=Object(f.a)(e,["pageSize","currentPage","totalUsersCount","onPageChanged"]);return i.a.createElement("div",null,i.a.createElement(b,{pageSize:t,currentPage:n,totalItemsCount:r,onPageChanged:o,portionSize:10}),i.a.createElement("div",null,a.users.map((function(e){return i.a.createElement(S,{key:e.id,user:e,followingInProgress:a.followingInProgress,follow:a.follow,unfollow:a.unfollow})}))))},O=n(91),k=n(9);function z(e,t){return e===t}function _(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function I(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var U=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,u=r.pop(),l=I(r),i=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=u,s.dependencies=l,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,n=null,r=null;return function(){return _(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var A=U((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),x=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.totalUsersCount},M=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.followingInProgress},J=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(O.a,null):null,i.a.createElement(j,{users:this.props.users,pageSize:this.props.pageSize,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged}))}}]),n}(i.a.Component);t.default=Object(k.d)(Object(s.b)((function(e){return{users:A(e),pageSize:x(e),currentPage:N(e),totalUsersCount:F(e),isFetching:M(e),followingInProgress:q(e)}}),{setCurrentPage:c.d,requestUsers:c.c,follow:c.b,unfollow:c.e}))(J)}}]);
//# sourceMappingURL=4.b86d370b.chunk.js.map