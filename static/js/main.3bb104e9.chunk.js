(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={Text:"Statistics_Text__2CZoU"}},,,,function(e,t,n){e.exports={Container:"Container_Container__TEy29"}},function(e,t,n){e.exports={Option:"FeedbackOptions_Option__1vRVX"}},function(e,t,n){e.exports={Title:"Section_Title__2V5nI"}},function(e,t,n){e.exports={Notification:"Notification_Notification__tPboS"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),o=(n(14),n(3)),r=n(6),j=n.n(r),b=n(0),l=function(e){var t=e.children;return Object(b.jsx)("div",{className:j.a.Container,children:t})},d=n(7),u=n.n(d),x=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(b.jsx)("button",{name:t,type:"button",className:u.a.Option,onClick:n,children:t},t)},O=n(2),p=n.n(O),h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:p.a.Text,children:["good: ",Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("p",{className:p.a.Text,children:["neutral: ",Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("p",{className:p.a.Text,children:["bad: ",Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)("p",{className:p.a.Text,children:["Total: ",a]}),Object(b.jsxs)("p",{className:p.a.Text,children:["Positive feedbacks: ",s,"%"]})]})},f=n(8),v=n.n(f),k=function(e){var t=e.title,n=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:v.a.Title,children:t}),n]})},m=n(9),g=n.n(m),_=function(e){var t=e.message;return Object(b.jsx)("p",{className:g.a.Notification,children:t})},N=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],j=i[1],d=Object(c.useState)(0),u=Object(o.a)(d,2),O=u[0],p=u[1],f=function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:return}},v=n+r+O,m=function(){var e=parseInt(n/v*100);return v?e:0}();return Object(b.jsxs)(l,{children:[Object(b.jsxs)(k,{title:"Please leave feedback",children:[Object(b.jsx)(x,{option:"good",onLeaveFeedback:f}),Object(b.jsx)(x,{option:"neutral",onLeaveFeedback:f}),Object(b.jsx)(x,{option:"bad",onLeaveFeedback:f})]}),Object(b.jsx)(k,{title:"Statistics",children:v?Object(b.jsx)(h,{good:n,neutral:r,bad:O,total:v,positivePercentage:m}):Object(b.jsx)(_,{message:"No feedback given"})})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.3bb104e9.chunk.js.map