(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),l=n.n(c),s=(n(18),n(5)),i=n(2),r=(n(19),n(0)),u=function(e){var t=e.children,n="card "+e.className;return Object(r.jsx)("div",{className:n,children:t})},j=(n(21),n(22),function(e){var t=e.onChangeFilter,n=e.yearSelected;return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:n,onChange:function(e){t(e.target.value)},children:[Object(r.jsx)("option",{value:"All",children:"All"}),Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),o=(n(23),n(24),function(e){var t=e.date,n=t.toLocaleString("en-US",{month:"long"}),a=t.toLocaleString("en-US",{day:"2-digit"}),c=t.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:c}),Object(r.jsx)("div",{className:"expense-date__day",children:a})]})}),d=function(e){var t=e.date,n=e.title,a=e.amount;return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:t}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",a]})]})]})})},b=(n(25),function(e){var t=e.items;if(0===t.length){var n=Object(r.jsx)("p",{children:"Found no expenses."});return Object(r.jsx)("h2",{className:"expenses-list__fallback",children:n})}return Object(r.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(9),O=(n(26),n(27),function(e){var t=e.value,n=e.maxValue,a=e.label,c="0%";return n>0&&(c=Math.round(t/n*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:a})]})}),v=function(e){var t=e.dataPoints,n=t.map((function(e){return e.value})),a=Math.max.apply(Math,Object(s.a)(n));return Object(r.jsx)("div",{className:"chart",children:t.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:a,label:e.label},e.label)}))})},h=function(e){var t,n=e.expenses,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(x.a)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value;a[l.date.getMonth()].value+=l.amount}}catch(s){c.e(s)}finally{c.f()}return Object(r.jsx)(v,{dataPoints:a})},m=function(e){var t=e.items,n=Object(a.useState)("2020"),c=Object(i.a)(n,2),l=c[0],s=c[1],o=t.filter((function(e){return e.date.getFullYear().toString()===l}));return"All"===l&&(o=t),Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{yearSelected:l,onChangeFilter:function(e){s(e),console.log(e)}}),Object(r.jsx)(h,{expenses:o}),Object(r.jsx)(b,{items:o})]})},p=n(6),f=(n(28),n(29),function(e){var t=e.onSaveExpenseData,n=e.onCancel,c=Object(a.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1],j=Object(a.useState)(""),o=Object(i.a)(j,2),d=o[0],b=o[1],x=Object(a.useState)(""),O=Object(i.a)(x,2),v=O[0],h=O[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:s,amount:+d,date:new Date(v)};t(n),b(""),u(""),h("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:d,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",step:"2022-12-31",value:v,onChange:function(e){h(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:n,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=function(e){var t=e.onAddExpense,n=Object(a.useState)(!1),c=Object(i.a)(n,2),l=c[0],s=c[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!l&&Object(r.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),l&&Object(r.jsx)(f,{onSaveExpenseData:function(e){var n=Object(p.a)(Object(p.a)({},e),{},{id:Math.random().toString()});t(n),s(!1)},onCancel:function(){s(!1)}})]})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2019,7,14)},{id:"e5",title:"Teddy Bear",amount:14.12,date:new Date(2019,5,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2020,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2022,5,12)}],g=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(m,{items:n})]})};l.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c09f78a6.chunk.js.map