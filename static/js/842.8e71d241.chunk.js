"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[842],{8842:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a="ContactsPage_container__BnqXB",r=n(9434),s=n(2791),l=function(e){return e.contacts.items},c=function(e){return e.filter},o=n(6052),i={},u=n(4808),m=n(184),d=function(){var e=(0,r.I0)(),t=(0,r.v9)(c);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:i.title,children:"Contacts"}),(0,m.jsxs)("label",{className:i.label,children:[(0,m.jsx)("span",{className:i.label__text,children:"Find contacts by name"}),(0,m.jsx)("input",{onChange:function(t){e((0,u.T)(t.target.value))},value:t,type:"text",name:"filter",placeholder:"Find",className:i.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Find contacts by name",required:!0})]})]})},h="ContactsList_list__mmE3Y",_={},p=function(e){var t=e.contactItem,n=(0,r.I0)();return(0,m.jsxs)("li",{className:_.item,id:t.id,children:[(0,m.jsx)("span",{className:_.name,children:t.name}),(0,m.jsx)("a",{href:"tel:".concat(t.number),className:_.number,children:t.number}),(0,m.jsx)("button",{type:"button",onClick:function(){n((0,o.GK)(t.id))},"aria-label":"Delete contact",children:"Delete"})]})},b=function(){var e=(0,r.v9)(l),t=(0,r.v9)(c),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,m.jsx)("ul",{className:h,children:n.map((function(e){return(0,m.jsx)(p,{contactItem:e},e.id)}))})},f={title:"Section_title__SLHvV"},x=function(e){var t=e.title,n=e.children;return(0,m.jsxs)("section",{className:f.section,children:[(0,m.jsx)("h2",{className:f.title,children:t}),n]})},j="Notification_title__VBwHl",v=function(e){var t=e.message;return(0,m.jsx)("h3",{className:j,children:t})},C=n(9439),N={form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",btn:"ContactForm_btn__wll+u",disabled:"ContactForm_disabled__XBn+S",active:"ContactForm_active__JbGHE",show:"ContactForm_show__Ix6Wl","dropdown-toggle":"ContactForm_dropdown-toggle__qsVAO"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},w=function(){var e=(0,s.useState)(""),t=(0,C.Z)(e,2),n=t[0],a=t[1],c=(0,s.useState)(""),i=(0,C.Z)(c,2),u=i[0],d=i[1],h=(0,r.I0)(),_=(0,r.v9)(l),p=g(),b=g(),f=function(e){var t=e.target,n=t.name,r=t.value;"name"===n&&a(r),"number"===n&&d(r)},x=function(){a(""),d("")};return(0,m.jsxs)("form",{className:N.form,onSubmit:function(e){if(e.preventDefault(),_.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("We already have ".concat(n));h((0,o.uK)({name:n,number:u,id:g()})),x()},children:[(0,m.jsxs)("label",{className:N.label,id:p,children:[(0,m.jsx)("span",{className:N.label__text,children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",value:n,onChange:f,placeholder:"Contact name","aria-label":"Input for your name",className:N.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:p})]}),(0,m.jsxs)("label",{className:N.label,id:b,children:[(0,m.jsx)("span",{className:N.label__text,children:"Number"}),(0,m.jsx)("input",{value:u,onChange:f,type:"tel",name:"number",placeholder:"Phone number","aria-label":"Input for your phone number",className:N.input,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:b})]}),(0,m.jsx)("div",{className:N.container,children:(0,m.jsx)("button",{type:"submit",className:N.btn,children:"Add contact"})})]})},y=function(){var e=(0,r.v9)(l),t=(0,r.I0)();return(0,s.useEffect)((function(){t((0,o.yF)())}),[t]),(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)(x,{title:"Phonebook",children:(0,m.jsx)(w,{})}),(0,m.jsxs)(x,{title:"Contacts",children:[e.length>1&&(0,m.jsx)(d,{}),e.length>0&&(0,m.jsx)(b,{}),e.length<1&&(0,m.jsx)(v,{message:"You phonebook is empty! Please add contact."})]})]})}}}]);
//# sourceMappingURL=842.8e71d241.chunk.js.map