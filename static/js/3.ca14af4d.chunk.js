(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[3],{288:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(93);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(67),r=a(50),o=a(51),l=a(53),i=a(52),c=a(0),s=a.n(c),u=a(10),m=a(20),f=function(e){return{isAuth:e.auth.isAuth}};function p(e){var t=function(t){Object(l.a)(c,t);var a=Object(i.a)(c);function c(){return Object(r.a)(this,c),a.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props,a=t.isAuth,r=Object(n.a)(t,["isAuth"]);return a?s.a.createElement(e,r):s.a.createElement(u.a,{to:"login"})}}]),c}(s.a.Component);return Object(m.b)(f)(t)}},291:function(e,t,a){e.exports=a.p+"static/media/user.35aa54a1.jpg"},292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3xR_Z",mainPhoto:"ProfileInfo_mainPhoto__tjjbB",contact:"ProfileInfo_contact__AvHXG",formSummaryError:"ProfileInfo_formSummaryError__3-ikd"}},293:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3lvOM",posts:"MyPosts_posts__viENX"}},294:function(e,t,a){e.exports={item:"Post_item__2VERT"}},298:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(51),o=a(53),l=a(52),i=a(0),c=a.n(i),s=a(288),u=a(292),m=a.n(u),f=a(91),p=function(e){var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.status),l=Object(s.a)(o,2),u=l[0],m=l[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status"),": ",c.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"no status")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateUserStatus(u)},value:u})))},d=a(291),b=a.n(d),v=a(127),E=a(32),h=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profilePage,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:m.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(E.c)("Full name","fullName",E.a,[])),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(E.c)("","lookingForAJob",E.a,[],"checkbox")),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",Object(E.c)("My professional skills","lookingForAJobDescription",E.b,[])),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",Object(E.c)("About me","aboutMe",E.b,[])),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a?a.contacts:"").map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(E.c)(e,"contacts."+e,E.a,[])))}))))})),g=function(e){var t=e.profilePage,a=e.isOwner,n=e.goToEditMode;return t?c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(P,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))):c.a.createElement(f.a,null)},P=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},O=function(e){var t=e.profilePage,a=e.status,n=e.updateUserStatus,r=e.isOwner,o=e.savePhoto,l=e.saveProfile,u=Object(i.useState)(!1),f=Object(s.a)(u,2),d=f[0],v=f[1];return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:(null===t||void 0===t?void 0:t.photos.large)||b.a,className:m.a.mainPhoto}),r&&c.a.createElement("input",{type:"file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&o(e.target.files[0])}}),d?c.a.createElement(h,{profilePage:t,initialValues:t,onSubmit:function(e){l(e).then((function(){v(!1)}))}}):c.a.createElement(g,{profilePage:t,isOwner:r,goToEditMode:function(){v(!0)}}),c.a.createElement(p,{status:a,updateUserStatus:n})))},j=a(92),y=a(36),k=a(293),S=a.n(k),_=a(294),A=a.n(_),w=function(e){return c.a.createElement("div",{className:A.a.item},c.a.createElement("img",{src:"https://yt3.ggpht.com/a/AATXAJytBX4x38SJiFeRv9M9zdseNIPWzcWf_slSlz5b=s900-c-k-c0xffffffff-no-rj-mo"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,e.likeCount)))},N=a(84),I=a(63),M=c.a.memo((function(e){var t=Object(y.a)(e.profilePage.posts).reverse().map((function(e){return c.a.createElement(w,{key:e.id,id:e.id,message:e.message,likeCount:e.likeCount})}));return c.a.createElement("div",{className:S.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:S.a.posts},t))})),U=Object(I.a)(10),x=Object(v.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(N.a,{name:"newPostText",component:E.b,placeholder:"Post message",validate:[I.b,U]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),C=M,F=a(20),J=Object(F.b)((function(e){return{profilePage:e.profilePage}}),{addPost:j.a})(C),T=function(e){return c.a.createElement("div",null,c.a.createElement(O,{profilePage:e.profilePage,status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(J,null))},B=a(10),z=a(290),D=a(9),V=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=JSON.stringify(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(T,Object.assign({},this.props,{isOwner:!this.props.match.params.userId}))}}]),a}(c.a.Component);t.default=Object(D.d)(Object(F.b)((function(e){return{profilePage:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.data.id,isAuth:e.auth.isAuth}}),{getUserProfile:j.c,getUserStatus:j.d,updateUserStatus:j.g,savePhoto:j.e,saveProfile:j.f}),B.g,z.a)(V)}}]);
//# sourceMappingURL=3.ca14af4d.chunk.js.map